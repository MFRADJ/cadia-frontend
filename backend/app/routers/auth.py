from __future__ import annotations

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy import or_, select
from sqlalchemy.orm import Session

from ..database import get_db
from ..models import User
from ..schemas import (
    MessageResponse,
    RegisterRequest,
    RegisterResponse,
    ResendVerificationRequest,
    TokenResponse,
    VerificationRequest,
)
from ..security import create_access_token, hash_password, verify_password


router = APIRouter(prefix="/auth", tags=["auth"])


@router.post(
    "/register",
    response_model=RegisterResponse,
    status_code=status.HTTP_201_CREATED,
)
def register_user(payload: RegisterRequest, db: Session = Depends(get_db)) -> RegisterResponse:
    existing_email = db.scalar(select(User).where(User.email == payload.email))
    if existing_email:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered",
        )

    existing_username = db.scalar(select(User).where(User.username == payload.username))
    if existing_username:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username already taken",
        )

    user = User(
        email=payload.email,
        username=payload.username,
        hashed_password=hash_password(payload.password),
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return RegisterResponse.model_validate(user)


@router.post("/login", response_model=TokenResponse)
def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db),
) -> TokenResponse:
    user = db.scalar(
        select(User).where(
            or_(User.email == form_data.username, User.username == form_data.username)
        )
    )

    if user is None or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )

    token = create_access_token(
        subject=str(user.id),
        extra_claims={"email": user.email, "username": user.username},
    )
    return TokenResponse(access_token=token, token_type="bearer")


@router.post("/verify-email", response_model=MessageResponse)
def verify_email(_: VerificationRequest) -> MessageResponse:
    return MessageResponse(
        message="Email verification flow is not wired yet. The auth backend is ready for the next step."
    )


@router.post("/resend-verification", response_model=MessageResponse)
def resend_verification(_: ResendVerificationRequest) -> MessageResponse:
    return MessageResponse(
        message="Verification resend is stubbed for now. We can add provider-backed email delivery next."
    )
