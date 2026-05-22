import Link from "next/link";
import { CSSProperties, ReactNode } from "react";
import { HoennScene } from "./HoennScene";
import { BackArrowIcon } from "./MenuIcons";

type Props = {
  /** Header title shown in the top dialog strip (e.g. "EXPERIENCE"). */
  title: string;
  /** Optional flavor text shown under the title. */
  subtitle?: string;
  /** Accent color used for the section stripe + title icon. */
  accent: string;
  /** Darker shade of accent — used on the BACK button bottom shadow. */
  accentDark: string;
  /** Optional icon shown next to the title (typically the same as the home menu icon). */
  titleIcon?: ReactNode;
  /** Dim factor for the Hoenn backdrop (0-1). Default 0.45 keeps content legible. */
  bgDim?: number;
  children: ReactNode;
};

/**
 * Shared frame for sub-pages — Hoenn scene behind, a colored top stripe, the
 * section title card on the left, and a persistent BACK button on the right.
 */
export function PageFrame({
  title,
  subtitle,
  accent,
  accentDark,
  titleIcon,
  bgDim = 0.45,
  children,
}: Props) {
  return (
    <>
      <HoennScene dim={bgDim} blur={3} />

      <div className="flex-1 flex flex-col">
        <div className="mx-auto w-full max-w-5xl flex-1 flex flex-col px-4 sm:px-8 py-6 gap-4">
          {/* Top bar — title card + back button */}
          <div className="flex items-stretch gap-3">
            <div className="pkmn-box flex-1 px-5 py-3 relative overflow-hidden">
              <div
                className="pkmn-section-stripe absolute top-0 left-0 right-0 rounded-none"
                style={{ "--stripe": accent } as CSSProperties}
              />
              <div className="flex items-center gap-3 mt-1">
                {titleIcon && (
                  <span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-md border-2 border-pkmn-box-border shrink-0"
                    style={{ background: accent, color: "white" }}
                  >
                    {titleIcon}
                  </span>
                )}
                <div>
                  <div className="text-[14px] sm:text-[18px] tracking-widest">
                    {title}
                  </div>
                  {subtitle && (
                    <div className="mt-1 text-[10px] sm:text-[11px] text-pkmn-text-muted">
                      {subtitle}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <Link
              href="/"
              className="pkmn-btn text-[11px] sm:text-[12px] tracking-wider"
              style={
                {
                  "--btn-bg": accent,
                  "--btn-dark": accentDark,
                  "--btn-fg": "#ffffff",
                } as CSSProperties
              }
            >
              <span
                className="inline-flex items-center justify-center w-6 h-6 rounded-md"
                style={{ background: "rgba(255,255,255,0.85)", color: accentDark }}
              >
                <BackArrowIcon className="w-4 h-4" />
              </span>
              BACK
            </Link>
          </div>

          <div className="flex-1 flex flex-col gap-4">{children}</div>
        </div>
      </div>
    </>
  );
}
