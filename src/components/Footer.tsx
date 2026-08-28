import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <ShoppingBag className="text-emerald-500" />

              <span className="text-xl font-bold text-white">
                ShopNest
              </span>
            </div>

            <p className="text-sm text-slate-400">
              Modern shopping made simple.
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <Link
              href="/"
              className="hover:text-white"
            >
              Products
            </Link>

            <Link
              href="/cart"
              className="hover:text-white"
            >
              Cart
            </Link>

            <Link
              href="/checkout"
              className="hover:text-white"
            >
              Checkout
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © 2026 ShopNest. Built for Frontend Web Development
          Capstone.
        </div>
      </div>
    </footer>
  );
}