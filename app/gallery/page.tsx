import type { Metadata } from "next";
import GalleryGrid from "@/components/sections/Gallery";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Галерея",
  description:
    "Работы мастеров Luna Beauty Salon Алматы. Маникюр, наращивание ресниц, окрашивание волос, макияж, массаж.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Page header */}
      <div className="pt-28 lg:pt-36 pb-12 bg-bg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gold-divider max-w-xs mb-6">
            <span>Портфолио</span>
          </div>
          <h1 className="font-display font-light italic text-5xl sm:text-6xl text-text">
            Галерея работ
          </h1>
          <p className="font-body text-sm text-text-muted mt-4">
            Актуальные работы смотрите в наших Instagram-аккаунтах
          </p>
        </div>
      </div>

      <GalleryGrid />
      <CTA />
    </>
  );
}
