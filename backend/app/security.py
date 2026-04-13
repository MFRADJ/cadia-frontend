from __future__ import annotations

import hashlib
import hmac
import secrets
from datetime import UTC, datetime, timedelta

from jose import jwt

from .core.config import settings


PASSWORD_SCHEME = "pbkdf2_sha256"
PBKDF2_ITERATIONS = 600_000
SALT_BYTES = 16


def hash_password(password: str) -> str:
    salt = secrets.token_hex(SALT_BYTES)
    derived_key = hashlib.pbkdf2_hmac(
        "sha256",
        password.encode("utf-8"),
        bytes.fromhex(salt),
        PBKDF2_ITERATIONS,
    )
    return (
        f"{PASSWORD_SCHEME}"
        f"${PBKDF2_ITERATIONS}"
        f"${salt}"
        f"${derived_key.hex()}"
    )


def verify_password(plain_password: str, hashed_password: str) -> bool:
    try:
        scheme, iterations, salt, stored_hash = hashed_password.split("$", maxsplit=3)
    except ValueError:
        return False

    if scheme != PASSWORD_SCHEME:
        return False

    derived_key = hashlib.pbkdf2_hmac(
        "sha256",
        plain_password.encode("utf-8"),
        bytes.fromhex(salt),
        int(iterations),
    )
    return hmac.compare_digest(derived_key.hex(), stored_hash)


def create_access_token(
    subject: str,
    extra_claims: dict[str, str] | None = None,
    expires_delta: timedelta | None = None,
) -> str:
    expire = datetime.now(UTC) + (
        expires_delta or timedelta(minutes=settings.access_token_expire_minutes)
    )
    payload: dict[str, object] = {"sub": subject, "exp": expire}
    if extra_claims:
        payload.update(extra_claims)
    return jwt.encode(payload, settings.secret_key, algorithm=settings.algorithm)
