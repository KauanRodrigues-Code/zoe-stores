import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { getHeroProduct } from "@/lib/catalog";
import { SITE } from "@/lib/site";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Jost({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const hero = getHeroProduct();
const title = `${SITE.name} | Aluguel de vestidos de festa em Campinas`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title,
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: SITE.name,
    title,
    description: SITE.description,
    images: [
      {
        url: hero.src,
        width: hero.width,
        height: hero.height,
        alt: hero.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: SITE.description,
    images: [hero.src],
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F0E5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
