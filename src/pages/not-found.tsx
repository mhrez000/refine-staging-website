import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <PageWrapper>
      <section className="min-h-screen flex flex-col items-center justify-center text-center container-x">
        <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-6">
          Page not found
        </span>
        <h1 className="font-serif text-7xl md:text-9xl font-light leading-none">
          4<span className="italic">0</span>4
        </h1>
        <p className="mt-8 text-muted-foreground max-w-md">
          The page you're looking for doesn't exist. Let's get you back home.
        </p>
        <div className="mt-10">
          <Button asChild size="lg">
            <Link href="/">
              Back to home <ArrowRight size={14} />
            </Link>
          </Button>
        </div>
      </section>
    </PageWrapper>
  );
}
