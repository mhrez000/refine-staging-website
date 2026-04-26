/**
 * Testimonial data — placeholder content until real reviews collected.
 * Replace `quote`, `name`, `role`, `imageUrl` with actual client testimonials.
 */

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  imageUrl?: string;
}

const UQ = "?auto=format&fit=crop&w=1200&q=80";

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We had three offers above the asking price within 10 days. The styling made the home feel completely different.",
    name: "Sarah & Michael",
    role: "Hawthorn — sold via private sale",
    imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136" + UQ,
  },
  {
    quote:
      "Refine made the process effortless. They delivered, set up, and the place looked like something out of a magazine.",
    name: "Olivia",
    role: "Brunswick — vacant staging",
    imageUrl: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d" + UQ,
  },
  {
    quote:
      "We stayed in the home throughout the campaign. They made our furniture look intentional, not lived-in. Sold first weekend.",
    name: "James",
    role: "Camberwell — occupied staging",
    imageUrl: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac" + UQ,
  },
  {
    quote:
      "Honest, on time and genuinely talented. We've recommended them to two friends already.",
    name: "Priya & Daniel",
    role: "Northcote — pre-staging consult",
    imageUrl: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92" + UQ,
  },
];
