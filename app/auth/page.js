import PageShell from '../../components/PageShell';

export default function AuthPage() {
  return (
    <PageShell
      title="Lightweight sign in"
      description="Use email or a magic link. We keep accounts anonymous and never show identities to others."
    >
      <div className="card noise-overlay max-w-xl">
        <form className="flex flex-col gap-4">
          <label className="text-sm font-semibold text-mocha">Email address</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="rounded-2xl border border-clay bg-paper px-4 py-3 text-mocha focus:outline-none focus:ring-2 focus:ring-sage"
          />
          <button
            type="submit"
            className="rounded-full bg-sage px-5 py-3 text-sm font-semibold text-mocha shadow-lift"
          >
            send magic link
          </button>
          <p className="text-xs text-mocha/70">
            By signing in, you agree to keep this space respectful and aligned with each post’s intent.
          </p>
        </form>
      </div>
    </PageShell>
  );
}
