const navItems = [
  {
    label: "Garments",
    href: "/",
  },
  {
    label: "Calculators",
    href: "#",
  },
  {
    label: "Commercial Invoice",
    href: "#",
  },
  {
    label: "PK Tax",
    href: "#",
  },
];

export function AppNav() {
  return (
    <nav className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-3 shadow-sm shadow-black/30">
      <div className="mb-3 border-b border-zinc-900 pb-3">
        <p className="text-sm font-semibold text-zinc-100">Pins Hub</p>
      </div>

      <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            aria-disabled={item.href === "#"}
            className="rounded-lg border border-zinc-900 bg-zinc-900/60 px-3 py-2 text-sm text-zinc-300 transition hover:border-zinc-700 hover:bg-zinc-900"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}