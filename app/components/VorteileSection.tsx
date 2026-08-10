"use client";

const items = [
  {
    n: "01",
    title: "Persönliche Beratung",
    body: "Kein Callcenter. Kein Ticket-System. Direkt der Fachhändler in Saarbrücken, der Ihr Projekt kennt.",
    hint: "Vor Ort · Telefon · Video",
  },
  {
    n: "02",
    title: "Kernsortiment auf Lager",
    body: "Was gebraucht wird, ist da. Reservieren Sie online, holen Sie es im Haus ab — ohne Wartezeit.",
    hint: "Live-Bestand · Reservierung",
  },
  {
    n: "03",
    title: "Kampagnen & Aktionen",
    body: "Regelmäßig frische Konditionen für Gewerbekunden. Ohne Kleingedrucktes, ohne versteckte Klauseln.",
    hint: "Monatlich · Gewerbekonto",
  },
  {
    n: "04",
    title: "Schulungen & Campus",
    body: "Weiterbildung von Handwerk bis Industrie — vom Kernsortiment bis zur digitalen Auftragswelt.",
    hint: "Präsenz · Online",
  },
  {
    n: "05",
    title: "Digitaler Zugang",
    body: "Rexel App und Online-Shop für schnelles Bestellen. Jederzeit, auch direkt von der Baustelle.",
    hint: "iOS · Android · Web",
  },
  {
    n: "06",
    title: "Ein Netzwerk. 100+ Häuser.",
    body: "Saarbrücken ist Ihr Ansprechpartner. Deutschlandweit finden Sie die gleiche Ware am gleichen Ort.",
    hint: "Standort №63",
  },
];

export default function VorteileSection() {
  return (
    <section
      id="vorteile"
      className="relative bg-paper-200 pt-32 lg:pt-40 pb-24"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Header (magazine style) */}
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div className="flex items-center gap-4 mb-6">
                <span className="mono text-xs text-rex-blue">03</span>
                <div className="w-12 h-px bg-ink-200" />
                <span className="eyebrow">Vorteile</span>
              </div>
              <h2 className="text-display text-[clamp(2.5rem,5.5vw,5.5rem)] text-rex-deep leading-[0.92]">
                Warum das Handwerk auf uns{" "}
                <span
                  className="italic text-rex-blue"
                  style={{
                    fontVariationSettings: '"SOFT" 100, "opsz" 144, "WONK" 1',
                  }}
                >
                  vertraut.
                </span>
              </h2>

              <p className="mt-8 text-ink-600 leading-relaxed max-w-md">
                Weil ein guter Elektrogroßhandel nicht in der Auslage anfängt,
                sondern beim Team dahinter. Sechs Gründe.
              </p>

              <div className="mt-10 hidden lg:block">
                <div className="hairline mb-6" />
                <div className="text-display text-6xl text-rex-deep leading-none">
                  06
                </div>
                <div className="eyebrow mt-3">Gründe im Überblick</div>
              </div>
            </div>
          </div>

          {/* Numbered list, editorial style */}
          <ol className="lg:col-span-7 -mt-2">
            {items.map((it, i) => (
              <li key={it.n} className="group relative">
                {i > 0 && <div className="hairline my-0" />}
                <div className="grid grid-cols-12 gap-4 py-8 lg:py-10 items-start relative">
                  {/* Number */}
                  <div className="col-span-2">
                    <div className="text-display text-5xl lg:text-6xl text-rex-deep/25 group-hover:text-rex-blue transition-colors leading-none tabular-nums">
                      {it.n}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="col-span-10 lg:col-span-8">
                    <h3 className="text-display text-2xl lg:text-3xl text-rex-deep leading-tight mb-2.5">
                      {it.title}
                    </h3>
                    <p className="text-ink-600 leading-relaxed max-w-[52ch]">
                      {it.body}
                    </p>
                  </div>
                  {/* Hint */}
                  <div className="col-span-12 lg:col-span-2 lg:text-right">
                    <span className="mono text-[11px] text-ink-500 leading-relaxed">
                      {it.hint}
                    </span>
                  </div>
                  {/* Hover accent */}
                  <div className="absolute left-0 top-8 h-6 w-px bg-rex-blue scale-y-0 group-hover:scale-y-100 origin-top transition-transform" />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
