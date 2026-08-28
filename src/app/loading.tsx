import LoadingSkeleton from "@/components/LoadingSkeleton";

export default function Loading() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <div className="mb-3 h-4 w-28 animate-pulse rounded bg-slate-200" />
        <div className="h-10 w-80 max-w-full animate-pulse rounded bg-slate-200" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <LoadingSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}