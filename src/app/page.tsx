import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/layout/page-header";
import { GarmentCreateForm } from "@/features/garments/components/garment-create-form";
import { GarmentsTable } from "@/features/garments/components/garments-table";
import { getGarments } from "@/features/garments/queries";

export default async function Home() {
  const garments = await getGarments();

  return (
    <AppShell>
      <PageHeader
        eyebrow="Pins Hub V2 Spike"
        title="Garment Foundation"
        description="Minimal Drizzle + PostgreSQL proof of concept using the V1-informed garment shape."
        metaLabel="Records"
        metaValue={garments.length}
      />

      <section className="grid gap-4 lg:grid-cols-[420px_1fr]">
        <GarmentCreateForm />
        <GarmentsTable garments={garments} />
      </section>
    </AppShell>
  );
}