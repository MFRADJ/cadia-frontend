// // Authentication logic for login/signup
// // src/services/authService.ts
// import axios from 'axios';
//
// // URL de base de l'API (à configurer selon vos environnements)
// const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';
//
// // Interface pour la réponse du login
// interface LoginResponse {
//     access_token: string;
//     token_type: string;
// }
//
// // Interface pour stocker les données utilisateur avec le token
// interface UserData {
//     token: string;
//     tokenType: string;
//     email: string;
// }
//
// /**
//  * Service d'authentification pour communiquer avec l'API
//  */
// const authService = {
//     /**
//      * Connexion utilisateur
//      */
//     async login(email: string, password: string): Promise<UserData> {
//         try {
//             // Le backend attend un FormData avec 'username' pour l'email (OAuth2 standard)
//             const formData = new FormData();
//             formData.append('username', email); // Note: pour OAuth2, le champ s'appelle 'username' même si c'est un email
//             formData.append('password', password);
//
//             // Alternative: si votre backend préfère application/x-www-form-urlencoded
//             // const params = new URLSearchParams();
//             // params.append('username', email);
//             // params.append('password', password);
//
//             const response = await axios.post<LoginResponse>(
//                 `${API_URL}/auth/login`,
//                 formData,
//                 {
//                     headers: {
//                         'Content-Type': 'multipart/form-data',
//                         // Pour URLSearchParams: 'Content-Type': 'application/x-www-form-urlencoded',
//                     },
//                 }
//             );
//
//             // Si la réponse contient un token, nous le stockons
//             if (response.data.access_token) {
//                 const userData: UserData = {
//                     token: response.data.access_token,
//                     tokenType: response.data.token_type,
//                     email: email,
//                 };
//
//                 // Stocker dans localStorage (ou sessionStorage si vous préférez)
//                 localStorage.setItem('userData', JSON.stringify(userData));
//
//                 return userData;
//             }
//
//             throw new Error('No token received');
//         } catch (error) {
//             console.error('Login error:', error);
//             throw error;
//         }
//     },
//
//     /**
//      * Déconnexion utilisateur
//      */
//     logout(): void {
//         localStorage.removeItem('userData');
//     },
//
//     /**
//      * Vérifie si l'utilisateur est connecté
//      */
//     isLoggedIn(): boolean {
//         if (typeof window === 'undefined') return false; // Pour Next.js SSR
//         return localStorage.getItem('userData') !== null;
//     },
//
//     /**
//      * Récupère les données utilisateur stockées
//      */
//     getUserData(): UserData | null {
//         if (typeof window === 'undefined') return null; // Pour Next.js SSR
//         const userData = localStorage.getItem('userData');
//         return userData ? JSON.parse(userData) : null;
//     },
//
//     /**
//      * Récupère le token d'authentification
//      */
//     getAuthToken(): string | null {
//         const userData = this.getUserData();
//         return userData ? userData.token : null;
//     }
// };
//
// export default authService;
import axios, { AxiosError } from 'axios';

// Configuration de l'API
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

// Types pour les réponses d'API
interface LoginResponse {
    access_token: string;
    token_type: string;
}

// Type pour les erreurs de l'API
interface ApiError {
    detail: string;
    status_code?: number;
}

// Types pour les données utilisateur
export interface UserData {
    token: string;
    tokenType: string;
    email: string;
}

/**
 * Service d'authentification pour gérer les connexions/déconnexions
 */
const authService = {
    /**
     * Connecte un utilisateur avec email/password
     */
    async login(
        email: string,
        password: string,
        storage: Storage = localStorage // Paramètre optionnel avec localStorage par défaut
    ): Promise<UserData> {
        try {
            // Préparation des données pour l'API OAuth2
            const formData = new URLSearchParams();
            formData.append('username', email); // OAuth2 utilise 'username' même pour les emails
            formData.append('password', password);

            const response = await axios.post<LoginResponse>(
                `${API_URL}/auth/login`,
                formData.toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            );

            if (response.data.access_token) {
                const userData: UserData = {
                    token: response.data.access_token,
                    tokenType: response.data.token_type,
                    email
                };

                // Utiliser le storage fourni
                storage.setItem('userData', JSON.stringify(userData));

                return userData;
            }

            throw new Error('No token received from server');
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError<ApiError>;
                if (axiosError.response?.data) {
                    console.error('API Error:', axiosError.response.data.detail);
                }
            }
            throw error;
        }
    },

    /**
     * Déconnexion - supprime les données de l'utilisateur
     */
    logout(): void {
        localStorage.removeItem('userData');
        sessionStorage.removeItem('userData');
    },

    /**
     * Vérifie si l'utilisateur est connecté
     */
    isLoggedIn(): boolean {
        if (typeof window === 'undefined') return false; // Check SSR

        const localData = localStorage.getItem('userData');
        const sessionData = sessionStorage.getItem('userData');

        return !!(localData || sessionData);
    },

    /**
     * Récupère les données utilisateur du stockage
     */
    getUserData(): UserData | null {
        if (typeof window === 'undefined') return null; // Check SSR

        const localData = localStorage.getItem('userData');
        const sessionData = sessionStorage.getItem('userData');

        const userData = localData || sessionData;
        return userData ? JSON.parse(userData) : null;
    },

    /**
     * Récupère le token d'authentification pour les requêtes API
     */
    getAuthToken(): string | null {
        const userData = this.getUserData();
        return userData ? userData.token : null;
    },

    /**
     * Crée un en-tête d'autorisation pour les requêtes API
     */
    getAuthHeader(): Record<string, string> {
        const token = this.getAuthToken();
        return token ? { Authorization: `Bearer ${token}` } : {};
    }
};

export default authService;