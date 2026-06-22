"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Instagram, Phone, MessageCircle } from "lucide-react";
import { branches, brand, buildWhatsAppUrl } from "@/lib/data";

export default function Branches() {
  const reduce = useReducedMotion();

  return (
    <section
      style={{ padding: "120px 0", background: "var(--color-surface)" }}
      aria-label="Наши филиалы"
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 80px" }}>

        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: [0.25,0.1,0.25,1] }}
        >
          <div className="gold-divider" style={{ marginBottom: 16 }}>
            <div className="line" />
            <span className="label">Адреса</span>
            <div className="line" />
          </div>
          <h2 style={{
            fontFamily:    "var(--font-cormorant), Georgia, serif",
            fontWeight:    300,
            fontSize:      "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "-0.02em",
            color:         "var(--color-text)",
            margin:        "32px 0 56px",
          }}>
            Два филиала в Алматы
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {branches.map((b, i) => (
            <motion.div
              key={b.id}
              initial={reduce ? {} : { opacity: 0, y: 24 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, ease: [0.25,0.1,0.25,1], delay: i * 0.1 }}
            >
              <div className="branch-card">
                {/* Header */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 28 }}>
                  <div>
                    <p style={{
                      fontFamily:    "var(--font-inter)",
                      fontSize:      11,
                      fontWeight:    500,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color:         "var(--color-gold-muted)",
                      marginBottom:  6,
                    }}>
                      {b.name}
                    </p>
                    <h3 style={{
                      fontFamily:    "var(--font-cormorant), Georgia, serif",
                      fontWeight:    400,
                      fontSize:      26,
                      color:         "var(--color-text)",
                      letterSpacing: "-0.01em",
                    }}>
                      {b.city}
                    </h3>
                  </div>
                  <div style={{ width: 1, height: 48, background: "var(--color-border)" }} />
                </div>

                {/* Address */}
                <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
                  <MapPin size={14} strokeWidth={1.5} style={{ color: "var(--color-gold)", marginTop: 1, flexShrink: 0 }} />
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 300, color: "var(--color-text)" }}>
                    {b.address}
                  </p>
                </div>

                <div style={{ height: 1, background: "var(--color-border-soft)", marginBottom: 24 }} />

                {/* Links */}
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
                  <a
                    href={`https://instagram.com/${b.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--color-text-muted)", textDecoration: "none", fontSize: 13, fontWeight: 300, transition: "color 0.2s" }}
                    className="footer-link"
                  >
                    <Instagram size={13} strokeWidth={1.5} />
                    @{b.instagram}
                  </a>
                  {b.phone && (
                    <a
                      href={`tel:${b.phone.replace(/\s/g, "")}`}
                      style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--color-text-muted)", textDecoration: "none", fontSize: 13, fontWeight: 300, transition: "color 0.2s" }}
                      className="footer-link"
                    >
                      <Phone size={13} strokeWidth={1.5} />
                      {b.phone}
                    </a>
                  )}
                  <p style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--color-text-dim)", fontSize: 12, fontWeight: 300 }}>
                    <span style={{ color: "var(--color-gold-muted)" }}>—</span>
                    Режим работы: уточняйте по WhatsApp
                  </p>
                </div>

                {/* CTA */}
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "13px 24px" }}>
                    <MessageCircle size={13} />
                    Записаться
                  </a>
                  <a href={b.mapUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ padding: "12px 24px" }}>
                    <MapPin size={13} />
                    2GIS
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Phone */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 16 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          style={{ marginTop: 56, textAlign: "center" }}
        >
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, color: "var(--color-text-dim)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>
            Единый номер
          </p>
          <a
            href={`tel:${brand.phone.replace(/\s/g, "")}`}
            style={{
              fontFamily:    "var(--font-cormorant), Georgia, serif",
              fontWeight:    300,
              fontSize:      28,
              color:         "var(--color-text)",
              textDecoration: "none",
              transition:    "color 0.2s",
              letterSpacing: "-0.01em",
            }}
            className="footer-link"
          >
            {brand.phone}
          </a>
        </motion.div>
      </div>

      <style jsx global>{`
        .branch-card {
          background:  var(--color-bg);
          border:      1px solid var(--color-border-soft);
          padding:     40px;
          height:      100%;
          border-radius: 2px;
          transition:  border-color 0.2s;
        }
        .branch-card:hover { border-color: var(--color-gold-muted); }
        @media (max-width: 768px) {
          section[aria-label="Наши филиалы"] > div { padding: 0 24px !important; }
          section[aria-label="Наши филиалы"] { padding: 64px 0 !important; }
          section[aria-label="Наши филиалы"] > div > div[style*="grid"] { grid-template-columns: 1fr !important; }
          .branch-card { padding: 28px 24px !important; }
        }
      `}</style>
    </section>
  );
}
