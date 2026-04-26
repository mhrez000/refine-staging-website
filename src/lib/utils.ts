import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Cinematic ease curve used everywhere for slow, premium motion */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Build a public-asset URL that respects Vite's BASE_URL.
 * Without this, paths like "/gallery/g01.jpg" resolve to the domain root
 * and 404 on GitHub Pages where the site is served under /<repo-name>/.
 *
 * Usage: asset("/gallery/g01.jpg") → "/refine-staging-website/gallery/g01.jpg"
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : "/" + path;
  return base + normalized;
}
