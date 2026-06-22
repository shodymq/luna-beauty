"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/uslugi", label: "Услуги" },
  { href: "/gallery", label: "Галерея" },
  { href: "/filialy", label: "Филиалы" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-bg/95 backdrop-blur-md border-b border-gold/20"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              href="/"
              className="flex flex-col leading-none group"
              aria-label="Luna Beauty Salon — на главную"
            >
              <span className="font-display text-2xl font-light tracking-[0.2em] text-text group-hover:text-gold transition-colors duration-200">
                LUNA
              </span>
              <span className="font-body text-[9px] font-medium tracking-[0.35em] text-gold-muted uppercase mt-[-2px]">
                Beauty Salon
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8" aria-label="Основная навигация">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-body text-sm font-medium tracking-wide transition-colors duration-200 relative",
                    "after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-px after:bg-gold after:scale-x-0 after:transition-transform after:duration-200",
                    "hover:text-gold hover:after:scale-x-100",
                    pathname === link.href
                      ? "text-gold after:scale-x-100"
                      : "text-text-muted"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-text-muted hover:text-gold transition-colors"
              aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-bg flex flex-col lg:hidden transition-opacity duration-300",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-between h-16 px-4">
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-display text-2xl font-light tracking-[0.2em] text-text">LUNA</span>
            <span className="font-body text-[9px] font-medium tracking-[0.35em] text-gold-muted uppercase mt-[-2px]">
              Beauty Salon
            </span>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 text-text-muted hover:text-gold transition-colors"
            aria-label="Закрыть меню"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center flex-1 gap-8" aria-label="Мобильная навигация">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-display text-4xl font-light italic transition-colors duration-200",
                pathname === link.href ? "text-gold" : "text-text hover:text-gold"
              )}
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="pb-12 text-center">
          <p className="font-body text-sm text-text-muted tracking-wide">+7 777 183 8414</p>
        </div>
      </div>
    </>
  );
}
