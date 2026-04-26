import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIES, PHOTOS, type Category } from "@/data/gallery";
import { cn, EASE } from "@/lib/utils";
import { Lightbox } from "./Lightbox";

type Filter = "All" | Category;

export function FilterableGallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (filter === "All") return PHOTOS;
    return PHOTOS.filter((p) => p.categories.includes(filter));
  }, [filter]);

  return (
    <>
      {/* Filter chips */}
      <div className="flex flex-wrap gap-2 mb-12 justify-center">
        {(["All", ...CATEGORIES] as Filter[]).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "px-5 py-2.5 text-[10px] uppercase tracking-[0.25em] font-medium transition-all duration-300 border",
              filter === cat
                ? "bg-foreground text-background border-foreground"
                : "bg-transparent text-foreground/70 border-foreground/20 hover:border-foreground hover:text-foreground"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((photo, idx) => (
            <motion.button
              key={photo.src}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.5, ease: EASE }}
              onClick={() => setLightboxIndex(idx)}
              className={cn(
                "cinematic-image-container group relative overflow-hidden cursor-pointer",
                idx % 7 === 0 ? "row-span-2 aspect-[3/5]" : "aspect-[4/5]"
              )}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="cinematic-image"
              />
              {/* hover overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500 flex items-end p-4">
                <span className="text-background text-[10px] uppercase tracking-[0.25em] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  View
                </span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <Lightbox
        photos={filtered}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(i) => setLightboxIndex(i)}
      />
    </>
  );
}
