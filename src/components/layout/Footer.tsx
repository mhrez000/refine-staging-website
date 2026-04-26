import { Link } from "wouter";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-24 pb-10 relative">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          {/* Brand column */}
          <div className="md:col-span-5 space-y-6">
            <Logo variant="light" size="md" />
            <p className="text-background/70 text-sm max-w-md leading-relaxed">
              {SITE.description}
            </p>
          </div>

          {/* Sitemap */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-background/50 mb-2">
              Sitemap
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                ["Home", "/"],
                ["Services", "/services"],
                ["Gallery", "/gallery"],
                ["Testimonials", "/testimonials"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-background/80 hover:text-accent transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-background/50 mb-2">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={SITE.phoneLink}
                  className="inline-flex items-center gap-3 text-background/80 hover:text-accent transition-colors"
                >
                  <Phone size={14} className="opacity-60" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-3 text-background/80 hover:text-accent transition-colors break-all"
                >
                  <Mail size={14} className="opacity-60 shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={SITE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-accent transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row gap-3 items-center justify-between text-[11px] uppercase tracking-[0.2em] text-background/50">
          <span>© {new Date().getFullYear()} Refine Staging. All rights reserved.</span>
          <span>{SITE.serviceArea}</span>
        </div>
      </div>
    </footer>
  );
}
