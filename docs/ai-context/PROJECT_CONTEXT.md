# Pins Hub V2 — Project Plan & Context

**Status:** Working V2 planning document  
**Purpose:** Source-of-truth context for planning, Codex prompts, architecture decisions, and future implementation work on Pins Hub V2.  
**Current strategy:** Keep Pins Hub V1 live for the sales team while building a cleaner V2 foundation in parallel.

---

## 1. Executive Summary

Pins Hub V2 is a clean rebuild of the existing Pins Hub internal operations platform.

The current Pins Hub V1 has already proved the business value of the idea: internal quote calculators, garment data, PK Tax support, Quick Reference tools, UK Trade calculator work, commercial invoice planning, and other operational helpers are useful for the team. However, the backend and project structure grew reactively as features were added, and some database tables, hardcoded pricing data, and experimental modules are no longer ideal.

V2 should be treated as a proper internal operations platform with clean foundations:

- Open-source-first stack.
- SQL-friendly database design.
- Auth and roles planned from the start.
- Modular feature structure.
- Business logic separated from UI.
- Warehouse inventory planned as a future core module.
- Integrations planned but not built too early.
- AI intentionally shelved until much later or built separately.
- Current V1 remains live until V2 is ready to replace it safely.

The aim is not to rebuild everything immediately. The aim is to rebuild the base correctly, then migrate proven features over in controlled phases.

---

## 2. Current V1 Position

Pins Hub V1 should be considered a working prototype and active internal tool.

### V1 should remain live for

- Sales team usage.
- Current quote calculators.
- UK Trade Calculator.
- Garment directory where useful.
- PK Tax calculator.
- Quick Reference.
- Existing operational workflows that are already helping the team.

### V1 should only receive

- Small bug fixes.
- Critical updates.
- Minor UI fixes.
- Small calculator corrections when needed.

### V1 should not receive

- Large new architecture changes.
- Major database redesigns.
- Warehouse inventory.
- Client portal.
- AI features.
- Large auth/role work.
- Major integrations.

V2 should be where the platform is rethought properly.

---

## 3. Why V2 Exists

The current project grew naturally from a calculator/garment app into a broader internal operations platform. That created several issues:

- Some tables were created for features that are not yet practical or active.
- Some real calculator data is still hardcoded in project files.
- Some business rules are mixed into UI components.
- Some features are experimental but live in the main schema.
- Future needs such as warehouse inventory, client quote access, integrations, and auth require a cleaner foundation.
- The current code can feel overcomplicated because it was built incrementally and much of the bulk implementation was generated through Codex CLI.

V2 exists to turn the proven prototype into a maintainable platform.

---

## 4. Core Product Direction

Pins Hub V2 should be an internal operations platform for Pins & Knuckles.

It should support:

- Internal quoting.
- Garment and pricing data.
- Calculator profiles.
- Commercial invoice generation.
- PK Tax / finance reporting.
- Quick operational reference.
- Warehouse inventory planning.
- Future client quote tools.
- Future integrations with Monday, NetSuite, and Office 365.

It should not become a marketing site.

Design direction remains:

- Compact.
- Dark.
- Dense.
- Operational.
- Fast to scan.
- Stable layout.
- Minimal whitespace.
- Restrained P&K red accents.
- Built for daily internal staff use.

### Product UI Copy Rules

These rules apply to product UI only. Repo/docs may still use "V2" when discussing the rebuild project, architecture, migration plan, or spike/foundation phases.

- The app UI must refer to the product as "Pins Hub", not "Pins Hub V2".
- Version labels such as "V2" must not appear in product UI.
- Development labels such as "Spike", "Phase 0", "Later", "Coming soon", "MVP", or similar must not appear as UI badges, nav labels, page labels, or card labels.
- Do not add decorative status pills/badges unless they represent a real operational status users need.
- Do not add generic descriptions, subtitles, helper copy, or explanatory text to page headers, cards, nav, or module panels.
- `PageHeader` must not have description, subtitle, or eyebrow props unless explicitly requested later.
- UI copy should be limited to concise headings, labels, actions, counts, operationally meaningful statuses, and required validation/error text.
- Avoid internal/development explanations in the UI. Internal users already know what the tool is for.
- Keep the interface compact, dark, dense, operational, and free of redundant copy.

