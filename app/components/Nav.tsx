"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(
    scrollY,
    [0, 120],
    ["rgba(241,244,250,0.5)", "rgba(241,244,250,0.82)"]
  );
  const border = useTransform(scrollY, [0, 120], [0, 1]);

  return (
    <motion.header
      style={{ backgroundColor: bg, borderBottomWidth: border }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-ink-100/60 backdrop-blur-2xl"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <LogoMark />
          <span className="text-display text-xl tracking-tightest text-rex-deep">
            Rexel
          </span>
          <span className="eyebrow hidden sm:inline">Saarbrücken · №63</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {[
            ["Standort", "#standort"],
            ["Sortiment", "#sortiment"],
            ["Vorteile", "#vorteile"],
            ["Kontakt", "#kontakt"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="px-4 py-2 text-sm text-ink-600 hover:text-rex-deep rounded-full hover:bg-white/60 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+49681989020"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm mono text-ink-600 hover:text-rex-deep hover:bg-white/60 rounded-full transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-rex-blue animate-pulse-soft" />
            +49 681 98902-0
          </a>
          <a
            href="#kontakt"
            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white bg-rex-deep hover:bg-rex-navy transition-colors bevel-top"
          >
            Kunde werden
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}

function LogoMark() {
  return (
    <div className="relative w-6 h-6 flex items-center justify-center">
      <div className="absolute inset-0 rounded-md bg-gradient-to-br from-rex-blue to-rex-deep" />
      <div className="absolute inset-[3px] rounded bg-white flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-rex-deep" />
      </div>
    </div>
  );
}
