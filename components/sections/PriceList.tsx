"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { priceFilial1, priceFilial2, type PriceCategory, buildWhatsAppUrlForService } from "@/lib/data";

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut", delay: i * 0.04 },
  }),
};

function CategorySection({
  category,
  globalIndex,
}: {
  category: PriceCategory;
  globalIndex: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: globalIndex * 0.05 }}
      className="mb-12"
    >
      {/* Category header — signature gold divider */}
      <div className="gold-divider mb-6">
        <span>{category.category}</span>
      </div>

      {category.subtitle && (
        <p className="font-body text-xs text-text-muted text-center mb-6 tracking-wide">
          {category.subtitle}
        </p>
      )}

      {/* Price rows */}
      <div className="space-y-0">
        {category.items.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <a
              href={buildWhatsAppUrlForService(item.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-baseline py-3 border-b border-border/60 group hover:border-gold/30 transition-colors duration-200"
            >
              <span className="font-body text-sm text-text group-hover:text-gold/90 transition-colors duration-200 min-w-0">
                {item.name}
              </span>
              <span className="price-dots flex-shrink-0 mx-3" />
              <span className="font-body text-sm font-medium text-gold whitespace-nowrap flex-shrink-0">
                {item.price}
              </span>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function PriceList() {
  const [activeTab, setActiveTab] = useState<"fil1" | "fil2">("fil1");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const currentPrice = activeTab === "fil1" ? priceFilial1 : priceFilial2;
  const categories = currentPrice.map((c) => c.category);
  const filtered =
    activeCategory === "all"
      ? currentPrice
      : currentPrice.filter((c) => c.category === activeCategory);

  return (
    <div>
      {/* Branch tabs — sticky */}
      <div className="sticky top-16 lg:top-20 z-20 bg-bg/95 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex" role="tablist" aria-label="Выбор филиала">
            {[
              { id: "fil1" as const, label: "Филиал 1 — Акан серы" },
              { id: "fil2" as const, label: "Филиал 2 — Хаби Халиуллина" },
            ].map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setActiveCategory("all");
                }}
                className={[
                  "flex-1 sm:flex-none sm:px-8 py-4 font-body text-sm font-medium tracking-wide transition-colors duration-200 relative",
                  activeTab === tab.id
                    ? "text-gold"
                    : "text-text-muted hover:text-text",
                ].join(" ")}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-px bg-gold"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category filter chips */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        <div
          className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
          role="group"
          aria-label="Фильтр по категориям"
          style={{ scrollbarWidth: "none" }}
        >
          <button
            onClick={() => setActiveCategory("all")}
            className={[
              "flex-shrink-0 font-body text-xs font-medium tracking-wide px-4 py-2 border transition-all duration-200",
              activeCategory === "all"
                ? "border-gold text-gold bg-gold/5"
                : "border-border text-text-muted hover:border-gold/40 hover:text-text",
            ].join(" ")}
          >
            Все услуги
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={[
                "flex-shrink-0 font-body text-xs font-medium tracking-wide px-4 py-2 border transition-all duration-200",
                activeCategory === cat
                  ? "border-gold text-gold bg-gold/5"
                  : "border-border text-text-muted hover:border-gold/40 hover:text-text",
              ].join(" ")}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price list */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {filtered.map((category, i) => (
              <CategorySection key={category.category} category={category} globalIndex={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