---

## 5. Stack Decision

### Recommended V2 Stack

```text
Next.js App Router
React
TypeScript
Tailwind CSS
PostgreSQL
Drizzle ORM
Better Auth or Auth.js
Zod
React Hook Form
TanStack Table
Sonner
Docker Compose for local services
```

### Why this stack

The current stack is generally suitable, but Prisma has become a point of confusion. Since SQL knowledge is strong, V2 should move toward a more SQL-shaped setup.

Drizzle is preferred over Prisma for V2 because:

- It is closer to SQL.
- It is more explicit.
- It should be easier to reason about if SQL is already familiar.
- It avoids some of the abstraction confusion caused by Prisma.
- It still gives TypeScript safety.

### Open-source-first rule

Use open-source tools by default.

Paid services are acceptable later when there is a clear reason, such as:

- Reliability.
- Hosting.
- Production uptime.
- Backups.
- Security.
- Time saved.
- Business-critical deployment.

Avoid paid services purely for convenience during early V2 unless the benefit is obvious.

---

## 6. Hosting & Local Development

### Local development

Use Docker where it makes sense.

Recommended local setup:

```text
Next.js runs locally
PostgreSQL runs in Docker
Adminer or pgAdmin runs in Docker
Optional Mailpit later for email testing
```

Do not over-Dockerize the app at the start unless needed. Docker is mainly useful for consistent database and services.

### Future hosting

Hosting can be paid later when the project is ready.

Options to keep viable:

- Vercel + managed PostgreSQL.
- Railway.
- Render.
- Fly.io.
- VPS/Docker hosting.
- Managed Postgres provider.

Avoid designing around a single vendor too early.

The app should stay Docker-compatible and use standard environment variables.

---

## 7. AI Decision

AI should be shelved for now.

Do not build AI, memory layers, chatbots, vector search, or autonomous agents into the V2 foundation.

AI may be added much later as:

- A separate module.
- A separate service.
- A controlled assistant layer.
- A read-only/reporting helper.
- A quote/invoice/reference assistant after the core data and permissions are mature.

For now, V2 should only avoid blocking future AI by keeping:

- Clean structured data.
- Clear permissions.
- Audit logs.
- Quote history.
- Invoice history.
- Stock movement history.
- Well-organized reference data.

No AI write actions should be planned for the main V2 build.

---

## 8. MCP / Agent Tooling Decision

MCP servers may be useful for developer workflow, but they should not become part of the app architecture.

Recommended MCP/tooling areas later:

```text
Filesystem/project MCP
GitHub MCP
Docs/search MCP
Read-only development database MCP
Vercel/deployment MCP later
```

Rules:

- Start read-only where possible.
- Do not give agents production database write access.
- Do not add many MCPs just because they exist.
- MCP should help Codex understand and review the project, not add runtime complexity.
- Use MCP for development assistance, not as app functionality.

---

## 9. Auth and Roles

Auth should be planned from the start in V2.

Even if V2 initially only has internal users, auth affects:

- User accountability.
- Roles.
- Permissions.
- Client-facing quote tools.
- Warehouse access.
- Commercial invoice history.
- Integration logs.
- Audit history.

### Preferred auth options

```text
Better Auth
Auth.js
```

Given the open-source-first preference, do not start with Clerk unless there is a clear reason later.

### Initial roles

Start simple but future-ready.

```text
SUPER_ADMIN
ADMIN
STAFF
SALES
FINANCE
WAREHOUSE
VIEWER
```

### Future client/tour roles

```text
CLIENT_ADMIN
CLIENT_USER
TOUR_MANAGER
MERCH_SELLER
```

### Permission rule

Do not scatter permission checks randomly through UI files.

Centralize permissions in a dedicated layer.

Example:

```text
src/lib/auth/
src/lib/permissions/
```

Permission helpers should answer questions like:

```text
canAccessCalculator(user, profile)
canManageGarments(user)
canViewPkTax(user)
canManageInventory(user)
canViewClientQuotePortal(user)
canManageInvoices(user)
```

---

## 10. Modular Architecture

V2 should be modular by feature domain.

Do not organize everything only by generic component type.

### Recommended structure

