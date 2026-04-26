import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { SITE } from "@/data/site";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  size?: "sm" | "md" | "lg";
  asLink?: boolean;
}

/**
 * Wordmark-only logo. The brand has no graphic mark — just the name.
 * Splits "Refine" (serif italic) and "STAGING" (uppercase tracked sans) for
 * the editorial-fashion-magazine feel.
 */
export function Logo({ variant = "dark", className, size = "md", asLink = true }: LogoProps) {
  const colorClass = variant === "dark" ? "text-foreground" : "text-background";

  const sizes = {
    sm: { primary: "text-xl md:text-2xl", secondary: "text-[0.55rem] md:text-[0.6rem]" },
    md: { primary: "text-2xl md:text-3xl", secondary: "text-[0.6rem] md:text-[0.7rem]" },
    lg: { primary: "text-4xl md:text-5xl", secondary: "text-[0.7rem] md:text-[0.8rem]" },
  };
  const s = sizes[size];

  const inner = (
    <span className={cn("inline-flex items-baseline gap-2", colorClass, className)}>
      <span
        className={cn(s.primary, "font-serif italic font-light leading-none")}
        style={{ fontVariationSettings: "'opsz' 144" }}
      >
        Refine
      </span>
      <span className={cn(s.secondary, "uppercase tracking-[0.4em] font-medium opacity-80")}>
        Staging
      </span>
    </span>
  );

  if (!asLink) return inner;
  return (
    <Link href="/" aria-label={`${SITE.name} — home`}>
      {inner}
    </Link>
  );
}
