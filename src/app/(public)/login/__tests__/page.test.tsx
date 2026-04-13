import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/navigation';
import '@testing-library/jest-dom';
import Login from '@/app/(public)/login/page';
import authService from '@/services/authService';

// Mock des dépendances
jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));

jest.mock('@/services/authService', () => ({
    __esModule: true,
    default: {
        isLoggedIn: jest.fn(),
        login: jest.fn(),
    },
}));

jest.mock('next/image', () => ({
    __esModule: true,
    default: function MockImage({
        src,
        alt,
        ...props
    }: React.ComponentProps<'img'> & { src: string; alt: string }) {
        // eslint-disable-next-line @next/next/no-img-element
        return <img src={src} alt={alt} {...props} />;
    },
}));

// Mock du composant Button
jest.mock('@/components/ui/Button', () => ({
    Button: function MockButton({
        children,
        ...props
    }: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) {
        return <button {...props}>{children}</button>;
    },
}));

// Types pour les mocks
type MockedAuthService = jest.Mocked<typeof authService>;
type MockedUseRouter = jest.MockedFunction<typeof useRouter>;

// Mock UserData object
const mockUserData = {
    id: '123',
    email: 'test@example.com',
    name: 'Test User',
    token: 'mock-jwt-token-123',
    tokenType: 'Bearer'
};

