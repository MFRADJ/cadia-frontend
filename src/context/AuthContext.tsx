// React context for auth state
// src/context/AuthContext.tsx
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import authService from '@/services/authService';

// Interface pour les données utilisateur
interface User {
    email: string;
    token: string;
}

// Interface pour le context d'authentification
interface AuthContextType {
    user: User | null;
    loading: boolean;
    error: string | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    clearError: () => void;
}

// Création du context avec des valeurs par défaut
const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: false,
    error: null,
    login: async () => {},
    logout: () => {},
    clearError: () => {},
});

// Hook personnalisé pour utiliser le context d'authentification
export const useAuth = () => useContext(AuthContext);

// Props pour le provider
interface AuthProviderProps {
    children: ReactNode;
}

// Provider du context d'authentification
export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    // Vérifier si l'utilisateur est déjà connecté (au chargement)
    useEffect(() => {
        const userData = authService.getUserData();
        if (userData) {
            setUser({
                email: userData.email,
                token: userData.token,
            });
        }
        setLoading(false);
    }, []);

    // Fonction de connexion
    const login = async (email: string, password: string) => {
        setLoading(true);
        setError(null);
        try {
            const userData = await authService.login(email, password);
            setUser({
                email: userData.email,
                token: userData.token,
            });
            router.push('/dashboard'); // Redirection après connexion réussie
        } catch (err: any) {
            setError(
                err.response?.data?.detail ||
                'An error occurred during login. Please try again.'
            );
        } finally {
            setLoading(false);
        }
    };

    // Fonction de déconnexion
    const logout = () => {
        authService.logout();
        setUser(null);
        router.push('/auth/login');
    };

    // Fonction pour effacer les erreurs
    const clearError = () => {
        setError(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                error,
                login,
                logout,
                clearError,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};