export default function CheckEmailPage() {
    return (
        <main className="min-h-screen bg-[#0f172a] px-6 py-16 text-white">
            <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8">
                <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Signup</p>
                <h1 className="mt-4 text-3xl font-semibold">Account created.</h1>
                <p className="mt-4 max-w-2xl text-slate-300">
                    Email verification is stubbed for now, so this page acts as the first post-signup
                    checkpoint while we boot the rest of the product.
                </p>
                <a
                    className="mt-8 inline-flex rounded-full bg-white px-5 py-3 font-medium text-slate-950 transition hover:bg-slate-200"
                    href="/login"
                >
                    Go to login
                </a>
            </div>
        </main>
    );
}
