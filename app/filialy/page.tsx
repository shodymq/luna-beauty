import type { Metadata } from "next";
import { MapPin, Instagram, Phone, MessageCircle, Clock } from "lucide-react";
import { branches, brand, buildWhatsAppUrl } from "@/lib/data";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title:       "Филиалы",
  description: "Два филиала Luna Beauty Salon в Алматы: ул. Акан серы, 55 и ул. Хаби Халиуллина, 140/9. Адреса, контакты, карты.",
};

export default function FiialyPage() {
  return (
    <>
      {/* Page header */}
      <div style={{
        paddingTop:    120,
        paddingBottom: 48,
        background:    "var(--color-bg)",
        borderBottom:  "1px solid var(--color-border-soft)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 80px" }}>
          <div className="gold-divider" style={{ maxWidth: 160, marginBottom: 24 }}>
            <div className="line" />
            <span className="label">Адреса</span>
            <div className="line" />
          </div>
          <h1 style={{
            fontFamily:    "var(--font-cormorant), Georgia, serif",
            fontWeight:    300,
            fontStyle:     "italic",
            fontSize:      "clamp(2.5rem, 5vw, 4rem)",
            letterSpacing: "-0.02em",
            color:         "var(--color-text)",
            marginBottom:  14,
          }}>
            Наши филиалы
          </h1>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 300, color: "var(--color-text-muted)" }}>
            Два салона в Алматы — выберите удобный
          </p>
        </div>
      </div>

      {/* Branches */}
      <section style={{ padding: "80px 0", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 80px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            {branches.map((b) => (
              <div
                key={b.id}
                style={{ display: "flex", flexDirection: "column", gap: 24 }}
              >
                {/* Info card */}
                <div style={{
                  background:   "var(--color-surface)",
                  border:       "1px solid var(--color-border-soft)",
                  padding:      "40px",
                  borderRadius: 2,
                }}>
                  <div className="gold-divider" style={{ marginBottom: 32 }}>
                    <div className="line" />
                    <span className="label">{b.name}</span>
                    <div className="line" />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 32 }}>
                    {/* Address */}
                    <Row icon={<MapPin size={14} strokeWidth={1.5} />} label="Адрес" value={`${b.city}, ${b.address}`} />

                    {/* Phone */}
                    <RowLink
                      icon={<Phone size={14} strokeWidth={1.5} />}
                      label="Телефон"
                      href={`tel:${(b.phone ?? brand.phone).replace(/\s/g, "")}`}
                      value={b.phone ?? brand.phone}
                    />

                    {/* Instagram */}
                    <RowLink
                      icon={<Instagram size={14} strokeWidth={1.5} />}
                      label="Instagram"
                      href={`https://instagram.com/${b.instagram}`}
                      value={`@${b.instagram}`}
                      external
                    />

                    {/* Hours */}
                    <Row icon={<Clock size={14} strokeWidth={1.5} />} label="Режим работы" value="Уточняйте по WhatsApp" dim />
                  </div>

                  <div style={{ height: 1, background: "var(--color-border-soft)", marginBottom: 28 }} />

                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "13px 24px", gap: 8 }}>
                      <MessageCircle size={13} /> Записаться
                    </a>
                    <a href={`https://instagram.com/${b.instagram}`} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ padding: "12px 20px", gap: 8 }}>
                      <Instagram size={13} /> Instagram
                    </a>
                    <a href={b.mapUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ padding: "12px 20px", gap: 8 }}>
                      <MapPin size={13} /> 2GIS
                    </a>
                  </div>
                </div>

                {/* Map placeholder */}
                <div style={{
                  background:   "var(--color-surface)",
                  border:       "1px solid var(--color-border-soft)",
                  height:       200,
                  borderRadius: 2,
                  display:      "flex",
                  alignItems:   "center",
                  justifyContent: "center",
                  position:     "relative",
                  overflow:     "hidden",
                }}>
                  {/* Dot grid */}
                  <div style={{
                    position: "absolute", inset: 0, opacity: 0.04,
                    backgroundImage:   "radial-gradient(var(--color-gold) 1px, transparent 1px)",
                    backgroundSize:    "24px 24px",
                  }} />
                  <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                    <MapPin size={20} strokeWidth={1} style={{ color: "var(--color-gold)", margin: "0 auto 10px", display: "block" }} />
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "var(--color-text-muted)", fontWeight: 300, marginBottom: 4 }}>
                      {b.city}, {b.address}
                    </p>
                    <a
                      href={b.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontFamily: "var(--font-inter)", fontSize: 11, color: "var(--color-gold)", textDecoration: "underline", letterSpacing: "0.05em" }}
                    >
                      Открыть в 2GIS →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />

      <style jsx global>{`
        @media (max-width: 768px) {
          section[style*="padding: 80px 0"] > div { padding: 0 24px !important; }
          section[style*="padding: 80px 0"] > div > div { grid-template-columns: 1fr !important; }
          div[style*="paddingTop: 120"] > div { padding: 0 24px !important; }
        }
      `}</style>
    </>
  );
}

function Row({ icon, label, value, dim }: { icon: React.ReactNode; label: string; value: string; dim?: boolean }) {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <span style={{ color: "var(--color-gold)", marginTop: 2, flexShrink: 0 }}>{icon}</span>
      <div>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: 10, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-text-dim)", marginBottom: 4 }}>
          {label}
        </p>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 300, color: dim ? "var(--color-text-muted)" : "var(--color-text)" }}>
          {value}
        </p>
      </div>
    </div>
  );
}

function RowLink({ icon, label, href, value, external }: { icon: React.ReactNode; label: string; href: string; value: string; external?: boolean }) {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <span style={{ color: "var(--color-gold)", marginTop: 2, flexShrink: 0 }}>{icon}</span>
      <div>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: 10, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-text-dim)", marginBottom: 4 }}>
          {label}
        </p>
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 300, color: "var(--color-text)", textDecoration: "none", transition: "color 0.2s" }}
          className="footer-link"
        >
          {value}
        </a>
      </div>
    </div>
  );
}
