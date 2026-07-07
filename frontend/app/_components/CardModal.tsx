"use client";

import { useEffect } from "react";

type Props = {
  image: string;
  message: string;
  onClose: () => void;
  large?: boolean;
};

export function CardModal({ image, message, onClose, large = false }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: "rgba(0,0,0,0.7)" }}
      onClick={onClose}
    >
      <div
        className={`pkmn-box px-6 py-5 flex flex-col items-center gap-4 w-full ${large ? "max-w-2xl" : "max-w-xs"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-[10px] sm:text-[11px] tracking-wider text-center leading-relaxed">
          {message}
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt="card"
          className="w-full rounded border-2 border-pkmn-box-border"
        />
        <button
          className="pkmn-btn text-[9px] tracking-wider"
          onClick={onClose}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}
