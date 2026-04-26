import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionLabel } from "@/components/ui/section-label";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/data/site";
import { EASE } from "@/lib/utils";

export default function Services() {
  return (
    <PageWrapper>
      {/* Header */}
      <section className="pt-40 pb-20 container-x">
        <SectionLabel number="01">Services</SectionLabel>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mt-8 leading-[1.05] text-balance max-w-4xl font-light">
          What we <span className="italic">do.</span>
        </h1>
        <p className="mt-8 text-muted-foreground max-w-xl text-lg">
          Three services. One goal: a home buyers fall for.
        </p>
      </section>

      {/* Services — alternating layout */}
      <section className="pb-32">
        {SERVICES.map((service, i) => (
          <motion.article
            key={service.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="container-x mb-32 last:mb-0"
          >
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-last" : ""}`}>
              {/* Image */}
              <div className="lg:col-span-7">
                <div className="cinematic-image-container aspect-[4/3] group">
                  <img src={service.image} alt={service.title} className="cinematic-image" />
                </div>
              </div>

              {/* Text */}
              <div className="lg:col-span-5">
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-medium">
                  Service 0{i + 1}
                </span>
                <h2 className="font-serif text-3xl md:text-5xl mt-4 leading-tight">
                  {service.title}
                </h2>
                <p className="mt-6 text-foreground/80 leading-relaxed">
                  {service.description}
                </p>

                <ul className="mt-8 space-y-3">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                      <Check size={16} className="text-accent mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Button asChild variant="outline">
                    <Link href="/contact">
                      Enquire <ArrowRight size={14} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      {/* CTA */}
      <section className="section-padding container-x text-center bg-muted/40">
        <h2 className="font-serif text-4xl md:text-6xl leading-tight text-balance max-w-3xl mx-auto">
          Not sure which one? <span className="italic">Book a consult.</span>
        </h2>
        <p className="mt-6 text-muted-foreground max-w-md mx-auto">
          We'll walk through your home and recommend the right approach for your sale.
        </p>
        <div className="mt-10">
          <Button asChild size="lg">
            <Link href="/contact">
              Free consultation <ArrowRight size={14} />
            </Link>
          </Button>
        </div>
      </section>
    </PageWrapper>
  );
}
