import PageShell from '../../components/PageShell';

export default function SettingsPage() {
  return (
    <PageShell title="Account settings" description="Anonymous by design. No public profiles or usernames.">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card noise-overlay">
          <h2 className="font-display text-2xl text-mocha">Your plan</h2>
          <p className="mt-3 text-base text-mocha/80">Free plan active. You can delete posts within 10 minutes of posting.</p>
          <button className="mt-4 rounded-full bg-sage px-5 py-3 text-sm font-semibold text-mocha shadow-lift">
            view plan options
          </button>
        </div>
        <div className="card noise-overlay">
          <h2 className="font-display text-2xl text-mocha">Preferences</h2>
          <div className="mt-4 space-y-3 text-sm text-mocha/80">
            <p>Muted notifications by default.</p>
            <p>Safety reminders shown on new posts.</p>
            <p>No public data shared.</p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
