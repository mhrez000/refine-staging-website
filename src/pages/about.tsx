import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionLabel } from "@/components/ui/section-label";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { SITE, VALUES } from "@/data/site";
import { PHOTOS } from "@/data/gallery";
import { EASE } from "@/lib/utils";

export default function About() {
  return (
    <PageWrapper>
      {/* Header */}
      <section className="pt-40 pb-20 container-x">
        <SectionLabel number="01">About</SectionLabel>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mt-8 leading-[1.05] text-balance max-w-4xl font-light">
          Who we <span className="italic">are.</span>
        </h1>
      </section>

      {/* Story */}
      <section className="pb-32 container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 1.03 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: EASE }}
              className="cinematic-image-container aspect-[4/5] sticky top-24"
            >
              <img src={PHOTOS[1].src} alt="Refine Staging" className="cinematic-image" />
            </motion.div>
          </div>
          <div className="lg:col-span-7 lg:pt-12">
            <p className="font-serif text-2xl md:text-3xl leading-[1.4] text-foreground drop-cap text-pretty">
              Refine Staging is a Melbourne property styling studio. We turn houses into homes that buyers want — quickly, calmly, and without taking over your life. We obsess over the small things: the right side table, the right throw, the angle of light through a window.
            </p>
            <p className="mt-8 text-foreground/80 leading-relaxed text-pretty">
              The result is properties that photograph beautifully, inspect even better, and sell for the price they deserve. Every project is treated as if it were our own home — because for a few weeks, it almost is.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding container-x bg-muted/40">
        <div className="text-center mb-16">
          <SectionLabel number="02" className="justify-center">What we value</SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl mt-6 leading-tight text-balance">
            Three things, <span className="italic">always.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
              className="bg-background p-10 border border-border hover:border-accent/40 transition-colors duration-500"
            >
              <span className="text-accent text-xs uppercase tracking-[0.3em] font-medium">
                0{i + 1}
              </span>
              <h3 className="font-serif text-3xl mt-4">{v.title}</h3>
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-x">
          <div className="text-center mb-20">
            <SectionLabel number="03" className="justify-center text-background/60">By the numbers</SectionLabel>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {SITE.stats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  delay={i * 0.15}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="section-padding container-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel number="04">Where we work</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl mt-6 leading-tight text-balance">
              Across <span className="italic">Melbourne.</span>
            </h2>
            <p className="mt-8 text-muted-foreground max-w-md leading-relaxed">
              From inner-city apartments to suburban family homes — if it's in metro Melbourne, we'll style it.
            </p>
            <div className="mt-10 flex flex-wrap gap-2">
              {["Hawthorn", "Brunswick", "Camberwell", "Northcote", "Richmond", "Fitzroy", "South Yarra", "Carlton"].map((suburb) => (
                <span
                  key={suburb}
                  className="px-4 py-2 text-[11px] uppercase tracking-[0.2em] border border-foreground/20 text-foreground/70"
                >
                  {suburb}
                </span>
              ))}
            </div>
          </div>
          <div className="cinematic-image-container aspect-[5/4]">
            <img src={PHOTOS[20].src} alt="Melbourne property" className="cinematic-image" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding container-x text-center">
        <h2 className="font-serif text-4xl md:text-6xl leading-tight text-balance max-w-3xl mx-auto">
          Let's <span className="italic">work together.</span>
        </h2>
        <div className="mt-10">
          <Button asChild size="lg">
            <Link href="/contact">
              Start a project <ArrowRight size={14} />
            </Link>
          </Button>
        </div>
      </section>
    </PageWrapper>
  );
}
