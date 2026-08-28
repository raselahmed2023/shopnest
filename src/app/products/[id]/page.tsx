"use client";

import { useEffect, useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ShoppingCart,
  Star,
} from "lucide-react";

import AddToCartButton from "@/components/AddToCartButton";
import type { Product } from "@/types";

interface ProductDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { id } = use(params);

  const [product, setProduct] =
    useState<Product | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true);

        const response = await fetch(
          `https://fakestoreapi.com/products/${id}`
        );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch product"
          );
        }

        const data: Product =
          await response.json();

        setProduct(data);
      } catch (error) {
        console.error(error);

        setError(
          "Unable to load this product."
        );
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-20 text-center">
        <p className="text-lg font-semibold text-slate-500">
          Loading product...
        </p>
      </section>
    );
  }

  if (error || !product) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <div className="rounded-3xl bg-white p-10 shadow-sm">
          <h1 className="text-2xl font-black text-red-500">
            Product could not be loaded
          </h1>

          <p className="mt-3 text-slate-500">
            {error}
          </p>

          <Link
            href="/"
            className="mt-6 inline-block rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white"
          >
            Back to Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-animation mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 font-semibold text-slate-600 transition hover:text-emerald-600"
      >
        <ArrowLeft size={18} />
        Back to Products
      </Link>

      <div className="grid gap-12 rounded-3xl bg-white p-6 shadow-sm md:p-10 lg:grid-cols-2">
        <div className="flex min-h-[420px] items-center justify-center rounded-2xl bg-slate-50 p-8">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="max-h-[420px] w-auto object-contain"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-emerald-600">
            {product.category}
          </p>

          <h1 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
            {product.title}
          </h1>

          <div className="mt-5 flex items-center gap-2">
            <Star
              className="fill-amber-400 text-amber-400"
              size={20}
            />

            <span className="font-bold">
              {product.rating.rate}
            </span>

            <span className="text-slate-500">
              ({product.rating.count} reviews)
            </span>
          </div>

          <p className="mt-6 text-4xl font-black">
            ${product.price.toFixed(2)}
          </p>

          <p className="mt-6 leading-8 text-slate-600">
            {product.description}
          </p>

          <div className="mt-8">
            <AddToCartButton
              product={product}
            />
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
            <ShoppingCart size={17} />
            Add this item to your cart and
            continue shopping.
          </div>
        </div>
      </div>
    </section>
  );
}