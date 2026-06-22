import Link from "next/link";
import Image from "next/image";
import { Instagram, Phone, MapPin } from "lucide-react";
import { brand, branches } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background:  "var(--color-surface)",
      borderTop:   "1px solid var(--color-border-soft)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 80px 48px" }}>
        <div style={{
          display:             "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap:                 40,
          marginBottom:        64,
        }}>

          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "inline-block", marginBottom: 20 }}>
              <Image src="/logo.jpg" alt="Luna Beauty Salon" width={56} height={56} style={{ objectFit: "contain" }} />
            </Link>
            <p style={{
              fontFamily:  "var(--font-inter), system-ui, sans-serif",
              fontSize:    13,
              fontWeight:  300,
              color:       "var(--color-text-muted)",
              lineHeight:  1.7,
              marginTop:   8,
            }}>
              {brand.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="gold-divider" style={{ marginBottom: 24 }}>
              <div className="line" />
              <span className="label">Навигация</span>
              <div className="line" />
            </div>
            <nav aria-label="Навигация в футере">
              {[
                { href: "/",        label: "Главная" },
                { href: "/uslugi",  label: "Услуги и прайс" },
                { href: "/gallery", label: "Галерея" },
                { href: "/filialy", label: "Филиалы" },
              ].map((l) => (
                <div key={l.href} style={{ marginBottom: 12 }}>
                  <Link href={l.href} style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize:   13,
                    fontWeight: 300,
                    color:      "var(--color-text-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                    className="footer-link"
                  >
                    {l.label}
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <div className="gold-divider" style={{ marginBottom: 24 }}>
              <div className="line" />
              <span className="label">Контакты</span>
              <div className="line" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a href={`tel:${brand.phone.replace(/\s/g, "")}`}
                style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--color-text-muted)", textDecoration: "none", fontSize: 13, fontWeight: 300, transition: "color 0.2s" }}
                className="footer-link"
              >
                <Phone size={13} strokeWidth={1.5} /> {brand.phone}
              </a>
              <a href={`https://instagram.com/${brand.instagram1}`} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--color-text-muted)", textDecoration: "none", fontSize: 13, fontWeight: 300, transition: "color 0.2s" }}
                className="footer-link"
              >
                <Instagram size={13} strokeWidth={1.5} /> @{brand.instagram1}
              </a>
              <a href={`https://instagram.com/${brand.instagram2}`} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--color-text-muted)", textDecoration: "none", fontSize: 13, fontWeight: 300, transition: "color 0.2s" }}
                className="footer-link"
              >
                <Instagram size={13} strokeWidth={1.5} /> @{brand.instagram2}
              </a>
            </div>
          </div>

          {/* Branches */}
          <div>
            <div className="gold-divider" style={{ marginBottom: 24 }}>
              <div className="line" />
              <span className="label">Филиалы</span>
              <div className="line" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {branches.map((b) => (
                <div key={b.id} style={{ display: "flex", gap: 8 }}>
                  <MapPin size={13} strokeWidth={1.5} style={{ color: "var(--color-gold-muted)", marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 400, color: "var(--color-text)", marginBottom: 2 }}>
                      {b.name}
                    </p>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: 12, fontWeight: 300, color: "var(--color-text-muted)" }}>
                      {b.city}, {b.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop:  "1px solid var(--color-border-soft)",
          paddingTop: 24,
          display:    "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap:   "wrap",
          gap:        8,
        }}>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 300, color: "var(--color-text-dim)", letterSpacing: "0.05em" }}>
            © {year} Luna Beauty Salon. Алматы
          </p>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 300, color: "var(--color-text-dim)", letterSpacing: "0.05em" }}>
            Режим работы: уточняйте по WhatsApp
          </p>
        </div>
      </div>

    </footer>
  );
}
