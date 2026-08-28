"use client";

import { CheckCircle2, X } from "lucide-react";

interface ToastProps {
  message: string;
  onClose: () => void;
}

export default function Toast({
  message,
  onClose,
}: ToastProps) {
  if (!message) {
    return null;
  }

  return (
    <div className="toast-animation fixed right-5 top-24 z-[100] flex items-center gap-3 rounded-xl bg-slate-900 px-5 py-4 text-white shadow-2xl">
      <CheckCircle2
        size={22}
        className="text-emerald-400"
      />

      <span className="text-sm font-medium">
        {message}
      </span>

      <button
        onClick={onClose}
        className="ml-2 text-slate-300 transition hover:text-white"
      >
        <X size={18} />
      </button>
    </div>
  );
}