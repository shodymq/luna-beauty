"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/",        label: "Главная"  },
  { href: "/uslugi",  label: "Услуги"   },
  { href: "/gallery", label: "Галерея"  },
  { href: "/filialy", label: "Филиалы"  },
];

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const pathname                  = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position:   "fixed",
          top: 0, left: 0, right: 0,
          zIndex:     40,
          transition: "border-color 0.3s, background 0.3s",
          background: scrolled ? "rgba(20,20,20,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(200,181,96,0.15)" : "1px solid transparent",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 80px" }}>
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            height: 72,
          }}>
            {/* Logo */}
            <Link href="/" aria-label="Luna Beauty Salon — на главную" style={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/logo.jpg"
                alt="Luna Beauty Salon"
                width={48}
                height={48}
                style={{ objectFit: "contain", filter: "brightness(1.05)" }}
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav
              style={{ display: "flex", alignItems: "center", gap: 40 }}
              className="hidden-mobile"
              aria-label="Основная навигация"
            >
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      fontFamily:    "var(--font-inter), system-ui, sans-serif",
                      fontSize:      13,
                      fontWeight:    400,
                      letterSpacing: "0.08em",
                      color:         active ? "var(--color-gold)" : "var(--color-text-muted)",
                      textDecoration: "none",
                      transition:    "color 0.2s",
                      position:      "relative",
                      paddingBottom:  4,
                    }}
                    className={active ? "nav-active" : "nav-link"}
                  >
                    {link.label}
                    {active && (
                      <span style={{
                        position:   "absolute",
                        bottom:     0,
                        left:       0,
                        right:      0,
                        height:     1,
                        background: "var(--color-gold)",
                        opacity:    0.6,
                      }} />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile burger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: "var(--color-text-muted)", padding: 8,
                display: "none",
              }}
              className="show-mobile"
              aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        style={{
          position:  "fixed",
          inset:     0,
          zIndex:    30,
          background: "var(--color-bg)",
          display:   "flex",
          flexDirection: "column",
          opacity:   menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.3s",
        }}
        aria-hidden={!menuOpen}
      >
        {/* Top bar */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: 72, padding: "0 24px",
          borderBottom: "1px solid var(--color-border-soft)",
        }}>
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image src="/logo.jpg" alt="Luna Beauty Salon" width={40} height={40} style={{ objectFit: "contain" }} />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-text-muted)", padding: 8 }}
            aria-label="Закрыть меню"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Nav items */}
        <nav
          style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, gap: 40 }}
          aria-label="Мобильная навигация"
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily:    "var(--font-cormorant), Georgia, serif",
                fontSize:      "clamp(2rem, 8vw, 3rem)",
                fontWeight:    300,
                fontStyle:     "italic",
                color:         pathname === link.href ? "var(--color-gold)" : "var(--color-text)",
                textDecoration: "none",
                letterSpacing: "-0.01em",
                transition:    "color 0.2s",
                transitionDelay: menuOpen ? `${i * 50}ms` : "0ms",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div style={{ paddingBottom: 48, textAlign: "center" }}>
          <p style={{
            fontFamily:    "var(--font-inter), system-ui, sans-serif",
            fontSize:      12,
            color:         "var(--color-text-muted)",
            letterSpacing: "0.1em",
          }}>
            +7 777 183 8414
          </p>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
          header > div   { padding: 0 24px !important; }
        }
        .nav-link:hover { color: var(--color-text) !important; }
      `}</style>
    </>
  );
}
