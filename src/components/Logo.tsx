import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { SITE } from "@/data/site";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  size?: "sm" | "md" | "lg";
  asLink?: boolean;
  layout?: "stacked" | "inline";
}

/**
 * Wordmark logo for Refine Staging.
 * - "stacked" (default): REFINE on top, STAGING below in tracked caps — editorial magazine style
 * - "inline":            Refine (italic) + STAGING side-by-side — original treatment
 */
export function Logo({
  variant = "dark",
  className,
  size = "md",
  asLink = true,
  layout = "stacked",
}: LogoProps) {
  const colorClass = variant === "dark" ? "text-foreground" : "text-background";

  if (layout === "stacked") {
    const sizes = {
      sm: { primary: "text-base md:text-lg", secondary: "text-[0.5rem] md:text-[0.55rem]" },
      md: { primary: "text-xl md:text-2xl", secondary: "text-[0.55rem] md:text-[0.65rem]" },
      lg: { primary: "text-3xl md:text-4xl", secondary: "text-[0.65rem] md:text-[0.75rem]" },
    };
    const s = sizes[size];

    const inner = (
      <span className={cn("inline-flex flex-col items-start leading-none", colorClass, className)}>
        <span className={cn(s.primary, "uppercase tracking-[0.18em] font-serif font-light")}>
          Refine
        </span>
        <span className={cn(s.secondary, "uppercase tracking-[0.5em] font-sans font-medium mt-1.5 opacity-90")}>
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

  // inline (legacy)
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
