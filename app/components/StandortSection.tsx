"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const scenes = [
  {
    idx: "01",
    kicker: "Der Standort",
    title: "Direkt in Saarbrücken. Direkt greifbar.",
    body: "Angela-Braun-Str. 18 · 66115 Saarbrücken. Unser Team berät Sie persönlich rund um Elektroinstallation und Industriebedarf — vom kleinen Ersatzteil bis zum kompletten Projekt.",
    detail: [
      ["Adresse", "Angela-Braun-Str. 18"],
      ["PLZ", "66115 Saarbrücken"],
      ["Kürzel", "№63"],
    ],
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=2000&q=85",
  },
  {
    idx: "02",
    kicker: "Der Rhythmus",
    title: "Öffnungszeiten, die zu Ihrem Tag passen.",
    body: "Früh geöffnet, damit der Werktag pünktlich startet. Auch die telefonische Auftragsannahme läuft parallel — kein Warten, kein Umweg.",
    detail: [
      ["Mo – Do", "07:00 – 16:00"],
      ["Freitag", "07:00 – 13:00"],
      ["Sa · So", "geschlossen"],
    ],
    image:
      "https://images.unsplash.com/photo-1580983561371-7f4b242d8ec0?auto=format&fit=crop&w=2000&q=85",
  },
  {
    idx: "03",
    kicker: "Der Ablauf",
    title: "In drei Schritten zum Konto.",
    body: "Anfrage stellen → wir prüfen und schalten frei → Sortiment ist offen. Ihr fester Ansprechpartner meldet sich innerhalb eines Werktags.",
    detail: [
      ["Schritt 01", "Formular senden"],
      ["Schritt 02", "Prüfung Gewerbe"],
      ["Schritt 03", "Freischaltung"],
    ],
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=2000&q=85",
  },
];

