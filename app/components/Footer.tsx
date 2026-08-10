"use client";

const cols = [
  {
    title: "Rexel Germany",
    links: [
      "Ethik & Compliance",
      "Nachhaltigkeit",
      "Presse",
      "Lieferkettengesetz",
      "Rexel-Metallpreise",
    ],
  },
  {
    title: "Lösungen",
    links: [
      "Über Newlec",
      "Über BizLine",
      "Downloads",
      "Zertifikate",
      "Fremdfirmenordnung",
    ],
  },
  {
    title: "Karriere",
    links: ["Arbeiten bei Rexel", "Stellenangebote"],
  },
  {
    title: "Support",
    links: ["Kontakt", "FAQ", "Standortsuche", "Retourenrichtlinien"],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-rex-deep text-white pt-24 pb-10 overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute inset-0 bg-grid-dark bg-grid-56 opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <div className="absolute -top-40 left-1/3 w-[600px] h-[600px] rounded-full bg-rex-blue/30 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Big claim */}
        <div className="mb-20 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-rex-cyan" />
              <span className="eyebrow-dark">Standort №63</span>
            </div>
            <h3 className="text-display text-[clamp(2rem,5.5vw,5rem)] leading-[0.95]">
              Elektrotechnik.{" "}
              <span
                className="italic text-rex-cyan"
                style={{
                  fontVariationSettings: '"SOFT" 100, "opsz" 144, "WONK" 1',
                }}
              >
                Persönlich. Vor Ort.
              </span>
            </h3>
          </div>
          <div className="lg:col-span-4">
            <div className="glass-dark rounded-2xl p-5">
              <div className="eyebrow-dark mb-3">Newsletter</div>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="ihre@firma.de"
                  className="flex-1 bg-transparent border-b border-white/25 pb-2 text-white outline-none placeholder:text-white/40 focus:border-rex-cyan transition-colors"
                />
                <button className="text-rex-cyan hover:text-white transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {cols.map((c) => (
            <div key={c.title}>
              <div className="eyebrow-dark mb-4">{c.title}</div>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="eyebrow-dark mb-4">Impressum</div>
            <address className="not-italic text-[13px] text-white/70 leading-relaxed">
              Rexel Germany GmbH & Co. KG
              <br />
              Ridlerstr. 57
              <br />
              80339 München
              <br />
              <br />
              <span className="mono text-white/50">HRA 48737 · AG München</span>
              <br />
              <span className="mono text-white/50">USt-IdNr. DE129985329</span>
            </address>
          </div>
        </div>

        <div className="hairline-dark mb-6" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-rex-cyan" />
            <span className="text-display text-lg">Rexel</span>
            <span className="mono text-xs text-white/50">
              ©2026 · Ein Unternehmen der Rexel Gruppe
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-white/60">
            {[
              "Impressum",
              "AGB & Zusatz",
              "Datenschutz",
              "Sicherheitsrichtlinien",
              "Cookie-Einstellungen",
            ].map((l) => (
              <a key={l} href="#" className="hover:text-white transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
