// config/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const API_ENDPOINTS = {
    REGISTER: `${API_BASE_URL}/api/v1/auth/register`,
    LOGIN: `${API_BASE_URL}/api/v1/auth/login`,
    VERIFY_EMAIL: `${API_BASE_URL}/api/v1/auth/verify-email`,
    RESEND_VERIFICATION: `${API_BASE_URL}/api/v1/auth/resend-verification`,
} as const;

// Types pour les réponses API
export interface APIError {
    detail: string;
}

export interface RegisterRequest {
    email: string;
    username: string;
    password: string;
    confirm_password: string;
}

export interface RegisterResponse {
    id: number;
    email: string;
    username: string;
    is_active: boolean;
    created_at: string;
}

interface ValidationErrorItem {
    msg?: string;
    message?: string;
}

interface ValidationErrorResponse {
    detail?: string | ValidationErrorItem[];
}

// Fonction helper pour les appels API
export async function apiCall<T = unknown>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T> {
    const defaultOptions: RequestInit = {
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
        ...options,
    };

    const response = await fetch(endpoint, defaultOptions);
    const data: ValidationErrorResponse & T = await response.json();

    if (!response.ok) {
        // Gestion des erreurs de validation Pydantic
        if (Array.isArray(data.detail)) {
            const errorMessages = data.detail
                .map((err: ValidationErrorItem) => err.msg || err.message || 'Unknown validation error')
                .join(', ');
            throw new Error(errorMessages);
        }

        // Erreur simple avec detail
        if (data.detail) {
            throw new Error(data.detail);
        }

        // Fallback
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return data;
}

// Fonction spécifique pour l'inscription
export async function registerUser(userData: RegisterRequest): Promise<RegisterResponse> {
    return apiCall<RegisterResponse>(API_ENDPOINTS.REGISTER, {
        method: 'POST',
        body: JSON.stringify(userData),
    });
}
