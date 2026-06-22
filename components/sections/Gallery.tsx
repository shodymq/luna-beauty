"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram } from "lucide-react";
import { brand } from "@/lib/data";

const placeholders = [
  { id: 1, ratio: "3/4" },
  { id: 2, ratio: "4/3" },
  { id: 3, ratio: "3/4" },
  { id: 4, ratio: "4/3" },
  { id: 5, ratio: "3/4" },
  { id: 6, ratio: "4/3" },
  { id: 7, ratio: "4/3" },
  { id: 8, ratio: "3/4" },
  { id: 9, ratio: "4/3" },
  { id: 10, ratio: "3/4" },
  { id: 11, ratio: "4/3" },
  { id: 12, ratio: "3/4" },
];

export default function GalleryGrid() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div>
      {/* Instagram banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="bg-surface border border-border p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-body text-xs font-medium tracking-[0.15em] uppercase text-gold-muted mb-1">
              Следите за нашими работами
            </p>
            <h3 className="font-display text-2xl font-light italic text-text">
              Наши работы в Instagram
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`https://instagram.com/${brand.instagram1}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border text-text-muted font-body text-sm px-5 py-2.5 hover:border-gold/40 hover:text-text transition-all duration-200"
            >
              <Instagram size={14} strokeWidth={1.5} />
              @{brand.instagram1}
            </a>
            <a
              href={`https://instagram.com/${brand.instagram2}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border text-text-muted font-body text-sm px-5 py-2.5 hover:border-gold/40 hover:text-text transition-all duration-200"
            >
              <Instagram size={14} strokeWidth={1.5} />
              @{brand.instagram2}
            </a>
          </div>
        </div>
      </div>

      {/* Masonry grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="columns-2 lg:columns-4 gap-3 space-y-3">
          {placeholders.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="break-inside-avoid cursor-pointer"
              onClick={() => setSelected(item.id)}
            >
              <div
                className="bg-surface border border-border hover:border-gold/30 transition-all duration-300 group relative overflow-hidden"
                style={{ aspectRatio: item.ratio }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-px h-8 bg-gold/30 group-hover:bg-gold/60 transition-colors duration-300" />
                  <span className="font-body text-xs tracking-[0.15em] uppercase text-text-muted group-hover:text-gold transition-colors duration-300">
                    Фото скоро
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-bg/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 text-text-muted hover:text-gold transition-colors"
              aria-label="Закрыть"
              onClick={() => setSelected(null)}
            >
              <X size={22} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-surface border border-border w-full max-w-lg aspect-[4/3] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="w-px h-8 bg-gold/30 mx-auto mb-3" />
                <span className="font-body text-sm tracking-[0.15em] uppercase text-text-muted">
                  Фото скоро
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
