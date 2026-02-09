import PageShell from '../../components/PageShell';
import { featureFlags } from '../../lib/featureFlags';

export default function SafetyPage() {
  if (!featureFlags.safetyResources) {
    return (
      <PageShell title="Supportive resources" description="This screen is feature-flagged and currently hidden.">
        <div className="card noise-overlay">
          <p className="text-base text-mocha/80">Feature flag is off for now.</p>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell title="Supportive resources" description="Gentle reminders and community resources.">
      <div className="card noise-overlay">
        <p className="text-base text-mocha/80">
          This space can share light suggestions for local or trusted support. It never replaces human care.
        </p>
      </div>
    </PageShell>
  );
}
