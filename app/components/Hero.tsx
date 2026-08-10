"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100vh] pt-24 overflow-hidden bg-paper-100"
    >
      {/* Ambient beam */}
      <div className="absolute inset-0 bg-beam-blue pointer-events-none" />
      <div className="absolute inset-0 bg-grid-faint bg-grid-56 opacity-70 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)] pointer-events-none" />
      <div className="caustic" aria-hidden />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Top meta bar */}
        <div className="flex items-center justify-between mb-14 lg:mb-20">
          <div className="flex items-center gap-4">
            <span className="w-1.5 h-1.5 rounded-full bg-rex-blue" />
            <span className="eyebrow">Standort №63 · seit 1985 im Saarland</span>
          </div>
          <span className="hidden md:inline-flex mono text-xs text-ink-500">
            49°14′N · 06°59′E
          </span>
        </div>

        {/* Grid layout */}
        <motion.div
          style={{ opacity }}
          className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end"
        >
          {/* Copy */}
          <motion.div style={{ y: textY }} className="lg:col-span-7">
            <h1 className="text-display text-[clamp(3.25rem,9.5vw,9.5rem)] leading-[0.9] text-rex-deep">
              Strom braucht
              <br />
              <span
                className="italic text-rex-blue"
                style={{
                  fontVariationSettings: '"SOFT" 100, "opsz" 144, "WONK" 1',
                }}
              >
                Präzision.
              </span>
            </h1>

            <p className="mt-8 text-lg lg:text-xl text-ink-600 max-w-[52ch] leading-relaxed">
              Der Rexel Standort in Saarbrücken. Elektroinstallation und
              Industriebedarf für Handwerk, Industrie und Bau — persönlich
              beraten, sofort abholbar.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#kontakt"
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-rex-deep text-white hover:bg-rex-navy transition-colors bevel-top"
              >
                Registrieren
                <span className="w-7 h-7 rounded-full bg-white text-rex-deep flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </a>
              <a
                href="#sortiment"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full glass glass-edge text-rex-deep hover:bg-white transition-colors"
              >
                Sortiment ansehen
              </a>
            </div>
          </motion.div>

          {/* Image column */}
          <div className="lg:col-span-5">
            <motion.div
              style={{ y: imageY, scale: imageScale }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden will-change-transform"
            >
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1800&q=85"
                alt="Elektrofachhandel"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
              {/* Blue tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-rex-deep/50 via-transparent to-transparent" />
              <div className="absolute inset-0 mix-blend-color bg-rex-blue/20" />

              {/* Floating chips on the image */}
              <div className="absolute top-5 left-5 glass-dark rounded-full px-3.5 py-1.5 text-[11px] mono text-white/90">
                LIVE · Geöffnet
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div className="text-white">
                  <div className="eyebrow-dark">Standort</div>
                  <div className="text-display text-3xl mt-1">№63</div>
                </div>
                <div className="text-right text-white/90">
                  <div className="eyebrow-dark">Öffnet Mo</div>
                  <div className="mono text-sm mt-1">07:00 – 16:00</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom stat bar */}
        <div className="mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-ink-100/80">
          {[
            ["100+", "Standorte DE"],
            ["30k+", "Artikel Kernsortiment"],
            ["1985", "Am Standort seit"],
            ["24/7", "Online-Bestellung"],
          ].map(([n, l]) => (
            <div key={n as string}>
              <div className="text-display text-4xl lg:text-5xl text-rex-deep leading-none">
                {n}
              </div>
              <div className="eyebrow mt-3">{l}</div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="pt-14 pb-16 flex items-center gap-3 bob">
          <div className="w-px h-8 bg-ink-300" />
          <span className="eyebrow">Weiter</span>
        </div>
      </div>
    </section>
  );
}
