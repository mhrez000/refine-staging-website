import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  number?: string;
  className?: string;
}

export function SectionLabel({ children, number, className }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: EASE }}
      className={cn(
        "flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-medium",
        className
      )}
    >
      {number && <span className="text-accent">{number}</span>}
      <span className="h-px w-8 bg-foreground/30" />
      <span>{children}</span>
    </motion.div>
  );
}
