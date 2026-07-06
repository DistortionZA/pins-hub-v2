"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/db/client";
import { garments } from "@/db/schema";

function getRequiredText(formData: FormData, key: string) {
  const value = formData.get(key);

  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`${key} is required`);
  }

  return value.trim();
}

function getOptionalText(formData: FormData, key: string) {
  const value = formData.get(key);

  if (typeof value !== "string" || value.trim().length === 0) {
    return null;
  }

  return value.trim();
}

function getOptionalDecimalText(formData: FormData, key: string) {
  const value = formData.get(key);

  if (typeof value !== "string" || value.trim().length === 0) {
    return null;
  }

  const trimmed = value.trim();
  const parsed = Number(trimmed);

  if (!Number.isFinite(parsed) || parsed < 0) {
    throw new Error(`${key} must be a valid positive number`);
  }

  return parsed.toFixed(2);
}

function getRequiredDecimalText(formData: FormData, key: string) {
  const value = getOptionalDecimalText(formData, key);

  if (value === null) {
    throw new Error(`${key} is required`);
  }

  return value;
}

function getTags(formData: FormData) {
  const value = formData.get("tags");

  if (typeof value !== "string" || value.trim().length === 0) {
    return [];
  }

  return value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

export async function createGarment(formData: FormData) {
  await db.insert(garments).values({
    code: getRequiredText(formData, "code"),
    altCode: getOptionalText(formData, "altCode"),
    brandName: getRequiredText(formData, "brandName"),
    name: getRequiredText(formData, "name"),
    color: getRequiredText(formData, "color"),
    type: getRequiredText(formData, "type"),
    basePrice: getRequiredDecimalText(formData, "basePrice"),
    gbpPrice: getOptionalDecimalText(formData, "gbpPrice"),
    extraSizeCost: getOptionalDecimalText(formData, "extraSizeCost"),
    tags: getTags(formData),
  });

  revalidatePath("/");
}