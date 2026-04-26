import { asset } from "@/lib/utils";

/**
 * Gallery photo manifest.
 *
 * PLACEHOLDER PHOTOS: These are curated Unsplash interior shots used until
 * Refine Staging provides real project photos. To swap to real photos:
 *   1. Drop new photos into `public/gallery/` (or `public/uploads/`)
 *   2. Replace the `src` value below with `asset("/gallery/your-photo.jpg")`
 *   3. Update `categories` to reflect the actual room/service type
 */

export type Category = "Living" | "Bedroom" | "Kitchen" | "Vacant" | "Occupied";

export interface Photo {
  src: string;
  alt: string;
  categories: Category[];
}

// Unsplash CDN params — high-quality, format-optimized, ~1200px wide
const UQ = "?auto=format&fit=crop&w=1400&q=80";

export const PHOTOS: Photo[] = [
  // Living rooms — vacant staged
  { src: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e" + UQ, alt: "Bright styled living room", categories: ["Living", "Vacant"] },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" + UQ, alt: "Modern open-plan living", categories: ["Living", "Vacant"] },
  { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace" + UQ, alt: "Light-filled living room", categories: ["Living", "Vacant"] },
  { src: "https://images.unsplash.com/photo-1618220179428-22790b461013" + UQ, alt: "Lounge composition", categories: ["Living", "Vacant"] },
  { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136" + UQ, alt: "Sofa and coffee table styling", categories: ["Living", "Vacant"] },
  { src: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac" + UQ, alt: "Lounge corner detail", categories: ["Living", "Occupied"] },

  // Bedrooms
  { src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" + UQ, alt: "Master bedroom styling", categories: ["Bedroom", "Vacant"] },
  { src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af" + UQ, alt: "Calm bedroom", categories: ["Bedroom", "Vacant"] },
  { src: "https://images.unsplash.com/photo-1540518614846-7eded433c457" + UQ, alt: "Guest bedroom", categories: ["Bedroom", "Vacant"] },
  { src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0" + UQ, alt: "Bedroom with throws", categories: ["Bedroom", "Occupied"] },
  { src: "https://images.unsplash.com/photo-1616627547584-bf28cee262db" + UQ, alt: "Soft bedroom styling", categories: ["Bedroom", "Vacant"] },
  { src: "https://images.unsplash.com/photo-1616627781040-6a8ddf30deba" + UQ, alt: "Master suite", categories: ["Bedroom", "Vacant"] },

  // Kitchens
  { src: "https://images.unsplash.com/photo-1556909114-44e3e98c0e53" + UQ, alt: "Kitchen island styling", categories: ["Kitchen", "Vacant"] },
  { src: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d" + UQ, alt: "Open-plan kitchen and dining", categories: ["Kitchen", "Vacant"] },
  { src: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7" + UQ, alt: "Kitchen detail", categories: ["Kitchen", "Vacant"] },
  { src: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77" + UQ, alt: "Kitchen open shelving", categories: ["Kitchen", "Occupied"] },

  // Living/dining mixed
  { src: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393" + UQ, alt: "Dining area styling", categories: ["Living", "Vacant"] },
  { src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92" + UQ, alt: "Dining table setting", categories: ["Living", "Occupied"] },
  { src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511" + UQ, alt: "Cozy living room", categories: ["Living", "Occupied"] },
  { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7" + UQ, alt: "Living room with feature wall", categories: ["Living", "Vacant"] },
  { src: "https://images.unsplash.com/photo-1551516594-56cb78394645" + UQ, alt: "Living room composition", categories: ["Living", "Vacant"] },
  { src: "https://images.unsplash.com/photo-1567016432779-094069958ea5" + UQ, alt: "Lounge with rug detail", categories: ["Living", "Vacant"] },

  // Bedroom details / additional
  { src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221" + UQ, alt: "Second bedroom", categories: ["Bedroom", "Vacant"] },
  { src: "https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0" + UQ, alt: "Bedroom textile detail", categories: ["Bedroom", "Vacant"] },

  // Kitchen + living combined
  { src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb" + UQ, alt: "Hallway entry styling", categories: ["Living", "Occupied"] },
  { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0" + UQ, alt: "Family living room", categories: ["Living", "Occupied"] },
  { src: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87" + UQ, alt: "Wide living room view", categories: ["Living", "Vacant"] },
  { src: "https://images.unsplash.com/photo-1574691250077-03a929faece5" + UQ, alt: "Living room with art", categories: ["Living", "Vacant"] },
];

export const CATEGORIES: Category[] = ["Living", "Bedroom", "Kitchen", "Vacant", "Occupied"];

// When user provides real photos, the asset() helper makes path swaps trivial:
// Example: replace the first entry above with:
// { src: asset("/gallery/hawthorn-living.jpg"), alt: "Hawthorn living room", categories: ["Living", "Vacant"] }
export { asset };
