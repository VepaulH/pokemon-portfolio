import { CSSProperties } from "react";
import { PageFrame } from "../../_components/PageFrame";
import { ClimbIcon } from "../../_components/MenuIcons";

const ACCENT = "var(--pkmn-exp)";
const ACCENT_DARK = "var(--pkmn-exp-dark)";

export default function HobbiesPage() {
  return (
    <PageFrame
      title="HOBBIES"
      subtitle="SIDE ACTIVITIES OUTSIDE THE LAB"
      accent={ACCENT}
      accentDark={ACCENT_DARK}
      titleIcon={<ClimbIcon className="w-6 h-6" />}
      backHref="/about"
    >
      <div className="grid gap-4 md:grid-cols-2">

        {/* Climbing */}
        <article className="pkmn-box px-5 py-4 relative flex flex-col gap-3">
          <div className="pkmn-section-stripe absolute top-0 left-0 right-0 rounded-none" style={{ "--stripe": ACCENT } as CSSProperties} />
          <header className="flex items-start gap-3 mt-1">
            <span className="text-2xl inline-flex items-center justify-center w-10 h-10 rounded-md border-2 border-pkmn-box-border shrink-0" style={{ background: ACCENT, color: "white" }}>
              🧗
            </span>
            <div>
              <h2 className="text-[12px] sm:text-[14px] tracking-wider">ROCK CLIMBING</h2>
              <p className="text-[10px] text-pkmn-text-muted mt-0.5">UCF Rock Climbing Club · Aug 2025 — Present</p>
            </div>
          </header>
          <ul className="space-y-2 text-[11px] sm:text-[12px] leading-relaxed">
            {[
              "Current grade: V5 — working toward V6",
              "Joined the UCF Rock Climbing Club in sophomore year",           
              "Favorite styles: burly and strength-based problems",
            ].map((b, i) => (
              <li key={i} className="flex gap-2">
                <span aria-hidden style={{ color: ACCENT_DARK }} className="shrink-0">▸</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          {/* Photo placeholder */}
          <div
            className="mt-2 w-full h-32 rounded flex items-center justify-center text-[10px] text-pkmn-text-muted"
            style={{ background: "var(--pkmn-box-inner)", border: `2px dashed ${ACCENT_DARK}` }}
          >
            📸 PHOTO COMING SOON
          </div>
        </article>

        {/* Saxophone */}
        <article className="pkmn-box px-5 py-4 relative flex flex-col gap-3">
          <div className="pkmn-section-stripe absolute top-0 left-0 right-0 rounded-none" style={{ "--stripe": ACCENT } as CSSProperties} />
          <header className="flex items-start gap-3 mt-1">
            <span className="text-2xl inline-flex items-center justify-center w-10 h-10 rounded-md border-2 border-pkmn-box-border shrink-0" style={{ background: ACCENT, color: "white" }}>
              🎷
            </span>
            <div>
              <h2 className="text-[12px] sm:text-[14px] tracking-wider">SAXOPHONE</h2>
              <p className="text-[10px] text-pkmn-text-muted mt-0.5">UCF Video Game Music Ensemble · Aug 2024 — Present</p>
            </div>
          </header>
          <ul className="space-y-2 text-[11px] sm:text-[12px] leading-relaxed">
            {[
              "2 years performing with UCF's Video Game Music Ensemble",
              "Repertoire spans Zelda, classic game OSTs, and other game soundtracks",
              "Favorite thing about VGM: meeting other talented people with similar interests!",
            ].map((b, i) => (
              <li key={i} className="flex gap-2">
                <span aria-hidden style={{ color: ACCENT_DARK }} className="shrink-0">▸</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div
            className="mt-2 w-full h-32 rounded flex items-center justify-center text-[10px] text-pkmn-text-muted"
            style={{ background: "var(--pkmn-box-inner)", border: `2px dashed ${ACCENT_DARK}` }}
          >
            📸 PHOTO COMING SOON
          </div>
        </article>

        {/* Anime */}
        <article className="pkmn-box px-5 py-4 relative flex flex-col gap-3">
          <div className="pkmn-section-stripe absolute top-0 left-0 right-0 rounded-none" style={{ "--stripe": ACCENT } as CSSProperties} />
          <header className="flex items-start gap-3 mt-1">
            <span className="text-2xl inline-flex items-center justify-center w-10 h-10 rounded-md border-2 border-pkmn-box-border shrink-0" style={{ background: ACCENT, color: "white" }}>
              📺
            </span>
            <div>
              <h2 className="text-[12px] sm:text-[14px] tracking-wider">WATCHING ANIME</h2>
              <p className="text-[10px] text-pkmn-text-muted mt-0.5">2 years watching · Shonen fan</p>
            </div>
          </header>
          <ul className="space-y-2 text-[11px] sm:text-[12px] leading-relaxed">
            {[
              "Favorite type: shonen",
              "Favorites: Attack on Titan, Black Clover, and Hunter x Hunter",
              "Currently watching: Vinland Saga and Naruto",
            ].map((b, i) => (
              <li key={i} className="flex gap-2">
                <span aria-hidden style={{ color: ACCENT_DARK }} className="shrink-0">▸</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </article>

      </div>
    </PageFrame>
  );
}
