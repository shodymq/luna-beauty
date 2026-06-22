"use client";

import { motion } from "framer-motion";
import { MapPin, Instagram, Phone, MessageCircle, ExternalLink } from "lucide-react";
import { branches, brand, buildWhatsAppUrl } from "@/lib/data";

export default function Branches() {
  return (
    <section className="py-24 lg:py-32 bg-surface" aria-label="Наши филиалы">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gold-divider mb-4">
          <span>Адреса</span>
        </div>
        <h2 className="font-display font-light italic text-4xl sm:text-5xl text-text mb-16 mt-8">
          Два филиала в Алматы
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {branches.map((branch, i) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.12 }}
              className="bg-bg border border-border p-8 lg:p-10 group hover:border-gold/30 transition-colors duration-300"
            >
              {/* Branch name */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="font-body text-xs font-medium tracking-[0.15em] uppercase text-gold-muted mb-2 block">
                    {branch.name}
                  </span>
                  <h3 className="font-display text-2xl font-medium text-text">
                    {branch.city}
                  </h3>
                </div>
                <div className="w-px h-12 bg-gold/20 group-hover:bg-gold/50 transition-colors duration-300" />
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 mb-6">
                <MapPin size={16} strokeWidth={1.5} className="text-gold mt-0.5 flex-shrink-0" />
                <p className="font-body text-base text-text">{branch.address}</p>
              </div>

              {/* Divider */}
              <div className="h-px bg-border mb-6" />

              {/* Links */}
              <div className="flex flex-col gap-3 mb-8">
                <a
                  href={`https://instagram.com/${branch.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body text-sm text-text-muted hover:text-gold transition-colors duration-200"
                >
                  <Instagram size={14} strokeWidth={1.5} />
                  @{branch.instagram}
                </a>
                {branch.phone && (
                  <a
                    href={`tel:${branch.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 font-body text-sm text-text-muted hover:text-gold transition-colors duration-200"
                  >
                    <Phone size={14} strokeWidth={1.5} />
                    {branch.phone}
                  </a>
                )}
                <p className="flex items-center gap-2 font-body text-xs text-text-muted">
                  <ExternalLink size={12} strokeWidth={1.5} className="text-gold-muted" />
                  Режим работы: уточняйте по WhatsApp
                </p>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gold text-bg font-body text-sm font-medium tracking-wide px-5 py-2.5 transition-all duration-200 hover:bg-gold/90"
                >
                  <MessageCircle size={14} />
                  Записаться
                </a>
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-border text-text-muted font-body text-sm font-medium tracking-wide px-5 py-2.5 transition-all duration-200 hover:border-gold/40 hover:text-text"
                >
                  <MapPin size={14} />
                  2GIS
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="font-body text-sm text-text-muted mb-2">Единый номер</p>
          <a
            href={`tel:${brand.phone.replace(/\s/g, "")}`}
            className="font-display text-2xl font-light text-text hover:text-gold transition-colors duration-200"
          >
            {brand.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
