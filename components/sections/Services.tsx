"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { servicePreview, buildWhatsAppUrlForService } from "@/lib/data";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.08 },
  }),
};

export default function Services() {
  return (
    <section className="py-24 lg:py-32 bg-bg" aria-label="Наши услуги">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="gold-divider mb-4">
          <span>Услуги</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 mt-8 gap-4">
          <h2 className="font-display font-light italic text-4xl sm:text-5xl text-text">
            Что мы делаем
          </h2>
          <Link
            href="/uslugi"
            className="inline-flex items-center gap-2 font-body text-sm text-gold hover:text-gold/80 transition-colors duration-200 group"
          >
            Смотреть полный прайс
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {servicePreview.map((service, i) => (
            <motion.div
              key={service.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <a
                href={buildWhatsAppUrlForService(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-surface p-8 lg:p-10 h-full transition-colors duration-300 hover:bg-[#1a1a1a] relative overflow-hidden"
              >
                {/* Gold left border on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-bottom" />

                <div className="mb-6">
                  <h3 className="font-display text-2xl font-medium text-text group-hover:text-gold transition-colors duration-200 mb-2">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-body text-sm font-medium text-gold">
                    {service.priceFrom}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-text-muted group-hover:text-gold group-hover:translate-x-1 transition-all duration-200"
                  />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
