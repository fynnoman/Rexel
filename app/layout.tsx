import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["SOFT", "opsz", "WONK"],
  display: "swap",
});

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rexel Germany · Standort Saarbrücken",
  description:
    "Elektroinstallation & Industriebedarf im Saarland. Standort №63 · Angela-Braun-Str. 18, 66115 Saarbrücken.",
  metadataBase: new URL("https://rexel.de"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-paper-200 text-ink-900 font-sans antialiased">
        {children}
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
