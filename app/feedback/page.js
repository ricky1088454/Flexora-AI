import PageShell from '../../components/PageShell';

export default function FeedbackPage() {
  return (
    <PageShell title="Report or share feedback" description="We appreciate gentle notes to keep this space safe.">
      <div className="card noise-overlay max-w-2xl">
        <div className="rounded-2xl border border-clay/70 bg-paper p-5">
          <h2 className="font-display text-2xl text-mocha">Report a concern</h2>
          <form className="mt-4 flex flex-col gap-4">
            <textarea
              rows="5"
              placeholder="Share what feels off, or what you’d like to see improved."
              className="rounded-2xl border border-clay bg-paper px-4 py-3 text-mocha focus:outline-none focus:ring-2 focus:ring-sage"
            />
            <button
              type="submit"
              className="rounded-full bg-peach px-6 py-3 text-sm font-semibold text-mocha shadow-lift"
            >
              send feedback
            </button>
          </form>
        </div>
      </div>
    </PageShell>
  );
}
