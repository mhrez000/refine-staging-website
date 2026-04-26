import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { cn, EASE } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/gallery" },
  { label: "About Us", href: "/about" },
  { label: "Reviews", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Nav now always sits over a light/cream background — no need for light variant
  const useLight = false;
  void location;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled || mobileOpen
            ? "py-3 glass border-b border-foreground/5"
            : "py-5 bg-transparent"
        )}
      >
        <div className="container-x flex items-center justify-between gap-6">
          <Logo size="sm" variant={useLight ? "light" : "dark"} layout="stacked" />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = item.href === location || (item.href !== "/" && location.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-[11px] uppercase tracking-[0.25em] font-medium transition-colors duration-300 py-1",
                    useLight
                      ? isActive
                        ? "text-background"
                        : "text-background/75 hover:text-background"
                      : isActive
                        ? "text-foreground"
                        : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 right-0 h-px",
                        useLight ? "bg-background" : "bg-accent"
                      )}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Book CTA — desktop only */}
          <div className="hidden lg:block shrink-0">
            <Button
              asChild
              variant="outline"
              size="sm"
              className={cn(
                useLight
                  ? "border-background/60 text-background hover:bg-background hover:text-foreground hover:border-background"
                  : "border-accent/60 text-foreground hover:bg-accent hover:border-accent hover:text-accent-foreground"
              )}
            >
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={cn(
              "lg:hidden h-10 w-10 inline-flex items-center justify-center transition-colors",
              useLight ? "text-background" : "text-foreground"
            )}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background pt-24 lg:hidden"
          >
            <nav className="container-x flex flex-col gap-2">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 + i * 0.05, ease: EASE }}
                >
                  <Link
                    href={item.href}
                    className="block py-4 border-b border-border text-2xl font-serif"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 + NAV_ITEMS.length * 0.05, ease: EASE }}
                className="mt-8"
              >
                <Button asChild variant="default" size="lg" className="w-full">
                  <Link href="/contact">Book a Consultation</Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
