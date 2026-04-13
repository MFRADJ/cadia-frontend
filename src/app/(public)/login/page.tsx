// // Login page using App Router
// 'use client';
//
// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Button } from '@/components/ui/Button';
// import styles from './login.module.css';
//
// export default function Login() {
//     const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//         rememberMe: false
//     });
//
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value, type, checked } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: type === 'checkbox' ? checked : value
//         }));
//     };
//
//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         // Handle form submission logic here
//         console.log('Login form submitted:', formData);
//     };
//
//     return (
//         <div className={styles.loginContainer}>
//             <div className={styles.loginCard}>
//                 <div className={styles.formSide}>
//                     <div className={styles.header}>
//                         <Link href="/" className={styles.logoLink}>
//                             <Image
//                                 src="/logo.png"
//                                 alt="CADIA Logo"
//                                 width={120}
//                                 height={36}
//                                 className={styles.logo}
//                             />
//                         </Link>
//                         <h1 className={styles.title}>Welcome back</h1>
//                         <p className={styles.subtitle}>
//                             Log in to your CADIA account
//                         </p>
//                     </div>
//
//                     <form onSubmit={handleSubmit} className={styles.form}>
//                         <div className={styles.inputGroup}>
//                             <label htmlFor="email" className={styles.label}>
//                                 Email
//                             </label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 className={styles.input}
//                                 placeholder="your.email@example.com"
//                                 required
//                             />
//                         </div>
//
//                         <div className={styles.inputGroup}>
//                             <div className={styles.labelRow}>
//                                 <label htmlFor="password" className={styles.label}>
//                                     Password
//                                 </label>
//                                 <Link href="/auth/forgot-password" className={styles.forgotPassword}>
//                                     Forgot password?
//                                 </Link>
//                             </div>
//                             <div className={styles.passwordContainer}>
//                                 <input
//                                     type={isPasswordVisible ? "text" : "password"}
//                                     id="password"
//                                     name="password"
//                                     value={formData.password}
//                                     onChange={handleChange}
//                                     className={styles.input}
//                                     placeholder="Enter your password"
//                                     required
//                                 />
//                                 <button
//                                     type="button"
//                                     className={styles.togglePassword}
//                                     onClick={() => setIsPasswordVisible(!isPasswordVisible)}
//                                     aria-label={isPasswordVisible ? "Hide password" : "Show password"}
//                                 >
//                                     {isPasswordVisible ? (
//                                         <EyeOffIcon />
//                                     ) : (
//                                         <EyeIcon />
//                                     )}
//                                 </button>
//                             </div>
//                         </div>
//
//                         <div className={styles.checkboxGroup}>
//                             <input
//                                 type="checkbox"
//                                 id="rememberMe"
//                                 name="rememberMe"
//                                 checked={formData.rememberMe}
//                                 onChange={handleChange}
//                                 className={styles.checkbox}
//                             />
//                             <label htmlFor="rememberMe" className={styles.checkboxLabel}>
//                                 Remember me
//                             </label>
//                         </div>
//
//                         <Button
//                             className={styles.submitButton}
//                         >
//                             Log in
//                         </Button>
//                     </form>
//
//                     <div className={styles.divider}>
//                         <span>or continue with</span>
//                     </div>
//
//                     <div className={styles.socialLogins}>
//                         <button className={styles.socialButton}>
//                             <GoogleIcon /> Google
//                         </button>
//                         <button className={styles.socialButton}>
//                             <GithubIcon /> GitHub
//                         </button>
//                     </div>
//
//                     <div className={styles.signupPrompt}>
//                         Don&apos;t have an account? <Link href="/auth/signup" className={styles.textLink}>Sign up</Link>
//                     </div>
//                 </div>
//
//                 <div className={styles.imageSide}>
//                     <div className={styles.overlayContent}>
//                         <h2 className={styles.overlayTitle}>Design smarter with AI</h2>
//                         <p className={styles.overlayText}>
//                             Access your projects and continue creating amazing CAD designs with the power of AI.
//                         </p>
//
//                         <div className={styles.featureList}>
//                             <div className={styles.featureItem}>
//                                 <CheckIcon />
//                                 <span>Access your saved designs</span>
//                             </div>
//                             <div className={styles.featureItem}>
//                                 <CheckIcon />
//                                 <span>Export to any format</span>
//                             </div>
//                             <div className={styles.featureItem}>
//                                 <CheckIcon />
//                                 <span>24/7 AI-powered assistance</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// // Icons components
// function EyeIcon() {
//     return (
//         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//     );
// }
//
// function EyeOffIcon() {
//     return (
//         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//     );
// }
//
// function GoogleIcon() {
//     return (
//         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#FFF" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5"/>
//             <path d="M15.24 12.2899C15.24 11.9499 15.21 11.6999 15.14 11.3999H12V12.9999H13.84C13.78 13.4299 13.53 13.9599 13.07 14.3099V15.4999H14.35C15.06 14.8399 15.24 13.6899 15.24 12.2899Z" fill="#4285F4"/>
//             <path d="M12 15.9998C13.07 15.9998 13.98 15.6598 14.35 14.9998H13.07C12.74 15.2298 12.42 15.3398 12 15.3398C11.18 15.3398 10.48 14.7898 10.24 14.0398H8.92V15.2498C9.28 15.7898 10.16 15.9998 12 15.9998Z" fill="#34A853"/>
//             <path d="M10.24 14.0398C10.1 13.7398 10.09 13.4098 10.09 12.9998C10.09 12.5898 10.11 12.2598 10.24 11.9598V10.7498H8.92C8.69 11.1298 8.58 11.5598 8.58 11.9998C8.58 12.4398 8.69 12.8698 8.92 13.2498L10.24 14.0398Z" fill="#FBBC05"/>
//             <path d="M12 10.6599C12.48 10.6599 12.9 10.8199 13.23 11.1299L14.36 10.0399C13.97 9.64991 13.13 9.13991 12 9.13991C10.16 9.13991 9.28 10.1899 8.92 10.7499L10.24 11.9599C10.48 11.2099 11.18 10.6599 12 10.6599Z" fill="#EA4335"/>
//         </svg>
//     );
// }
//
// function GithubIcon() {
//     return (
//         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="#FFF" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5"/>
//             <path fillRule="evenodd" clipRule="evenodd" d="M12 3C7.0275 3 3 7.0275 3 12C3 15.9825 5.69875 19.3613 9.3975 20.7163C9.79125 20.7975 9.9375 20.5538 9.9375 20.3438C9.9375 20.1563 9.93 19.5413 9.9275 18.7688C7.26 19.32 6.6975 17.5537 6.6975 17.5537C6.26625 16.4275 5.63625 16.185 5.63625 16.185C4.74625 15.555 5.69125 15.5663 5.69125 15.5663C6.6625 15.6263 7.16625 16.5263 7.16625 16.5263C8.04375 17.9888 9.5775 17.5938 9.95625 17.3925C10.035 16.74 10.2675 16.3463 10.5263 16.125C8.31375 15.9038 5.9925 15.0413 5.9925 11.5313C5.9925 10.3913 6.3675 9.46125 7.18125 8.7375C7.08375 8.53875 6.7575 7.60125 7.2575 6.45375C7.2575 6.45375 8.09625 6.2475 9.91875 7.33C10.5813 7.1625 11.29 7.0775 12 7.0725C12.71 7.0775 13.4188 7.1625 14.0825 7.33C15.9038 6.2475 16.7413 6.45375 16.7413 6.45375C17.2425 7.60125 16.9163 8.53875 16.8188 8.7375C17.6338 9.46125 18.0075 10.3913 18.0075 11.5313C18.0075 15.05 15.6825 15.9025 13.4625 16.12C13.79 16.3925 14.0825 16.9338 14.0825 17.7575C14.0825 18.92 14.0713 20.0787 14.0713 20.3438C14.0713 20.555 14.2163 20.8 14.6163 20.715C18.31 19.3575 21.0075 15.9813 21.0075 12C21.0075 7.0275 16.9788 3 12 3Z" fill="currentColor"/>
//         </svg>
//     );
// }
//
// function CheckIcon() {
//     return (
//         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//     );
// }
// Login page using App Router
// src/app/auth/login/page.tsx
'use client';

