"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, Instagram } from "lucide-react";
import { brand } from "@/lib/data";

const placeholders = [
  { id: 1,  ratio: "3/4" },
  { id: 2,  ratio: "4/3" },
  { id: 3,  ratio: "3/4" },
  { id: 4,  ratio: "4/3" },
  { id: 5,  ratio: "3/4" },
  { id: 6,  ratio: "4/3" },
  { id: 7,  ratio: "4/3" },
  { id: 8,  ratio: "3/4" },
  { id: 9,  ratio: "4/3" },
  { id: 10, ratio: "3/4" },
  { id: 11, ratio: "4/3" },
  { id: 12, ratio: "3/4" },
];

export default function GalleryGrid() {
  const [selected, setSelected] = useState<number | null>(null);
  const reduce                  = useReducedMotion();

  return (
    <div>
      {/* Instagram banner */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 80px 32px" }}>
        <div style={{
          background:   "var(--color-surface)",
          border:       "1px solid var(--color-border-soft)",
          padding:      "28px 32px",
          display:      "flex",
          alignItems:   "center",
          justifyContent: "space-between",
          gap:          24,
          flexWrap:     "wrap",
          borderRadius: 2,
        }}>
          <div>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-gold-muted)", marginBottom: 6 }}>
              Следите за нашими работами
            </p>
            <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300, fontSize: 24, color: "var(--color-text)" }}>
              Наши работы в Instagram
            </h3>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[brand.instagram1, brand.instagram2].map((acc) => (
              <a
                key={acc}
                href={`https://instagram.com/${acc}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ padding: "11px 20px", gap: 8 }}
              >
                <Instagram size={12} strokeWidth={1.5} />
                @{acc}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Masonry */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 80px 120px" }}>
        <div style={{
          columns:      "4",
          gap:          "12px",
          columnFill:   "balance",
        }}>
          {placeholders.map((item, i) => (
            <motion.div
              key={item.id}
              initial={reduce ? {} : { opacity: 0, y: 16 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              style={{
                breakInside: "avoid",
                marginBottom: 12,
                cursor:      "pointer",
              }}
              onClick={() => setSelected(item.id)}
            >
              <div
                className="gallery-cell"
                style={{ aspectRatio: item.ratio }}
              >
                <div style={{
                  display:        "flex",
                  flexDirection:  "column",
                  alignItems:     "center",
                  justifyContent: "center",
                  gap:            10,
                  height:         "100%",
                }}>
                  <div style={{ width: 1, height: 28, background: "var(--color-gold-muted)", opacity: 0.5 }} />
                  <span style={{
                    fontFamily:    "var(--font-inter)",
                    fontSize:      10,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color:         "var(--color-text-dim)",
                  }}>
                    Фото скоро
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={reduce ? {} : { opacity: 0 }}
            animate={reduce ? {} : { opacity: 1 }}
            exit={reduce ? {} : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position:       "fixed",
              inset:          0,
              zIndex:         50,
              background:     "rgba(20,20,20,0.95)",
              backdropFilter: "blur(8px)",
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              padding:        24,
            }}
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Закрыть"
              style={{
                position:   "absolute",
                top:        20,
                right:      20,
                background: "none",
                border:     "none",
                cursor:     "pointer",
                color:      "var(--color-text-muted)",
                padding:    8,
                transition: "color 0.2s",
              }}
              className="footer-link"
            >
              <X size={18} strokeWidth={1.5} />
            </button>

            <motion.div
              initial={reduce ? {} : { scale: 0.95, opacity: 0 }}
              animate={reduce ? {} : { scale: 1,    opacity: 1 }}
              exit={reduce ? {} : { scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{
                background:   "var(--color-surface)",
                border:       "1px solid var(--color-border-soft)",
                width:        "100%",
                maxWidth:     480,
                aspectRatio:  "4/3",
                display:      "flex",
                alignItems:   "center",
                justifyContent: "center",
                borderRadius: 2,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ textAlign: "center" }}>
                <div style={{ width: 1, height: 28, background: "var(--color-gold-muted)", opacity: 0.4, margin: "0 auto 12px" }} />
                <span style={{ fontFamily: "var(--font-inter)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-text-dim)" }}>
                  Фото скоро
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .gallery-cell {
          background:  var(--color-surface);
          border:      1px solid var(--color-border-soft);
          border-radius: 2px;
          overflow:    hidden;
          transition:  border-color 0.2s;
        }
        .gallery-cell:hover { border-color: var(--color-gold-muted); }
        @media (max-width: 900px) {
          div[style*="columns: 4"] { columns: 2 !important; }
        }
        @media (max-width: 640px) {
          div[style*="padding: 0 80px 120px"] { padding: 0 24px 64px !important; }
          div[style*="padding: 40px 80px"] { padding: 24px 24px 16px !important; }
        }
      `}</style>
    </div>
  );
}
