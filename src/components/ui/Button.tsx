import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "outline";
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const styles = {
    primary:
      "bg-emerald-600 text-white hover:bg-emerald-700",
    secondary:
      "bg-slate-900 text-white hover:bg-slate-800",
    danger:
      "bg-red-500 text-white hover:bg-red-600",
    outline:
      "border border-emerald-600 text-emerald-700 hover:bg-emerald-50",
  };

  return (
    <button
      className={`rounded-xl px-5 py-2.5 font-semibold transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 ${
        styles[variant]
      } ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}