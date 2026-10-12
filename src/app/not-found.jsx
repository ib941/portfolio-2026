import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-extrabold text-slate-900 mb-2">404</h1>
      <p className="text-slate-600 mb-6">Page not found</p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#2a2a2a] text-white text-xs font-medium rounded-lg shadow-[0_4px_0_#1a1a1a] active:shadow-[0_0px_0_#1a1a1a] active:translate-y-[4px] transition-all"
      >
        Return Home
      </Link>
    </div>
  );
}
