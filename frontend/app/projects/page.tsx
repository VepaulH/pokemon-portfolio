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
    name: "ARCUS",
    tagline: "A platform connecting student founders with people, tools, and opportunities.",
    types: ["FOUNDER", "NEXT.JS", "TYPESCRIPT"],
    description:
      "Most student founders fail before they start due to a lack of network, structure, and resources. Arcus bridges that gap — connecting them with the right people and opportunities at every stage of their journey. Currently building and growing the platform from Orlando, FL.",
  },
  {
    no: "#002",
    name: "OBI",
    tagline: "Audio similarity search platform — find sounds by sound or description.",
    types: ["NEXT.JS", "TYPESCRIPT", "FASTAPI", "QDRANT"],
    description:
      "Built foundational frontend features including login/signup, profile management, search history, and interactive search controls. Curated 1,000+ audio samples and developed a demo-ready platform for 50+ testers built around CLAP audio/text embeddings and Qdrant vector search.",
  },
  {
    no: "#003",
    name: "SIGNALFORGE",
    tagline: "Multi-agent prediction system for Kalshi prediction markets.",
    types: ["PYTHON", "CLAUDE API", "REDIS", "FETCH.AI"],
    description:
      "Architected an orchestration agent that classifies user queries by category (financial, sports, culture) and routes them to specialized agents. Implemented real-time Browserbase scraping pipelines with Redis caching; independently built the orchestrator and two of three category agents at UC Berkeley AI Hackathon 2026.",
    links: [{ label: "CODE", href: "https://github.com/VepaulH" }],
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
  FASTAPI: "bg-pkmn-grass-dark text-white",
  QDRANT: "bg-pkmn-accent-red text-white",
  "CLAUDE API": "bg-pkmn-box-border text-white",
  REDIS: "bg-pkmn-accent-red text-white",
  "FETCH.AI": "bg-pkmn-accent-blue text-white",
  FOUNDER: "bg-pkmn-hp-yellow text-pkmn-text",
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
