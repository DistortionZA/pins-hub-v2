type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  metaLabel?: string;
  metaValue?: string | number;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  metaLabel,
  metaValue,
}: PageHeaderProps) {
  return (
    <header className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 shadow-sm shadow-black/30">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-red-400">
        {eyebrow}
      </p>

      <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-50">{title}</h1>

          {description && <p className="mt-1 max-w-2xl text-sm text-zinc-400">{description}</p>}
        </div>

        {metaLabel && metaValue !== undefined && (
          <div className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-right">
            <p className="text-[11px] uppercase tracking-wide text-zinc-500">{metaLabel}</p>
            <p className="text-lg font-semibold text-zinc-100">{metaValue}</p>
          </div>
        )}
      </div>
    </header>
  );
}