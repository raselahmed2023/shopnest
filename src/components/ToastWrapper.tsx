"use client";

import Toast from "@/components/ui/Toast";
import { useCart } from "@/context/CartContext";

export default function ToastWrapper() {
  const {
    toastMessage,
    hideToast,
  } = useCart();

  return (
    <Toast
      message={toastMessage}
      onClose={hideToast}
    />
  );
}