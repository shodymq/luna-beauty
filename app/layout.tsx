import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  subsets:  ["latin", "cyrillic"],
  weight:   ["300", "400", "500"],
  style:    ["normal", "italic"],
  variable: "--font-cormorant",
  display:  "swap",
});

const inter = Inter({
  subsets:  ["latin", "cyrillic"],
  weight:   ["300", "400", "500"],
  variable: "--font-inter",
  display:  "swap",
});

export const metadata: Metadata = {
  title: {
    default:  "Luna Beauty Salon — Салон красоты в Алматы",
    template: "%s | Luna Beauty Salon",
  },
  description:
    "Салон красоты Luna Beauty в Алматы. Маникюр, наращивание ресниц, волосы, макияж, массаж, мужской зал. Два филиала: ул. Акан серы 55 и ул. Хаби Халиуллина 140/9.",
  keywords: [
    "салон красоты Алматы",
    "маникюр Алматы",
    "наращивание ресниц",
    "парикмахерская Алматы",
    "luna beauty",
    "ламинирование ресниц",
    "антицеллюлитный массаж Алматы",
  ],
  openGraph: {
    title:       "Luna Beauty Salon Алматы",
    description: "Маникюр · Волосы · Ресницы · Макияж · Массаж",
    locale:      "ru_KZ",
    type:        "website",
  },
};

const jsonLd1 = {
  "@context": "https://schema.org",
  "@type":    "BeautySalon",
  name:       "Luna Beauty Salon",
  address: {
    "@type":          "PostalAddress",
    streetAddress:    "ул. Акан серы, 55",
    addressLocality:  "Алматы",
    addressCountry:   "KZ",
  },
  telephone: "+77771838414",
  sameAs:    ["https://instagram.com/luna_beautty_salon"],
};

const jsonLd2 = {
  "@context": "https://schema.org",
  "@type":    "BeautySalon",
  name:       "Luna Beauty Salon",
  address: {
    "@type":          "PostalAddress",
    streetAddress:    "ул. Хаби Халиуллина, 140/9",
    addressLocality:  "Алматы",
    addressCountry:   "KZ",
  },
  telephone: "+77771838414",
  sameAs:    ["https://instagram.com/luna_beauty_sallon"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd1) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }} />
      </head>
      <body className="bg-bg text-text font-body">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
