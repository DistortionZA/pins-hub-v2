import type { HTMLAttributes, ReactNode } from "react";

type PanelProps = HTMLAttributes<HTMLDivElement> & {
  title?: string;
  eyebrow?: string;
  children: ReactNode;
};

export function Panel({ className = "", title, eyebrow, children, ...props }: PanelProps) {
  return (
    <section
      className={[
        "rounded-xl border border-zinc-800 bg-zinc-950/80 p-4 shadow-sm shadow-black/30",
        className,
      ].join(" ")}
      {...props}
    >
      {(eyebrow || title) && (
        <div className="mb-4 border-b border-zinc-900 pb-3">
          {eyebrow && (
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-400">
              {eyebrow}
            </p>
          )}
          {title && <h2 className="mt-1 text-base font-semibold text-zinc-100">{title}</h2>}
        </div>
      )}

      {children}
    </section>
  );
}