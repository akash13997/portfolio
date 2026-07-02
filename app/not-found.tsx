import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mesh flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <p className="font-mono text-sm text-indigo-light">404</p>
      <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Page not found</h1>
      <p className="mt-3 max-w-sm text-muted">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="focus-ring mt-8 flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo via-blue to-violet px-6 py-3 text-sm font-semibold text-white"
      >
        <Home size={15} /> Back home
      </Link>
    </div>
  );
}
