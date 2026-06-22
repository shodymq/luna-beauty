import type { Metadata } from "next";
import PriceList from "@/components/sections/PriceList";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title:       "Услуги и прайс",
  description: "Полный прайс-лист Luna Beauty Salon Алматы. Маникюр, педикюр, наращивание ресниц, волосы, макияж, массаж, мужской зал. Два филиала.",
};

export default function UslugiPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-header-inner price-header-inner">
          <div className="gold-divider" style={{ maxWidth: 200, marginBottom: 24 }}>
            <div className="line" />
            <span className="label">Прайс-лист</span>
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
            Услуги и цены
          </h1>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 300, color: "var(--color-text-muted)" }}>
            Нажмите на любую услугу, чтобы записаться через WhatsApp
          </p>
        </div>
      </div>

      <PriceList />
      <CTA />
    </>
  );
}
