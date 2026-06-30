import { CSSProperties } from "react";
import { PageFrame } from "../../_components/PageFrame";
import { PokedexIcon } from "../../_components/MenuIcons";

const ACCENT = "var(--pkmn-accent-red)";
const ACCENT_DARK = "#8b0000";

const games = [
  { title: "POKÉMON ALPHA SAPPHIRE", gen: "GEN III REMAKE", sprite: "382" },
  { title: "POKÉMON X", gen: "GEN VI", sprite: "716" },
  { title: "POKÉMON SUN", gen: "GEN VII", sprite: "791" },
  { title: "POKÉMON ULTRA MOON", gen: "GEN VII", sprite: "800" },
  { title: "SUPER MYSTERY DUNGEON", gen: "SPIN-OFF", sprite: "448" },
];

export default function PokemonPage() {
  return (
    <PageFrame
      title="POKéDEX"
      subtitle="TRAINER'S COLLECTION & GAME HISTORY"
      accent={ACCENT}
      accentDark={ACCENT_DARK}
      titleIcon={<PokedexIcon className="w-6 h-6" />}
      backHref="/about"
    >
      <div className="grid gap-4 md:grid-cols-2">

        {/* Collection card */}
        <article className="pkmn-box px-5 py-4 relative flex flex-col gap-3 md:col-span-2">
          <div className="pkmn-section-stripe absolute top-0 left-0 right-0 rounded-none" style={{ "--stripe": ACCENT } as CSSProperties} />
          <header className="flex items-center gap-3 mt-1">
            <span className="text-xl inline-flex items-center justify-center w-10 h-10 rounded-md border-2 border-pkmn-box-border shrink-0" style={{ background: ACCENT, color: "white" }}>
              ✦
            </span>
            <div>
              <h2 className="text-[12px] sm:text-[14px] tracking-wider">THE COLLECTION</h2>
              <p className="text-[10px] text-pkmn-text-muted mt-0.5">Estimated value: ~$1,500</p>
            </div>
          </header>
          <ul className="space-y-2 text-[11px] sm:text-[13px] leading-relaxed">
            {[
              "Collection valued at approximately $1,500 - built over years of hunting and trading",
              "Dedicated Lucario page (photos coming soon)",
              "If you could not tell, I like Lucario.",
    
            ].map((b, i) => (
              <li key={i} className="flex gap-2">
                <span aria-hidden style={{ color: ACCENT_DARK }} className="shrink-0">▸</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          {/* Lucario photo placeholder */}
          <div
            className="mt-2 w-full h-40 rounded flex flex-col items-center justify-center gap-2 text-[10px] text-pkmn-text-muted"
            style={{ background: "var(--pkmn-box-inner)", border: `2px dashed ${ACCENT_DARK}` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png"
              alt="Lucario"
              className="pixelated w-16 h-16 opacity-40"
            />
            <span>LUCARIO BINDER PHOTOS COMING SOON</span>
          </div>
        </article>

        {/* Games played */}
        <article className="pkmn-box px-5 py-4 relative flex flex-col gap-3 md:col-span-2">
          <div className="pkmn-section-stripe absolute top-0 left-0 right-0 rounded-none" style={{ "--stripe": ACCENT } as CSSProperties} />
          <h2 className="text-[12px] sm:text-[14px] tracking-wider mt-1">
            <span style={{ color: ACCENT_DARK }}>▶</span> GAMES PLAYED — 3DS ERA
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {games.map((g) => (
              <div key={g.title} className="flex flex-col items-center gap-1 text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${g.sprite}.png`}
                  alt={g.title}
                  className="pixelated w-16 h-16"
                />
                <span className="text-[9px] sm:text-[10px] tracking-wide leading-snug">{g.title}</span>
                <span
                  className="text-[8px] px-1.5 py-0.5 rounded-sm border border-pkmn-box-border"
                  style={{ background: ACCENT, color: "white" }}
                >
                  {g.gen}
                </span>
              </div>
            ))}
          </div>
        </article>

      </div>
    </PageFrame>
  );
}
