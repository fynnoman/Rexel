"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const featureCard = {
  tag: "Kernsortiment",
  title: "30.000+ Artikel. Immer da.",
  body: "Sicherungen, Kabel, Klemmen, Leuchtmittel, Verteilertechnik — das Fundament jeder Installation. Geordnet, geprüft, sofort greifbar.",
  image:
    "https://images.unsplash.com/photo-1607988795691-3d0147b43231?auto=format&fit=crop&w=2200&q=85",
};

const smallCards = [
  {
    tag: "Elektroinstallation",
    title: "Handwerk & Bau",
    image:
      "https://images.unsplash.com/photo-1580983561371-7f4b242d8ec0?auto=format&fit=crop&w=1400&q=85",
    stat: "Newlec · BizLine",
  },
  {
    tag: "Industriebedarf",
    title: "Robust im Alltag",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1400&q=85",
    stat: "Antrieb · Automation",
  },
];

const wideImage = {
  tag: "Kampagnen",
  title: "Aktuelle Aktionen.",
  body: "Bundles, Sonderpreise und Neuheiten für Gewerbekunden — regelmäßig frisch bestückt.",
  image:
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=2200&q=85",
};

export default function SortimentSection() {
  return (
    <section
      id="sortiment"
      className="relative bg-paper-100 pt-32 lg:pt-40 pb-28 overflow-hidden"
    >
      {/* Ambient beam */}
      <div className="absolute inset-x-0 top-0 h-[600px] bg-beam-blue pointer-events-none opacity-70" />
      <div className="absolute inset-0 bg-grid-faint bg-grid-56 opacity-50 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)] pointer-events-none" />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16 lg:mb-24">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="mono text-xs text-rex-blue">02</span>
              <div className="w-12 h-px bg-ink-200" />
              <span className="eyebrow">Sortiment</span>
            </div>
            <h2 className="text-display text-[clamp(2.5rem,6vw,5.5rem)] text-rex-deep leading-[0.92] max-w-[16ch]">
              Vier Welten.{" "}
              <span
                className="italic text-rex-blue"
                style={{
                  fontVariationSettings: '"SOFT" 100, "opsz" 144, "WONK" 1',
                }}
              >
                Ein Regal.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-ink-600 leading-relaxed">
              Vom kleinen Ersatzteil bis zur kompletten Anlage — mit dem
              Rexel-Netzwerk im Rücken und dem Team Saarbrücken vor Ort.
            </p>
          </div>
        </div>

        {/* Bento mosaic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-[repeat(4,minmax(200px,auto))] gap-4 lg:gap-5">
          {/* Feature card — spans 8 cols, 2 rows */}
          <FeatureCard {...featureCard} />

          {/* Two small side cards, each 4 cols x 1 row */}
          <SmallImageCard {...smallCards[0]} />
          <SmallImageCard {...smallCards[1]} />

          {/* Text card — 5 cols, 2 rows */}
          <TextCard />

          {/* Wide image card — 7 cols, 2 rows */}
          <WideImageCard {...wideImage} />
        </div>

        {/* Row of category chips */}
        <div className="mt-14 flex flex-wrap items-center gap-2 justify-center">
          <span className="eyebrow mr-2">Auch verfügbar:</span>
          {[
            "Beleuchtung",
            "Kabel & Leitungen",
            "Sicherheitstechnik",
            "Datentechnik",
            "Schaltschrankbau",
            "Photovoltaik",
            "E-Mobility",
            "Werkzeug",
            "Arbeitsschutz",
          ].map((c) => (
            <span
              key={c}
              className="mono text-[11px] px-3 py-1.5 rounded-full border border-ink-200 bg-white/60 text-ink-600 hover:border-rex-blue hover:text-rex-deep transition-colors"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------- Cards ------------------- */

function FeatureCard(props: typeof featureCard) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "14%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1.16]);

  return (
    <motion.article
      ref={ref}
      className="relative rounded-3xl overflow-hidden bg-ink-900 lg:col-span-8 lg:row-span-2 min-h-[520px] lg:min-h-0 group"
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={props.image}
          alt={props.title}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-rex-deep/85 via-rex-deep/25 to-transparent" />
      <div className="absolute inset-0 mix-blend-color bg-rex-blue/20" />

      {/* Big index in corner */}
      <div className="absolute top-6 right-8 text-display text-8xl text-white/15 leading-none tabular-nums">
        01
      </div>

      <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end text-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-rex-cyan" />
          <span className="eyebrow-dark">{props.tag}</span>
        </div>
        <h3 className="text-display text-4xl lg:text-6xl leading-[0.95] max-w-[16ch] mb-4">
          {props.title}
        </h3>
        <p className="text-white/80 max-w-xl leading-relaxed">{props.body}</p>

        <div className="mt-6">
          <button className="glass-dark rounded-full px-5 py-2.5 text-sm text-white hover:bg-white/20 transition-colors flex items-center gap-2">
            Sortiment entdecken <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function SmallImageCard({
  tag,
  title,
  image,
  stat,
}: (typeof smallCards)[number]) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "12%"]);

  return (
    <motion.article
      ref={ref}
      className="relative rounded-3xl overflow-hidden bg-ink-900 lg:col-span-4 lg:row-span-1 min-h-[240px] group"
    >
      <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 30vw, 100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-rex-deep/85 via-rex-deep/30 to-transparent" />
      <div className="absolute inset-0 mix-blend-color bg-rex-blue/20" />

      <div className="absolute inset-0 p-6 lg:p-7 flex flex-col justify-between text-white">
        <div className="flex items-center justify-between">
          <span className="eyebrow-dark">{tag}</span>
          <span className="mono text-[11px] text-white/70">{stat}</span>
        </div>
        <div className="flex items-end justify-between">
          <h3 className="text-display text-2xl lg:text-3xl leading-tight max-w-[12ch]">
            {title}
          </h3>
          <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-rex-deep transition-all">
            →
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function TextCard() {
  return (
    <article className="relative rounded-3xl bg-rex-deep text-white lg:col-span-5 lg:row-span-2 p-8 lg:p-10 overflow-hidden flex flex-col justify-between min-h-[420px]">
      {/* Decorative blueprint pattern */}
      <div className="absolute inset-0 bg-grid-dark bg-grid-32 opacity-30 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-rex-sky/30 blur-3xl" />

      <div className="relative">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-rex-cyan" />
          <span className="eyebrow-dark">Marken & Partner</span>
        </div>
        <h3 className="text-display text-3xl lg:text-4xl leading-[1] mb-6">
          Kuratiert für's Handwerk — von{" "}
          <span
            className="italic text-rex-cyan"
            style={{
              fontVariationSettings: '"SOFT" 100, "opsz" 144, "WONK" 1',
            }}
          >
            Newlec
          </span>{" "}
          bis{" "}
          <span
            className="italic text-rex-cyan"
            style={{
              fontVariationSettings: '"SOFT" 100, "opsz" 144, "WONK" 1',
            }}
          >
            BizLine
          </span>
          .
        </h3>
      </div>

      <div className="relative grid grid-cols-2 gap-4 pt-6 border-t border-white/15">
        <Stat n="140+" l="Hersteller im Netzwerk" />
        <Stat n="98%" l="Verfügbarkeit vor Ort" />
      </div>
    </article>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="text-display text-3xl lg:text-4xl text-white leading-none">
        {n}
      </div>
      <div className="eyebrow-dark text-[10px] mt-2">{l}</div>
    </div>
  );
}

function WideImageCard(props: typeof wideImage) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1.14]);

  return (
    <motion.article
      ref={ref}
      className="relative rounded-3xl overflow-hidden bg-ink-900 lg:col-span-7 lg:row-span-2 min-h-[420px] group"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
        <Image
          src={props.image}
          alt={props.title}
          fill
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-tr from-rex-deep/85 via-rex-deep/30 to-transparent" />
      <div className="absolute inset-0 mix-blend-color bg-rex-blue/25" />

      {/* Discount badge */}
      <div className="absolute top-6 right-6 glass-dark rounded-full px-4 py-2 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-rex-cyan animate-pulse-soft" />
        <span className="eyebrow-dark">Aktion aktiv</span>
      </div>

      <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end text-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-rex-cyan" />
          <span className="eyebrow-dark">{props.tag}</span>
        </div>
        <h3 className="text-display text-4xl lg:text-5xl leading-[1] mb-3">
          {props.title}
        </h3>
        <p className="text-white/80 max-w-lg leading-relaxed">{props.body}</p>

        <div className="mt-6 flex items-center gap-3">
          <button className="glass-dark rounded-full px-5 py-2.5 text-sm text-white hover:bg-white/20 transition-colors flex items-center gap-2">
            Aktionen ansehen <span aria-hidden>→</span>
          </button>
          <span className="mono text-xs text-white/60">bis 31.12.</span>
        </div>
      </div>
    </motion.article>
  );
}
