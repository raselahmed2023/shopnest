"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

import CartItem from "@/components/CartItem";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, total, clearCart } = useCart();

  const [showClearModal, setShowClearModal] =
    useState(false);

  const confirmClearCart = () => {
    clearCart();
    setShowClearModal(false);
  };

  if (cart.length === 0) {
    return (
      <section className="page-animation mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white px-6 py-20 text-center shadow-sm">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <ShoppingBag size={36} />
          </div>

          <h1 className="text-3xl font-black">
            Your cart is empty
          </h1>

          <p className="mx-auto mt-3 max-w-md text-slate-500">
            Looks like you haven&apos;t added any products yet.
          </p>

          <Link
            href="/"
            className="mt-7 inline-block rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white transition hover:bg-emerald-700"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-animation mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 font-bold text-emerald-600">
              SHOPPING CART
            </p>

            <h1 className="text-3xl font-black sm:text-4xl">
              Your Cart
            </h1>
          </div>

          <Button
            variant="danger"
            onClick={() => setShowClearModal(true)}
          >
            Clear Cart
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-4">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))}
          </div>

          <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm lg:sticky lg:top-28">
            <h2 className="text-xl font-black">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-slate-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="border-t border-slate-200 pt-4">
                <div className="flex justify-between text-xl font-black">
                  <span>Total</span>
                  <span>
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <Link
              href="/checkout"
              className="mt-7 block rounded-xl bg-emerald-600 px-5 py-3 text-center font-bold text-white transition hover:bg-emerald-700"
            >
              Proceed to Checkout
            </Link>

            <Link
              href="/"
              className="mt-3 block text-center text-sm font-semibold text-slate-500 hover:text-emerald-600"
            >
              Continue Shopping
            </Link>
          </aside>
        </div>
      </section>

      <Modal
        open={showClearModal}
        title="Clear Cart?"
        onClose={() => setShowClearModal(false)}
      >
        <p className="mb-6 text-slate-600">
          Are you sure you want to remove all products from your cart?
        </p>

        <div className="flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={() => setShowClearModal(false)}
          >
            Cancel
          </Button>

          <Button
            variant="danger"
            onClick={confirmClearCart}
          >
            Clear Cart
          </Button>
        </div>
      </Modal>
    </>
  );
}