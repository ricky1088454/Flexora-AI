import Link from 'next/link';
import { featureFlags } from '../lib/featureFlags';

const navLinks = [
  { href: '/', label: 'landing' },
  { href: '/feed', label: 'read quietly' },
  { href: '/posts/new', label: 'write a little' },
  { href: '/auth', label: 'sign in' },
  { href: '/settings', label: 'settings' },
  { href: '/upgrade', label: 'plans' }
];

if (featureFlags.videoNotes) {
  navLinks.push({ href: '/videos', label: 'video notes' });
}

if (featureFlags.safetyResources) {
  navLinks.push({ href: '/safety', label: 'support resources' });
}

export default function PageShell({ title, description, children }) {
  return (
    <div className="px-5 py-8 sm:px-10">
      <header className="mb-8 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-widest text-sageDark">Flexora</p>
          <h1 className="font-display text-4xl text-mocha sm:text-5xl">{title}</h1>
          {description ? (
            <p className="max-w-2xl text-base text-mocha/80">{description}</p>
          ) : null}
        </div>
        <nav className="flex flex-wrap gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full bg-peach/70 px-4 py-2 text-sm font-semibold text-mocha shadow-lift"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
