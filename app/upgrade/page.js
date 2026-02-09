import PageShell from '../../components/PageShell';

export default function UpgradePage() {
  return (
    <PageShell title="Plan info" description="Choose gentle tools that fit your needs.">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card noise-overlay">
          <h2 className="font-display text-2xl text-mocha">Free</h2>
          <ul className="mt-4 space-y-2 text-sm text-mocha/80">
            <li>Delete your own post within 10 minutes.</li>
            <li>Read and respond to posts.</li>
            <li>Anonymous access only.</li>
          </ul>
        </div>
        <div className="card noise-overlay">
          <h2 className="font-display text-2xl text-mocha">Paid</h2>
          <ul className="mt-4 space-y-2 text-sm text-mocha/80">
            <li>Edit, delete, or archive your posts anytime.</li>
            <li>Optional longer journaling drafts.</li>
            <li>Support the space.</li>
          </ul>
          <button className="mt-5 rounded-full bg-peach px-5 py-3 text-sm font-semibold text-mocha shadow-lift">
            upgrade gently
          </button>
        </div>
      </div>
      <p className="mt-6 text-xs text-mocha/70">
        Moderators can remove content anytime for safety, regardless of plan.
      </p>
    </PageShell>
  );
}
