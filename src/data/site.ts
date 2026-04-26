import { asset } from "@/lib/utils";

/**
 * Site-wide constants.
 * Update these when client provides final copy / contact info.
 */

export const SITE = {
  name: "Refine Staging",
  tagline: "Melbourne property styling that helps your home sell faster.",
  shortTagline: "Property styling that sells.",
  description:
    "Refine Staging transforms Melbourne homes into spaces buyers fall for — vacant and occupied staging, end-to-end.",

  email: "refine.staging@outlook.com",
  phone: "0478 536 429",
  phoneDisplay: "0478 536 429",
  phoneLink: "tel:+61478536429",

  instagram: "https://www.instagram.com/refinestaging",
  instagramHandle: "@refinestaging",
  facebook: "https://www.facebook.com/people/RefineStaging/61568563281583/",

  serviceArea: "Melbourne and surrounding suburbs",

  /** Numbers shown in the animated stats counter on Home + About */
  stats: [
    { value: 200, suffix: "+", label: "Homes styled" },
    { value: 98, suffix: "%", label: "Sold within 30 days" },
    { value: 5, suffix: "★", label: "Average rating" },
  ],
} as const;

/** Service catalogue — order matters (shown left-to-right on Services page) */
export const SERVICES = [
  {
    slug: "consultation",
    title: "Pre-Staging Consultation",
    summary: "Walk-through advice before a single piece of furniture moves.",
    description:
      "We visit, assess and plan. You leave with a clear room-by-room playbook covering layout, lighting, decluttering and any styling investments worth making.",
    includes: [
      "On-site walk-through (60–90 min)",
      "Room-by-room recommendations",
      "Furniture layout suggestions",
      "Quick-win checklist for sale prep",
    ],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "vacant",
    title: "Vacant Home Staging",
    summary: "Full furniture and styling for empty homes.",
    description:
      "We bring in a curated set of furniture, art and accessories so buyers can imagine living in the space. Set up before the first inspection, picked up after settlement.",
    includes: [
      "Full furniture package",
      "Soft furnishings, art and styling",
      "Delivery, set-up and pack-down",
      "5-week hire period (extendable)",
    ],
    image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "occupied",
    title: "Occupied Home Staging",
    summary: "We work with what you have, then add the magic.",
    description:
      "You stay in the home. We rearrange existing pieces, declutter, and supplement with key items so the space photographs and inspects beautifully — without you moving out.",
    includes: [
      "Decluttering and edit",
      "Furniture rearrangement",
      "Supplementary décor and art",
      "Inspection-day refresh",
    ],
    image: asset("/gallery/g14.jpg"),
  },
] as const;

/** Process steps shown on Home page */
export const PROCESS = [
  { step: "01", title: "Consult", text: "Free, no-obligation walk-through." },
  { step: "02", title: "Plan", text: "Tailored styling proposal." },
  { step: "03", title: "Stage", text: "Set up before your first inspection." },
  { step: "04", title: "Sell", text: "We collect after settlement." },
];

/** Brand values shown on About page */
export const VALUES = [
  {
    title: "Craft",
    text: "Considered styling, not staged-looking. Every piece chosen for the room it lives in.",
  },
  {
    title: "Care",
    text: "Your home, treated like ours — protected, on time, immaculate.",
  },
  {
    title: "Conversion",
    text: "We style for the buyer in your suburb, not for Instagram.",
  },
];
