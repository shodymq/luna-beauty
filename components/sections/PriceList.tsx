"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { priceFilial1, priceFilial2, type PriceCategory, buildWhatsAppUrlForService } from "@/lib/data";
import { stagger, priceRowVariant } from "@/lib/animations";

function CategoryBlock({ cat }: { cat: PriceCategory }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? {} : { opacity: 0, y: 20 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, ease: [0.25,0.1,0.25,1] }}
      style={{ marginBottom: 48 }}
    >
      {/* Category header */}
      <div className="gold-divider" style={{ marginBottom: 8 }}>
        <div className="line" />
        <span className="label">{cat.category}</span>
        <div className="line" />
      </div>

      {cat.subtitle && (
        <p style={{
          fontFamily:    "var(--font-inter)",
          fontSize:      11,
          fontWeight:    300,
          color:         "var(--color-text-dim)",
          textAlign:     "center",
          letterSpacing: "0.08em",
          marginBottom:  20,
          marginTop:     8,
        }}>
          {cat.subtitle}
        </p>
      )}

      {/* Price rows */}
      <motion.div
        variants={reduce ? {} : stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
      >
        {cat.items.map((item, i) => (
          <motion.a
            key={i}
            href={buildWhatsAppUrlForService(item.name)}
            target="_blank"
            rel="noopener noreferrer"
            variants={reduce ? {} : priceRowVariant}
            className="price-row"
            style={{ display: "flex" }}
          >
            <span className="name">{item.name}</span>
            <span className="price">{item.price}</span>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function PriceList() {
  const [tab, setTab]      = useState<"fil1" | "fil2">("fil1");
  const [catFilter, setCat] = useState<string>("all");

  const price      = tab === "fil1" ? priceFilial1 : priceFilial2;
  const categories = price.map((c) => c.category);
  const filtered   = catFilter === "all" ? price : price.filter((c) => c.category === catFilter);

  return (
    <div>
      {/* Branch tabs — sticky */}
      <div style={{
        position:   "sticky",
        top:        72,
        zIndex:     20,
        background: "rgba(20,20,20,0.97)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--color-border-soft)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 80px" }}>
          <div role="tablist" aria-label="Выбор филиала" style={{ display: "flex" }}>
            {([
              { id: "fil1" as const, label: "Филиал 1 — Акан серы" },
              { id: "fil2" as const, label: "Филиал 2 — Хаби Халиуллина" },
            ] as const).map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => { setTab(t.id); setCat("all"); }}
                style={{
                  background:    "none",
                  border:        "none",
                  cursor:        "pointer",
                  padding:       "18px 32px 17px",
                  fontFamily:    "var(--font-inter), system-ui, sans-serif",
                  fontSize:      12,
                  fontWeight:    400,
                  letterSpacing: "0.08em",
                  color:         tab === t.id ? "var(--color-gold)" : "var(--color-text-muted)",
                  position:      "relative",
                  transition:    "color 0.2s",
                  textTransform: "uppercase",
                }}
              >
                {t.label}
                {tab === t.id && (
                  <span style={{
                    position:   "absolute",
                    bottom:     0,
                    left:       0,
                    right:      0,
                    height:     1,
                    background: "var(--color-gold)",
                  }} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category chips */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 80px" }}>
        <div
          className="chips-scroll"
          style={{
            display:        "flex",
            gap:            8,
            padding:        "20px 0",
            overflowX:      "auto",
          }}
          role="group"
          aria-label="Фильтр категорий"
        >
          {["all", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setCat(cat)}
              style={{
                flexShrink:    0,
                background:    "none",
                cursor:        "pointer",
                fontFamily:    "var(--font-inter), system-ui, sans-serif",
                fontSize:      11,
                fontWeight:    400,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding:       "8px 16px",
                border:        catFilter === cat
                  ? "1px solid var(--color-gold)"
                  : "1px solid var(--color-border)",
                color: catFilter === cat ? "var(--color-gold)" : "var(--color-text-muted)",
                background: catFilter === cat ? "var(--color-gold-faint)" : "transparent",
                borderRadius: 2,
                transition:    "border-color 0.2s, color 0.2s",
              }}
            >
              {cat === "all" ? "Все услуги" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price list */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 80px 120px" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={tab + catFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {filtered.map((cat) => (
              <CategoryBlock key={cat.category} cat={cat} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          div[role="tablist"] button { padding: 16px 16px 15px !important; font-size: 11px !important; }
        }
        @media (max-width: 640px) {
          div[aria-label="Фильтр категорий"] { padding: 16px 24px !important; }
          div[style*="maxWidth: 1200"] { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </div>
  );
}
