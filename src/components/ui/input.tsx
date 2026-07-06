import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input({ className = "", label, id, name, ...props }: InputProps) {
  const inputId = id ?? name;

  return (
    <label className="grid gap-1 text-xs font-medium uppercase tracking-wide text-zinc-400">
      <span>{label}</span>
      <input
        id={inputId}
        name={name}
        className={[
          "h-9 rounded-md border border-zinc-800 bg-zinc-950 px-3 text-sm text-zinc-100",
          "outline-none transition placeholder:text-zinc-600 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/20",
          className,
        ].join(" ")}
        {...props}
      />
    </label>
  );
}