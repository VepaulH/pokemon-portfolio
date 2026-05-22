import { CSSProperties } from "react";
import { PageFrame } from "../_components/PageFrame";
import { DialogBox } from "../_components/DialogBox";
import { BadgeIcon } from "../_components/MenuIcons";

const ACCENT = "var(--pkmn-exp)";
const ACCENT_DARK = "var(--pkmn-exp-dark)";

/**
 * EXPERIENCE — themed as a "Trainer Card" + a list of GYM BADGES, where each
 * badge is a past role / employer.  Edit the `experiences` array below.
 */

type Experience = {
  badge: string;       // role title
  org: string;         // company
  location: string;
  dateRange: string;   // e.g. "JUN 2023 — PRESENT"
  bullets: string[];   // achievements
};

const experiences: Experience[] = [
  {
    badge: "SOFTWARE ENGINEER",
    org: "COMPANY NAME",
    location: "CITY, ST",
    dateRange: "MMM YYYY — PRESENT",
    bullets: [
      "First impact bullet — what you shipped and why it mattered.",
      "Second bullet — a metric, a scale, a number.",
      "Third bullet — collaboration, leadership, or scope.",
    ],
  },
  {
    badge: "INTERN / EARLIER ROLE",
    org: "PREVIOUS COMPANY",
    location: "CITY, ST",
    dateRange: "MMM YYYY — MMM YYYY",
    bullets: ["Bullet one.", "Bullet two."],
  },
];

export default function ExperiencePage() {
  return (
    <PageFrame
      title="EXPERIENCE"
      subtitle="GYM BADGES EARNED ALONG THE WAY"
      accent={ACCENT}
      accentDark={ACCENT_DARK}
      titleIcon={<BadgeIcon className="w-6 h-6" />}
    >
      <DialogBox>
        Every badge tells a story. Tap into each one to see the moves learned
        and the battles fought.
      </DialogBox>

      <div className="grid gap-4">
        {experiences.map((exp, i) => (
          <article key={i} className="pkmn-box px-5 py-4 relative">
            <div
              className="pkmn-section-stripe absolute top-0 left-0 right-0 rounded-none"
              style={{ "--stripe": ACCENT } as CSSProperties}
            />
            <header className="flex flex-wrap items-baseline justify-between gap-2 mt-1">
              <div className="flex items-center gap-2">
                <span
                  className="inline-flex items-center justify-center w-8 h-8 rounded-md border-2 border-pkmn-box-border"
                  style={{ background: ACCENT, color: "white" }}
                >
                  <BadgeIcon className="w-5 h-5" />
                </span>
                <div>
                  <h2 className="text-[12px] sm:text-[14px] tracking-wider">
                    {exp.badge}
                  </h2>
                  <p className="mt-0.5 text-[10px] sm:text-[11px] text-pkmn-text-muted">
                    {exp.org} · {exp.location}
                  </p>
                </div>
              </div>
              <span
                className="text-[10px] sm:text-[11px] px-2 py-1 rounded-sm border-2 border-pkmn-box-border"
                style={{ background: ACCENT, color: "#3a2200" }}
              >
                {exp.dateRange}
              </span>
            </header>

            <ul className="mt-3 space-y-2 text-[11px] sm:text-[13px] leading-relaxed">
              {exp.bullets.map((b, j) => (
                <li key={j} className="flex gap-2">
                  <span aria-hidden style={{ color: ACCENT_DARK }}>
                    ▸
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </PageFrame>
  );
}