describe('Login Page', () => {
    const mockPush = jest.fn();
    const mockAuthService = authService as MockedAuthService;
    const mockUseRouter = useRouter as MockedUseRouter;

    beforeEach(() => {
        // Reset tous les mocks avant chaque test
        jest.clearAllMocks();
        mockUseRouter.mockReturnValue({
            push: mockPush,
            replace: jest.fn(),
            prefetch: jest.fn(),
            back: jest.fn(),
            forward: jest.fn(),
            refresh: jest.fn(),
        });
        mockAuthService.isLoggedIn.mockReturnValue(false);
    });

    describe('Rendu initial', () => {
        it('affiche tous les éléments principaux', () => {
            render(<Login />);

            // Vérifier la présence des éléments principaux
            expect(screen.getByRole('heading', { name: /welcome back/i })).toBeInTheDocument();
            expect(screen.getByText(/log in to your cadia account/i)).toBeInTheDocument();
            expect(screen.getByLabelText(/^email$/i)).toBeInTheDocument();
            expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
            expect(screen.getByRole('button', { name: /log in$/i })).toBeInTheDocument();
        });

        it('affiche le logo et le lien vers l\'accueil', () => {
            render(<Login />);

            const logoLink = screen.getByRole('link', { name: /cadia logo/i });
            const logoImage = screen.getByAltText(/cadia logo/i);

            expect(logoLink).toHaveAttribute('href', '/');
            expect(logoImage).toBeInTheDocument();
        });

        it('affiche les boutons de connexion sociale', () => {
            render(<Login />);

            const buttons = screen.getAllByRole('button');
            const googleButton = buttons.find(button =>
                button.textContent?.includes('Google')
            );
            const githubButton = buttons.find(button =>
                button.textContent?.includes('GitHub')
            );

            expect(googleButton).toBeInTheDocument();
            expect(githubButton).toBeInTheDocument();
        });

        it('affiche le lien vers l\'inscription', () => {
            render(<Login />);

            const signupLink = screen.getByRole('link', { name: /sign up/i });
            expect(signupLink).toHaveAttribute('href', '/signup');
        });
    });

    describe('Redirection utilisateur connecté', () => {
        it('redirige vers le dashboard si l\'utilisateur est déjà connecté', () => {
            mockAuthService.isLoggedIn.mockReturnValue(true);

            render(<Login />);

            expect(mockPush).toHaveBeenCalledWith('/dashboard');
        });
    });

    describe('Gestion des formulaires', () => {
        it('met à jour les champs du formulaire', async () => {
            const user = userEvent.setup();
            render(<Login />);

            const emailInput = screen.getByLabelText(/^email$/i);
            const passwordInput = screen.getByLabelText(/^password$/i);

            await user.type(emailInput, 'test@example.com');
            await user.type(passwordInput, 'password123');

            expect(emailInput).toHaveValue('test@example.com');
            expect(passwordInput).toHaveValue('password123');
        });

        it('bascule la visibilité du mot de passe', async () => {
            const user = userEvent.setup();
            render(<Login />);

            const passwordInput = screen.getByLabelText(/^password$/i);
            const toggleButton = screen.getByRole('button', { name: /show password/i });

            expect(passwordInput).toHaveAttribute('type', 'password');

            await user.click(toggleButton);
            expect(passwordInput).toHaveAttribute('type', 'text');

            await user.click(toggleButton);
            expect(passwordInput).toHaveAttribute('type', 'password');
        });

        it('gère la case "Remember me"', async () => {
            const user = userEvent.setup();
            render(<Login />);

            const rememberMeCheckbox = screen.getByLabelText(/remember me/i);

            expect(rememberMeCheckbox).not.toBeChecked();

            await user.click(rememberMeCheckbox);
            expect(rememberMeCheckbox).toBeChecked();
        });
    });

    describe('Soumission du formulaire', () => {
        it('soumet le formulaire avec des données valides', async () => {
            const user = userEvent.setup();
            mockAuthService.login.mockResolvedValue(mockUserData);

            render(<Login />);

            const emailInput = screen.getByLabelText(/^email$/i);
            const passwordInput = screen.getByLabelText(/^password$/i);
            const submitButton = screen.getByRole('button', { name: /log in$/i });

            await user.type(emailInput, 'test@example.com');
            await user.type(passwordInput, 'password123');
            await user.click(submitButton);

            await waitFor(() => {
                expect(mockAuthService.login).toHaveBeenCalledWith(
                    'test@example.com',
                    'password123',
                    sessionStorage
                );
            });
        });

        it('utilise localStorage quand "Remember me" est coché', async () => {
            const user = userEvent.setup();
            mockAuthService.login.mockResolvedValue(mockUserData);

            render(<Login />);

            const emailInput = screen.getByLabelText(/^email$/i);
            const passwordInput = screen.getByLabelText(/^password$/i);
            const rememberMeCheckbox = screen.getByLabelText(/remember me/i);
            const submitButton = screen.getByRole('button', { name: /log in$/i });

            await user.type(emailInput, 'test@example.com');
            await user.type(passwordInput, 'password123');
            await user.click(rememberMeCheckbox);
            await user.click(submitButton);

            await waitFor(() => {
                expect(mockAuthService.login).toHaveBeenCalledWith(
                    'test@example.com',
                    'password123',
                    localStorage
                );
            });
        });

        it('redirige vers le dashboard après une connexion réussie', async () => {
            const user = userEvent.setup();
            mockAuthService.login.mockResolvedValue(mockUserData);

            render(<Login />);

            const emailInput = screen.getByLabelText(/^email$/i);
            const passwordInput = screen.getByLabelText(/^password$/i);
            const submitButton = screen.getByRole('button', { name: /log in$/i });

            await user.type(emailInput, 'test@example.com');
            await user.type(passwordInput, 'password123');
            await user.click(submitButton);

            await waitFor(() => {
                expect(mockPush).toHaveBeenCalledWith('/dashboard');
            });
        });

        it('affiche un état de chargement pendant la soumission', async () => {
            const user = userEvent.setup();
            mockAuthService.login.mockImplementation(() => new Promise(() => {})); // Promise qui ne se résout jamais

            render(<Login />);

            const emailInput = screen.getByLabelText(/^email$/i);
            const passwordInput = screen.getByLabelText(/^password$/i);
            const submitButton = screen.getByRole('button', { name: /log in$/i });

            await user.type(emailInput, 'test@example.com');
            await user.type(passwordInput, 'password123');
            await user.click(submitButton);

            await waitFor(() => {
                expect(screen.getByRole('button', { name: /logging in/i })).toBeInTheDocument();
            });

            expect(submitButton).toBeDisabled();
        });
    });

    describe('Gestion des erreurs', () => {
        it('affiche une erreur en cas d\'échec de connexion', async () => {
            const user = userEvent.setup();
            const errorMessage = 'Invalid credentials';
            mockAuthService.login.mockRejectedValue({
                response: { data: { detail: errorMessage } }
            });

            render(<Login />);

            const emailInput = screen.getByLabelText(/^email$/i);
            const passwordInput = screen.getByLabelText(/^password$/i);
            const submitButton = screen.getByRole('button', { name: /log in$/i });

            await user.type(emailInput, 'test@example.com');
            await user.type(passwordInput, 'wrongpassword');
            await user.click(submitButton);

            await waitFor(() => {
                expect(screen.getByText(errorMessage)).toBeInTheDocument();
            });
        });

        it('efface l\'erreur quand l\'utilisateur commence à taper', async () => {
            const user = userEvent.setup();
            mockAuthService.login.mockRejectedValue({
                response: { data: { detail: 'Invalid credentials' } }
            });

            render(<Login />);

            const emailInput = screen.getByLabelText(/^email$/i);
            const passwordInput = screen.getByLabelText(/^password$/i);
            const submitButton = screen.getByRole('button', { name: /log in$/i });

            // Provoquer une erreur
            await user.type(emailInput, 'test@example.com');
            await user.type(passwordInput, 'wrongpassword');
            await user.click(submitButton);

            await waitFor(() => {
                expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
            });

            // Commencer à taper dans un champ
            await user.clear(emailInput);
            await user.type(emailInput, 'new@email.com');

            await waitFor(() => {
                expect(screen.queryByText('Invalid credentials')).not.toBeInTheDocument();
            });
        });
    });

    describe('Accessibilité', () => {
        it('a les labels appropriés pour les champs de formulaire', () => {
            render(<Login />);

            expect(screen.getByLabelText(/^email$/i)).toBeInTheDocument();
            expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
            expect(screen.getByLabelText(/remember me/i)).toBeInTheDocument();
        });

        it('a les attributs aria appropriés pour le bouton de visibilité du mot de passe', () => {
            render(<Login />);

            const toggleButton = screen.getByRole('button', { name: /show password/i });
            expect(toggleButton).toHaveAttribute('aria-label', 'Show password');
        });
    });
});
