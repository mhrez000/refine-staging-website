import { motion } from "framer-motion";
import { useCounter } from "@/hooks/use-counter";
import { EASE } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export function AnimatedCounter({ value, suffix = "", label, delay = 0 }: AnimatedCounterProps) {
  const [ref, current] = useCounter(value, 1800);
  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      className="flex flex-col gap-2"
    >
      <span className="text-5xl md:text-7xl font-serif font-light tabular-nums leading-none">
        {current}
        <span className="text-accent">{suffix}</span>
      </span>
      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-medium">
        {label}
      </span>
    </motion.div>
  );
}
