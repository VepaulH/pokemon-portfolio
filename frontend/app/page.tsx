import { BattleGrass } from "./_components/BattleGrass";
import { BattleHud } from "./_components/BattleHud";
import { DialogBox } from "./_components/DialogBox";
import { HoennScene } from "./_components/HoennScene";
import { MenuBox, type MenuOption } from "./_components/MenuBox";
import {
  BadgeIcon,
  LightningIcon,
  PokeballIcon,
  TrainerCardIcon,
} from "./_components/MenuIcons";
import {
  opponentPokemon,
  playerPokemon,
  trainerName,
} from "./_components/pokemonData";

const menuOptions: [MenuOption, MenuOption, MenuOption, MenuOption] = [
  {
    label: "EXPERIENCE",
    href: "/experience",
    bg: "var(--pkmn-exp)",
    dark: "var(--pkmn-exp-dark)",
    fg: "#3a2200",
    icon: <BadgeIcon className="w-5 h-5" />,
  },
  {
    label: "PROJECTS",
    href: "/projects",
    bg: "var(--pkmn-proj)",
    dark: "var(--pkmn-proj-dark)",
    fg: "#ffffff",
    icon: <PokeballIcon className="w-5 h-5" />,
  },
  {
    label: "ABOUT ME",
    href: "/about",
    bg: "var(--pkmn-about)",
    dark: "var(--pkmn-about-dark)",
    fg: "#ffffff",
    icon: <TrainerCardIcon className="w-5 h-5" />,
  },
  {
    label: "SKILLS",
    href: "/skills",
    bg: "var(--pkmn-skills)",
    dark: "var(--pkmn-skills-dark)",
    fg: "#0e2a0e",
    icon: <LightningIcon className="w-5 h-5" />,
  },
];

export default function BattleScreen() {
  return (
    <>
      <HoennScene />

      <div className="flex-1 flex items-center justify-center px-4 py-8">
        {/* "3DS console" — battle window + controls stacked vertically, centered on the Hoenn scene */}
        <div className="pkmn-console w-full max-w-[860px]">
          {/* Battle window — 5:3 aspect ratio, matching the 3DS top screen */}
          <div className="pkmn-console-screen">
            <div
              className="relative w-full overflow-hidden rounded-sm"
              style={{ aspectRatio: "5 / 3" }}
            >
              <BattleGrass />

              {/* Opponent HUD — top-left */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 scale-[0.78] origin-top-left sm:scale-90">
                <BattleHud pokemon={opponentPokemon} />
              </div>

              {/* Opponent sprite + platform — pushed down so it stands on grass,
                  not floating near the top of the window */}
              <div className="absolute top-14 right-6 sm:top-20 sm:right-12 flex flex-col items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={opponentPokemon.spriteUrl}
                  alt={opponentPokemon.name}
                  className="pixelated relative z-10 w-20 h-20 sm:w-24 sm:h-24 drop-shadow-[2px_3px_0_rgba(0,0,0,0.3)]"
                />
                <div className="-mt-7 sm:-mt-8 w-28 h-7 sm:w-32 sm:h-8">
                  <div className="pkmn-platform" />
                </div>
              </div>

              {/* Player sprite + platform — bottom-left */}
              <div className="absolute bottom-2 left-4 sm:bottom-3 sm:left-6 flex flex-col items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={playerPokemon.spriteUrl}
                  alt={playerPokemon.name}
                  className="pixelated relative z-10 w-28 h-28 sm:w-36 sm:h-36 drop-shadow-[2px_3px_0_rgba(0,0,0,0.3)]"
                />
                <div className="-mt-4 w-32 h-7 sm:w-40 sm:h-8">
                  <div className="pkmn-platform" />
                </div>
              </div>

              {/* Player HUD — bottom-right */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 scale-[0.78] origin-bottom-right sm:scale-90">
                <BattleHud pokemon={playerPokemon} showHpNumbers />
              </div>
            </div>
          </div>

          {/* Controls panel — dialog + colored menu (menu gets a touch more room) */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-9 gap-3">
            <div className="sm:col-span-5">
              <DialogBox showContinueArrow>
                What will{" "}
                <span className="text-pkmn-accent-blue">{trainerName}</span> do?
              </DialogBox>
            </div>
            <div className="sm:col-span-4">
              <MenuBox options={menuOptions} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
