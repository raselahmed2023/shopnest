import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToastWrapper from "@/components/ToastWrapper";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "ShopNest | E-Commerce Storefront",
  description:
    "A modern responsive e-commerce storefront built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />

          <main className="min-h-screen">
            {children}
          </main>

          <Footer />

          <ToastWrapper />
        </CartProvider>
      </body>
    </html>
  );
}