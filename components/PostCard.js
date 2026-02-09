import Link from 'next/link';
import ModeBadge from './ModeBadge';

export default function PostCard({ post, showActions }) {
  return (
    <article className="card noise-overlay">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <ModeBadge mode={post.mode} />
          <span className="text-xs text-mocha/70">{post.timestamp}</span>
        </div>
        <p className="text-lg leading-relaxed text-mocha">{post.content}</p>
        {post.videoUrl ? (
          <div className="rounded-xl bg-mist p-4 text-sm text-mocha/70">
            Video note attached — manual play only.
          </div>
        ) : null}
        <div className="flex flex-wrap gap-3 text-sm">
          <Link
            href={`/posts/${post.id}`}
            className="rounded-full bg-sage px-4 py-2 font-semibold text-mocha"
          >
            read softly
          </Link>
          {showActions ? (
            <button
              type="button"
              className="rounded-full bg-clay px-4 py-2 font-semibold text-mocha"
            >
              this doesn’t have to be perfect
            </button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
