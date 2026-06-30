import { CSSProperties } from "react";
import { PageFrame } from "../_components/PageFrame";
import { TrainerCardIcon } from "../_components/MenuIcons";

const ACCENT = "var(--pkmn-about)";
const ACCENT_DARK = "var(--pkmn-about-dark)";

const trainer = {
  name: "VEPAUL HARIPRASHAD",
  title: "RETURNING @ BNY · FOUNDER @ ARCUS · RESEARCH @ UCF IAI",
  hometown: "ORLANDO, FL",
  age: "20",
  startedJourney: "2024",
  favoriteType: "DRAGON",
  contact: {
    email: "vehcollege@gmail.com",
    github: "github.com/VepaulH",
    linkedin: "linkedin.com/in/vepaulh",
  },
};

const bio = [
  "I'm a CS + Data Science student at UCF's Burnett Honors College (GPA: 3.88). Right now I'm building Arcus, a platform for student founders, while serving as VP of the American Statistical Association chapter at UCF — two roles that keep me equally close to code and to people.",
  "This fall I'm returning to BNY, and I recently wrapped up AI research that's currently under review at NeurIPS. My work spans multi-agent systems, anomaly detection, and LLM weight analysis — I'm drawn to problems where the engineering decisions actually matter.",
  "I'm looking for SWE or Data Science roles where I can keep building useful products and learning from people who've been doing this longer than I have. If you're working on something interesting in tech, data, or the student founder space, let's connect.",
];

export default function AboutPage() {
  return (
    <PageFrame
      title="ABOUT ME"
      subtitle="PROFESSOR OAK'S INTRODUCTION"
      accent={ACCENT}
      accentDark={ACCENT_DARK}
      titleIcon={<TrainerCardIcon className="w-6 h-6" />}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {/* Trainer card */}
        <aside className="pkmn-box px-5 py-4 md:col-span-1 flex flex-col gap-3 relative">
          <div
            className="pkmn-section-stripe absolute top-0 left-0 right-0 rounded-none"
            style={{ "--stripe": ACCENT } as CSSProperties}
          />
          <div className="flex items-center gap-2 mt-1">
            <span
              className="inline-flex items-center justify-center w-8 h-8 rounded-md border-2 border-pkmn-box-border"
              style={{ background: ACCENT, color: "white" }}
            >
              <TrainerCardIcon className="w-5 h-5" />
            </span>
            <h2 className="text-[12px] tracking-wider">TRAINER CARD</h2>
          </div>
          <div
            className="aspect-square w-full max-w-[180px] mx-auto bg-pkmn-box-inner rounded flex items-center justify-center text-[10px] text-pkmn-text-muted text-center px-2"
            style={{ border: `3px solid var(--pkmn-about-dark)` }}
          >
            DROP YOUR PHOTO / AVATAR HERE
          </div>
          <dl className="text-[11px] space-y-1.5">
            <Row label="NAME" value={trainer.name} />
            <Row label="TITLE" value={trainer.title} />
            <Row label="FROM" value={trainer.hometown} />
            <Row label="AGE" value={trainer.age} />
            <Row label="JOURNEY" value={trainer.startedJourney} />
            <Row label="FAV TYPE" value={trainer.favoriteType} />
          </dl>

          <div
            className="mt-2 pt-3 space-y-1.5 text-[11px]"
            style={{ borderTop: `2px solid ${ACCENT}` }}
          >
            <Row label="EMAIL" value={trainer.contact.email} />
            <Row label="GITHUB" value={trainer.contact.github} />
            <Row label="LINKED" value={trainer.contact.linkedin} />
          </div>
        </aside>

        {/* Bio */}
        <article className="pkmn-box px-5 py-4 md:col-span-2 space-y-3 text-[12px] sm:text-[14px] leading-relaxed relative">
          <div
            className="pkmn-section-stripe absolute top-0 left-0 right-0 rounded-none"
            style={{ "--stripe": ACCENT } as CSSProperties}
          />
          <h2 className="text-[12px] sm:text-[14px] tracking-wider mt-1">
            <span style={{ color: ACCENT_DARK }}>▶</span> MY STORY
          </h2>
          {bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </article>
      </div>
    </PageFrame>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-3">
      <dt className="text-pkmn-text-muted">{label}</dt>
      <dd className="text-right break-all">{value}</dd>
    </div>
  );
}
