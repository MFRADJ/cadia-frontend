export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-[#0f172a] px-6 py-16 text-white">
            <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8">
                <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Dashboard</p>
                <h1 className="mt-4 text-3xl font-semibold">Authentication succeeded.</h1>
                <p className="mt-4 max-w-2xl text-slate-300">
                    This is a placeholder dashboard so the auth flow has a real landing page after login.
                    We can replace it with the first CADIA workspace next.
                </p>
            </div>
        </main>
    );
}
