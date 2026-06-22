import type { Metadata } from "next";
import PriceList from "@/components/sections/PriceList";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Услуги и прайс",
  description:
    "Полный прайс-лист Luna Beauty Salon Алматы. Маникюр, педикюр, наращивание ресниц, волосы, макияж, массаж, мужской зал. Два филиала.",
};

export default function UslugiPage() {
  return (
    <>
      {/* Page header */}
      <div className="pt-28 lg:pt-36 pb-12 bg-bg border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="gold-divider max-w-xs mb-6">
            <span>Прайс-лист</span>
          </div>
          <h1 className="font-display font-light italic text-5xl sm:text-6xl text-text">
            Услуги и цены
          </h1>
          <p className="font-body text-sm text-text-muted mt-4">
            Нажмите на любую услугу, чтобы записаться через WhatsApp
          </p>
        </div>
      </div>

      <PriceList />
      <CTA />
    </>
  );
}
