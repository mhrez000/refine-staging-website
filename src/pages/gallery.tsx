import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionLabel } from "@/components/ui/section-label";
import { Button } from "@/components/ui/button";
import { FilterableGallery } from "@/components/FilterableGallery";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { BEFORE_AFTER } from "@/data/gallery";

export default function Gallery() {
  return (
    <PageWrapper>
      {/* Header */}
      <section className="pt-40 pb-20 container-x">
        <SectionLabel number="01">Gallery</SectionLabel>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mt-8 leading-[1.05] text-balance max-w-4xl font-light">
          Our <span className="italic">work.</span>
        </h1>
        <p className="mt-8 text-muted-foreground max-w-xl text-lg">
          A selection of recent Melbourne homes. Filter by room or service type.
        </p>
      </section>

      {/* Filterable gallery */}
      <section className="pb-32 container-x">
        <FilterableGallery />
      </section>

      {/* Before / After feature */}
      <section className="section-padding container-x bg-muted/40">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <SectionLabel number="02" className="justify-center">Before & after</SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl mt-6 leading-tight text-balance">
            See the <span className="italic">transformation.</span>
          </h2>
        </div>
        <BeforeAfterSlider
          beforeSrc={BEFORE_AFTER.before}
          afterSrc={BEFORE_AFTER.after}
          beforeLabel="Empty Space"
          afterLabel="Beautifully Staged"
          aspectRatio={BEFORE_AFTER.aspectRatio}
          className="max-w-6xl mx-auto"
        />
      </section>

      {/* CTA */}
      <section className="section-padding container-x text-center">
        <h2 className="font-serif text-4xl md:text-6xl leading-tight text-balance max-w-3xl mx-auto">
          Like what you see? <span className="italic">Let's talk.</span>
        </h2>
        <div className="mt-10">
          <Button asChild size="lg">
            <Link href="/contact">
              Book a consultation <ArrowRight size={14} />
            </Link>
          </Button>
        </div>
      </section>
    </PageWrapper>
  );
}
