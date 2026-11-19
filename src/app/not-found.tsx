export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-space-950 p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">404</h1>
        <p className="text-white/60">Page not found.</p>
        <a href="/" className="mt-4 inline-block text-neon-cyan hover:underline">Go Home</a>
      </div>
    </div>
  );
}