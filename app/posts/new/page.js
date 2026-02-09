import PageShell from '../../../components/PageShell';

export default function NewPostPage() {
  return (
    <PageShell
      title="Share your thoughts"
      description="Choose the intent mode so responses stay aligned with what you need."
    >
      <div className="card noise-overlay max-w-2xl">
        <form className="flex flex-col gap-5">
          <label className="text-sm font-semibold text-mocha">Post mode</label>
          <div className="grid gap-3 sm:grid-cols-2">
            {['support only', 'reality check', 'advice wanted', 'just venting'].map((mode) => (
              <label key={mode} className="flex items-center gap-3 rounded-2xl border border-clay bg-paper px-4 py-3">
                <input type="radio" name="mode" value={mode} className="h-4 w-4 accent-sage" />
                <span className="text-sm font-semibold text-mocha">{mode}</span>
              </label>
            ))}
          </div>
          <label className="text-sm font-semibold text-mocha">Your words</label>
          <textarea
            rows="6"
            placeholder="this doesn’t have to be perfect."
            className="rounded-2xl border border-clay bg-paper px-4 py-3 text-mocha focus:outline-none focus:ring-2 focus:ring-sage"
          />
          <p className="text-xs text-mocha/70">
            Free plan: delete within 10 minutes. Paid plan: edit, delete, or archive anytime.
            Moderators can remove content for safety.
          </p>
          <button
            type="submit"
            className="rounded-full bg-sage px-6 py-3 text-sm font-semibold text-mocha shadow-lift"
          >
            share your thoughts
          </button>
        </form>
      </div>
    </PageShell>
  );
}
