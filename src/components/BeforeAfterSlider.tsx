import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
  aspectRatio?: string;
}

/**
 * Drag-to-compare slider for staged vs unstaged photos.
 * Touch + mouse + keyboard support.
 */
export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After",
  className,
  aspectRatio = "aspect-[16/10]",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    draggingRef.current = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  // Auto-demo on first viewport entry — slowly slide to teach the interaction
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let played = false;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && !played) {
          played = true;
          // animate from 50 → 30 → 70 → 50
          const sequence = [50, 25, 75, 50];
          let idx = 0;
          const tick = () => {
            if (idx >= sequence.length) return;
            const target = sequence[idx];
            const start = position;
            const startTime = performance.now();
            const dur = 1100;
            const animate = (now: number) => {
              const t = Math.min(1, (now - startTime) / dur);
              const eased = 1 - Math.pow(1 - t, 3);
              setPosition(start + (target - start) * eased);
              if (t < 1) requestAnimationFrame(animate);
              else {
                idx++;
                setTimeout(tick, 100);
              }
            };
            requestAnimationFrame(animate);
          };
          tick();
        }
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden cursor-ew-resize select-none touch-none bg-muted",
        aspectRatio,
        className
      )}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      role="slider"
      aria-label="Before and after comparison slider"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
        if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
      }}
    >
      {/* After image (full) */}
      <img
        src={afterSrc}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable={false}
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)` }}
      >
        <img
          src={beforeSrc}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Labels (hidden if empty string passed) */}
      {beforeLabel && (
        <div className="absolute top-5 left-5 px-3 py-1.5 bg-background/80 backdrop-blur-sm text-[10px] uppercase tracking-[0.2em] font-medium text-foreground pointer-events-none">
          {beforeLabel}
        </div>
      )}
      {afterLabel && (
        <div className="absolute top-5 right-5 px-3 py-1.5 bg-foreground/80 backdrop-blur-sm text-[10px] uppercase tracking-[0.2em] font-medium text-background pointer-events-none">
          {afterLabel}
        </div>
      )}

      {/* Slider handle */}
      <motion.div
        className="absolute top-0 bottom-0 w-px bg-background pointer-events-none"
        style={{ left: `${position}%`, transform: "translateX(-50%)", boxShadow: "0 0 0 1px rgba(0,0,0,0.1)" }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background shadow-[0_4px_20px_rgba(0,0,0,0.25)] flex items-center justify-center"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-foreground">
            <path d="M7 5L3 10L7 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M13 5L17 10L13 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
