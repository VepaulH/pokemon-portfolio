import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Show the blinking ▼ "press A to continue" indicator in the corner. */
  showContinueArrow?: boolean;
  className?: string;
};

export function DialogBox({ children, showContinueArrow = false, className = "" }: Props) {
  return (
    <div className={`pkmn-box relative px-6 py-5 leading-relaxed ${className}`}>
      <div className="text-[14px] sm:text-[16px]">{children}</div>
      {showContinueArrow && (
        <span
          aria-hidden
          className="pkmn-blink absolute bottom-2 right-3 text-pkmn-text text-xs"
        >
          ▼
        </span>
      )}
    </div>
  );
}
