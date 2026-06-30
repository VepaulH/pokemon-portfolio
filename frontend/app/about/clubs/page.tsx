import { CSSProperties } from "react";
import { PageFrame } from "../../_components/PageFrame";
import { ClubIcon } from "../../_components/MenuIcons";

const ACCENT = "var(--pkmn-skills)";
const ACCENT_DARK = "var(--pkmn-skills-dark)";

type Club = {
  name: string;
  role: string;
  dates: string;
  description: string;
  emoji: string;
};

const clubs: Club[] = [
  {
    name: "AMERICAN STATISTICAL ASSOCIATION — UCF",
    role: "VICE PRESIDENT",
    dates: "PRESENT",
    emoji: "📊",
    description:
      "Helping lead the UCF chapter of the ASA — organizing events, connecting members with data science resources, and bridging the gap between stats coursework and real-world applications.",
  },
  {
    name: "UCF VIDEO GAME MUSIC ENSEMBLE",
    role: "MEMBER — SAXOPHONE",
    dates: "AUG 2024 — PRESENT",
    emoji: "🎷",
    description:
      "Two years playing saxophone in UCF's VGM Ensemble — performing arrangements from iconic video game and anime soundtracks. From Zelda to Attack on Titan, if it has a melody, we've probably covered it.",
  },
  {
    name: "UCF ROCK CLIMBING CLUB",
    role: "MEMBER",
    dates: "AUG 2025 — PRESENT",
    emoji: "🧗",
    description:
      "Joined the climbing club in my sophomore year and haven't looked down since. Currently climbing V5, working toward V6. The problem-solving mindset translates surprisingly well to debugging.",
  },
  {
    name: "KNIGHTHACKS",
    role: "MEMBER / HACKATHON PARTICIPANT",
    dates: "OCT 2025",
    emoji: "⚔️",
    description:
      "Competed in KnightHacks VIII — UCF's flagship hackathon — where my team built TouchGrass, a nature scavenger hunt powered by Google Gemini's image recognition API over 36 hours.",
  },
];

export default function ClubsPage() {
  return (
    <PageFrame
      title="CLUBS"
      subtitle="GUILDS JOINED ALONG THE JOURNEY"
      accent={ACCENT}
      accentDark={ACCENT_DARK}
      titleIcon={<ClubIcon className="w-6 h-6" />}
      backHref="/about"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {clubs.map((club, i) => (
          <article key={i} className="pkmn-box px-5 py-4 relative flex flex-col gap-3">
            <div
              className="pkmn-section-stripe absolute top-0 left-0 right-0 rounded-none"
              style={{ "--stripe": ACCENT } as CSSProperties}
            />
            <header className="flex items-start gap-3 mt-1">
              <span
                className="text-2xl inline-flex items-center justify-center w-10 h-10 rounded-md border-2 border-pkmn-box-border shrink-0"
                style={{ background: ACCENT, color: "white" }}
              >
                {club.emoji}
              </span>
              <div className="min-w-0">
                <h2 className="text-[11px] sm:text-[12px] tracking-wider leading-snug">{club.name}</h2>
                <p className="mt-0.5 text-[10px] sm:text-[11px] text-pkmn-text-muted">{club.role}</p>
              </div>
            </header>
            <span
              className="self-start text-[9px] sm:text-[10px] px-2 py-1 rounded-sm border-2 border-pkmn-box-border"
              style={{ background: ACCENT, color: "#0e2a0e" }}
            >
              {club.dates}
            </span>
            <p className="text-[11px] sm:text-[12px] leading-relaxed flex-1">{club.description}</p>
          </article>
        ))}
      </div>
    </PageFrame>
  );
}
