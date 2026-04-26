import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Photo } from "@/data/gallery";

interface LightboxProps {
  photos: Photo[];
  index: number | null;
  onClose: () => void;
  onNavigate: (i: number) => void;
}

export function Lightbox({ photos, index, onClose, onNavigate }: LightboxProps) {
  // Keyboard nav
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate((index - 1 + photos.length) % photos.length);
      if (e.key === "ArrowRight") onNavigate((index + 1) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, onClose, onNavigate, photos.length]);

  const photo = index !== null ? photos[index] : null;

  return (
    <AnimatePresence>
      {photo && index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] bg-foreground/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
          onClick={onClose}
        >
          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 h-12 w-12 inline-flex items-center justify-center text-background/80 hover:text-background transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index - 1 + photos.length) % photos.length);
            }}
            className="absolute left-2 md:left-6 h-12 w-12 inline-flex items-center justify-center text-background/80 hover:text-background transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index + 1) % photos.length);
            }}
            className="absolute right-2 md:right-6 h-12 w-12 inline-flex items-center justify-center text-background/80 hover:text-background transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>

          {/* Image */}
          <motion.img
            key={photo.src}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            src={photo.src}
            alt={photo.alt}
            className="max-h-full max-w-full object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Caption */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-background/70 text-[11px] uppercase tracking-[0.25em] pointer-events-none">
            {index + 1} / {photos.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