export default function StandortSection() {
  return (
    <section id="standort" className="relative bg-paper-200 pt-28 lg:pt-40 pb-32">
      {/* Section header */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 mb-16 lg:mb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="mono text-xs text-rex-blue">01</span>
              <div className="w-12 h-px bg-ink-200" />
              <span className="eyebrow">Standort · Kontakt</span>
            </div>
            <h2 className="text-display text-[clamp(2.75rem,6.5vw,6rem)] text-rex-deep leading-[0.92]">
              Kommen Sie{" "}
              <span
                className="italic text-rex-blue"
                style={{
                  fontVariationSettings: '"SOFT" 100, "opsz" 144, "WONK" 1',
                }}
              >
                vorbei.
              </span>
              <br />
              Oder schreiben Sie uns.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 self-end">
            <p className="text-ink-600 leading-relaxed">
              Rechts das Formular — es bleibt stehen, während Sie sich links
              durch den Standort scrollen. So können Sie in Ruhe reinlesen und
              gleich Kontakt aufnehmen.
            </p>
          </div>
        </div>
      </div>

      {/* Split: scenes left, sticky form right */}
      <div id="kontakt" className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Scenes column */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-10">
            {scenes.map((s) => (
              <Scene key={s.idx} scene={s} />
            ))}
          </div>

          {/* Sticky form column */}
          <div className="lg:col-span-5 h-full">
            <div className="sticky top-24">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Scene ---------- */

function Scene({ scene }: { scene: (typeof scenes)[number] }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "14%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.16]);

  return (
    <article
      ref={ref}
      className="relative rounded-3xl overflow-hidden bg-ink-900 aspect-[4/5] lg:aspect-[5/6]"
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={scene.image}
          alt={scene.title}
          fill
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-rex-deep/60 via-rex-deep/10 to-rex-deep/85" />
      <div className="absolute inset-0 mix-blend-color bg-rex-blue/25" />

      {/* Top corner: index */}
      <div className="absolute top-6 left-6 lg:top-8 lg:left-8 flex items-center gap-3">
        <div className="glass-dark rounded-full px-3.5 py-1.5">
          <span className="mono text-[11px] tracking-[0.18em] text-white/90">
            {scene.idx}
          </span>
        </div>
        <div className="eyebrow-dark">{scene.kicker}</div>
      </div>

      {/* Bottom content */}
      <div className="absolute inset-x-0 bottom-0 p-6 lg:p-10 text-white">
        <h3 className="text-display text-3xl lg:text-5xl leading-[1] max-w-[20ch] mb-4">
          {scene.title}
        </h3>
        <p className="text-white/80 leading-relaxed max-w-xl mb-6">
          {scene.body}
        </p>
        <div className="grid grid-cols-3 gap-3 max-w-lg">
          {scene.detail.map(([k, v]) => (
            <div
              key={k}
              className="glass-dark rounded-xl p-3 lg:p-4"
            >
              <div className="eyebrow-dark text-[10px]">{k}</div>
              <div className="mono text-sm lg:text-base text-white mt-1.5 leading-tight">
                {v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ---------- Contact form ---------- */

const anliegen = [
  "Registrierung",
  "Beratung",
  "Abholung",
  "Angebot",
] as const;

function ContactForm() {
  const [choice, setChoice] = useState<(typeof anliegen)[number]>("Registrierung");
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="glass-strong glass-edge rounded-[2rem] p-7 lg:p-9 relative overflow-hidden"
    >
      {/* Ambient glow inside card */}
      <div className="pointer-events-none absolute -top-32 -right-24 w-72 h-72 rounded-full bg-rex-sky/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-rex-cyan/30 blur-3xl" />

      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-rex-blue animate-pulse-soft" />
            <span className="eyebrow">Kontakt · Saarbrücken</span>
          </div>
          <span className="mono text-[11px] text-ink-500">№63</span>
        </div>

        <h3 className="text-display text-3xl lg:text-4xl text-rex-deep leading-[1] mb-2">
          Schreiben Sie uns.
        </h3>
        <p className="text-sm text-ink-500 mb-8">
          Wir antworten innerhalb eines Werktags.
        </p>

        {sent ? (
          <SuccessState />
        ) : (
          <>
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-3">
                <TextField label="Firma" placeholder="Muster GmbH" required />
                <TextField
                  label="Ansprechpartner"
                  placeholder="Vor- und Nachname"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <TextField
                  label="E-Mail"
                  type="email"
                  placeholder="name@firma.de"
                  required
                />
                <TextField
                  label="Telefon"
                  type="tel"
                  placeholder="+49 …"
                />
              </div>

              {/* Anliegen pills */}
              <div>
                <div className="eyebrow mb-3">Anliegen</div>
                <div className="flex flex-wrap gap-2">
                  {anliegen.map((a) => (
                    <label key={a} className="pill-check cursor-pointer">
                      <input
                        type="radio"
                        name="anliegen"
                        value={a}
                        checked={choice === a}
                        onChange={() => setChoice(a)}
                        className="sr-only"
                      />
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm border border-ink-200 bg-white text-ink-700 hover:border-rex-blue transition-colors">
                        {a}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <div className="eyebrow mb-2">Nachricht</div>
                <textarea
                  rows={4}
                  placeholder="Kurz beschreiben, worum es geht …"
                  className="w-full rounded-2xl bg-white/70 border border-ink-100 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:border-rex-blue focus:bg-white transition-all resize-none"
                />
              </div>

              <label className="flex items-start gap-3 text-xs text-ink-500 cursor-pointer">
                <input type="checkbox" className="mt-0.5 accent-rex-blue" required />
                <span>
                  Ich habe die{" "}
                  <a href="#" className="text-rex-blue underline underline-offset-2">
                    Datenschutzerklärung
                  </a>{" "}
                  gelesen und stimme der Verarbeitung zu.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="group mt-8 w-full inline-flex items-center justify-between px-6 py-4 rounded-2xl bg-rex-deep text-white hover:bg-rex-navy transition-colors bevel-top"
            >
              <span className="font-medium">Anfrage senden</span>
              <span className="w-8 h-8 rounded-full bg-white text-rex-deep flex items-center justify-center group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>

            <div className="mt-6 pt-6 border-t border-ink-100 flex items-center justify-between text-xs text-ink-500">
              <a
                href="tel:+49681989020"
                className="mono hover:text-rex-deep transition-colors"
              >
                oder anrufen: +49 681 98902-0
              </a>
              <span className="mono">DSGVO</span>
            </div>
          </>
        )}
      </div>
    </form>
  );
}

function TextField({
  label,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <div className="eyebrow mb-2 flex items-center gap-1">
        {label}
        {required && <span className="text-rex-blue">*</span>}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl bg-white/70 border border-ink-100 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:border-rex-blue focus:bg-white transition-all"
      />
    </label>
  );
}

function SuccessState() {
  return (
    <div className="py-10 text-center">
      <div className="mx-auto mb-6 w-14 h-14 rounded-full bg-rex-blue/10 flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5 13l4 4L19 7" stroke="#1E56E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h4 className="text-display text-2xl text-rex-deep mb-2">Anfrage gesendet.</h4>
      <p className="text-sm text-ink-500 max-w-xs mx-auto">
        Das Team Saarbrücken meldet sich innerhalb eines Werktags bei Ihnen.
      </p>
    </div>
  );
}
