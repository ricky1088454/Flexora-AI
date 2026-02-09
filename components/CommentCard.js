export default function CommentCard({ comment }) {
  return (
    <div className="rounded-2xl border border-clay/60 bg-paper p-4">
      <p className="text-sm uppercase tracking-widest text-sageDark">{comment.mode}</p>
      <p className="mt-2 text-base text-mocha">{comment.text}</p>
      <p className="mt-3 text-xs text-mocha/60">{comment.timestamp}</p>
    </div>
  );
}
