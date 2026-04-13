# CADIA Auth Backend

Local FastAPI backend for the first CADIA auth flow, backed by SQLite, JWT, and PBKDF2 password hashing.

## Run locally

1. Create a virtual environment:
   `py -m venv backend/.venv`
2. Install dependencies:
   `backend\.venv\Scripts\python -m pip install -r backend/requirements-dev.txt`
3. Start the API:
   `backend\.venv\Scripts\python -m uvicorn backend.app.main:app --app-dir . --reload --host 127.0.0.1 --port 8000`

## Available routes

- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`
- `POST /api/v1/auth/verify-email`
- `POST /api/v1/auth/resend-verification`
- `GET /health`
