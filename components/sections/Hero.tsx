"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/data";
import { fadeUp, fadeIn, arcFadeIn } from "@/lib/animations";

function LunaArc() {
  const radii = [40, 60, 80, 100, 120, 140];
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="luna-arc-bg"
      style={{
        width:    480,
        height:   480,
        top:      "50%",
        left:     "50%",
        transform: "translate(-50%, -50%)",
        opacity:  0.07,
      }}
      aria-hidden="true"
    >
      {radii.map((r, i) => (
        <path
          key={i}
          d={`M ${100 - r} 160 A ${r} ${r} 0 0 1 ${100 - r * 0.3} ${160 - r * 0.95}`}
          stroke="#C8B560"
          strokeWidth="1"
          opacity={0.9 - i * 0.12}
        />
      ))}
    </svg>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const v = (variants: object) => (reduce ? {} : variants);

  return (
    <section
      style={{
        position:       "relative",
        minHeight:      "100svh",
        display:        "flex",
        flexDirection:  "column",
        alignItems:     "center",
        justifyContent: "center",
        overflow:       "hidden",
        background:     "var(--color-bg)",
      }}
      aria-label="Главный блок"
    >
      {/* Grain overlay */}
      <div style={{
        position:       "absolute",
        inset:          0,
        pointerEvents:  "none",
        opacity:        0.03,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        backgroundSize: "256px 256px",
      }} />

      {/* Luna Arc */}
      <motion.div {...v(arcFadeIn)} style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <LunaArc />
      </motion.div>

      {/* Top accent line */}
      <div style={{
        position:   "absolute",
        top:        0, left: 0, right: 0,
        height:     1,
        background: "linear-gradient(90deg, transparent, rgba(200,181,96,0.4), transparent)",
      }} />

      {/* Content */}
      <div style={{
        position:  "relative",
        zIndex:    1,
        maxWidth:  800,
        width:     "100%",
        padding:   "0 24px",
        textAlign: "center",
      }}>

        {/* Gold divider label */}
        <motion.div {...v({ ...fadeUp, animate: { ...fadeUp.animate, transition: { duration: 0.45, ease: [0.25,0.1,0.25,1], delay: 0 } } })} initial="initial" animate="animate">
          <div className="gold-divider" style={{ maxWidth: 240, margin: "0 auto 48px" }}>
            <div className="line" />
            <span className="label">Алматы · 2 филиала</span>
            <div className="line" />
          </div>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.25,0.1,0.25,1], delay: 0 }}
          style={{
            fontFamily:    "var(--font-cormorant), Georgia, serif",
            fontWeight:    300,
            fontStyle:     "italic",
            fontSize:      "clamp(3.5rem, 10vw, 5.5rem)",
            letterSpacing: "-0.02em",
            color:         "var(--color-text)",
            lineHeight:    0.95,
            marginBottom:  20,
          }}
        >
          Luna{" "}
          <span style={{ color: "var(--color-gold)", fontStyle: "normal" }}>Beauty</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.25,0.1,0.25,1], delay: 0.15 }}
          style={{
            fontFamily:    "var(--font-inter), system-ui, sans-serif",
            fontWeight:    300,
            fontSize:      17,
            color:         "var(--color-text-muted)",
            letterSpacing: "0.01em",
            marginBottom:  16,
          }}
        >
          Твой идеальный образ — у нас
        </motion.p>

        {/* Services row */}
        <motion.p
          initial={reduce ? {} : { opacity: 0 }}
          animate={reduce ? {} : { opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
          style={{
            fontFamily:    "var(--font-inter), system-ui, sans-serif",
            fontWeight:    400,
            fontSize:      11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color:         "var(--color-gold-muted)",
            marginBottom:  48,
          }}
        >
          Маникюр · Волосы · Ресницы · Макияж · Массаж · Мужской зал
        </motion.p>

        {/* Thin gold diamond divider */}
        <motion.div
          initial={reduce ? {} : { opacity: 0 }}
          animate={reduce ? {} : { opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
          style={{ display: "flex", alignItems: "center", gap: 12, maxWidth: 200, margin: "0 auto 48px" }}
        >
          <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(200,181,96,0.35))" }} />
          <div style={{ width: 5, height: 5, background: "var(--color-gold)", transform: "rotate(45deg)", opacity: 0.6 }} />
          <div style={{ flex: 1, height: 1, background: "linear-gradient(270deg, transparent, rgba(200,181,96,0.35))" }} />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={reduce ? {} : { opacity: 0 }}
          animate={reduce ? {} : { opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.45 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}
        >
          <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Записаться
          </a>
          <Link href="/uslugi" className="btn-ghost">
            Прайс
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position:  "absolute",
        bottom:    32,
        left:      "50%",
        transform: "translateX(-50%)",
        display:   "flex",
        flexDirection: "column",
        alignItems: "center",
        gap:       8,
        opacity:   0.4,
      }}>
        <p style={{
          fontFamily:    "var(--font-inter)",
          fontSize:      10,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color:         "var(--color-text-muted)",
        }}>
          Листать
        </p>
        <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, var(--color-gold-muted), transparent)" }} />
      </div>
    </section>
  );
}
