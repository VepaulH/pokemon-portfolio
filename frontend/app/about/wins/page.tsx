import { CSSProperties } from "react";
import { PageFrame } from "../../_components/PageFrame";
import { TrophyIcon } from "../../_components/MenuIcons";

const ACCENT = "var(--pkmn-hp-yellow)";
const ACCENT_DARK = "#b89000";

type Win = {
  title: string;
  subtitle: string;
  emoji: string;
  detail: string;
};

const wins: Win[] = [
  {
    title: "PRESIDENT'S LIST — UCF",
    subtitle: "Academic Excellence",
    emoji: "🎓",
    detail: "Earned President's List recognition at UCF's Burnett Honors College — awarded to students maintaining a 4.0 GPA in a given semester.",
  },
  {
    title: "NeurIPS 2026 SUBMISSION",
    subtitle: "Research Achievement",
    emoji: "🧠",
    detail: "Co-authored a paper submitted to NeurIPS 2026 on layer-freezing configurations in LLMs — contributing visualizations, dataset curation, and model evaluations alongside faculty advisors at UCF's Institute of Artificial Intelligence.",
  },
  {
    title: "RETURNING SWE INTERN — BNY",
    subtitle: "Career Achievement",
    emoji: "🏦",
    detail: "Invited back for a second Software Engineer internship at Bank of New York (Fall 2026) after delivering a multi-agent incident response system that was presented to 50+ BNY employees in the spring term.",
  },
  {
    title: "BENCH PRESS: 225 LBS",
    subtitle: "Personal Record",
    emoji: "🏋️",
    detail: "Hit a 225 lb bench press — a milestone that took consistent effort in the gym alongside a full course load and internships. Proof that the grind compounds outside of code too.",
  },
  {
    title: "TOP 500 — HYPIXEL BEDWARS",
    subtitle: "Gaming Achievement · 2021",
    emoji: "🎮",
    detail: "Peaked top 500 on Hypixel BedWars leaderboards in 2021. Retired at the top. The competitive mindset from those days still shows up in hackathons.",
  },
  {
    title: "V5 CLIMBER",
    subtitle: "Athletic Achievement",
    emoji: "🧗",
    detail: "Reached V5 grade in bouldering since joining the UCF Rock Climbing Club in August 2025. Working toward V5+ and V6. Every problem is a different algorithm to solve.",
  },
];

export default function WinsPage() {
  return (
    <PageFrame
      title="WINS"
      subtitle="HALL OF FAME — BATTLES WON"
      accent={ACCENT}
      accentDark={ACCENT_DARK}
      titleIcon={<TrophyIcon className="w-6 h-6" />}
      backHref="/about"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {wins.map((win, i) => (
          <article key={i} className="pkmn-box px-5 py-4 relative flex flex-col gap-3">
            <div
              className="pkmn-section-stripe absolute top-0 left-0 right-0 rounded-none"
              style={{ "--stripe": ACCENT } as CSSProperties}
            />
            <header className="flex items-start gap-3 mt-1">
              <span
                className="text-xl inline-flex items-center justify-center w-10 h-10 rounded-md border-2 border-pkmn-box-border shrink-0"
                style={{ background: ACCENT, color: "#3a2200" }}
              >
                {win.emoji}
              </span>
              <div className="min-w-0">
                <h2 className="text-[11px] sm:text-[13px] tracking-wider leading-snug">{win.title}</h2>
                <p className="mt-0.5 text-[9px] sm:text-[10px] text-pkmn-text-muted">{win.subtitle}</p>
              </div>
            </header>
            <p className="text-[11px] sm:text-[12px] leading-relaxed flex-1">{win.detail}</p>
          </article>
        ))}
      </div>
    </PageFrame>
  );
}
