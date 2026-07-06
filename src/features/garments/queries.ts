import { asc } from "drizzle-orm";

import { db } from "@/db/client";
import { garments } from "@/db/schema";

export async function getGarments() {
  return db
    .select()
    .from(garments)
    .orderBy(asc(garments.brandName), asc(garments.name), asc(garments.color));
}