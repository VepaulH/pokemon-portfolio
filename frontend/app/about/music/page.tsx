import { CSSProperties } from "react";
import { PageFrame } from "../../_components/PageFrame";
import { MusicIcon } from "../../_components/MenuIcons";

const ACCENT = "var(--pkmn-proj)";
const ACCENT_DARK = "var(--pkmn-proj-dark)";

type Shelf = {
  genre: string;
  emoji: string;
  artists: string[];
  note: string;
};

const shelves: Shelf[] = [
  {
    genre: "INDIE / INDIE ROCK",
    emoji: "🎸",
    artists: ["Backseat Lovers", "Wallows", "Her's", "The Strokes", "Malcolm Todd", "aron!", "TV Girl"],
    note: "The go-to for coding sessions, long drives, and pretending life is a coming-of-age film.",
  },
  {
    genre: "J-POP & ANIME OSTs",
    emoji: "🎌",
    artists: ["YOASOBI", "anri", "Masayoshi Takanaka", "insaneintherainmusic"],
    note: "Anime OSTs that hit differently: Black Clover, Naruto, Hunter x Hunter, Attack on Titan. insaneintherainmusic's jazz covers are criminally underrated.",
  },
  {
    genre: "EVERYTHING ELSE",
    emoji: "🎵",
    artists: ["Laufey", "Michael Jackson"],
    note: "Laufey for late nights. MJ because some things are timeless.",
  },
  {
    genre: "ALSO PLAYS",
    emoji: "🎷",
    artists: ["Alto Saxophone"],
    note: "UCF Video Game Music Ensemble — 2 years performing video game and anime arrangements. If you've heard a sax cover of the AoT theme, that might've been me.",
  },
];

export default function MusicPage() {
  return (
    <PageFrame
      title="MUSIC"
      subtitle="CURRENT PARTY PLAYLIST"
      accent={ACCENT}
      accentDark={ACCENT_DARK}
      titleIcon={<MusicIcon className="w-6 h-6" />}
      backHref="/about"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {shelves.map((shelf, i) => (
          <article key={i} className="pkmn-box px-5 py-4 relative flex flex-col gap-3">
            <div
              className="pkmn-section-stripe absolute top-0 left-0 right-0 rounded-none"
              style={{ "--stripe": ACCENT } as CSSProperties}
            />
            <header className="flex items-center gap-3 mt-1">
              <span
                className="text-xl inline-flex items-center justify-center w-10 h-10 rounded-md border-2 border-pkmn-box-border shrink-0"
                style={{ background: ACCENT, color: "white" }}
              >
                {shelf.emoji}
              </span>
              <h2 className="text-[11px] sm:text-[13px] tracking-wider">{shelf.genre}</h2>
            </header>

            <div className="flex flex-wrap gap-1.5">
              {shelf.artists.map((artist) => (
                <span
                  key={artist}
                  className="text-[9px] sm:text-[10px] px-2 py-1 rounded-sm border-2 border-pkmn-box-border"
                  style={{ background: ACCENT_DARK, color: "white" }}
                >
                  {artist}
                </span>
              ))}
            </div>

            <p className="text-[11px] sm:text-[12px] leading-relaxed text-pkmn-text-muted italic flex-1">
              &ldquo;{shelf.note}&rdquo;
            </p>
          </article>
        ))}
      </div>
    </PageFrame>
  );
}
