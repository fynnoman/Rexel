"use client";

const items = [
  "66115 SAARBRÜCKEN",
  "ANGELA-BRAUN-STR. 18",
  "MO – DO / 07:00 – 16:00",
  "FR / 07:00 – 13:00",
  "+49 (0)681 98902-0",
  "STANDORT №63",
  "ELEKTROINSTALLATION",
  "INDUSTRIEBEDARF",
  "KERNSORTIMENT",
  "BIZLINE · NEWLEC",
];

export default function MarqueeTicker() {
  const line = [...items, ...items];
  return (
    <section
      aria-hidden
      className="relative py-6 border-y border-ink-100/80 bg-white/60 backdrop-blur-xl"
    >
      <div className="marquee-mask overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap will-change-transform">
          {line.map((item, i) => (
            <span
              key={i}
              className="mono text-[13px] text-ink-600 flex items-center gap-12 shrink-0"
            >
              {item}
              <span className="text-rex-blue" aria-hidden>
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
