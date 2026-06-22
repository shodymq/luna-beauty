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
      <div className="page-header">
        <div className="page-header-inner">
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
    </>
  );
}
