"use client";

export function PrefsBootLoader() {
  return (
    <div
      className="fixed inset-0 z-100 flex flex-col items-center justify-center gap-5 bg-slate-950 text-slate-100"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center gap-3">
        <div
          className="h-8 w-8 animate-spin rounded-full border-2 border-slate-700 border-t-teal-400"
          aria-hidden
        />
        <span className="text-xs font-medium tracking-wide text-slate-400">Loading…</span>
      </div>
    </div>
  );
}
