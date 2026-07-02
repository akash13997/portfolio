export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg">
      <div className="flex items-center gap-3 font-mono text-sm text-muted">
        <span className="h-2 w-2 animate-ping rounded-full bg-indigo" />
        loading portfolio...
      </div>
    </div>
  );
}
