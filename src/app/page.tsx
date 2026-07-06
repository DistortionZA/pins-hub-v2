import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/layout/page-header";
import { GarmentCreateForm } from "@/features/garments/components/garment-create-form";
import { GarmentsTable } from "@/features/garments/components/garments-table";
import { getGarments } from "@/features/garments/queries";
import { AppNav } from "@/components/layout/app-nav";

export default async function Home() {
  const garments = await getGarments();

  return (
    <AppShell>
      <AppNav />
      <PageHeader title="Garments" metaLabel="Records" metaValue={garments.length} />

      <section className="grid gap-4 lg:grid-cols-[420px_1fr]">
        <GarmentCreateForm />
        <GarmentsTable garments={garments} />
      </section>
    </AppShell>
  );
}