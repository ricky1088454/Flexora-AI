import ModeBadge from '../../../components/ModeBadge';
import CommentCard from '../../../components/CommentCard';
import PageShell from '../../../components/PageShell';

const sampleComments = [
  {
    id: 'c1',
    mode: 'support only',
    text: 'Sending gentle support. It makes sense that this feels heavy.',
    timestamp: 'Today · 9:40am'
  },
  {
    id: 'c2',
    mode: 'support only',
    text: 'You are showing up for yourself just by naming it.',
    timestamp: 'Today · 9:55am'
  }
];

export default function PostDetailPage() {
  return (
    <PageShell title="Post detail" description="Responses stay aligned with the selected intent mode.">
      <div className="grid gap-6">
        <article className="card noise-overlay">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <ModeBadge mode="support only" />
            <span className="text-xs text-mocha/70">Today · 9:12am</span>
          </div>
          <p className="mt-4 text-lg text-mocha">
            I started a new job and feel like I am still catching my breath. Hoping for gentle encouragement.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <button type="button" className="rounded-full bg-clay px-4 py-2 font-semibold text-mocha">
              delete (grace window)
            </button>
            <button
              type="button"
              disabled
              className="rounded-full bg-mist px-4 py-2 font-semibold text-mocha/50"
            >
              delete disabled after 10 minutes
            </button>
          </div>
        </article>
        <section className="card noise-overlay">
          <h2 className="font-display text-2xl text-mocha">Leave a response</h2>
          <p className="mt-2 text-sm text-mocha/70">Keep your response in the same mode: support only.</p>
          <form className="mt-4 flex flex-col gap-4">
            <textarea
              rows="4"
              placeholder="share a gentle response"
              className="rounded-2xl border border-clay bg-paper px-4 py-3 text-mocha focus:outline-none focus:ring-2 focus:ring-sage"
            />
            <button
              type="submit"
              className="rounded-full bg-sage px-5 py-3 text-sm font-semibold text-mocha shadow-lift"
            >
              send kindness
            </button>
          </form>
        </section>
        <section className="grid gap-4">
          {sampleComments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </section>
      </div>
    </PageShell>
  );
}
