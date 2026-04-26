/**
 * Gallery photo manifest.
 * Categories are best-guess placeholders — re-tag once we know which photo is which room.
 * Add/remove entries here to control what shows in /gallery.
 */

export type Category = "Living" | "Bedroom" | "Kitchen" | "Vacant" | "Occupied";

export interface Photo {
  src: string;
  alt: string;
  categories: Category[];
}

/** Auto-generated from downloaded photos at /public/gallery/g01.jpg ... g38.jpg */
export const PHOTOS: Photo[] = [
  { src: "/gallery/g01.jpg", alt: "Styled living room", categories: ["Living", "Vacant"] },
  { src: "/gallery/g02.jpg", alt: "Staged bedroom", categories: ["Bedroom", "Vacant"] },
  { src: "/gallery/g03.jpg", alt: "Open-plan living and dining", categories: ["Living", "Vacant"] },
  { src: "/gallery/g04.jpg", alt: "Master bedroom styling", categories: ["Bedroom", "Vacant"] },
  { src: "/gallery/g05.jpg", alt: "Lounge composition", categories: ["Living", "Occupied"] },
  { src: "/gallery/g06.jpg", alt: "Kitchen and island detail", categories: ["Kitchen", "Vacant"] },
  { src: "/gallery/g07.jpg", alt: "Dining area styling", categories: ["Living", "Vacant"] },
  { src: "/gallery/g08.jpg", alt: "Light-filled living room", categories: ["Living", "Vacant"] },
  { src: "/gallery/g09.jpg", alt: "Second bedroom", categories: ["Bedroom", "Vacant"] },
  { src: "/gallery/g10.jpg", alt: "Hallway entry styling", categories: ["Living", "Occupied"] },
  { src: "/gallery/g11.jpg", alt: "Open-plan kitchen and dining", categories: ["Kitchen", "Vacant"] },
  { src: "/gallery/g12.jpg", alt: "Living room with feature wall", categories: ["Living", "Vacant"] },
  { src: "/gallery/g13.jpg", alt: "Staged guest bedroom", categories: ["Bedroom", "Vacant"] },
  { src: "/gallery/g14.jpg", alt: "Family living room", categories: ["Living", "Occupied"] },
  { src: "/gallery/g15.jpg", alt: "Compact apartment lounge", categories: ["Living", "Vacant"] },
  { src: "/gallery/g16.jpg", alt: "Master suite", categories: ["Bedroom", "Vacant"] },
  { src: "/gallery/g17.jpg", alt: "Living and dining combination", categories: ["Living", "Vacant"] },
  { src: "/gallery/g18.jpg", alt: "Lounge corner detail", categories: ["Living", "Occupied"] },
  { src: "/gallery/g19.jpg", alt: "Kitchen counter styling", categories: ["Kitchen", "Vacant"] },
  { src: "/gallery/g20.jpg", alt: "Bedroom side-table detail", categories: ["Bedroom", "Vacant"] },
  { src: "/gallery/g21.jpg", alt: "Wide living room view", categories: ["Living", "Vacant"] },
  { src: "/gallery/g22.jpg", alt: "Bedroom textile detail", categories: ["Bedroom", "Vacant"] },
  { src: "/gallery/g23.jpg", alt: "Dining table setting", categories: ["Living", "Occupied"] },
  { src: "/gallery/g24.jpg", alt: "Living room with art", categories: ["Living", "Vacant"] },
  { src: "/gallery/g25.jpg", alt: "Kitchen open shelving", categories: ["Kitchen", "Occupied"] },
  { src: "/gallery/g26.jpg", alt: "Lounge detail", categories: ["Living", "Vacant"] },
  { src: "/gallery/g27.jpg", alt: "Bedroom styling detail", categories: ["Bedroom", "Vacant"] },
  { src: "/gallery/g28.jpg", alt: "Living room corner", categories: ["Living", "Occupied"] },
  { src: "/gallery/g29.jpg", alt: "Open-plan living", categories: ["Living", "Vacant"] },
  { src: "/gallery/g30.jpg", alt: "Bedroom with bench seat", categories: ["Bedroom", "Vacant"] },
  { src: "/gallery/g31.jpg", alt: "Lounge with fireplace", categories: ["Living", "Vacant"] },
  { src: "/gallery/g32.jpg", alt: "Bedroom with window seat", categories: ["Bedroom", "Vacant"] },
  { src: "/gallery/g33.jpg", alt: "Kitchen detail", categories: ["Kitchen", "Vacant"] },
  { src: "/gallery/g34.jpg", alt: "Living room wide view", categories: ["Living", "Occupied"] },
  { src: "/gallery/g35.jpg", alt: "Bedroom soft styling", categories: ["Bedroom", "Vacant"] },
  { src: "/gallery/g36.jpg", alt: "Lounge with rug detail", categories: ["Living", "Vacant"] },
  { src: "/gallery/g37.jpg", alt: "Bedroom with throws", categories: ["Bedroom", "Occupied"] },
  { src: "/gallery/g38.jpg", alt: "Living and entry combined", categories: ["Living", "Vacant"] },
];

export const CATEGORIES: Category[] = ["Living", "Bedroom", "Kitchen", "Vacant", "Occupied"];
