import { CSSProperties } from "react";
import { PageFrame } from "../_components/PageFrame";
import { DialogBox } from "../_components/DialogBox";
import { LightningIcon } from "../_components/MenuIcons";

const ACCENT = "var(--pkmn-skills)";
const ACCENT_DARK = "var(--pkmn-skills-dark)";

/**
 * SKILLS — themed as a "MOVE LIST" from the battle menu's FIGHT screen.
 * Each skill is a move with a TYPE, PP (years used), and POWER (proficiency).
 */

type Move = {
  name: string;
  type: SkillType;
  pp: number;
  ppMax: number;
  power: number;
};

type SkillType =
  | "LANGUAGE"
  | "FRONTEND"
  | "BACKEND"
  | "DATA"
  | "INFRA"
  | "TOOLING";

const typeStyles: Record<SkillType, string> = {
  LANGUAGE: "bg-pkmn-accent-blue text-white",
  FRONTEND: "bg-pkmn-accent-red text-white",
  BACKEND: "bg-pkmn-grass-dark text-white",
  DATA: "bg-pkmn-hp-yellow text-pkmn-text",
  INFRA: "bg-pkmn-box-border text-white",
  TOOLING: "bg-pkmn-dirt text-pkmn-text",
};

const moves: Move[] = [
  { name: "TYPESCRIPT", type: "LANGUAGE", pp: 4, ppMax: 10, power: 85 },
  { name: "PYTHON",     type: "LANGUAGE", pp: 5, ppMax: 10, power: 80 },
  { name: "REACT",      type: "FRONTEND", pp: 4, ppMax: 10, power: 88 },
  { name: "NEXT.JS",    type: "FRONTEND", pp: 2, ppMax: 10, power: 75 },
  { name: "NODE.JS",    type: "BACKEND",  pp: 4, ppMax: 10, power: 80 },
  { name: "POSTGRES",   type: "DATA",     pp: 3, ppMax: 10, power: 70 },
  { name: "DOCKER",     type: "INFRA",    pp: 3, ppMax: 10, power: 65 },
  { name: "GIT",        type: "TOOLING",  pp: 6, ppMax: 10, power: 90 },
];

export default function SkillsPage() {
  return (
    <PageFrame
      title="SKILLS"
      subtitle="LEARNED MOVES — CHOOSE A MOVE"
      accent={ACCENT}
      accentDark={ACCENT_DARK}
      titleIcon={<LightningIcon className="w-6 h-6" />}
    >
      <DialogBox>
        Each move has a TYPE, PP (years used), and POWER (how comfortable I am
        with it). Higher POWER means deeper proficiency.
      </DialogBox>

      <div className="grid gap-3 md:grid-cols-2">
        {moves.map((m) => (
          <article key={m.name} className="pkmn-box px-5 py-4 relative">
            <div
              className="pkmn-section-stripe absolute top-0 left-0 right-0 rounded-none"
              style={{ "--stripe": ACCENT } as CSSProperties}
            />
            <header className="flex items-baseline justify-between gap-3 mt-1">
              <h2 className="text-[12px] sm:text-[14px] tracking-wider flex items-center gap-2">
                <span
                  className="inline-flex items-center justify-center w-7 h-7 rounded-md border-2 border-pkmn-box-border"
                  style={{ background: ACCENT, color: "white" }}
                >
                  <LightningIcon className="w-4 h-4" />
                </span>
                {m.name}
              </h2>
              <span
                className={`text-[9px] px-2 py-1 rounded-sm border-2 border-pkmn-box-border ${typeStyles[m.type]}`}
              >
                {m.type}
              </span>
            </header>

            <div className="mt-3 grid grid-cols-[auto_1fr_auto] items-center gap-2 text-[10px] sm:text-[11px]">
              <span className="text-pkmn-text-muted">PP</span>
              <div className="pkmn-hp-track">
                <div
                  className="pkmn-hp-fill"
                  style={{
                    width: `${(m.pp / m.ppMax) * 100}%`,
                    background: "var(--pkmn-accent-blue)",
                  }}
                />
              </div>
              <span>
                {m.pp}/{m.ppMax} YR
              </span>
            </div>

            <div className="mt-2 grid grid-cols-[auto_1fr_auto] items-center gap-2 text-[10px] sm:text-[11px]">
              <span className="text-pkmn-text-muted">PWR</span>
              <div className="pkmn-hp-track">
                <div
                  className="pkmn-hp-fill"
                  style={{
                    width: `${m.power}%`,
                    background:
                      m.power >= 80
                        ? "var(--pkmn-hp-green)"
                        : m.power >= 50
                        ? "var(--pkmn-hp-yellow)"
                        : "var(--pkmn-hp-red)",
                  }}
                />
              </div>
              <span>{m.power}</span>
            </div>
          </article>
        ))}
      </div>
    </PageFrame>
  );
}
