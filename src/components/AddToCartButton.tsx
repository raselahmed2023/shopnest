"use client";

import { ShoppingCart } from "lucide-react";

import type { Product } from "@/types";
import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({
  product,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <Button
      onClick={() => addToCart(product)}
      className="flex items-center gap-2 px-7 py-3"
    >
      <ShoppingCart size={20} />
      Add to Cart
    </Button>
  );
}