import { garments as garmentsTable } from "@/db/schema";
import { Panel } from "@/components/ui/panel";

type Garment = typeof garmentsTable.$inferSelect;

type GarmentsTableProps = {
  garments: Garment[];
};

function formatPrice(value: string | null, currency: "EUR" | "GBP") {
  if (value === null) return "—";

  return new Intl.NumberFormat("en", {
    currency,
    style: "currency",
  }).format(Number(value));
}

export function GarmentsTable({ garments }: GarmentsTableProps) {
  return (
    <Panel eyebrow="Garments" title="Garments">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[860px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-zinc-900 text-[11px] uppercase tracking-wide text-zinc-500">
              <th className="px-2 py-2 font-semibold">Code</th>
              <th className="px-2 py-2 font-semibold">Brand</th>
              <th className="px-2 py-2 font-semibold">Name</th>
              <th className="px-2 py-2 font-semibold">Color</th>
              <th className="px-2 py-2 font-semibold">Type</th>
              <th className="px-2 py-2 text-right font-semibold">EUR</th>
              <th className="px-2 py-2 text-right font-semibold">GBP</th>
              <th className="px-2 py-2 font-semibold">Tags</th>
              <th className="px-2 py-2 font-semibold">Active</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-900">
            {garments.map((garment) => (
              <tr key={garment.id} className="text-zinc-300">
                <td className="whitespace-nowrap px-2 py-2 font-mono text-xs text-zinc-100">
                  {garment.code}
                </td>
                <td className="whitespace-nowrap px-2 py-2">{garment.brandName}</td>
                <td className="px-2 py-2 text-zinc-100">{garment.name}</td>
                <td className="whitespace-nowrap px-2 py-2">{garment.color}</td>
                <td className="whitespace-nowrap px-2 py-2">{garment.type}</td>
                <td className="whitespace-nowrap px-2 py-2 text-right tabular-nums">
                  {formatPrice(garment.basePrice, "EUR")}
                </td>
                <td className="whitespace-nowrap px-2 py-2 text-right tabular-nums">
                  {formatPrice(garment.gbpPrice, "GBP")}
                </td>
                <td className="px-2 py-2 text-xs text-zinc-400">
                  {garment.tags.length > 0 ? garment.tags.join(", ") : "—"}
                </td>
                <td className="whitespace-nowrap px-2 py-2">
                  <span
                    className={[
                      "inline-flex rounded-sm px-2 py-0.5 text-[11px] font-semibold uppercase",
                      garment.isActive
                        ? "bg-emerald-500/10 text-emerald-300"
                        : "bg-zinc-800 text-zinc-500",
                    ].join(" ")}
                  >
                    {garment.isActive ? "Active" : "Inactive"}
                  </span>
                </td>
              </tr>
            ))}
            {garments.length === 0 && (
              <tr>
                <td className="px-2 py-6 text-center text-sm text-zinc-500" colSpan={9}>
                  No garments yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}
