export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-slate-200 bg-white p-5">
      <div className="mb-5 h-56 rounded-xl bg-slate-200" />

      <div className="mb-3 h-3 w-24 rounded bg-slate-200" />

      <div className="mb-2 h-5 rounded bg-slate-200" />

      <div className="mb-5 h-5 w-3/4 rounded bg-slate-200" />

      <div className="h-10 rounded-xl bg-slate-200" />
    </div>
  );
}