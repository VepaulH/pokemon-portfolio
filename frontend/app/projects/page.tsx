"use client";

import { CSSProperties, useState } from "react";
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
  logoDomain?: string;
  logoInitial?: string;
};

const projects: Project[] = [
  {
    no: "#001",
    name: "ARCUS",
    tagline: "A platform connecting student founders with people, tools, and opportunities.",
    types: ["FOUNDER", "NEXT.JS", "TYPESCRIPT"],
    description:
      "Most student founders fail before they start due to a lack of network, structure, and resources. Arcus bridges that gap — connecting them with the right people and opportunities at every stage of their journey. Currently building and growing the platform from Orlando, FL.",
    logoInitial: "A",
  },
  {
    no: "#002",
    name: "OBI",
    tagline: "Audio similarity search platform — find sounds by sound or description.",
    types: ["NEXT.JS", "TYPESCRIPT", "FASTAPI", "QDRANT"],
    description:
      "Built foundational frontend features including login/signup, profile management, search history, and interactive search controls. Curated 1,000+ audio samples and developed a demo-ready platform for 50+ testers built around CLAP audio/text embeddings and Qdrant vector search.",
    logoInitial: "O",
  },
  {
    no: "#003",
    name: "SIGNALFORGE",
    tagline: "Multi-agent prediction system for Kalshi prediction markets.",
    types: ["PYTHON", "CLAUDE API", "REDIS", "FETCH.AI"],
    description:
      "Architected an orchestration agent that classifies user queries by category (financial, sports, culture) and routes them to specialized agents. Implemented real-time Browserbase scraping pipelines with Redis caching; independently built the orchestrator and two of three category agents at UC Berkeley AI Hackathon 2026.",
    links: [{ label: "CODE", href: "https://github.com/VepaulH" }],
    logoInitial: "S",
  },
  {
    no: "#004",
    name: "TOUCHGRASS",
    tagline: "Nature scavenger hunt powered by AI image recognition — go touch grass.",
    types: ["REACT", "GEMINI API", "JAVASCRIPT"],
    description:
      "Built in 36 hours at KnightHacks VIII. Led front-end development — home page, camera upload interface, leaderboard screen, and dropdown navigation. Integrated display logic for Gemini API results that identify real-world objects from user photos and return match feedback in real time.",
    logoInitial: "T",
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
  "GEMINI API": "bg-pkmn-accent-blue text-white",
  JAVASCRIPT: "bg-pkmn-hp-yellow text-pkmn-text",
};

function ProjectLogo({ domain, initial }: { domain?: string; initial?: string }) {
  const [failed, setFailed] = useState(false);

  if (domain && !failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`https://logo.clearbit.com/${domain}`}
        alt=""
        onError={() => setFailed(true)}
        className="w-10 h-10 rounded-md border-2 border-pkmn-box-border object-contain bg-white p-0.5 shrink-0"
      />
    );
  }

  return (
    <span
      className="inline-flex items-center justify-center w-10 h-10 rounded-md border-2 border-pkmn-box-border text-[14px] font-bold shrink-0"
      style={{ background: ACCENT, color: "white" }}
    >
      {initial ?? "?"}
    </span>
  );
}

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
        Each entry catalogs a project I&apos;ve caught — check them out here!
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
            <header className="flex items-start gap-3 mt-1">
              <ProjectLogo domain={p.logoDomain} initial={p.logoInitial} />
              <div className="min-w-0">
                <h2 className="text-[11px] sm:text-[13px] tracking-wider leading-snug flex items-center gap-1.5">
                  <span className="text-pkmn-text-muted">{p.no}</span>
                  <span>{p.name}</span>
                </h2>
                <p className="mt-0.5 text-[10px] sm:text-[11px] italic text-pkmn-text-muted leading-snug">
                  {p.tagline}
                </p>
              </div>
            </header>

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

            <p className="text-[11px] sm:text-[13px] leading-relaxed flex-1">
              {p.description}
            </p>

            {p.links && p.links.length > 0 && (
              <div className="mt-auto flex flex-wrap gap-2">
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
