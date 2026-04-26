/**
 * Gallery photo manifest.
 *
 * PLACEHOLDER PHOTOS: Curated Unsplash interior shots until Refine Staging
 * provides real project photos. To swap to real photos:
 *   1. Drop new photos into `public/gallery/` (or `public/uploads/`)
 *   2. Replace the `src` value below with `asset("/gallery/your-photo.jpg")`
 *   3. Update `categories` to reflect the actual room/service type
 */

import { asset } from "@/lib/utils";

export type Category = "Living" | "Bedroom" | "Kitchen" | "Vacant" | "Occupied";

export interface Photo {
  src: string;
  alt: string;
  categories: Category[];
}

// Unsplash CDN format params — high quality, ~1400px wide
const UQ = "?auto=format&fit=crop&w=1400&q=80";
const u = (id: string) => `https://images.unsplash.com/photo-${id}${UQ}`;

// Hero (used on home page hero) — change to your favourite shot
export const HERO_IMAGE = u("1556909114-f6e7ad7d3136");

// Before / After pair — both BEDROOMS for a clean comparison.
// Before = empty/unstaged room. After = fully styled.
export const BEFORE_AFTER = {
  before: u("1668910233832-f21a40678c14"), // empty bedroom
  after: u("1560185893-a55cbc8c57e8"),     // fully styled bedroom
} as const;

export const PHOTOS: Photo[] = [
  // ─── BEDROOMS ───────────────────────────────────────────────
  { src: u("1560185893-a55cbc8c57e8"), alt: "Master bedroom with full styling", categories: ["Bedroom", "Vacant"] },
  { src: u("1616486029423-aaa4789e8c9a"), alt: "Modern bedroom with plants", categories: ["Bedroom", "Vacant"] },
  { src: u("1556020685-ae41abfc9365"), alt: "Soft, light-filled bedroom", categories: ["Bedroom", "Vacant"] },
  { src: u("1552558636-f6a8f071c2b3"), alt: "Bedroom with feature wall", categories: ["Bedroom", "Vacant"] },
  { src: u("1600210491305-7396500b5b31"), alt: "Calm minimalist bedroom", categories: ["Bedroom", "Vacant"] },
  { src: u("1696762932825-2737db830bbe"), alt: "Warm-toned bedroom", categories: ["Bedroom", "Occupied"] },
  { src: u("1612152605347-f93296cb657d"), alt: "Bedroom with art and side table", categories: ["Bedroom", "Vacant"] },
  { src: u("1631048501851-4aa85ffc3be8"), alt: "Bedroom with bench seat", categories: ["Bedroom", "Vacant"] },
  { src: u("1633944095397-878622ebc01c"), alt: "Cosy lived-in bedroom", categories: ["Bedroom", "Occupied"] },
  { src: u("1600494448655-ae58f58bb945"), alt: "Bedroom with decorative throws", categories: ["Bedroom", "Vacant"] },

  // ─── LIVING ROOMS ───────────────────────────────────────────
  { src: u("1646592474167-16137d4da628"), alt: "Open-plan living room", categories: ["Living", "Vacant"] },
  { src: u("1646592473974-b2ea9bd24717"), alt: "Lounge with feature lighting", categories: ["Living", "Vacant"] },
  { src: u("1646592492329-e51d7dbdc6c4"), alt: "Modern living composition", categories: ["Living", "Vacant"] },
  { src: u("1646592474237-72a0040a358e"), alt: "Living area with art", categories: ["Living", "Vacant"] },
  { src: u("1646592492173-bef7e6970735"), alt: "Light-filled living space", categories: ["Living", "Vacant"] },
  { src: u("1646592492363-39c3626ebcf5"), alt: "Lounge styling detail", categories: ["Living", "Occupied"] },
  { src: u("1646592474160-efdfd968fdd3"), alt: "Living room wide angle", categories: ["Living", "Vacant"] },
  { src: u("1646592473989-68196513244e"), alt: "Family lounge area", categories: ["Living", "Occupied"] },

  // ─── KITCHENS ───────────────────────────────────────────────
  { src: u("1610177534644-34d881503b83"), alt: "Modern kitchen with island", categories: ["Kitchen", "Vacant"] },
  { src: u("1502005097973-6a7082348e28"), alt: "Open-plan kitchen and dining", categories: ["Kitchen", "Vacant"] },
  { src: u("1725257928373-dc6d2ac7b145"), alt: "Bright contemporary kitchen", categories: ["Kitchen", "Vacant"] },
  { src: u("1592506119503-c0b18879bd5a"), alt: "Kitchen with timber accents", categories: ["Kitchen", "Vacant"] },
  { src: u("1643949915134-73a4c880f7c7"), alt: "Kitchen counter and shelving", categories: ["Kitchen", "Occupied"] },
  { src: u("1663811396777-05505d999151"), alt: "Kitchen island detail", categories: ["Kitchen", "Vacant"] },
];

export const CATEGORIES: Category[] = ["Living", "Bedroom", "Kitchen", "Vacant", "Occupied"];

// When user provides real photos, the asset() helper makes path swaps trivial:
// Example: replace any entry above with:
// { src: asset("/gallery/hawthorn-living.jpg"), alt: "Hawthorn living room", categories: ["Living", "Vacant"] }
export { asset };
