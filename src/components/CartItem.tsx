"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";

import type { CartItemType } from "@/types";
import { useCart } from "@/context/CartContext";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({
  item,
}: CartItemProps) {
  const {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center">
      <div className="flex h-28 w-full items-center justify-center rounded-xl bg-slate-50 p-3 sm:w-28">
        <Image
          src={item.image}
          alt={item.title}
          width={100}
          height={100}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="flex-1">
        <p className="mb-1 text-xs font-bold uppercase text-emerald-600">
          {item.category}
        </p>

        <Link href={`/products/${item.id}`}>
          <h3 className="font-bold text-slate-900 transition hover:text-emerald-600">
            {item.title}
          </h3>
        </Link>

        <p className="mt-2 font-bold">
          ${item.price.toFixed(2)}
        </p>
      </div>

      <div className="flex items-center justify-between gap-5 sm:flex-col sm:items-end">
        <div className="flex items-center overflow-hidden rounded-xl border border-slate-200">
          <button
            onClick={() =>
              decreaseQuantity(item.id)
            }
            className="p-2 transition hover:bg-slate-100"
          >
            <Minus size={17} />
          </button>

          <span className="min-w-10 text-center font-bold">
            {item.quantity}
          </span>

          <button
            onClick={() =>
              increaseQuantity(item.id)
            }
            className="p-2 transition hover:bg-slate-100"
          >
            <Plus size={17} />
          </button>
        </div>

        <button
          onClick={() =>
            removeFromCart(item.id)
          }
          className="flex items-center gap-2 text-sm font-semibold text-red-500 transition hover:text-red-600"
        >
          <Trash2 size={17} />
          Remove
        </button>
      </div>
    </div>
  );
}