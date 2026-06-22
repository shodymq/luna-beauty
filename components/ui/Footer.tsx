import Link from "next/link";
import { Instagram, Phone, MapPin } from "lucide-react";
import { brand, branches } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex flex-col leading-none mb-4">
              <span className="font-display text-3xl font-light tracking-[0.2em] text-text">LUNA</span>
              <span className="font-body text-[9px] font-medium tracking-[0.35em] text-gold-muted uppercase mt-[-2px]">
                Beauty Salon
              </span>
            </Link>
            <p className="font-body text-sm text-text-muted leading-relaxed mt-4">
              {brand.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-body text-xs font-medium tracking-[0.15em] uppercase text-gold mb-5">
              Навигация
            </h3>
            <nav className="flex flex-col gap-3" aria-label="Навигация в футере">
              {[
                { href: "/", label: "Главная" },
                { href: "/uslugi", label: "Услуги и прайс" },
                { href: "/gallery", label: "Галерея" },
                { href: "/filialy", label: "Филиалы" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-text-muted hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-body text-xs font-medium tracking-[0.15em] uppercase text-gold mb-5">
              Контакты
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href={`tel:${brand.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 font-body text-sm text-text-muted hover:text-gold transition-colors duration-200"
              >
                <Phone size={14} strokeWidth={1.5} />
                {brand.phone}
              </a>
              <a
                href={`https://instagram.com/${brand.instagram1}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-text-muted hover:text-gold transition-colors duration-200"
              >
                <Instagram size={14} strokeWidth={1.5} />
                @{brand.instagram1}
              </a>
              <a
                href={`https://instagram.com/${brand.instagram2}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-text-muted hover:text-gold transition-colors duration-200"
              >
                <Instagram size={14} strokeWidth={1.5} />
                @{brand.instagram2}
              </a>
            </div>
          </div>

          {/* Branches */}
          <div>
            <h3 className="font-body text-xs font-medium tracking-[0.15em] uppercase text-gold mb-5">
              Филиалы
            </h3>
            <div className="flex flex-col gap-5">
              {branches.map((b) => (
                <div key={b.id} className="flex gap-2">
                  <MapPin size={14} strokeWidth={1.5} className="text-gold-muted mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-body text-sm text-text font-medium">{b.name}</p>
                    <p className="font-body text-xs text-text-muted mt-0.5">
                      {b.city}, {b.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-text-muted">
            © {year} Luna Beauty Salon. Алматы
          </p>
          <p className="font-body text-xs text-text-muted">
            Режим работы: уточняйте по WhatsApp
          </p>
        </div>
      </div>
    </footer>
  );
}
