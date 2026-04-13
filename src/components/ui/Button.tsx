// Reusable UI Button
'use client';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    className?: string;
    disabled?: boolean; // Ajout de la propriété disabled
    type?: 'button' | 'submit' | 'reset'; // Ajout du type pour les formulaires
}

export function Button({
                           children,
                           variant = 'primary',
                           size = 'medium',
                           onClick,
                           className = '',
                           disabled = false,
                           type = 'button',
                       }: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all';

    const variantStyles = {
        primary: 'bg-white text-black hover:opacity-90',
        secondary: 'bg-[#1c1c1c] text-white hover:bg-[#2a2a2a]',
        outline: 'bg-transparent border border-white text-white hover:bg-white/10',
    };

    const sizeStyles = {
        small: 'px-4 py-2 text-sm',
        medium: 'px-6 py-3 text-base',
        large: 'px-8 py-4 text-lg',
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            disabled={disabled}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
}
