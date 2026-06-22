"use client";

import { motion, useReducedMotion } from "framer-motion";
import { buildWhatsAppUrl, brand } from "@/lib/data";

export default function CTA() {
  const reduce = useReducedMotion();

  return (
    <section
      style={{
        padding:    "120px 0",
        background: "var(--color-bg)",
        position:   "relative",
        overflow:   "hidden",
      }}
      aria-label="Запись"
    >
      {/* Accent lines */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(200,181,96,0.2), transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(200,181,96,0.2), transparent)" }} />

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 24 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.25,0.1,0.25,1] }}
        >
          <div className="gold-divider" style={{ maxWidth: 200, margin: "0 auto 40px" }}>
            <div className="line" />
            <span className="label">Запись</span>
            <div className="line" />
          </div>

          <h2 style={{
            fontFamily:    "var(--font-cormorant), Georgia, serif",
            fontWeight:    300,
            fontStyle:     "italic",
            fontSize:      "clamp(2.2rem, 5vw, 3.5rem)",
            letterSpacing: "-0.02em",
            color:         "var(--color-text)",
            lineHeight:    1.1,
            marginBottom:  20,
          }}>
            Запишись прямо сейчас
          </h2>

          <p style={{
            fontFamily:  "var(--font-inter), system-ui, sans-serif",
            fontSize:    14,
            fontWeight:  300,
            color:       "var(--color-text-muted)",
            lineHeight:  1.7,
            maxWidth:    400,
            margin:      "0 auto 48px",
          }}>
            Напишите нам в WhatsApp — подберём удобное время и ответим на любые вопросы.
          </p>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
            <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ gap: 10 }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Написать в WhatsApp
            </a>
            <a
              href={`tel:${brand.phone.replace(/\s/g, "")}`}
              style={{
                fontFamily:    "var(--font-inter), system-ui, sans-serif",
                fontSize:      13,
                fontWeight:    300,
                color:         "var(--color-text-muted)",
                textDecoration: "none",
                letterSpacing: "0.02em",
                transition:    "color 0.2s",
              }}
              className="footer-link"
            >
              {brand.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
