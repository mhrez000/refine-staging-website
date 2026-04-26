/**
 * Testimonial data — placeholder content until real reviews collected.
 * Replace `quote`, `name`, `role` with actual client testimonials.
 */

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  imageUrl?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We had three offers above the asking price within 10 days. The styling made the home feel completely different.",
    name: "Sarah & Michael",
    role: "Hawthorn — sold via private sale",
    imageUrl: "/gallery/g05.jpg",
  },
  {
    quote:
      "Refine made the process effortless. They delivered, set up, and the place looked like something out of a magazine.",
    name: "Olivia",
    role: "Brunswick — vacant staging",
    imageUrl: "/gallery/g11.jpg",
  },
  {
    quote:
      "We stayed in the home throughout the campaign. They made our furniture look intentional, not lived-in. Sold first weekend.",
    name: "James",
    role: "Camberwell — occupied staging",
    imageUrl: "/gallery/g18.jpg",
  },
  {
    quote:
      "Honest, on time and genuinely talented. We've recommended them to two friends already.",
    name: "Priya & Daniel",
    role: "Northcote — pre-staging consult",
    imageUrl: "/gallery/g23.jpg",
  },
];