```text
src/
  app/
    hub/
      calculators/
      garments/
      invoices/
      inventory/
      pk-tax/
      reference/
      settings/
    client/
      quotes/
    api/

  components/
    ui/
    layout/
    brand/

  features/
    calculators/
      components/
      data/
      logic/
      actions/
      types/
      constants/
    garments/
    invoices/
    inventory/
    pk-tax/
    reference/
    users/
    integrations/

  db/
    schema/
    migrations/
    client.ts

  lib/
    auth/
    permissions/
    validation/
    formatting/
    config/

  server/
    queries/
    actions/

  types/
```

Each feature should own:

- Components.
- Data access.
- Mutations/actions.
- Domain logic.
- Types.
- Constants/config.
- Tests/checks where useful.

---

## 11. Application Layers

V2 should have clear layers.

### 1. Database layer

Owns tables, migrations, constraints, and seed/reference data.

Examples:

```text
Drizzle schema
PostgreSQL migrations
Seed scripts
Database constraints
```

### 2. Data access layer

Owns queries.

Examples:

```text
getGarments()
getCalculatorProfile()
getPrintPriceTiers()
getInventoryMovements()
getUserById()
```

### 3. Domain/business logic layer

Owns calculations and rules.

Examples:

```text
calculateQuote()
calculateVat()
calculateUkTradePrintCost()
calculatePkTaxPool()
calculateStockOnHand()
calculateDeliveryBoxes()
```

This layer is critical. UI should not secretly contain business rules.

### 4. Server actions / mutations layer

Owns writes and server-side validation.

Examples:

```text
createGarment()
updateGarment()
saveInvoice()
receiveStock()
adjustStock()
createQuote()
```

Mutations must:

- Validate input.
- Check permissions.
- Write to the database.
- Revalidate/refresh as needed.
- Return safe errors.

### 5. UI layer

Owns display and interaction.

Examples:

```text
forms
cards
tables
buttons
modals
page layouts
loading states
```

UI may handle local state, but should not be the source of pricing, finance, or inventory truth.

### 6. Integration layer

Owns external system communication.

Examples:

```text
Monday connector
NetSuite connector
Office 365 connector
sync jobs
mappers
sync logs
```

Integrations should not be scattered across feature components.

---

## 12. Core V2 Modules

### Core platform

```text
Auth
Users
Roles
Permissions
Audit logs
Settings
Navigation
Theme/layout
```

### Business data foundation

```text
Clients
Contacts
Addresses
Garments
Product categories
Calculator profiles
Pricing config
Delivery config
```

### Internal tools

```text
EU Calculator
US Clients Calculator
UK Trade Calculator
Future US Trade / client quote option
Garment Directory
Commercial Invoice Generator
PK Tax
Quick Reference
```

### Warehouse inventory

```text
Products
Variants / SKUs
Locations
Stock movements
Stock-on-hand
Receiving
Dispatching
Adjustments
Stocktake later
Movement history
Warehouse reports
```

### Finance/reporting imports

```text
NetSuite PK Tax import
NetSuite profit/order imports
Snuggle order import
Monthly finance period summaries
Account manager performance summaries
```

### Integration layer

```text
Monday
NetSuite
Office 365
```

### Explicitly removed from scope

```text
Wix
AI layer for now
AI memory/chatbot
Client-facing AI
```

---

## 13. Calculator Planning

V2 should have a shared calculator engine with different calculator profiles.

### Current/future profiles

```text
STANDARD_EU
US_CLIENTS
UK_TRADE
US_TRADE_CLIENT / future client quote profile
```

The US Trade or US client-facing quote option should be planned because timezone differences may make self-serve/client quote flows useful later.

### Calculator profile should control

```text
currency
region
markup rules
visible fields
allowed garment types
allowed decoration types
internal vs client-facing mode
copy format
VAT/tax display
setup fees
delivery helper behavior
```

### Internal calculators

Internal calculators may show:

- Production cost.
- Garment cost.
- Print cost.
- Setup cost.
- Markup.
- Internal warnings.
- Full breakdown.

### Client-facing calculators

Client-facing quote tools should hide:

- Production costs.
- Internal margin details.
- Internal pricing logic.
- Sensitive supplier/config details.

They should show:

- Clean quote outputs.
- Allowed product/decoration options.
- Clear incl./excl. VAT wording where applicable.
- Submit/request quote flow later.

