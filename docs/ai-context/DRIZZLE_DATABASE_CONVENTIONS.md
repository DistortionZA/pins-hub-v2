# Drizzle Database Conventions

## Purpose

This file defines practical database rules for Pins Hub V2 so schema changes stay intentional, reviewable, and tied to real workflows.

## Core Rules

- Do not add tables for vague future ideas.
- Do not let Codex invent generic fields.
- Every table must support a current or clearly approved workflow.
- Review generated SQL before running migrations.
- Do not run migrations against production/shared databases during local development.
- Do not commit secrets, database URLs, or `.env` files.

## Schema Files

- Database schema files live in `src/db/schema/`.
- Each table should have its own file where practical.
- `src/db/schema/index.ts` exports all schema files.

Example:

```ts
export * from "./garments";
Table Naming
Use plural snake_case table names in the database.
Use camelCase property names in TypeScript.

Example:

brandName: text("brand_name").notNull()
IDs
Use UUID primary keys by default.
Use defaultRandom() for local generated IDs.
Timestamps

All main business tables should usually include:

created_at
updated_at

Current convention:

created_at defaults to now.
updated_at defaults to now.
Before adding update actions, decide how updated_at will be maintained.
Nullable Fields
Nullable fields must be intentional.
Required workflow fields should use .notNull().
Optional fields should only be nullable if blank/unknown values are valid.
Money / Decimal Values
Use numeric(10, 2) for price and money values.
Treat Drizzle numeric values carefully because they may come back as strings.
Do not use floating point database types for money.
Migrations

Migration workflow:

Update schema intentionally.
Generate migration.
Read the generated SQL.
Confirm there are no accidental columns/tables.
Apply migration locally.
Verify table structure.
Commit schema and migration together.
New Table Checklist

Before adding a table, ask:

Is this needed for a current workflow?
Will users create or edit this data?
Does it need reporting or history?
Does it need permissions or client scoping?
Is this only a future idea?

If it is only a future idea, keep it in planning docs, not the database.

Current Notes
The garments table is a Phase 0 proof table based on the V1 garment shape.
Do not expand garments into a full management module until the V2 foundation is stable.
garments.code may become unique later, but do not change it yet unless the workflow requires it.

## Commit message

```bash
git add docs/ai-context/DRIZZLE_DATABASE_CONVENTIONS.md
git commit -m "Add Drizzle database conventions for V2"
git push