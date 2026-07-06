import { GarmentCreateForm } from "@/features/garments/components/garment-create-form";
import { GarmentsTable } from "@/features/garments/components/garments-table";
import { getGarments } from "@/features/garments/queries";

export default async function Home() {
  const garments = await getGarments();

  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-4 text-zinc-100 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4">
        <header className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 shadow-sm shadow-black/30">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-red-400">
            Pins Hub V2 Spike
          </p>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-zinc-50">
                Garment Foundation
              </h1>
              <p className="mt-1 max-w-2xl text-sm text-zinc-400">
                Minimal Drizzle + PostgreSQL proof of concept using the V1-informed garment shape.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-right">
              <p className="text-[11px] uppercase tracking-wide text-zinc-500">Records</p>
              <p className="text-lg font-semibold text-zinc-100">{garments.length}</p>
            </div>
          </div>
        </header>

        <section className="grid gap-4 lg:grid-cols-[420px_1fr]">
          <GarmentCreateForm />
          <GarmentsTable garments={garments} />
        </section>
      </div>
    </main>
  );
}