### Calculator architecture rule

Do not build a completely separate calculator for every use case.

Use:

```text
Shared calculator engine
+ profile configuration
+ visibility rules
+ route-specific UI
```

---

## 14. Calculator Data Planning

V2 should separate pricing data, calculation logic, UI, and copy output.

### Target calculator data concepts

```text
calculator_profiles
garments
garment_prices
print_price_tiers
decoration_types
decoration_price_rules
setup_fee_rules
size_surcharge_rules
calculator_constants
delivery_rates
box_capacity_rules
```

### Data that should be database/config-backed

- Garments.
- EUR/GBP garment prices.
- Calculator profiles.
- Markup values.
- Print price tiers.
- Setup fees.
- Decoration types.
- Decoration prices once stable.
- Size surcharges.
- Delivery rates.
- Box capacity rules.

### Data that can remain hardcoded/config at first

- UI labels.
- Temporary options.
- Draft feature flags.
- Early-stage assumptions that are still changing.
- PK Tax formulas, if no DB persistence is needed yet.

---

## 15. Workbook-Informed Process Planning

Existing workbook/source files reveal processes that should influence V2.

### PK Tax / NetSuite reporting

The PK Tax workbook/process includes:

- Sales rep.
- Order done by.
- Invoice number.
- Customer.
- Design name.
- Quantity.
- Garment/product description.
- Decoration/design description.
- Amount.
- Profit.
- PK Tax.
- Monthly totals.
- Account manager summaries.

Plan for future finance imports.

Possible future models:

```text
finance_periods
finance_import_runs
finance_order_lines
finance_account_manager_totals
pk_tax_calculations
pk_tax_calculation_lines
```

### Snuggle tracking

Snuggle reporting includes:

- Order/customer.
- Account manager.
- Date needed.
- Postal code.
- Pins total.
- Snuggle total.
- Profit.
- Delivery status.
- Month ordered.
- Completed/open order states.

Possible future models:

```text
snuggle_orders
snuggle_import_runs
snuggle_monthly_summaries
```

### Delivery/logistics

Delivery workbooks include:

- Box capacity guidance.
- Cost per box.
- Country.
- Delivery time.
- Shipping/service assumptions.

Possible future models:

```text
delivery_zones
delivery_rates
box_capacity_rules
shipping_methods
```

### EU calculator process

The EU calculator workbook process includes:

- Quantity tiers.
- Front/back/sleeve/neck decorations.
- Colour counts.
- Garment cost.
- Print cost.
- Extra size costs.
- VAT.
- Screen setup.
- Underbase logic.
- Supplier markup/pricing notes.

This supports moving calculator config into structured data over time.

---

## 16. Warehouse Inventory Planning

Warehouse inventory should be planned as a core future module, not an afterthought.

It should support both:

- Shared warehouse / partner warehouse opportunity.
- Future MerchBuddy/band tour inventory workflows.

### Core inventory principle

Every stock change must create a stock movement.

Do not directly edit stock totals without a ledger entry.

### V1 warehouse scope

```text
Clients
Products
Variants / SKUs
Locations
Stock movements
Stock-on-hand
Receive stock
Dispatch stock
Adjust stock
Movement history
Basic reports
```

### V1.5 warehouse scope

```text
Dispatch orders
Dispatch lines
Box estimate
Delivery method
Destination country
Estimated delivery cost
Estimated delivery time
Tracking reference
Location/bin filtering
Pick/pack workflow
```

### Later warehouse scope

```text
Stocktake mode
Barcode scanning
Reservations
Client stock portal
Warehouse partner access
Courier integrations
Tour stock transfers
Returned stock
Damaged/lost stock handling
```

### Inventory data concepts

```text
clients
products
product_variants
inventory_locations
stock_movements
stock_snapshots
warehouse_orders
warehouse_order_lines
dispatches
dispatch_boxes
```

### Stock movement examples

```text
RECEIVED
TRANSFERRED
DISPATCHED
ADJUSTED
DAMAGED
LOST
FOUND
RETURNED
RESERVED
UNRESERVED
SALE
COUNT_IN
COUNT_OUT
STOCKTAKE_CORRECTION
```

### Inventory safeguards

