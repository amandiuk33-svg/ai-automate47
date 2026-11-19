import { notFound } from 'next/navigation';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-space-950">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">404</h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">Page not found.</p>
        <a href="/" className="neon-button mt-8 inline-block">Go Home</a>
      </div>
    </div>
  );
}