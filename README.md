# Flexora-AI

A cozy, anonymous peer sharing web app built with Next.js, Tailwind CSS, and Supabase.

## Getting started

```bash
npm install
npm run dev
```

## Environment variables

Create a `.env.local` file with:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Feature flags

Update `lib/featureFlags.js` to enable optional screens such as Video Notes and Supportive Safety Resources.