import {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import axios from 'axios';
import {Button} from '@/components/ui/Button';
import styles from './login.module.css';

// Service d'authentification
import authService from '@/services/authService';

// Composants d'icônes
const EyeIcon: React.FC = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

const EyeOffIcon: React.FC = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

const GoogleIcon: React.FC = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#FFF" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M15.24 12.2899C15.24 11.9499 15.21 11.6999 15.14 11.3999H12V12.9999H13.84C13.78 13.4299 13.53 13.9599 13.07 14.3099V15.4999H14.35C15.06 14.8399 15.24 13.6899 15.24 12.2899Z" fill="#4285F4"/>
            <path d="M12 15.9998C13.07 15.9998 13.98 15.6598 14.35 14.9998H13.07C12.74 15.2298 12.42 15.3398 12 15.3398C11.18 15.3398 10.48 14.7898 10.24 14.0398H8.92V15.2498C9.28 15.7898 10.16 15.9998 12 15.9998Z" fill="#34A853"/>
            <path d="M10.24 14.0398C10.1 13.7398 10.09 13.4098 10.09 12.9998C10.09 12.5898 10.11 12.2598 10.24 11.9598V10.7498H8.92C8.69 11.1298 8.58 11.5598 8.58 11.9998C8.58 12.4398 8.69 12.8698 8.92 13.2498L10.24 14.0398Z" fill="#FBBC05"/>
            <path d="M12 10.6599C12.48 10.6599 12.9 10.8199 13.23 11.1299L14.36 10.0399C13.97 9.64991 13.13 9.13991 12 9.13991C10.16 9.13991 9.28 10.1899 8.92 10.7499L10.24 11.9599C10.48 11.2099 11.18 10.6599 12 10.6599Z" fill="#EA4335"/>
        </svg>
    );
};

