import { CSSProperties } from "react";
import { PageFrame } from "../_components/PageFrame";
import { DialogBox } from "../_components/DialogBox";
import { PokeballIcon } from "../_components/MenuIcons";

const ACCENT = "var(--pkmn-proj)";
const ACCENT_DARK = "var(--pkmn-proj-dark)";

/**
 * PROJECTS — themed as a "POKéDEX" of projects. Each project is an entry with
 * a number, type tags (your stack), and a short description.
 */

type Project = {
  no: string;
  name: string;
  tagline: string;
  types: string[];
  description: string;
  links?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    no: "#001",
    name: "PROJECT NAME",
    tagline: "One-sentence pitch — what does it do, who is it for.",
    types: ["NEXT.JS", "TYPESCRIPT", "POSTGRES"],
    description:
      "Longer description. What you built, the hardest problem, what you learned. Two or three sentences max — keep it scannable.",
    links: [
      { label: "LIVE", href: "#" },
      { label: "CODE", href: "#" },
    ],
  },
  {
    no: "#002",
    name: "SECOND PROJECT",
    tagline: "Another one-liner.",
    types: ["PYTHON", "ML"],
    description: "Description. Description. Description.",
    links: [{ label: "CODE", href: "#" }],
  },
];

const typeColors: Record<string, string> = {
  DEFAULT: "bg-pkmn-accent-blue text-white",
  REACT: "bg-pkmn-accent-blue text-white",
  "NEXT.JS": "bg-pkmn-box-border text-white",
  TYPESCRIPT: "bg-pkmn-accent-blue text-white",
  PYTHON: "bg-pkmn-hp-yellow text-pkmn-text",
  POSTGRES: "bg-pkmn-accent-red text-white",
  ML: "bg-pkmn-grass-dark text-white",
};

export default function ProjectsPage() {
  return (
    <PageFrame
      title="PROJECTS"
      subtitle="POKéDEX OF THINGS I'VE BUILT"
      accent={ACCENT}
      accentDark={ACCENT_DARK}
      titleIcon={<PokeballIcon className="w-6 h-6" />}
    >
      <DialogBox>
        Each entry catalogs a project I&apos;ve caught — its type, its moves,
        and what made it memorable.
      </DialogBox>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.no}
            className="pkmn-box px-5 py-4 flex flex-col gap-3 relative"
          >
            <div
              className="pkmn-section-stripe absolute top-0 left-0 right-0 rounded-none"
              style={{ "--stripe": ACCENT } as CSSProperties}
            />
            <header className="flex items-baseline justify-between gap-2 mt-1">
              <h2 className="text-[12px] sm:text-[14px] tracking-wider flex items-center gap-2">
                <span
                  className="inline-flex items-center justify-center w-7 h-7 rounded-md border-2 border-pkmn-box-border"
                  style={{ background: ACCENT, color: "white" }}
                >
                  <PokeballIcon className="w-4 h-4" />
                </span>
                <span className="text-pkmn-text-muted">{p.no}</span>
                <span>{p.name}</span>
              </h2>
            </header>

            <p className="text-[11px] sm:text-[13px] italic text-pkmn-text-muted">
              {p.tagline}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {p.types.map((t) => (
                <span
                  key={t}
                  className={`text-[9px] px-2 py-1 rounded-sm border-2 border-pkmn-box-border ${
                    typeColors[t] ?? typeColors.DEFAULT
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="text-[11px] sm:text-[13px] leading-relaxed">
              {p.description}
            </p>

            {p.links && p.links.length > 0 && (
              <div className="mt-1 flex flex-wrap gap-2">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="text-[10px] sm:text-[12px] px-2 py-1 rounded-sm border-2 border-pkmn-box-border"
                    style={{ background: ACCENT, color: "white" }}
                  >
                    ▶ {l.label}
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </PageFrame>
  );
}
