"use client";

import { useState } from "react";

type Props = {
  domain?: string;
  initial?: string;
  accent: string;
  textColor?: string;
};

export function OrgLogo({ domain, initial, accent, textColor = "white" }: Props) {
  const [failed, setFailed] = useState(false);

  if (domain && !failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`https://logo.clearbit.com/${domain}`}
        alt=""
        onError={() => setFailed(true)}
        suppressHydrationWarning
        className="w-10 h-10 rounded-md border-2 border-pkmn-box-border object-contain bg-white p-0.5 shrink-0"
      />
    );
  }

  return (
    <span
      className="inline-flex items-center justify-center w-10 h-10 rounded-md border-2 border-pkmn-box-border text-[14px] font-bold shrink-0"
      style={{ background: accent, color: textColor }}
    >
      {initial ?? "?"}
    </span>
  );
}