const GithubIcon: React.FC = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="#FFF" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M12 3C7.0275 3 3 7.0275 3 12C3 15.9825 5.69875 19.3613 9.3975 20.7163C9.79125 20.7975 9.9375 20.5538 9.9375 20.3438C9.9375 20.1563 9.93 19.5413 9.9275 18.7688C7.26 19.32 6.6975 17.5537 6.6975 17.5537C6.26625 16.4275 5.63625 16.185 5.63625 16.185C4.74625 15.555 5.69125 15.5663 5.69125 15.5663C6.6625 15.6263 7.16625 16.5263 7.16625 16.5263C8.04375 17.9888 9.5775 17.5938 9.95625 17.3925C10.035 16.74 10.2675 16.3463 10.5263 16.125C8.31375 15.9038 5.9925 15.0413 5.9925 11.5313C5.9925 10.3913 6.3675 9.46125 7.18125 8.7375C7.08375 8.53875 6.7575 7.60125 7.2575 6.45375C7.2575 6.45375 8.09625 6.2475 9.91875 7.33C10.5813 7.1625 11.29 7.0775 12 7.0725C12.71 7.0775 13.4188 7.1625 14.0825 7.33C15.9038 6.2475 16.7413 6.45375 16.7413 6.45375C17.2425 7.60125 16.9163 8.53875 16.8188 8.7375C17.6338 9.46125 18.0075 10.3913 18.0075 11.5313C18.0075 15.05 15.6825 15.9025 13.4625 16.12C13.79 16.3925 14.0825 16.9338 14.0825 17.7575C14.0825 18.92 14.0713 20.0787 14.0713 20.3438C14.0713 20.555 14.2163 20.8 14.6163 20.715C18.31 19.3575 21.0075 15.9813 21.0075 12C21.0075 7.0275 16.9788 3 12 3Z" fill="currentColor"/>
        </svg>
    );
};

const CheckIcon: React.FC = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

// Interface pour typer l'erreur de manière sécurisée
interface ApiErrorResponse {
    detail: string;
}

function getErrorDetail(err: unknown): string | null {
    if (axios.isAxiosError(err)) {
        const apiError = err.response?.data as ApiErrorResponse | undefined;
        return apiError?.detail || null;
    }

    if (typeof err === 'object' && err !== null && 'response' in err) {
        const response = (err as { response?: { data?: ApiErrorResponse } }).response;
        return response?.data?.detail || null;
    }

    if (err instanceof Error) {
        return err.message;
    }

    return null;
}

