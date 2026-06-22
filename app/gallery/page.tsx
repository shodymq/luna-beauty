import type { Metadata } from "next";
import GalleryGrid from "@/components/sections/Gallery";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title:       "Галерея",
  description: "Работы мастеров Luna Beauty Salon Алматы. Маникюр, наращивание ресниц, окрашивание волос, макияж, массаж.",
};

export default function GalleryPage() {
  return (
    <>
      <div style={{
        paddingTop:    120,
        paddingBottom: 48,
        background:    "var(--color-bg)",
        borderBottom:  "1px solid var(--color-border-soft)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 80px" }}>
          <div className="gold-divider" style={{ maxWidth: 180, marginBottom: 24 }}>
            <div className="line" />
            <span className="label">Портфолио</span>
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
            Галерея работ
          </h1>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 300, color: "var(--color-text-muted)" }}>
            Актуальные работы смотрите в наших Instagram-аккаунтах
          </p>
        </div>
      </div>

      <GalleryGrid />
      <CTA />

      <style jsx global>{`
        @media (max-width: 640px) {
          div[style*="paddingTop: 120"] > div { padding: 0 24px !important; }
        }
      `}</style>
    </>
  );
}
