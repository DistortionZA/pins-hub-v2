CREATE TABLE "garments" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"code" text NOT NULL,
	"alt_code" text,
	"brand_name" text NOT NULL,
	"name" text NOT NULL,
	"color" text NOT NULL,
	"type" text NOT NULL,
	"base_price" numeric(10, 2) NOT NULL,
	"gbp_price" numeric(10, 2),
	"extra_size_cost" numeric(10, 2),
	"tags" text[] DEFAULT '{}' NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
