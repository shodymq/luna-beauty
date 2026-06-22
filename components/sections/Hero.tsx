"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { buildWhatsAppUrl } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bg"
      aria-label="Главный блок"
    >
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "256px 256px",
        }}
      />

      {/* Subtle radial gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,169,110,0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Top gold accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Category tag */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="gold-divider max-w-xs mx-auto mb-10"
        >
          <span>Алматы · 2 филиала</span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          custom={0.15}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-display font-light italic text-text leading-[0.9] mb-6"
          style={{ fontSize: "clamp(3.5rem, 10vw, 6rem)" }}
        >
          Luna{" "}
          <span className="text-gold not-italic font-light">Beauty</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          custom={0.3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-body font-light text-lg sm:text-xl text-text-muted tracking-wide mb-4"
        >
          Твой идеальный образ — у нас
        </motion.p>

        {/* Services row */}
        <motion.p
          custom={0.42}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-body text-xs font-medium tracking-[0.2em] uppercase text-gold-muted mb-12"
        >
          Маникюр · Волосы · Ресницы · Макияж · Массаж · Мужской зал
        </motion.p>

        {/* Gold divider line */}
        <motion.div
          custom={0.5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-4 max-w-sm mx-auto mb-12"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/40" />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          custom={0.6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-gold text-bg font-body text-sm font-medium tracking-wider px-8 py-3.5 transition-all duration-300 hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-px"
          >
            Записаться
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
          <Link
            href="/uslugi"
            className="inline-flex items-center gap-2 border border-gold/40 text-text font-body text-sm font-medium tracking-wider px-8 py-3.5 transition-all duration-300 hover:border-gold hover:text-gold hover:-translate-y-px"
          >
            Прайс
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span className="font-body text-[10px] tracking-[0.2em] uppercase text-text-muted">
          Листать
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/40 to-transparent" />
      </motion.div>
    </section>
  );
}
