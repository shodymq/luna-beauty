import type { Metadata } from "next";
import { MapPin, Instagram, Phone, MessageCircle, Clock } from "lucide-react";
import { branches, brand, buildWhatsAppUrl } from "@/lib/data";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Филиалы",
  description:
    "Два филиала Luna Beauty Salon в Алматы: ул. Акан серы, 55 и ул. Хаби Халиуллина, 140/9. Адреса, контакты, карты.",
};

export default function FiialyPage() {
  return (
    <>
      {/* Page header */}
      <div className="pt-28 lg:pt-36 pb-12 bg-bg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gold-divider max-w-xs mb-6">
            <span>Адреса</span>
          </div>
          <h1 className="font-display font-light italic text-5xl sm:text-6xl text-text">
            Наши филиалы
          </h1>
          <p className="font-body text-sm text-text-muted mt-4">
            Два салона в Алматы — выберите удобный
          </p>
        </div>
      </div>

      {/* Branches */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {branches.map((branch) => (
              <div key={branch.id} className="flex flex-col gap-8">
                {/* Branch info card */}
                <div className="bg-surface border border-border p-8 lg:p-10">
                  <div className="gold-divider mb-8">
                    <span>{branch.name}</span>
                  </div>

                  <div className="flex flex-col gap-5">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <MapPin size={18} strokeWidth={1.5} className="text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-body text-xs text-text-muted uppercase tracking-wide mb-1">
                          Адрес
                        </p>
                        <p className="font-body text-base text-text">
                          {branch.city}, {branch.address}
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    {branch.phone ? (
                      <div className="flex items-start gap-3">
                        <Phone size={18} strokeWidth={1.5} className="text-gold mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-body text-xs text-text-muted uppercase tracking-wide mb-1">
                            Телефон
                          </p>
                          <a
                            href={`tel:${branch.phone.replace(/\s/g, "")}`}
                            className="font-body text-base text-text hover:text-gold transition-colors duration-200"
                          >
                            {branch.phone}
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start gap-3">
                        <Phone size={18} strokeWidth={1.5} className="text-gold mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-body text-xs text-text-muted uppercase tracking-wide mb-1">
                            Телефон
                          </p>
                          <a
                            href={`tel:${brand.phone.replace(/\s/g, "")}`}
                            className="font-body text-base text-text hover:text-gold transition-colors duration-200"
                          >
                            {brand.phone}
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Instagram */}
                    <div className="flex items-start gap-3">
                      <Instagram size={18} strokeWidth={1.5} className="text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-body text-xs text-text-muted uppercase tracking-wide mb-1">
                          Instagram
                        </p>
                        <a
                          href={`https://instagram.com/${branch.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-base text-text hover:text-gold transition-colors duration-200"
                        >
                          @{branch.instagram}
                        </a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-3">
                      <Clock size={18} strokeWidth={1.5} className="text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-body text-xs text-text-muted uppercase tracking-wide mb-1">
                          Режим работы
                        </p>
                        <p className="font-body text-base text-text-muted">
                          Уточняйте по WhatsApp
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-border my-8" />

                  {/* CTA buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-gold text-bg font-body text-sm font-medium tracking-wide px-6 py-3 transition-all duration-200 hover:bg-gold/90"
                    >
                      <MessageCircle size={14} />
                      Записаться
                    </a>
                    <a
                      href={`https://instagram.com/${branch.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 border border-border text-text-muted font-body text-sm px-6 py-3 hover:border-gold/40 hover:text-text transition-all duration-200"
                    >
                      <Instagram size={14} />
                      Instagram
                    </a>
                    <a
                      href={branch.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 border border-border text-text-muted font-body text-sm px-6 py-3 hover:border-gold/40 hover:text-text transition-all duration-200"
                    >
                      <MapPin size={14} />
                      2GIS
                    </a>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="bg-surface border border-border h-56 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center z-10">
                    <MapPin size={24} strokeWidth={1} className="text-gold mx-auto mb-3" />
                    <p className="font-body text-sm text-text-muted mb-1">{branch.city}</p>
                    <p className="font-body text-xs text-text-muted/60">{branch.address}</p>
                    <a
                      href={branch.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 font-body text-xs text-gold hover:text-gold/80 transition-colors duration-200 underline underline-offset-2"
                    >
                      Открыть в 2GIS →
                    </a>
                  </div>
                  {/* Subtle grid pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "linear-gradient(var(--color-gold) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
