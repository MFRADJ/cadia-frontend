from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
import os


BACKEND_DIR = Path(__file__).resolve().parents[2]
DATA_DIR = BACKEND_DIR / "data"
DEFAULT_DB_PATH = DATA_DIR / "auth.db"
DEFAULT_DB_URL = f"sqlite:///{DEFAULT_DB_PATH.as_posix()}"
DEFAULT_CORS = "http://localhost:3000,http://127.0.0.1:3000"


@dataclass(frozen=True)
class Settings:
    app_name: str = os.getenv("APP_NAME", "CADIA Auth API")
    api_v1_prefix: str = os.getenv("API_V1_PREFIX", "/api/v1")
    secret_key: str = os.getenv(
        "SECRET_KEY",
        "cadia-dev-secret-change-me-before-production",
    )
    algorithm: str = os.getenv("JWT_ALGORITHM", "HS256")
    access_token_expire_minutes: int = int(
        os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "120")
    )
    database_url: str = os.getenv("DATABASE_URL", DEFAULT_DB_URL)
    cors_origins: tuple[str, ...] = tuple(
        origin.strip()
        for origin in os.getenv("CORS_ORIGINS", DEFAULT_CORS).split(",")
        if origin.strip()
    )


def ensure_data_dir() -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)


settings = Settings()
