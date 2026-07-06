import { createGarment } from "@/features/garments/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Panel } from "@/components/ui/panel";

export function GarmentCreateForm() {
  return (
    <Panel eyebrow="Garments" title="Create garment">
      <form action={createGarment} className="grid gap-3">
        <div className="grid gap-3 md:grid-cols-4">
          <Input label="Code" name="code" required />
          <Input label="Alt code" name="altCode" />
          <Input label="Brand" name="brandName" required />
          <Input label="Name" name="name" required />
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          <Input label="Color" name="color" required />
          <Input label="Type" name="type" required />
          <Input label="Tags" name="tags" placeholder="tee, cotton, core" />
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          <Input
            label="EUR price"
            name="basePrice"
            required
            inputMode="decimal"
            min="0"
            step="0.01"
            type="number"
          />
          <Input
            label="GBP price"
            name="gbpPrice"
            inputMode="decimal"
            min="0"
            step="0.01"
            type="number"
          />
          <Input
            label="Extra size cost"
            name="extraSizeCost"
            inputMode="decimal"
            min="0"
            step="0.01"
            type="number"
          />
        </div>

        <div className="flex justify-end border-t border-zinc-900 pt-3">
          <Button type="submit">Create garment</Button>
        </div>
      </form>
    </Panel>
  );
}
