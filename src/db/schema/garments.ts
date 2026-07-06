import {
  boolean,
  numeric,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const garments = pgTable("garments", {
  id: uuid("id").defaultRandom().primaryKey(),

  code: text("code").notNull(),
  altCode: text("alt_code"),
  brandName: text("brand_name").notNull(),
  name: text("name").notNull(),
  color: text("color").notNull(),
  type: text("type").notNull(),

  basePrice: numeric("base_price", {
    precision: 10,
    scale: 2,
  }).notNull(),

  gbpPrice: numeric("gbp_price", {
    precision: 10,
    scale: 2,
  }),

  extraSizeCost: numeric("extra_size_cost", {
    precision: 10,
    scale: 2,
  }),

  tags: text("tags").array().notNull().default([]),

  isActive: boolean("is_active").notNull().default(true),

  createdAt: timestamp("created_at", {
    withTimezone: true,
  })
    .notNull()
    .defaultNow(),

  updatedAt: timestamp("updated_at", {
    withTimezone: true,
  })
    .notNull()
    .defaultNow(),
});