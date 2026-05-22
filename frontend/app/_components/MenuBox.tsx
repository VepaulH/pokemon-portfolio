import Link from "next/link";
import { CSSProperties, ReactNode } from "react";

export type MenuOption = {
  label: string;
  href: string;
  /** Background color (use a CSS var or hex). */
  bg: string;
  /** Darker shade for the bottom inset shadow. */
  dark: string;
  /** Foreground text color. */
  fg: string;
  /** Icon component, e.g. <BadgeIcon />. */
  icon: ReactNode;
};

type Props = {
  options: [MenuOption, MenuOption, MenuOption, MenuOption];
};

/**
 * 2x2 grid of chunky colored buttons — each option has its own color and icon,
 * mirroring the Gen 3 battle menu (FIGHT red, BAG yellow, POKéMON green, RUN blue).
 */
export function MenuBox({ options }: Props) {
  return (
    <div className="pkmn-box px-3 py-3 w-full">
      <div className="grid grid-cols-2 gap-2.5">
        {options.map((opt) => (
          <Link
            key={opt.href}
            href={opt.href}
            className="pkmn-btn pkmn-btn-compact text-[9px] sm:text-[10px] tracking-wider"
            style={
              {
                "--btn-bg": opt.bg,
                "--btn-fg": opt.fg,
                "--btn-dark": opt.dark,
              } as CSSProperties
            }
          >
            <span
              className="inline-flex items-center justify-center w-6 h-6 rounded-md shrink-0"
              style={{ background: "rgba(255,255,255,0.85)", color: opt.dark }}
            >
              {opt.icon}
            </span>
            <span className="whitespace-nowrap leading-none">{opt.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
