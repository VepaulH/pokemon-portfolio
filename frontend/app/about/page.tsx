import { CSSProperties } from "react";
import { PageFrame } from "../_components/PageFrame";
import { DialogBox } from "../_components/DialogBox";
import { TrainerCardIcon } from "../_components/MenuIcons";

const ACCENT = "var(--pkmn-about)";
const ACCENT_DARK = "var(--pkmn-about-dark)";

const trainer = {
  name: "YOUR NAME",
  title: "ASPIRING POKéMON MASTER / SOFTWARE ENGINEER",
  hometown: "PALLET TOWN, KANTO",
  age: "??",
  startedJourney: "20XX",
  favoriteType: "ELECTRIC",
  contact: {
    email: "you@example.com",
    github: "github.com/yourhandle",
    linkedin: "linkedin.com/in/yourhandle",
  },
};

const intro = [
  "Hello there! Welcome to the world of PORTFOLIOS!",
  "My name is OAK. People affectionately refer to me as the PORTFOLIO PROFESSOR!",
  "But first, allow me to introduce you to my friend here...",
];

const bio = [
  "Replace this with your story — where you started, what got you into building software, what you're chasing next.",
  "Keep it human. One paragraph on your background, one on what excites you, one on what you're looking for next.",
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
      <div className="space-y-3">
        {intro.map((line, i) => (
          <DialogBox key={i} showContinueArrow={i === intro.length - 1}>
            {line}
          </DialogBox>
        ))}
      </div>

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
