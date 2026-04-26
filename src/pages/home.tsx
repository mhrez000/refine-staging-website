import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionLabel } from "@/components/ui/section-label";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { SITE, SERVICES, PROCESS } from "@/data/site";
import { TESTIMONIALS } from "@/data/testimonials";
import { PHOTOS } from "@/data/gallery";
import { EASE } from "@/lib/utils";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Featured photos for the homepage gallery teaser
  const featured = PHOTOS.slice(0, 6);

  return (
    <PageWrapper>
      {/* ==================== HERO ==================== */}
      <section ref={heroRef} className="relative h-screen min-h-[640px] w-full overflow-hidden">
        {/* Parallax background image */}
        <motion.div style={{ y: heroImageY }} className="absolute inset-0">
          <img
            src={PHOTOS[7].src}
            alt="Featured staged living room"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/10 to-background" />
        </motion.div>

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroTextOpacity }}
          className="relative h-full flex flex-col items-center justify-center text-center container-x"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.3 }}
            className="text-[10px] uppercase tracking-[0.4em] text-background/80 mb-8"
          >
            {SITE.serviceArea}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.5 }}
            className="font-serif text-background text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] text-balance max-w-5xl"
          >
            <span className="italic">Property styling</span> that<br />helps homes sell.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 1 }}
            className="mt-12 flex flex-col md:flex-row gap-4 items-center"
          >
            <Button asChild size="lg" variant="default">
              <Link href="/gallery">
                View our work
                <ArrowRight size={14} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Free consult</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-background/70 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </section>

      {/* ==================== STATS STRIP ==================== */}
      <section className="bg-foreground text-background section-padding">
        <div className="container-x grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {SITE.stats.map((stat, i) => (
            <div key={stat.label} className="md:border-l md:border-background/10 md:pl-8 md:first:border-l-0 md:first:pl-0">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={i * 0.15}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ==================== BEFORE / AFTER FEATURE ==================== */}
      <section className="section-padding container-x">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <SectionLabel number="01" className="justify-center">The Refine effect</SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl mt-6 leading-tight text-balance">
            <span className="italic">Drag</span> to see the difference.
          </h2>
        </div>
        <BeforeAfterSlider
          beforeSrc={PHOTOS[14].src}
          afterSrc={PHOTOS[7].src}
          beforeLabel="Before"
          afterLabel="Refined"
          aspectRatio="aspect-[16/10]"
          className="max-w-6xl mx-auto"
        />
        <p className="mt-6 text-center text-sm text-muted-foreground italic">
          Tip: drag the handle, or use ← → arrow keys.
        </p>
      </section>

      {/* ==================== SERVICES PREVIEW ==================== */}
      <section className="section-padding container-x bg-muted/40">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <SectionLabel number="02">What we do</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl mt-6 leading-tight text-balance max-w-2xl">
              Three ways we help your home <span className="italic">show better.</span>
            </h2>
          </div>
          <Link href="/services" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] magnetic-line shrink-0">
            All services <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
              className="group cursor-pointer"
            >
              <Link href="/services">
                <div className="cinematic-image-container aspect-[4/5] mb-6">
                  <img src={service.image} alt={service.title} className="cinematic-image" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-medium">0{i + 1}</span>
                <h3 className="font-serif text-2xl md:text-3xl mt-3 group-hover:text-accent transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{service.summary}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==================== FEATURED GALLERY ==================== */}
      <section className="section-padding container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <SectionLabel number="03">Recent work</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl mt-6 leading-tight text-balance">
              Recently <span className="italic">refined.</span>
            </h2>
          </div>
          <Link href="/gallery" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] magnetic-line shrink-0">
            Full gallery <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {featured.map((photo, idx) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: EASE }}
              className={`cinematic-image-container ${idx === 0 ? "row-span-2 aspect-[3/5]" : "aspect-[4/5]"}`}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" className="cinematic-image" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section className="section-padding container-x">
        <div className="text-center mb-20">
          <SectionLabel number="04" className="justify-center">How it works</SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl mt-6 leading-tight text-balance">
            Four steps. <span className="italic">No fuss.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-2">
          {PROCESS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
              className="relative md:px-8 md:border-l md:border-border md:first:border-l-0"
            >
              <span className="text-accent font-serif text-3xl">{step.step}</span>
              <h3 className="mt-4 text-2xl font-serif">{step.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==================== TESTIMONIAL PULL QUOTE ==================== */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-x max-w-4xl mx-auto text-center">
          <SectionLabel number="05" className="justify-center text-background/60">Testimonial</SectionLabel>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: EASE }}
            className="mt-10 font-serif text-3xl md:text-5xl leading-[1.2] text-balance italic font-light"
          >
            "{TESTIMONIALS[0].quote}"
          </motion.blockquote>
          <div className="mt-10 text-[11px] uppercase tracking-[0.3em] text-background/60">
            {TESTIMONIALS[0].name} · {TESTIMONIALS[0].role}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="section-padding container-x text-center">
        <SectionLabel number="06" className="justify-center">Get in touch</SectionLabel>
        <h2 className="font-serif text-4xl md:text-7xl mt-6 leading-tight text-balance max-w-3xl mx-auto">
          Ready to <span className="italic">refine</span> your space?
        </h2>
        <p className="mt-6 text-muted-foreground max-w-md mx-auto">
          Free, on-site consultation. Quote within 48 hours.
        </p>
        <div className="mt-10 flex flex-col md:flex-row gap-4 items-center justify-center">
          <Button asChild size="lg" variant="default">
            <Link href="/contact">Book consult <ArrowRight size={14} /></Link>
          </Button>
          <a href={SITE.phoneLink} className="text-[11px] uppercase tracking-[0.25em] magnetic-line">
            Or call {SITE.phoneDisplay}
          </a>
        </div>
      </section>
    </PageWrapper>
  );
}
