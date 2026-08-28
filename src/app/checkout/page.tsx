"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const {
    cart,
    total,
    clearCart,
  } = useCart();

  const [orderPlaced, setOrderPlaced] =
    useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <section className="page-animation mx-auto max-w-3xl px-4 py-20">
        <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
          <CheckCircle2
            size={70}
            className="mx-auto text-emerald-600"
          />

          <h1 className="mt-6 text-3xl font-black">
            Order Placed Successfully!
          </h1>

          <p className="mt-3 text-slate-500">
            Thank you for shopping with ShopNest.
          </p>

          <Link
            href="/"
            className="mt-8 inline-block rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white transition hover:bg-emerald-700"
          >
            Back to Shopping
          </Link>
        </div>
      </section>
    );
  }

  if (cart.length === 0) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <div className="rounded-3xl bg-white p-10 shadow-sm">
          <h1 className="text-3xl font-black">
            No items to checkout
          </h1>

          <p className="mt-3 text-slate-500">
            Add some products to your cart first.
          </p>

          <Link
            href="/"
            className="mt-7 inline-block rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white"
          >
            Browse Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-animation mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="mb-2 font-bold text-emerald-600">
          CHECKOUT
        </p>

        <h1 className="text-3xl font-black sm:text-4xl">
          Complete Your Order
        </h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-6 shadow-sm sm:p-8"
        >
          <h2 className="mb-6 text-2xl font-black">
            Customer Information
          </h2>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-bold">
                Full Name
              </label>

              <input
                required
                type="text"
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">
                Email
              </label>

              <input
                required
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">
                Phone
              </label>

              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
                placeholder="+880..."
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">
                City
              </label>

              <input
                required
                type="text"
                value={form.city}
                onChange={(e) =>
                  setForm({
                    ...form,
                    city: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
                placeholder="Your city"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-bold">
                Delivery Address
              </label>

              <textarea
                required
                rows={4}
                value={form.address}
                onChange={(e) =>
                  setForm({
                    ...form,
                    address: e.target.value,
                  })
                }
                className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
                placeholder="Enter your complete address"
              />
            </div>
          </div>

          <Button
            type="submit"
            fullWidth
            className="mt-7 py-3"
          >
            Place Order
          </Button>
        </form>

        <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black">
            Checkout Summary
          </h2>

          <div className="mt-6 space-y-5">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-slate-50 p-2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={55}
                    height={55}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="line-clamp-2 text-sm font-bold">
                    {item.title}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Qty: {item.quantity}
                  </p>
                </div>

                <p className="text-sm font-bold">
                  $
                  {(
                    item.price *
                    item.quantity
                  ).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-slate-200 pt-5">
            <div className="flex justify-between text-slate-500">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="mt-3 flex justify-between text-xl font-black">
              <span>Total</span>
              <span>
                ${total.toFixed(2)}
              </span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}