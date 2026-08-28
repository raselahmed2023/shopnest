import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center">
      <div className="rounded-3xl bg-white p-10 shadow-sm">
        <p className="text-7xl font-black text-emerald-600">
          404
        </p>

        <h1 className="mt-5 text-3xl font-black">
          Page Not Found
        </h1>

        <p className="mt-3 text-slate-500">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>

        <Link
          href="/"
          className="mt-7 inline-block rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white transition hover:bg-emerald-700"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}