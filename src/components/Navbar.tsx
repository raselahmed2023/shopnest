"use client";

import Link from "next/link";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
            <ShoppingBag size={22} />
          </div>

          <span className="text-xl font-extrabold text-slate-900">
            Shop
            <span className="text-emerald-600">
              Nest
            </span>
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="hidden font-medium text-slate-600 transition hover:text-emerald-600 sm:block"
          >
            Products
          </Link>

          <Link
            href="/cart"
            className="relative flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
          >
            <ShoppingCart size={20} />

            <span className="hidden sm:inline">
              Cart
            </span>

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-emerald-600 px-1 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}