export default function Login() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    // Vérifier si l'utilisateur est déjà connecté
    useEffect(() => {
        if (authService.isLoggedIn()) {
            router.push('/dashboard');
        }
    }, [router]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        // Effacer les erreurs quand l'utilisateur commence à taper
        if (error) setError(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Sélectionner le stockage en fonction de l'option "Se souvenir de moi"
            const storage: Storage = formData.rememberMe ? localStorage : sessionStorage;

            // Appel au service d'authentification
            await authService.login(formData.email, formData.password, storage);

            // Redirection vers le tableau de bord
            router.push('/dashboard');
        } catch (err: unknown) {
            const errorDetail = getErrorDetail(err);
            setError(errorDetail || 'Une erreur inattendue est survenue. Veuillez rÃ©essayer.');
                // Gérer spécifiquement les erreurs Axios
            /*
                const apiError = err.response?.data as ApiErrorResponse | undefined;
                setError(apiError?.detail || 'Une erreur est survenue lors de la connexion. Veuillez réessayer.');
            } else if (err instanceof Error) {
                // Gérer les erreurs JavaScript standard
                setError(err.message);
            } else {
                // Gérer les erreurs inconnues
                setError('Une erreur inattendue est survenue. Veuillez réessayer.');
            }
            */
            console.error('Login error:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleSocialLogin = (provider: string) => {
        // À implémenter pour les connexions sociales
        console.log(`${provider} login clicked`);
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginCard}>
                <div className={styles.formSide}>
                    <div className={styles.header}>
                        <Link href="/" className={styles.logoLink}>
                            <Image
                                src="/logo.png"
                                alt="CADIA Logo"
                                width={120}
                                height={36}
                                className={styles.logo}
                            />
                        </Link>
                        <h1 className={styles.title}>Welcome back</h1>
                        <p className={styles.subtitle}>
                            Log in to your CADIA account
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        {error && (
                            <div className={styles.errorMessage}>
                                {error}
                            </div>
                        )}

                        <div className={styles.inputGroup}>
                            <label htmlFor="email" className={styles.label}>
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="your.email@example.com"
                                required
                                disabled={loading}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <div className={styles.labelRow}>
                                <label htmlFor="password" className={styles.label}>
                                    Password
                                </label>
                                <span className={styles.forgotPassword}>
                                    Forgot password?
                                </span>
                            </div>
                            <div className={styles.passwordContainer}>
                                <input
                                    type={isPasswordVisible ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="Enter your password"
                                    required
                                    disabled={loading}
                                />
                                <button
                                    type="button"
                                    className={styles.togglePassword}
                                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                    aria-label={isPasswordVisible ? "Hide password" : "Show password"}
                                    disabled={loading}
                                >
                                    {isPasswordVisible ? (
                                        <EyeOffIcon />
                                    ) : (
                                        <EyeIcon />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className={styles.checkboxGroup}>
                            <input
                                type="checkbox"
                                id="rememberMe"
                                name="rememberMe"
                                checked={formData.rememberMe}
                                onChange={handleChange}
                                className={styles.checkbox}
                                disabled={loading}
                            />
                            <label htmlFor="rememberMe" className={styles.checkboxLabel}>
                                Remember me
                            </label>
                        </div>

                        <Button
                            className={styles.submitButton}
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'Log in'}
                        </Button>
                    </form>

                    <div className={styles.divider}>
                        <span>or continue with</span>
                    </div>

                    <div className={styles.socialLogins}>
                        <button
                            className={styles.socialButton}
                            onClick={() => handleSocialLogin('google')}
                            disabled={loading}
                            type="button"
                        >
                            <GoogleIcon /> Google
                        </button>
                        <button
                            className={styles.socialButton}
                            onClick={() => handleSocialLogin('github')}
                            disabled={loading}
                            type="button"
                        >
                            <GithubIcon /> GitHub
                        </button>
                    </div>

                    <div className={styles.signupPrompt}>
                        Don&apos;t have an account? <Link href="/signup" className={styles.textLink}>Sign up</Link>
                    </div>
                </div>

                <div className={styles.imageSide}>
                    <div className={styles.overlayContent}>
                        <h2 className={styles.overlayTitle}>Design smarter with AI</h2>
                        <p className={styles.overlayText}>
                            Access your projects and continue creating amazing CAD designs with the power of AI.
                        </p>

                        <div className={styles.featureList}>
                            <div className={styles.featureItem}>
                                <CheckIcon />
                                <span>Access your saved designs</span>
                            </div>
                            <div className={styles.featureItem}>
                                <CheckIcon />
                                <span>Export to any format</span>
                            </div>
                            <div className={styles.featureItem}>
                                <CheckIcon />
                                <span>24/7 AI-powered assistance</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
