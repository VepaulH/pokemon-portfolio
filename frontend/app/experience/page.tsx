"use client";

import { CSSProperties, useState } from "react";
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
  badge: string;
  org: string;
  location: string;
  dateRange: string;
  bullets: string[];
  logoDomain?: string; // e.g. "bny.com" — used for logo fetch
  logoInitial?: string; // fallback letter if no domain
};

const experiences: Experience[] = [
  {
    badge: "SOFTWARE ENGINEER INTERN",
    org: "BANK OF NEW YORK",
    location: "ORLANDO, FL",
    dateRange: "JUN 2026 — PRESENT",
    logoDomain: "bny.com",
    logoInitial: "B",
    bullets: [
      "Returning for a second internship (Fall 2026) after delivering a high-impact multi-agent incident response system in the spring term.",
    ],
  },
  {
    badge: "FOUNDER",
    org: "ARCUS",
    location: "ORLANDO, FL",
    dateRange: "JUN 2026 — PRESENT",
    logoInitial: "A",
    bullets: [
      "Building a platform for student founders that connects them with the right people, tools, and opportunities at every stage of their journey.",
      "Identified the core problem: most student founders fail before they start due to a lack of network, structure, and resources to execute.",
    ],
  },
  {
    badge: "EXTERN",
    org: "SERVICENOW",
    location: "REMOTE",
    dateRange: "JUN 2026 — PRESENT",
    logoDomain: "servicenow.com",
    logoInitial: "S",
    bullets: [
      "Selected for a ServiceNow externship providing exposure to modern development and infrastructure ecosystems.",
      "Developing proficiency in enterprise technology tools, platform workflows, and industry best practices through hands-on learning.",
    ],
  },
  {
    badge: "SOFTWARE ENGINEER INTERN",
    org: "BANK OF NEW YORK",
    location: "ORLANDO, FL",
    dateRange: "JAN 2026 — MAY 2026",
    logoDomain: "bny.com",
    logoInitial: "B",
    bullets: [
      "Delivered a final demo and system design overview to 50+ BNY employees as part of a 4-person team, fielding live technical questions on architecture decisions and implementation tradeoffs.",
      "Built real-time threshold-based monitoring across 4 services to surface anomalous behavior during fault-injection tests, triggering a structured incident-response pipeline upon detection.",
      "Developed a two-stage response system: an initial agent packaged AppDynamics data to suggest targeted fixes, escalating to a three-agent system on failure that used Prometheus context to surface root causes, propose alternatives, and query Git history for deeper analysis.",
    ],
  },
  {
    badge: "SOFTWARE ENGINEER INTERN",
    org: "INSTITUTE FOR SIMULATION & TRAINING — UCF",
    location: "ORLANDO, FL",
    dateRange: "DEC 2025 — JAN 2026",
    logoDomain: "ucf.edu",
    logoInitial: "U",
    bullets: [
      "Built a digital twin for glovebox laboratory safety monitoring as part of a Department of Energy partnership, simulating 3,600+ timesteps of telemetry data.",
      "Reduced 8+ system variables to a statistically validated feature set for anomaly modeling by applying regression analysis and variance inflation factor (VIF).",
      "Detected sustained anomalies and achieved 0.9 ROC-AUC for short-horizon risk prediction by applying Isolation Forest with temporal persistence to telemetry data.",
    ],
  },
  {
    badge: "UNDERGRADUATE RESEARCH ASSISTANT",
    org: "INSTITUTE OF ARTIFICIAL INTELLIGENCE — UCF",
    location: "ORLANDO, FL",
    dateRange: "FEB 2025 — PRESENT",
    logoDomain: "ucf.edu",
    logoInitial: "U",
    bullets: [
      "Co-authored a paper submitted to NeurIPS 2026 alongside faculty advisors, contributing data visualizations to convey experiment results of freezing model layers.",
      "Ran experiments on models spanning topological analysis, weight generation with and without fine-tuning, clustering, and layer changes across 100+ finetuning runs on the UCF ARCC cluster.",
      "Delivered 45-minute presentations on peer-reviewed AI/ML papers, distilling complex methods into accessible insights for faculty and student researchers.",
    ],
  },
  {
    badge: "HONORS ORIENTATION AMBASSADOR",
    org: "UCF BURNETT HONORS COLLEGE",
    location: "ORLANDO, FL",
    dateRange: "APR 2025 — PRESENT",
    logoDomain: "ucf.edu",
    logoInitial: "U",
    bullets: [
      "Serve as a mentor for 15 incoming freshmen in the Honors program majoring in Computer Science.",
      "Meet individually with each student through June to advise on courses, the honors curriculum, and answer questions about navigating UCF.",
    ],
  },
];

function OrgLogo({ domain, initial, accent }: { domain?: string; initial?: string; accent: string }) {
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
      style={{ background: accent, color: "white" }}
    >
      {initial ?? "?"}
    </span>
  );
}

export default function ExperiencePage() {
  return (
    <PageFrame
      title="EXPERIENCE"
      subtitle="GYM BADGES EARNED ALONG THE WAY"
      accent={ACCENT}
      accentDark={ACCENT_DARK}
      titleIcon={<BadgeIcon className="w-6 h-6" />}
    >

      <div className="grid gap-4 md:grid-cols-2">
        {experiences.map((exp, i) => (
          <article key={i} className="pkmn-box px-5 py-4 relative flex flex-col">
            <div
              className="pkmn-section-stripe absolute top-0 left-0 right-0 rounded-none"
              style={{ "--stripe": ACCENT } as CSSProperties}
            />
            <header className="mt-1 flex flex-col gap-2">
              <div className="flex items-start gap-3">
                <OrgLogo domain={exp.logoDomain} initial={exp.logoInitial} accent={ACCENT} />
                <div className="min-w-0">
                  <h2 className="text-[11px] sm:text-[13px] tracking-wider leading-snug">
                    {exp.badge}
                  </h2>
                  <p className="mt-0.5 text-[10px] sm:text-[11px] text-pkmn-text-muted">
                    {exp.org}
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-pkmn-text-muted">
                    {exp.location}
                  </p>
                </div>
              </div>
              <span
                className="self-start text-[9px] sm:text-[10px] px-2 py-1 rounded-sm border-2 border-pkmn-box-border"
                style={{ background: ACCENT, color: "#3a2200" }}
              >
                {exp.dateRange}
              </span>
            </header>

            <ul className="mt-3 space-y-2 text-[10px] sm:text-[12px] leading-relaxed flex-1">
              {exp.bullets.map((b, j) => (
                <li key={j} className="flex gap-2">
                  <span aria-hidden style={{ color: ACCENT_DARK }} className="shrink-0">
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