- Quantity cannot be zero.
- Adjustments require a reason.
- Dispatch requires source location.
- Receive requires destination location.
- Transfer requires source and destination.
- Prevent negative stock by default.
- Do not delete stock movements in normal use.
- Use reversing/correction movements for mistakes.
- Keep client data scoped and separated.
- Track who created each movement.

---

## 17. MerchBuddy / Tour Inventory Planning

MerchBuddy should be treated as a future client-facing product/module, not part of the first V2 foundation.

Best conceptual split:

```text
Pins Hub = internal P&K operations/admin
MerchBuddy Tour = band/tour inventory app
Shared inventory core = products, variants, stock movements, reporting
```

### MerchBuddy Tour later

Future workflows:

```text
Tour
Show
Count-in
Sales
Count-out
Settlement
Tour report
```

Possible future models:

```text
tours
shows
sales
settlements
tour_stock_allocations
```

Do not build this until warehouse/inventory core and auth/roles are stable.

---

## 18. Commercial Invoice Planning

Commercial invoices should become a proper module after the foundation and calculators are clearer.

V2 should plan for:

```text
Saved addresses
Sender/receiver details
Invoice records
Invoice lines
Commodity codes
Country of origin
Duties payable by
Export/copy/PDF later
```

Important business rule from previous work:

- Sender must not silently default.
- Receiver must not silently default.
- Duties Payable By must start blank/unselected.
- Duties Payable By options: Sender, Receiver.
- Show validation if Duties Payable By is missing.
- Saved addresses may auto-populate details after active selection.

Possible models:

```text
address_book_entries
commercial_invoices
commercial_invoice_lines
commodity_codes
```

---

## 19. PK Tax Planning

PK Tax is sensitive business logic.

Do not alter payout weights, Johan handling, Shannon handling, factory invoice math, GBP/ZAR conversion, or copy outputs unless explicitly requested.

### Current business concept

The PK Tax system uses a pooled bonus model.

Important concepts include:

- Sales team PK Tax pool.
- Snuggle profit contribution.
- Weighted allocation.
- Company profit.
- Snuggle profit.
- PK Tax.
- Orders handled.
- Johan separate handling.
- Shannon contribution/exclusion handling.
- Factory invoice formulas.

### V2 approach

Start with manual calculator parity.

Later:

```text
NetSuite import
Snuggle import
Finance period records
Saved monthly PK Tax calculations
Reports/exports
```

---

## 20. Quick Reference Planning

Quick Reference should remain simple at first.

V2 should support:

- Static operational reference.
- Supplier/logistics emails.
- Saved custom messages if useful.
- Copy buttons.
- Search/filter.
- Possibly database-backed shared messages later.

Do not overbuild this early.

---

## 21. Integration Planning

V2 should be integration-ready, not integration-heavy.

Integrations should be added only after the internal data model is solid.

### Integrations in scope

```text
Monday
NetSuite
Office 365
```

### Integrations out of scope

```text
Wix
AI memory/chatbot
AI agents
```

### Integration architecture

Use a connector layer:

```text
integrations/
  monday/
  netsuite/
  microsoft/
  common/
```

Each integration should have:

```text
Connector
Mapper
Sync job
Sync log
Manual review queue where needed
```

### Integration principles

1. Internal model first.
2. Store external IDs.
3. Keep sync logs.
4. Prefer manual import/export first.
5. Prefer read-only sync before write sync.
6. Require review before risky writes.
7. Avoid two-way automation until the workflow is proven.
8. Never make external APIs required for every page load.

### Future integration models

```text
integration_connections
integration_external_refs
integration_sync_runs
integration_sync_events
integration_webhook_events
```

---

## 22. Monday Integration Planning

Purpose:

```text
Job/order workflow visibility
Production status
Team task tracking
Possible job/item creation later
```

Best first version:

```text
Read-only sync from selected Monday boards
Map Monday items to internal job/order references
Display linked status inside Pins Hub
```

Do not start with write-back automation.

---

## 23. NetSuite Integration Planning

Purpose:

```text
PK Tax reports
Profit reports
Order snapshots
Invoice/order line reporting
Customer/item data later
```

NetSuite should likely remain the finance/accounting source of truth.

Best first version:

```text
Manual file import or read-only NetSuite report import
Use imported data to prefill/validate PK Tax and reporting screens
Require human review before saving calculations
```

