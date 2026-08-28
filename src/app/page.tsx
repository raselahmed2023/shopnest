import {
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";

import ProductGrid from "@/components/ProductGrid";
import { getProducts } from "@/lib/api";

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="page-animation">
      <section className="bg-gradient-to-br from-emerald-50 via-white to-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <span className="mb-5 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
              New season, new favorites
            </span>

            <h1 className="max-w-3xl text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Discover Your Next{" "}
              <span className="text-emerald-600">
                Favorite.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Explore quality products across
              fashion, electronics, jewelry and
              more — all in one modern shopping
              experience.
            </p>

            <a
              href="#products"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white transition hover:bg-emerald-700"
            >
              Shop Now
              <ArrowRight size={20} />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <Truck className="mb-4 text-emerald-600" />
              <h3 className="font-bold">
                Fast Delivery
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Quick and dependable shopping.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <ShieldCheck className="mb-4 text-emerald-600" />
              <h3 className="font-bold">
                Trusted Shopping
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Simple and secure experience.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <RotateCcw className="mb-4 text-emerald-600" />
              <h3 className="font-bold">
                Easy Experience
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Browse and manage your cart easily.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="products"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mb-10">
          <p className="mb-2 font-bold text-emerald-600">
            SHOP COLLECTION
          </p>

          <h2 className="text-3xl font-black text-slate-950 sm:text-4xl">
            Find something you love.
          </h2>
        </div>

        <ProductGrid products={products} />
      </section>
    </div>
  );
}