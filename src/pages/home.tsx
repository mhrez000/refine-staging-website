import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Armchair, TrendingUp, Clock, Home as HomeIcon } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionLabel } from "@/components/ui/section-label";
import { Button } from "@/components/ui/button";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { SITE, SERVICES, PROCESS } from "@/data/site";
import { TESTIMONIALS } from "@/data/testimonials";
import { PHOTOS, BEFORE_AFTER } from "@/data/gallery";
import { EASE } from "@/lib/utils";

const FEATURES = [
  {
    icon: Armchair,
    title: "Increase Appeal",
    text: "Beautifully staged homes attract more buyers.",
  },
  {
    icon: TrendingUp,
    title: "Higher Offers",
    text: "Well-presented homes achieve higher sale prices.",
  },
  {
    icon: Clock,
    title: "Sell Faster",
    text: "Stand out in the market and reduce days on market.",
  },
  {
    icon: HomeIcon,
    title: "Maximise Potential",
    text: "We showcase the true potential of every space.",
  },
];

export default function Home() {
  // Featured photos for the homepage gallery teaser
  const featured = PHOTOS.slice(0, 6);

  return (
    <PageWrapper>
      {/* ==================== HERO — full-screen before/after with overlay ==================== */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-foreground">
        {/* Slider fills the entire hero */}
        <div className="absolute inset-0 z-0">
          <BeforeAfterSlider
            beforeSrc={BEFORE_AFTER.before}
            afterSrc={BEFORE_AFTER.after}
            beforeLabel=""
            afterLabel=""
            aspectRatio="h-full"
            className="w-full h-full"
          />
        </div>

        {/* Strong left-side darkening so white text is fully readable on bright "empty" image */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(15,15,15,0.85) 0%, rgba(15,15,15,0.7) 25%, rgba(15,15,15,0.4) 45%, rgba(15,15,15,0.1) 60%, rgba(0,0,0,0) 75%)",
          }}
        />

        {/* Top fade for nav legibility (full-width) */}
        <div className="absolute inset-x-0 top-0 h-32 pointer-events-none z-10 bg-gradient-to-b from-black/40 to-transparent" />

        {/* Bottom fade for progress-strip legibility */}
        <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none z-10 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Overlay content — left side */}
        <div className="absolute inset-0 z-20 pointer-events-none container-x flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.4 }}
            className="max-w-xl text-white"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.4)" }}
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] text-balance">
              We don't just<br />
              <span className="italic">stage homes.</span><br />
              We transform<br />
              <span className="italic text-accent">potential.</span>
            </h1>
            <p className="mt-8 text-base md:text-lg text-white/90 max-w-md leading-relaxed">
              From empty to extraordinary.<br />
              We help homes stand out and sell faster.
            </p>
            <div className="mt-10 pointer-events-auto inline-block">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 border border-accent text-white text-[11px] uppercase tracking-[0.25em] font-medium transition-all duration-500 hover:bg-accent hover:border-accent"
              >
                Book a Consultation
                <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom progress strip */}
        <div className="absolute bottom-0 inset-x-0 pb-10 pointer-events-none z-20">
          <div className="container-x">
            <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto items-center">
              <div className="text-white flex items-center gap-3">
                <span className="font-serif italic text-sm opacity-70">01</span>
                <span className="h-px flex-1 bg-white/30" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-medium whitespace-nowrap">
                  Empty Space
                </span>
              </div>
              <div className="text-white flex items-center justify-center gap-3">
                <span className="h-px flex-1 bg-white/30" />
                <span className="h-2 w-2 rounded-full bg-white ring-4 ring-white/20" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-medium whitespace-nowrap">
                  Transformation
                </span>
                <span className="h-px flex-1 bg-white/30" />
              </div>
              <div className="text-white flex items-center gap-3 justify-end">
                <span className="text-[10px] uppercase tracking-[0.3em] font-medium whitespace-nowrap">
                  Beautifully Staged
                </span>
                <span className="h-px flex-1 bg-white/30" />
                <span className="font-serif italic text-sm opacity-70">03</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURE CARDS — replaces stats ==================== */}
      <section className="py-20 md:py-28 container-x bg-background border-b border-border/40">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 max-w-6xl mx-auto">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
                className="text-center flex flex-col items-center"
              >
                <div className="h-14 w-14 rounded-full bg-foreground text-background flex items-center justify-center mb-5">
                  <Icon size={20} strokeWidth={1.6} />
                </div>
                <h3 className="text-[11px] uppercase tracking-[0.25em] font-semibold text-foreground mb-3">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[180px]">
                  {f.text}
                </p>
              </motion.div>
            );
          })}
        </div>
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
            Full portfolio <ArrowRight size={14} />
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
          <SectionLabel number="05" className="justify-center text-background/60">Reviews</SectionLabel>
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
