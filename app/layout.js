import './globals.css';

export const metadata = {
  title: 'Flexora — cozy anonymous sharing',
  description: 'A gentle place to write and read anonymous notes with care.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
