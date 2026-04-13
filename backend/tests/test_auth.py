from __future__ import annotations

import os


os.environ["DATABASE_URL"] = "sqlite+pysqlite:///:memory:"
os.environ["SECRET_KEY"] = "cadia-test-secret"

from fastapi.testclient import TestClient

from backend.app.database import Base, engine
from backend.app.main import app


client = TestClient(app)


def setup_function() -> None:
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)


def teardown_module() -> None:
    client.close()


def test_register_and_login_flow() -> None:
    register_response = client.post(
        "/api/v1/auth/register",
        json={
            "email": "jane@example.com",
            "username": "jane_doe",
            "password": "StrongPass1",
            "confirm_password": "StrongPass1",
        },
    )

    assert register_response.status_code == 201
    register_data = register_response.json()
    assert register_data["email"] == "jane@example.com"
    assert register_data["username"] == "jane_doe"

    login_response = client.post(
        "/api/v1/auth/login",
        data={"username": "jane@example.com", "password": "StrongPass1"},
    )

    assert login_response.status_code == 200
    login_data = login_response.json()
    assert login_data["access_token"]
    assert login_data["token_type"] == "bearer"


def test_duplicate_email_is_rejected() -> None:
    payload = {
        "email": "duplicate@example.com",
        "username": "duplicate_user",
        "password": "StrongPass1",
        "confirm_password": "StrongPass1",
    }

    first_response = client.post("/api/v1/auth/register", json=payload)
    second_response = client.post(
        "/api/v1/auth/register",
        json={**payload, "username": "another_user"},
    )

    assert first_response.status_code == 201
    assert second_response.status_code == 400
    assert second_response.json()["detail"] == "Email already registered"


def test_duplicate_username_is_rejected() -> None:
    first_response = client.post(
        "/api/v1/auth/register",
        json={
            "email": "first@example.com",
            "username": "shared_username",
            "password": "StrongPass1",
            "confirm_password": "StrongPass1",
        },
    )
    second_response = client.post(
        "/api/v1/auth/register",
        json={
            "email": "second@example.com",
            "username": "shared_username",
            "password": "StrongPass1",
            "confirm_password": "StrongPass1",
        },
    )

    assert first_response.status_code == 201
    assert second_response.status_code == 400
    assert second_response.json()["detail"] == "Username already taken"


def test_invalid_login_is_rejected() -> None:
    register_response = client.post(
        "/api/v1/auth/register",
        json={
            "email": "login@example.com",
            "username": "login_user",
            "password": "StrongPass1",
            "confirm_password": "StrongPass1",
        },
    )
    login_response = client.post(
        "/api/v1/auth/login",
        data={"username": "login@example.com", "password": "WrongPassword1"},
    )

    assert register_response.status_code == 201
    assert login_response.status_code == 401
    assert login_response.json()["detail"] == "Invalid credentials"
