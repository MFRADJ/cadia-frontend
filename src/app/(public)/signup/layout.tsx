import './signup.module.css';
export default function SignupLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="signup-container">
            {children}
        </main>
    );
}
