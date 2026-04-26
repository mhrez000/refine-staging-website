import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionLabel } from "@/components/ui/section-label";
import { Button } from "@/components/ui/button";
import { TESTIMONIALS } from "@/data/testimonials";
import { EASE } from "@/lib/utils";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = TESTIMONIALS[index];

  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <PageWrapper>
      {/* Header */}
      <section className="pt-40 pb-20 container-x">
        <SectionLabel number="01">Testimonials</SectionLabel>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mt-8 leading-[1.05] text-balance max-w-4xl font-light">
          What clients <span className="italic">say.</span>
        </h1>
      </section>

      {/* Featured carousel */}
      <section className="pb-32 container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image side */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.imageUrl}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="cinematic-image-container aspect-[4/5]"
              >
                {current.imageUrl && (
                  <img src={current.imageUrl} alt={current.name} className="cinematic-image" />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quote side */}
          <div className="lg:col-span-6">
            <Quote size={48} className="text-accent opacity-30 mb-6" />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <blockquote className="font-serif text-2xl md:text-4xl leading-[1.3] italic font-light text-balance">
                  "{current.quote}"
                </blockquote>
                <div className="mt-10">
                  <div className="font-medium text-base">{current.name}</div>
                  <div className="text-sm text-muted-foreground mt-1">{current.role}</div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel controls */}
            <div className="mt-12 flex items-center gap-4">
              <button
                type="button"
                onClick={prev}
                className="h-12 w-12 inline-flex items-center justify-center border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                aria-label="Previous"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                onClick={next}
                className="h-12 w-12 inline-flex items-center justify-center border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                aria-label="Next"
              >
                <ArrowRight size={16} />
              </button>
              <div className="ml-4 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                {String(index + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All testimonials grid */}
      <section className="section-padding container-x bg-muted/40">
        <SectionLabel number="02" className="justify-center mb-16">More words from clients</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              className="bg-background p-8 border border-border hover:border-foreground/40 transition-colors duration-300"
            >
              <Quote size={20} className="text-accent mb-4" />
              <p className="text-sm text-foreground/85 leading-relaxed line-clamp-5">
                "{t.quote}"
              </p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="text-sm font-medium">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding container-x text-center">
        <h2 className="font-serif text-4xl md:text-6xl leading-tight text-balance max-w-3xl mx-auto">
          Want to be <span className="italic">next?</span>
        </h2>
        <div className="mt-10">
          <Button asChild size="lg">
            <Link href="/contact">
              Get a quote <ArrowRight size={14} />
            </Link>
          </Button>
        </div>
      </section>
    </PageWrapper>
  );
}
