"use client";

import { AlertTriangle } from "lucide-react";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center">
      <div className="rounded-3xl bg-white p-10 shadow-sm">
        <AlertTriangle
          size={60}
          className="mx-auto text-red-500"
        />

        <h1 className="mt-6 text-3xl font-black">
          Something went wrong
        </h1>

        <p className="mt-3 text-slate-500">
          We couldn&apos;t load the requested data. Please try again.
        </p>

        <button
          onClick={reset}
          className="mt-7 rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white transition hover:bg-emerald-700"
        >
          Try Again
        </button>
      </div>
    </section>
  );
}