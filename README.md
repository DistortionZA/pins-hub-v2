# Pins Hub V2

Pins Hub V2 is a clean rebuild of the internal Pins & Knuckles operations platform. It is being built in a separate repo while Pins Hub V1 stays live for the sales team and existing operational workflows.

V2 is currently in the post-spike foundation stage. The goal is to keep the base small, explicit, and easy to reason about before moving proven V1 features across.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- PostgreSQL
- Drizzle ORM
- Docker Compose for local database services
- Adminer for local database inspection

## Local Setup

Copy the local environment example:

```bash
cp .env.example .env
```

Start the local database services:

```bash
docker compose up -d
```

Run database migrations:

```bash
npm run db:migrate
```

Start the Next.js app locally:

```bash
npm run dev
```

Useful checks:

```bash
npm run lint
npm run build
```

## Docker Services

`docker-compose.yml` currently starts:

- PostgreSQL on local port `55432`
- Adminer on local port `8080`

The Next.js app is not Dockerized during local development. It runs through `npm run dev`.

## Drizzle Commands

Generate migrations after schema changes:

```bash
npm run db:generate
```

Apply migrations to the configured database:

```bash
npm run db:migrate
```

Open Drizzle Studio:

```bash
npm run db:studio
```

Review generated SQL before applying migrations. Do not add database tables for future ideas until there is a current workflow that needs them.

## Secrets

Do not commit `.env`, production database URLs, credentials, API keys, or other secrets. `.env.example` should contain local placeholder values only.

## Current Spike Scope

Phase 0 confirmed the basic V2 stack with:

- Docker PostgreSQL
- Adminer
- Drizzle configuration and migrations
- One V1-informed `garments` table
- Garment query and create server action
- Shared UI primitives
- A compact garment list/create page

Out of scope for the current foundation cleanup: auth, permissions, calculators, inventory, integrations, PK Tax, Commercial Invoice, AI, client portal, and Wix.
