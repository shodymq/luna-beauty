"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { servicePreview, buildWhatsAppUrlForService } from "@/lib/data";
import { stagger, staggerItem } from "@/lib/animations";

export default function Services() {
  const reduce = useReducedMotion();

  return (
    <section
      style={{
        padding:    "120px 0",
        background: "var(--color-bg)",
      }}
      aria-label="Услуги"
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 80px" }}>

        {/* Section header */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: [0.25,0.1,0.25,1] }}
        >
          <div className="gold-divider" style={{ marginBottom: 16 }}>
            <div className="line" />
            <span className="label">Услуги</span>
            <div className="line" />
          </div>
        </motion.div>

        <div style={{
          display:        "flex",
          alignItems:     "flex-end",
          justifyContent: "space-between",
          margin:         "32px 0 56px",
          gap:            16,
          flexWrap:       "wrap",
        }}>
          <motion.h2
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, ease: [0.25,0.1,0.25,1], delay: 0.05 }}
            style={{
              fontFamily:    "var(--font-cormorant), Georgia, serif",
              fontWeight:    300,
              fontSize:      "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
              color:         "var(--color-text)",
              lineHeight:    1.1,
            }}
          >
            Что мы делаем
          </motion.h2>

          <Link
            href="/uslugi"
            style={{
              fontFamily:    "var(--font-inter), system-ui, sans-serif",
              fontSize:      11,
              fontWeight:    400,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color:         "var(--color-gold)",
              textDecoration: "none",
              transition:    "color 0.2s",
            }}
            className="footer-link"
          >
            Смотреть полный прайс →
          </Link>
        </div>

        {/* Grid */}
        <motion.div
          variants={reduce ? {} : stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.15 }}
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap:                 1,
            background:          "var(--color-border-soft)",
          }}
        >
          {servicePreview.map((svc) => (
            <motion.div key={svc.id} variants={reduce ? {} : staggerItem}>
              <a
                href={buildWhatsAppUrlForService(svc.title)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", textDecoration: "none" }}
                className="service-card"
              >
                <div className="service-card-inner">
                  <div style={{ marginBottom: 24 }}>
                    <h3 style={{
                      fontFamily:    "var(--font-cormorant), Georgia, serif",
                      fontWeight:    400,
                      fontSize:      22,
                      color:         "var(--color-text)",
                      marginBottom:  8,
                      transition:    "color 0.2s",
                    }}
                      className="service-title"
                    >
                      {svc.title}
                    </h3>
                    <p style={{
                      fontFamily:  "var(--font-inter), system-ui, sans-serif",
                      fontSize:    13,
                      fontWeight:  300,
                      color:       "var(--color-text-muted)",
                      lineHeight:  1.65,
                    }}>
                      {svc.description}
                    </p>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{
                      fontFamily:    "var(--font-inter), system-ui, sans-serif",
                      fontSize:      13,
                      fontWeight:    400,
                      color:         "var(--color-gold)",
                      letterSpacing: "0.02em",
                    }}>
                      {svc.priceFrom}
                    </span>
                    <span style={{
                      fontFamily:    "var(--font-inter)",
                      fontSize:      11,
                      color:         "var(--color-text-dim)",
                      letterSpacing: "0.05em",
                      transition:    "color 0.2s, transform 0.2s",
                    }}
                      className="service-arrow"
                    >
                      →
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        .service-card-inner {
          background:  var(--color-surface);
          padding:     40px;
          height:      100%;
          transition:  background 0.2s;
          border-left: 2px solid transparent;
        }
        .service-card:hover .service-card-inner {
          background:  var(--color-surface-2);
          border-left-color: var(--color-gold-muted);
        }
        .service-card:hover .service-title  { color: var(--color-gold) !important; }
        .service-card:hover .service-arrow  { color: var(--color-gold) !important; transform: translateX(4px); }
        @media (max-width: 900px) {
          .service-card-inner { padding: 28px 24px; }
        }
        @media (max-width: 640px) {
          section[aria-label="Услуги"] > div { padding: 0 24px !important; }
          section[aria-label="Услуги"] { padding: 64px 0 !important; }
          section[aria-label="Услуги"] .service-card-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
