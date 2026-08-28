"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ShoppingCart,
    Star,
} from "lucide-react";

import type { Product } from "@/types";
import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({
    product,
}: ProductCardProps) {
    const { addToCart } = useCart();

    return (
        <article className="product-card flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl">
            <Link
                href={`/products/${product.id}`}
                className="relative flex h-64 items-center justify-center overflow-hidden bg-white p-6"
            >
                <Image
                    src={product.image}
                    alt={product.title}
                    width={220}
                    height={220}
                    className="product-image h-full w-full object-contain"
                />
            </Link>

            <div className="flex flex-1 flex-col p-5">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-emerald-600">
                    {product.category}
                </p>

                <Link href={`/products/${product.id}`}>
                    <h2 className="mb-3 line-clamp-2 text-lg font-bold text-slate-900 transition hover:text-emerald-600">
                        {product.title}
                    </h2>
                </Link>

                <div className="mb-4 flex items-center gap-2 text-sm">
                    <Star
                        size={17}
                        className="fill-amber-400 text-amber-400"
                    />

                    <span className="font-semibold">
                        {product.rating.rate}
                    </span>

                    <span className="text-slate-400">
                        ({product.rating.count})
                    </span>
                </div>

                <div className="mt-auto">
                    <p className="mb-4 text-2xl font-extrabold text-slate-900">
                        ${product.price.toFixed(2)}
                    </p>

                    <div className="grid grid-cols-2 gap-2">
                        <Link
                            href={`/products/${product.id}`}
                            className="flex items-center justify-center rounded-xl border border-slate-300 px-3 py-2.5 text-sm font-semibold transition hover:border-emerald-500 hover:text-emerald-600"
                        >
                            View Details
                        </Link>

                        <Button
                            className="flex items-center justify-center gap-2 px-3 text-sm"
                            onClick={() =>
                                addToCart(product)
                            }
                        >
                            <ShoppingCart size={17} />
                            Add
                        </Button>
                    </div>
                </div>
            </div>
        </article>
    );
}