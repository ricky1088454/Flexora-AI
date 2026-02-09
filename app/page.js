import Link from 'next/link';
import PageShell from '../components/PageShell';

export default function Home() {
  return (
    <PageShell
      title="A cozy place for quiet, anonymous sharing."
      description="Flexora is a gentle space for text posts and optional video notes. It's not therapy, not a diagnosis tool, and not a social media platform—just soft support and respectful listening."
    >
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="card noise-overlay">
          <h2 className="font-display text-3xl text-mocha">Welcome in</h2>
          <p className="mt-4 text-base text-mocha/80">
            Write what’s on your mind or read quietly. Every post chooses a mode so
            responses stay aligned: support only, reality check, advice wanted, or just venting.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/posts/new"
              className="rounded-full bg-sage px-5 py-3 text-sm font-semibold text-mocha shadow-lift"
            >
              write a little
            </Link>
            <Link
              href="/feed"
              className="rounded-full bg-peach px-5 py-3 text-sm font-semibold text-mocha shadow-lift"
            >
              read quietly
            </Link>
          </div>
          <p className="mt-6 text-sm text-mocha/70">This doesn’t have to be perfect.</p>
        </div>
        <div className="card noise-overlay">
          <h3 className="font-display text-2xl text-mocha">How it stays gentle</h3>
          <ul className="mt-4 space-y-3 text-base text-mocha/80">
            <li>Anonymous accounts only. No profiles, no followers, no DMs.</li>
            <li>Chronological feeds. No likes, no metrics, no trending.</li>
            <li>Optional video notes, manual play only.</li>
            <li>AI is used quietly for tone suggestions and safety flagging—never diagnosis.</li>
          </ul>
          <div className="mt-6 rounded-2xl bg-mist p-4 text-sm text-mocha/70">
            If you need urgent support, please seek local resources or trusted people around you.
          </div>
        </div>
      </section>
    </PageShell>
  );
}
