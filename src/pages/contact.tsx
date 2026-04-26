import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Phone, Mail, Instagram, ArrowRight, Loader2, Check } from "lucide-react";
import { toast } from "sonner";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionLabel } from "@/components/ui/section-label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SITE, SERVICES } from "@/data/site";
import { EASE } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  address: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  bedrooms: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, "Please tell us a little more (10+ characters)"),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      service: "",
      bedrooms: "",
      timeline: "",
      message: "",
    },
  });

  const { register, handleSubmit, formState: { errors } } = form;

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${SITE.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          _subject: `New enquiry from ${data.name} — ${data.service}`,
          _template: "table",
        }),
      });
      if (!res.ok) throw new Error("Failed");
      toast.success("Thanks — we'll be in touch within 48 hours.");
      setSubmitted(true);
      form.reset();
    } catch {
      toast.error("Something went wrong. Please call or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageWrapper>
      {/* Header */}
      <section className="pt-40 pb-20 container-x">
        <SectionLabel number="01">Contact</SectionLabel>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mt-8 leading-[1.05] text-balance max-w-4xl font-light">
          Let's stage <span className="italic">your space.</span>
        </h1>
        <p className="mt-8 text-muted-foreground max-w-xl text-lg">
          Tell us about your property. We'll respond within 48 hours.
        </p>
      </section>

      {/* Form + info */}
      <section className="pb-32 container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
          {/* Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="border border-accent/30 p-12 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <Check className="text-accent" size={28} />
                </div>
                <h3 className="font-serif text-3xl mb-4">Thanks for reaching out</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  We've got your enquiry and will be in touch within 48 hours. In the meantime, feel free to call us directly.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-8">
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Field label="Your name" error={errors.name?.message}>
                    <Input {...register("name")} placeholder="Jane Smith" />
                  </Field>
                  <Field label="Phone" error={errors.phone?.message}>
                    <Input {...register("phone")} type="tel" placeholder="0400 000 000" />
                  </Field>
                </div>

                <Field label="Email" error={errors.email?.message}>
                  <Input {...register("email")} type="email" placeholder="you@example.com" />
                </Field>

                <Field label="Property address (optional)" error={errors.address?.message}>
                  <Input {...register("address")} placeholder="123 Example St, Melbourne" />
                </Field>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Field label="Service" error={errors.service?.message}>
                    <select
                      {...register("service")}
                      className="flex h-12 w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors duration-300 appearance-none"
                    >
                      <option value="">Select a service</option>
                      {SERVICES.map((s) => (
                        <option key={s.slug} value={s.title}>{s.title}</option>
                      ))}
                      <option value="Not sure">Not sure yet</option>
                    </select>
                  </Field>
                  <Field label="Bedrooms (optional)" error={errors.bedrooms?.message}>
                    <select
                      {...register("bedrooms")}
                      className="flex h-12 w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors duration-300 appearance-none"
                    >
                      <option value="">Select</option>
                      <option value="1">1 bedroom</option>
                      <option value="2">2 bedrooms</option>
                      <option value="3">3 bedrooms</option>
                      <option value="4">4 bedrooms</option>
                      <option value="5+">5+ bedrooms</option>
                    </select>
                  </Field>
                </div>

                <Field label="Timeline (optional)" error={errors.timeline?.message}>
                  <select
                    {...register("timeline")}
                    className="flex h-12 w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors duration-300 appearance-none"
                  >
                    <option value="">When do you need staging?</option>
                    <option value="ASAP">ASAP</option>
                    <option value="2-4 weeks">2–4 weeks</option>
                    <option value="1-2 months">1–2 months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </Field>

                <Field label="Tell us about your project" error={errors.message?.message}>
                  <Textarea
                    {...register("message")}
                    rows={5}
                    placeholder="A bit about the property, the sale campaign, anything we should know..."
                  />
                </Field>

                <div className="pt-4">
                  <Button type="submit" size="lg" disabled={submitting}>
                    {submitting ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        Sending
                      </>
                    ) : (
                      <>
                        Send enquiry <ArrowRight size={14} />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Info side */}
          <aside className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-border">
            <SectionLabel>Direct contact</SectionLabel>
            <div className="mt-10 space-y-8">
              <ContactItem
                icon={<Phone size={20} />}
                label="Call us"
                value={SITE.phoneDisplay}
                href={SITE.phoneLink}
              />
              <ContactItem
                icon={<Mail size={20} />}
                label="Email"
                value={SITE.email}
                href={`mailto:${SITE.email}`}
              />
              <ContactItem
                icon={<Instagram size={20} />}
                label="Instagram"
                value={SITE.instagramHandle}
                href={SITE.instagram}
              />
            </div>

            <div className="mt-16 pt-10 border-t border-border">
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Response time
              </h4>
              <p className="text-foreground/80 text-sm leading-relaxed">
                We respond to enquiries within 48 hours. For urgent campaigns, call directly.
              </p>
            </div>

            <div className="mt-10">
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Service area
              </h4>
              <p className="text-foreground/80 text-sm leading-relaxed">
                {SITE.serviceArea}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </PageWrapper>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-medium">
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a href={href} className="group flex items-start gap-5 hover:text-accent transition-colors duration-300">
      <span className="mt-1 text-foreground/70 group-hover:text-accent transition-colors duration-300">
        {icon}
      </span>
      <span className="flex-1">
        <span className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1">
          {label}
        </span>
        <span className="block text-lg font-serif">{value}</span>
      </span>
    </a>
  );
}
