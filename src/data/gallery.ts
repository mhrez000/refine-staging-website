/**
 * Gallery photo manifest.
 *
 * PLACEHOLDER PHOTOS: Curated stock photos chosen specifically to show STAGING
 * WORK — beds made up with throws + pillows, gallery walls, styled coffee
 * tables, plants and decor. Not pure architecture shots.
 *
 * To swap to real Refine project photos:
 *   1. Drop new photos into `public/uploads/`
 *   2. Replace `src` below with `asset("/uploads/your-photo.jpg")`
 *   3. Update `categories` to reflect the actual room/service type
 *
 * NOTE on Before/After: stock photos don't have true matched pairs of the
 * SAME room before & after staging (no photographer shoots both). The pair
 * below is the closest visual match — empty room and styled room with the
 * same wall tone and hardwood floor. For launch, capture a real
 * before/after from one of Refine's actual jobs and swap in.
 */

import { asset } from "@/lib/utils";

export type Category = "Living" | "Bedroom" | "Kitchen" | "Vacant" | "Occupied";

export interface Photo {
  src: string;
  alt: string;
  categories: Category[];
}

const UQ = "?auto=format&fit=crop&w=1400&q=80";
const u = (id: string) => `https://images.unsplash.com/photo-${id}${UQ}`;
const px = (id: string) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1400`;

// Hero image — the big shot at the top of the homepage
// Master bedroom, fully styled, dramatic light — pure staging quality
export const HERO_IMAGE = u("1560185893-a55cbc8c57e8");

/**
 * Before / After living-room pair — SAME ROOM, panoramic 3:1 framing.
 * Files live at /public/before-after/ so they're served from our domain.
 *
 * To swap with another pair of the same room:
 *   1. Save your photos as living-before.jpg + living-after.jpg
 *      (or any matching filenames) into /public/before-after/
 *   2. Update the asset() paths below
 */
export const BEFORE_AFTER = {
  before: asset("/before-after/living-before.jpg"),
  after: asset("/before-after/living-after.jpg"),
  /** Recommended slider aspect ratio for these images */
  aspectRatio: "aspect-[3/1]" as const,
} as const;

export const PHOTOS: Photo[] = [
  // ─── BEDROOMS — fully styled, showing real staging work ────────────
  { src: u("1560185893-a55cbc8c57e8"), alt: "Master bedroom — full styling, art, layered bedding", categories: ["Bedroom", "Vacant"] },
  { src: u("1616486029423-aaa4789e8c9a"), alt: "Bedroom with gallery wall and plant styling", categories: ["Bedroom", "Vacant"] },
  { src: u("1612152605347-f93296cb657d"), alt: "White bedroom with framed prints and bench", categories: ["Bedroom", "Vacant"] },
  { src: u("1600210491305-7396500b5b31"), alt: "Bedroom with throw blanket and plants", categories: ["Bedroom", "Vacant"] },
  { src: u("1631048501851-4aa85ffc3be8"), alt: "Bedroom with rattan pendant and mural", categories: ["Bedroom", "Vacant"] },
  { src: u("1633944095397-878622ebc01c"), alt: "Bedroom with gallery wall and bedding", categories: ["Bedroom", "Vacant"] },
  { src: u("1600494448655-ae58f58bb945"), alt: "Bedroom with arch headboard and styled side table", categories: ["Bedroom", "Vacant"] },
  { src: u("1696762932825-2737db830bbe"), alt: "Designer bedroom with concrete and wood detailing", categories: ["Bedroom", "Occupied"] },

  // ─── LIVING & DINING — clearly staged compositions ────────────
  { src: u("1560448204-e02f11c3d0e2"), alt: "Living room with sofas, fireplace and styled coffee table", categories: ["Living", "Vacant"] },
  { src: u("1629236714859-3a1ec2d8f6c3"), alt: "Living room with city view and styled sofa", categories: ["Living", "Vacant"] },
  { src: u("1560185007-cde436f6a4d0"), alt: "Dining room set with table, chairs and pendant", categories: ["Living", "Vacant"] },
  { src: u("1560185127-6ed189bf02f4"), alt: "Open-plan living and kitchen with styled coffee table", categories: ["Living", "Vacant"] },
  { src: u("1646592474167-16137d4da628"), alt: "Living room with feature lighting", categories: ["Living", "Vacant"] },
  { src: u("1646592492173-bef7e6970735"), alt: "Light-filled living space with art", categories: ["Living", "Vacant"] },
  { src: u("1646592492363-39c3626ebcf5"), alt: "Lounge styling detail", categories: ["Living", "Occupied"] },
  { src: u("1646592473989-68196513244e"), alt: "Family lounge area", categories: ["Living", "Occupied"] },

  // ─── KITCHENS — only ones with visible styling vignettes ────────────
  { src: u("1565182999561-18d7dc61c393"), alt: "Open-plan kitchen with styled island and seating", categories: ["Kitchen", "Vacant"] },
  { src: u("1592506119503-c0b18879bd5a"), alt: "Kitchen with timber accents and decorative styling", categories: ["Kitchen", "Vacant"] },
  { src: u("1643949915134-73a4c880f7c7"), alt: "Kitchen counter with open shelving and decor", categories: ["Kitchen", "Occupied"] },
  { src: u("1502005097973-6a7082348e28"), alt: "Open-plan kitchen and dining with styling", categories: ["Kitchen", "Vacant"] },

  // ─── DETAIL VIGNETTES — close-ups showing the stager's work ────────────
  { src: u("1589988279835-9c3a838716ab"), alt: "Coffee table styling with books and decor", categories: ["Living", "Vacant"] },
  { src: u("1593466287928-77cb390bb8a6"), alt: "Bedside table styling detail", categories: ["Bedroom", "Vacant"] },
  { src: u("1544207239-b36c85778165"), alt: "Living vignette with art and lamp", categories: ["Living", "Occupied"] },
  { src: u("1585955819182-8d2e7366afcb"), alt: "Sofa styling with cushions and throw", categories: ["Living", "Vacant"] },
];

export const CATEGORIES: Category[] = ["Living", "Bedroom", "Kitchen", "Vacant", "Occupied"];

// When you have real Refine project photos, the asset() helper makes path swaps trivial:
// Example: replace any entry above with:
// { src: asset("/uploads/hawthorn-living.jpg"), alt: "Hawthorn living room", categories: ["Living", "Vacant"] }
export { asset };