Avoid two-way sync or financial posting early.

---

## 24. Office 365 Integration Planning

Purpose:

```text
Outlook drafts
Shared mailbox workflows
Calendar/reminders
OneDrive/SharePoint report storage
Supplier/client contact lookup
```

Best first version:

```text
Generate copy-ready email content manually
Later create Outlook drafts via Microsoft Graph
Human reviews and sends
```

Do not auto-send emails early.

---

## 25. Data Ownership Rules

Before building any integration or data sync, answer:

```text
What exact data do we need?
Which system is source of truth?
Is sync one-way or two-way?
How often does it sync?
What happens if records do not match?
Who reviews/approves changes?
What external ID do we store?
What logs do we keep?
What permissions/scopes are needed?
Can we safely turn it off?
```

Source-of-truth assumptions for now:

```text
Pins Hub V2 owns internal calculator config, quotes, invoices, internal reference, inventory ledger.
NetSuite owns official finance/accounting data.
Monday owns team task/status workflow unless later replaced.
Office 365 owns email/calendar/mailbox data.
```

---

## 26. Development Workflow Rules

The user prefers focused, staged implementation.

### General workflow

For larger work:

```text
1. Plan first.
2. Ask Codex to analyze before editing.
3. Ask Codex to produce a staged plan.
4. Implement one stage at a time.
5. Verify after each stage.
6. Update project context.
```

### Codex prompting rules

- Codex prompts should be one copyable block.
- For large tasks, split prompts into labelled stages.
- Ask for read-only analysis first when uncertain.
- Tell Codex explicitly when not to edit files.
- Tell Codex what files are in scope.
- Tell Codex what must not change.
- Tell Codex to run verification checks.
- Avoid huge all-in-one prompts for big architecture work.

### Troubleshooting preference

For troubleshooting/setup replies:

- Keep to around 3 steps at a time.
- Put related terminal commands in one safe copyable block where possible.
- Prefer concise checklist style.

---

## 27. Recommended AI/Codex Skills and Playbooks

These are working playbooks to use with Codex/AI assistants.

### 1. Project Context Reviewer

Purpose:

```text
Check that proposed changes follow Pins Hub V2 context, module boundaries, stack choices, and no-go rules.
```

Use before large tasks.

### 2. Database / Drizzle Reviewer

Purpose:

```text
Review schema and migration plans for clear SQL design, clean relationships, correct constraints, and no premature tables.
```

Checks:

- Is this table needed now?
- Is it for a real workflow?
- Are foreign keys clear?
- Is naming consistent?
- Are nullable fields intentional?
- Are external IDs separated?
- Is audit/history required?

### 3. Calculator Safety Checker

Purpose:

```text
Review calculator changes and ensure pricing, VAT, markup, setup fees, copy output, and internal/client visibility do not change unintentionally.
```

Checks:

- Are totals unchanged unless requested?
- Are incl./excl. VAT labels correct?
- Are production costs hidden from client-facing views?
- Are copy outputs clean?
- Are hardcoded constants documented?
- Are profile differences preserved?

### 4. UI Consistency Reviewer

Purpose:

```text
Check that UI follows compact, dark, operational Pins Hub style.
```

Checks:

- Dense layout.
- Stable cards.
- Minimal whitespace.
- Shared UI primitives.
- No marketing-style hero/gradient/orb design.
- Consistent buttons/inputs/panels.
- Good loading/empty states.
- Product UI says "Pins Hub", not "Pins Hub V2".
- No version, spike, phase, "coming soon", "later", "MVP", or similar development labels in product UI.
- No decorative badges/pills unless they communicate real operational status.
- No generic page header/card/nav/helper descriptions unless explicitly requested.
- `PageHeader` has no description, subtitle, or eyebrow props unless explicitly requested.
- UI copy stays limited to concise headings, labels, actions, counts, operational statuses, and required validation/errors.

### 5. Auth / Permission Boundary Checker

Purpose:

```text
Review routes/actions/components for correct role and permission boundaries.
```

Checks:

- Protected routes.
- Centralized permission helpers.
- Server-side permission checks.
- Client data scoping.
- No sensitive data exposed to wrong roles.

### 6. Inventory Ledger Checker

Purpose:

```text
Review stock-related changes and confirm every stock change creates a stock movement.
```

