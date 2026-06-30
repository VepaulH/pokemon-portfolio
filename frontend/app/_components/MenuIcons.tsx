/**
 * Tiny pixel-styled SVG icons for the home menu buttons.
 * Each one fits in a 24x24 box and uses currentColor for the foreground stroke
 * so they pick up the button's text color automatically.
 */

type IconProps = { className?: string };

/** Gym badge — eight-pointed star inside a ring. Represents EXPERIENCE. */
export function BadgeIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
      <path
        d="M12 2 L14 9 L21 9 L15.5 13 L17.5 20 L12 16 L6.5 20 L8.5 13 L3 9 L10 9 Z"
        fill="currentColor"
        stroke="rgba(0,0,0,0.4)"
        strokeWidth="0.75"
      />
    </svg>
  );
}

/** Poké Ball — split top/bottom with center dot. Represents PROJECTS. */
export function PokeballIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="10" fill="white" stroke="black" strokeWidth="1.5" />
      <path
        d="M2.5 12 a9.5 9.5 0 0 1 19 0 Z"
        fill="currentColor"
        stroke="black"
        strokeWidth="1.5"
      />
      <rect x="2.5" y="11" width="19" height="2" fill="black" />
      <circle cx="12" cy="12" r="3" fill="white" stroke="black" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="1.25" fill="white" stroke="black" strokeWidth="0.8" />
    </svg>
  );
}

/** Trainer card — ID rectangle with a person silhouette. Represents ABOUT ME. */
export function TrainerCardIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect
        x="2"
        y="5"
        width="20"
        height="14"
        rx="2"
        fill="currentColor"
        opacity="0.2"
        stroke="rgba(0,0,0,0.5)"
        strokeWidth="1.2"
      />
      <circle cx="8" cy="11" r="2.2" fill="currentColor" />
      <path d="M4.5 17 Q8 13.5 11.5 17 Z" fill="currentColor" />
      <rect x="13" y="9" width="7" height="1.5" fill="currentColor" opacity="0.7" />
      <rect x="13" y="12" width="7" height="1.5" fill="currentColor" opacity="0.5" />
      <rect x="13" y="15" width="5" height="1.5" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

/** Lightning bolt — represents SKILLS (learned moves). */
export function LightningIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M13 2 L4 14 L11 14 L9 22 L20 9 L13 9 Z"
        fill="currentColor"
        stroke="rgba(0,0,0,0.5)"
        strokeWidth="1"
      />
    </svg>
  );
}

/** Back arrow — used on the sub-page BACK button. */
export function BackArrowIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M14 5 L7 12 L14 19 M7 12 L20 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Mountain peak — represents CLIMBING. */
export function ClimbIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M2 20 L8 8 L12 14 L16 6 L22 20 Z" fill="currentColor" stroke="rgba(0,0,0,0.4)" strokeWidth="0.75" strokeLinejoin="round" />
      <circle cx="16" cy="5" r="2" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

/** Music note — represents SAXOPHONE / MUSIC. */
export function MusicIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M9 18 L9 5 L20 3 L20 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="7" cy="18" r="2.5" fill="currentColor" />
      <circle cx="18" cy="16" r="2.5" fill="currentColor" />
    </svg>
  );
}

/** Trophy cup — represents WINS. */
export function TrophyIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M6 3 L18 3 L18 10 Q18 16 12 16 Q6 16 6 10 Z" fill="currentColor" stroke="rgba(0,0,0,0.4)" strokeWidth="0.75" />
      <path d="M6 5 L3 5 Q2 10 6 11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 5 L21 5 Q22 10 18 11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="10" y="16" width="4" height="3" fill="currentColor" opacity="0.8" />
      <rect x="7" y="19" width="10" height="2" rx="1" fill="currentColor" />
    </svg>
  );
}

/** Pokéball-star hybrid — represents POKÉMON COLLECTION. */
export function PokedexIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2.5 12 a9.5 9.5 0 0 1 19 0 Z" fill="currentColor" opacity="0.4" />
      <rect x="2.5" y="11" width="19" height="2" fill="currentColor" />
      <circle cx="12" cy="12" r="3" fill="white" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 4 L13 8 L17 8 L14 10.5 L15 14.5 L12 12 L9 14.5 L10 10.5 L7 8 L11 8 Z" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

/** Person silhouette — represents TRAINER / BIO. */
export function PersonIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="7" r="4" fill="currentColor" />
      <path d="M4 21 Q4 14 12 14 Q20 14 20 21 Z" fill="currentColor" />
    </svg>
  );
}

/** People/group — represents CLUBS. */
export function ClubIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="9" cy="7" r="3" fill="currentColor" />
      <circle cx="17" cy="8" r="2.5" fill="currentColor" opacity="0.7" />
      <path d="M2 20 Q2 14 9 14 Q16 14 16 20 Z" fill="currentColor" />
      <path d="M16 14 Q21 14 21 19 L16 19" fill="currentColor" opacity="0.6" />
    </svg>
  );
}
