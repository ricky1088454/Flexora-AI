import PageShell from '../../../components/PageShell';
import { featureFlags } from '../../../lib/featureFlags';

export default function NewVideoPage() {
  if (!featureFlags.videoNotes) {
    return (
      <PageShell title="Create video note" description="Video notes are optional and currently disabled.">
        <div className="card noise-overlay">
          <p className="text-base text-mocha/80">Feature flag is off for now.</p>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell
      title="Create a video note"
      description="Optional 60-second max. Manual play only once posted."
    >
      <div className="card noise-overlay max-w-2xl">
        <form className="flex flex-col gap-5">
          <label className="text-sm font-semibold text-mocha">Post mode</label>
          <select className="rounded-2xl border border-clay bg-paper px-4 py-3 text-mocha">
            {['support only', 'reality check', 'advice wanted', 'just venting'].map((mode) => (
              <option key={mode} value={mode}>{mode}</option>
            ))}
          </select>
          <label className="text-sm font-semibold text-mocha">Video file</label>
          <input type="file" accept="video/*" className="rounded-2xl border border-clay bg-paper px-4 py-3" />
          <p className="text-xs text-mocha/70">Please keep uploads under 60 seconds.</p>
          <button type="submit" className="rounded-full bg-sage px-6 py-3 text-sm font-semibold text-mocha shadow-lift">
            share your thoughts
          </button>
        </form>
      </div>
    </PageShell>
  );
}
