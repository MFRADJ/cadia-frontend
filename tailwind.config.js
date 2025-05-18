/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Active le mode sombre basé sur la classe
    theme: {
        extend: {
            colors: {
                // Vous pouvez définir ici vos couleurs personnalisées
                background: {
                    primary: '#0b0b0b',   // Reprend votre variable CSS --background-primary
                    secondary: '#1c1c1c', // Reprend votre variable CSS --background-secondary
                },
                text: {
                    primary: '#ffffff',   // Reprend votre variable CSS --text-primary
                    secondary: '#888888', // Reprend votre variable CSS --text-secondary
                }
            },
        },
    },
    plugins: [],
}