Checks:

- No direct stock edits without movement.
- Adjustments require reason.
- Negative stock blocked by default.
- Client/location scoping enforced.
- Audit trail exists.
- Reversal/correction pattern used.

### 7. Integration Safety Checker

Purpose:

```text
Review integration plans/code for safe sync, source-of-truth clarity, external ID mapping, and logs.
```

Checks:

- Read-only first where possible.
- Sync logs.
- External refs.
- Manual review for risky writes.
- No external API required for core page load.
- Can safely disable integration.

### 8. PK Tax Formula Preservation Checker

Purpose:

```text
Ensure PK Tax formula changes do not alter sensitive business logic unless explicitly requested.
```

Checks:

- Pool rules.
- Weightings.
- Johan handling.
- Shannon handling.
- Factory invoice formula.
- GBP/ZAR conversion.
- Copy outputs.

### 9. Commercial Invoice Validation Checker

Purpose:

```text
Review invoice flows for required fields, defaults, commodity codes, duties payable by, and saved address behavior.
```

Checks:

- No silent sender/receiver defaults.
- Duties Payable By starts blank.
- Duties Payable By required.
- Saved addresses populate only after selection.
- Line totals and commodity info validated.

### 10. Deployment / Release Checker

Purpose:

```text
Verify the app is safe to deploy and no secrets/destructive operations are included.
```

Checks:

- Lint passes.
- TypeScript passes.
- Build passes.
- Migrations reviewed.
- No secrets.
- No production seed/destructive commands.
- V1 remains live until V2 is approved.

---

## 28. V2 Build Phases

### Phase 0 — V2 Spike

Goal: Confirm stack feels right before committing.

Build only:

```text
Next.js
Tailwind
Docker Postgres
Drizzle connection
One table: garments
One page: list garments
One action: add garment
Optional Better Auth test login
```

Decision point:

```text
Does Drizzle + Docker + Next feel better than the current Prisma setup?
```

### Phase 1 — Foundation

```text
Project setup
Docker Compose
PostgreSQL
Drizzle
Environment structure
Layout shell
Theme
Navigation
Auth
Users
Roles
Permissions
Audit basics
```

### Phase 2 — Business Data Foundation

```text
Clients
Contacts
Addresses
Garments
Calculator profiles
Pricing config
Delivery config
Admin screens
Seed/reference data
```

### Phase 3 — Calculator Engine

```text
Shared calculator engine
EU Standard
US Clients
UK Trade
Future US Trade/client quote profile
Quote copy formatting
Internal/client visibility rules
Calculator parity checks against V1
```

### Phase 4 — Core Operational Tools

```text
Garment Directory
Quick Reference
Commercial Invoice Generator
PK Tax calculator parity
```

### Phase 5 — Finance / Workbook-Informed Imports

```text
Manual NetSuite file import structure
Manual Snuggle import structure
Monthly finance periods
PK Tax saved calculation planning
Import validation
```

### Phase 6 — Warehouse Inventory Core

```text
Products
Variants/SKUs
Locations
Stock movement ledger
Stock-on-hand
Receive stock
Dispatch stock
Adjust stock
Movement history
Delivery/box estimate support
```

### Phase 7 — Integration Foundation

```text
Integration connections
External refs
Sync runs
Sync events
Webhook event logs
Manual review queue pattern
```

### Phase 8 — First Real Integration

Choose one only:

```text
Office 365 draft helper
Monday read-only board sync
NetSuite read-only report import
```

### Phase 9 — Client-Facing Tools Later

```text
Client quote portal
US Trade client quote option
Client stock portal
MerchBuddy Tour
```

---

## 29. Suggested Timeline

This timeline assumes no hard deadlines and a careful rebuild.

```text
V2 spike:                         2–4 days
Foundation:                       1–2 weeks
Business data foundation:          1–2 weeks
Calculator rebuild/parity:         2–3 weeks
Operational tools parity:          2–4 weeks
Warehouse inventory core:          3–6 weeks
Integration foundation:            1–3 weeks
First integration:                 1–4 weeks depending on provider
```

Realistic replacement target:

```text
V2 useful foundation:              2–3 weeks
V2 core calculator ready:           4–6 weeks
V2 ready to replace V1:             6–10 weeks
Broader platform/inventory:         10–16+ weeks
```

