import PageShell from '../../components/PageShell';
import { featureFlags } from '../../lib/featureFlags';

const sampleVideos = [
  {
    id: 'v1',
    mode: 'reality check',
    note: 'A short reflection about resetting expectations.',
    timestamp: 'Today · 8:15am'
  }
];

export default function VideoFeedPage() {
  if (!featureFlags.videoNotes) {
    return (
      <PageShell
        title="Video notes"
        description="Video notes are optional and currently disabled."
      >
        <div className="card noise-overlay">
          <p className="text-base text-mocha/80">Feature flag is off for now. Check back later.</p>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell title="Video notes" description="Chronological, manual play only.">
      <div className="grid gap-6">
        {sampleVideos.map((video) => (
          <article key={video.id} className="card noise-overlay">
            <p className="badge">{video.mode}</p>
            <p className="mt-4 text-base text-mocha">{video.note}</p>
            <div className="mt-4 rounded-2xl bg-mist p-4 text-sm text-mocha/70">
              Video note placeholder — no autoplay.
            </div>
            <p className="mt-4 text-xs text-mocha/60">{video.timestamp}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
