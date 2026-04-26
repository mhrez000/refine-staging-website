import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Cinematic ease curve used everywhere for slow, premium motion */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