---

## 30. No-Go Rules

Do not:

- Rebuild every idea at once.
- Add inventory before the V2 foundation is stable.
- Add AI to the main app now.
- Add Wix back into scope.
- Add integrations before internal models are clean.
- Give AI or MCP tools production write access.
- Change pricing, VAT, PK Tax, referral, loyalty, or stock logic unintentionally.
- Put secrets, env values, production data, or credentials into code/docs/prompts.
- Run destructive seed or migration commands against production/shared databases.
- Add tables for vague future ideas.
- Build client-facing tools before auth/permissions are solid.
- Make external APIs required for normal app page loads.

---

## 31. Decision Rules for New Tables

Before adding a table, ask:

```text
Is this for a current real workflow?
Is it needed in the database now?
Will users create/edit this data?
Does it need history/audit/reporting?
Does it need permissions/client scoping?
Is it only a future idea?
```

If it is only a future idea, keep it in docs/backlog, not the schema.

---

## 32. Decision Rules for Moving Data to DB

Move data to DB/config if:

- Staff may need to manage it.
- It changes over time.
- It affects reporting.
- It is business-critical pricing/config.
- It needs permissions.
- It needs audit/history.
- It is used by multiple modules.

Keep data in code/config if:

- It is temporary.
- It is purely UI copy.
- It is still being tested.
- It is unlikely to be edited by staff.
- It would overcomplicate the first version.

---

## 33. Source-of-Truth Rules

Pins Hub V2 should own:

```text
Calculator configuration
Garment/pricing data used by calculators
Internal quote history
Commercial invoice drafts/records
Quick Reference content where database-backed
Warehouse stock ledger
Inventory reports
Internal user roles/permissions
Integration sync logs
```

NetSuite should own:

```text
Official finance/accounting records
Official financial reports
Official order/invoice accounting data
```

Monday should own:

```text
Team task/status workflow until replaced
Production/job board workflow if still used there
```

Office 365 should own:

```text
Email
Calendar
Shared mailbox data
OneDrive/SharePoint documents unless imported
```

---

## 34. V2 Success Criteria

V2 is successful when:

- The codebase is easier to explain.
- The DB schema maps to real workflows.
- Calculators match V1 outputs.
- Business logic is separated from UI.
- Auth and roles are built into the foundation.
- Future inventory has a clear path.
- Future integrations have a safe connector pattern.
- V1 can remain live until V2 is verified.
- Sales team can move over without losing functionality.
- New features can be added without making the architecture messy again.

---

## 35. First Practical Next Steps

1. Create a V2 spike repo or branch.
2. Set up Next.js + Tailwind + TypeScript.
3. Add Docker Compose with Postgres and Adminer/pgAdmin.
4. Add Drizzle.
5. Create a tiny garment table.
6. Build one list/create page.
7. Test whether the stack feels right.
8. Decide Better Auth vs Auth.js after a small auth proof-of-concept.
9. Create the real V2 foundation plan from the spike results.
10. Keep V1 live and untouched except for small fixes.

---

## 36. Preferred Codex Prompt Pattern

Use this pattern for V2 tasks:

```text
You are working on Pins Hub V2.

Read the project context first.
Do not make broad architecture changes.
Do not add features outside this task.
Do not change business logic unless explicitly requested.

Task:
[clear task]

Scope:
[files/areas allowed]

Do not touch:
[protected areas]

Requirements:
[acceptance criteria]

Verification:
Run lint, TypeScript check, and relevant build/test commands.
Summarize changed files and any risks.
```

For risky tasks, first ask Codex:

```text
Analyze only. Do not edit files.
```

---

## 37. Current Recommended V2 Position

The best possible approach going forward is:

```text
Keep Pins Hub V1 live.
Build Pins Hub V2 cleanly in parallel.
Use Next.js + TypeScript + Tailwind + PostgreSQL + Drizzle + open-source auth.
Use Docker for local database/services.
Plan auth, roles, modules, warehouse inventory, and integrations from the start.
Shelf AI until much later.
Drop Wix completely.
Move features over only after V2 is proven and verified.
```

This gives Pins Hub a cleaner base for calculators, operations, warehouse inventory, and future integrations without losing the value already delivered by V1.
