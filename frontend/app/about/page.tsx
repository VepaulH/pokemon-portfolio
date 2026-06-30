import { CSSProperties } from "react";
import { HoennScene } from "../_components/HoennScene";
import { DialogBox } from "../_components/DialogBox";
import { MenuBox, type MenuOption } from "../_components/MenuBox";
import {
  TrainerCardIcon,
  ClubIcon,
  ClimbIcon,
  MusicIcon,
  PokedexIcon,
  TrophyIcon,
  BackArrowIcon,
} from "../_components/MenuIcons";
import Link from "next/link";

const ACCENT = "var(--pkmn-about)";
const ACCENT_DARK = "var(--pkmn-about-dark)";

const menuOptions: [MenuOption, MenuOption, MenuOption, MenuOption] = [
  {
    label: "TRAINER",
    href: "/about/trainer",
    bg: "var(--pkmn-about)",
    dark: "var(--pkmn-about-dark)",
    fg: "#ffffff",
    icon: <TrainerCardIcon className="w-5 h-5" />,
  },
  {
    label: "CLUBS",
    href: "/about/clubs",
    bg: "var(--pkmn-skills)",
    dark: "var(--pkmn-skills-dark)",
    fg: "#0e2a0e",
    icon: <ClubIcon className="w-5 h-5" />,
  },
  {
    label: "HOBBIES",
    href: "/about/hobbies",
    bg: "var(--pkmn-exp)",
    dark: "var(--pkmn-exp-dark)",
    fg: "#3a2200",
    icon: <ClimbIcon className="w-5 h-5" />,
  },
  {
    label: "MUSIC",
    href: "/about/music",
    bg: "var(--pkmn-proj)",
    dark: "var(--pkmn-proj-dark)",
    fg: "#ffffff",
    icon: <MusicIcon className="w-5 h-5" />,
  },
];


export default function AboutMenuPage() {
  return (
    <>
      <HoennScene dim={0.45} blur={3} />
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="pkmn-console w-full max-w-[860px]">
          <div className="pkmn-console-screen">
            <div
              className="relative w-full overflow-hidden rounded-sm flex items-center justify-center"
              style={{ aspectRatio: "5 / 3", background: "rgba(20,40,80,0.55)" }}
            >
              <div
                className="pkmn-box px-6 py-5 text-center"
                style={{ "--stripe": ACCENT } as CSSProperties}
              >
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-md border-2 border-pkmn-box-border"
                    style={{ background: ACCENT, color: "white" }}
                  >
                    <TrainerCardIcon className="w-6 h-6" />
                  </span>
                  <span className="text-[16px] sm:text-[20px] tracking-widest">ABOUT ME</span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-pkmn-text-muted">
                  CHOOSE A CATEGORY
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-9 gap-3">
            <div className="sm:col-span-5">
              <DialogBox showContinueArrow>
                What would you like to know about{" "}
                <span style={{ color: ACCENT }}>VEPAUL</span>?
              </DialogBox>
            </div>
            <div className="sm:col-span-4 flex flex-col gap-2">
              <MenuBox options={menuOptions} />
              <div className="pkmn-box px-3 py-3 w-full">
                <div className="grid grid-cols-2 gap-2.5">
                  <Link
                    href="/about/pokemon"
                    className="pkmn-btn text-[9px] sm:text-[10px] tracking-wider"
                    style={{ "--btn-bg": "var(--pkmn-accent-red)", "--btn-fg": "#ffffff", "--btn-dark": "#8b0000" } as CSSProperties}
                  >
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-md shrink-0" style={{ background: "rgba(255,255,255,0.85)", color: "#8b0000" }}>
                      <PokedexIcon className="w-4 h-4" />
                    </span>
                    <span className="whitespace-nowrap leading-none">POKéDEX</span>
                  </Link>
                  <Link
                    href="/about/wins"
                    className="pkmn-btn text-[9px] sm:text-[10px] tracking-wider"
                    style={{ "--btn-bg": "var(--pkmn-hp-yellow)", "--btn-fg": "#3a2200", "--btn-dark": "#b89000" } as CSSProperties}
                  >
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-md shrink-0" style={{ background: "rgba(255,255,255,0.85)", color: "#b89000" }}>
                      <TrophyIcon className="w-4 h-4" />
                    </span>
                    <span className="whitespace-nowrap leading-none">WINS</span>
                  </Link>
                  <Link
                    href="/"
                    className="pkmn-btn col-span-2 text-[9px] sm:text-[10px] tracking-wider"
                    style={{ "--btn-bg": "var(--pkmn-box-border)", "--btn-fg": "#ffffff", "--btn-dark": "#000000" } as CSSProperties}
                  >
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-md shrink-0" style={{ background: "rgba(255,255,255,0.85)", color: "#000000" }}>
                      <BackArrowIcon className="w-4 h-4" />
                    </span>
                    <span className="whitespace-nowrap leading-none">BACK TO HOME</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
