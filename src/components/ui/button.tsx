import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className = "", type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={[
        "inline-flex h-9 items-center justify-center rounded-md border border-red-500/40 bg-red-600 px-3 text-sm font-semibold text-white",
        "transition hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 disabled:cursor-not-allowed disabled:opacity-60",
        className,
      ].join(" ")}
      {...props}
    />
  );
}