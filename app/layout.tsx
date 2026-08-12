import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio 56 BCN — Cerámica, dibujo y espacio creativo en Sants",
  description:
    "Talleres de cerámica y dibujo, coworking creativo y exposiciones en un estudio lleno de luz en Sants, Barcelona.",
  openGraph: {
    title: "Studio 56 BCN — Un espacio para hacer",
    description:
      "Cerámica, dibujo, coworking y exposiciones en Carrer de Burgos 56, Barcelona.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${sans.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
