# Pins Hub V2 Spike Review

## Spike Goal

Confirm whether the proposed V2 stack feels suitable before committing to the full rebuild.

Tested stack:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Docker Compose
- Local PostgreSQL
- Adminer
- Drizzle ORM

## What Was Built

- Local Docker PostgreSQL service.
- Local Adminer service.
- Drizzle config and database client.
- One V1-informed `garments` table.
- One garment query function.
- One garment create server action.
- Shared UI primitives.
- Compact garment create form.
- Compact garment table.
- Home page wired to list and create garments.

## Confirmed Decisions

- V1 remains live and untouched.
- V2 is a separate repo.
- Docker is used for local services only, not for running the app.
- Next.js runs locally through `npm run dev`.
- Drizzle is being tested as the Prisma replacement.
- The first schema was corrected to avoid generic fields like `sku`, `supplier`, and `category`.
- The garment table now follows the V1-informed shape.

## Current Garment Table Fields

- `id`
- `code`
- `alt_code`
- `brand_name`
- `name`
- `color`
- `type`
- `base_price`
- `gbp_price`
- `extra_size_cost`
- `tags`
- `is_active`
- `created_at`
- `updated_at`

## What Felt Good

- Docker keeps the local database isolated and repeatable.
- Drizzle schema feels close to SQL and easy to inspect.
- Manual migration verification helped catch schema drift early.
- The feature folder structure kept query/action/UI code separated.
- Small shared UI primitives should reduce duplicated component code.

## What Needs Care

- Do not let Codex invent generic business fields.
- Review schemas before generating migrations.
- Verify generated SQL before running migrations.
- Avoid building too many components before shared UI primitives exist.
- Keep future-only ideas in docs/backlog, not the database.

## Not Built In Spike

- Auth
- Roles
- Permissions
- Calculators
- Inventory
- Commercial Invoice
- PK Tax
- Integrations
- AI
- Client portal
- MerchBuddy connection

## Recommendation

The spike is successful enough to proceed toward Phase 1 foundation planning.

Before Phase 1 implementation, decide:

1. Whether to keep Drizzle.
2. Whether the current folder structure feels understandable.
3. Whether the shared UI primitive approach is enough.
4. Whether auth should be Better Auth or Auth.js.
5. Whether garment data should be imported from V1 later or manually seeded first.