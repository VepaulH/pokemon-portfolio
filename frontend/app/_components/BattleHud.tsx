import type { PokemonCard } from "./pokemonData";

type Props = {
  pokemon: PokemonCard;
  /** Player-side cards show the numeric HP under the bar; opponent cards don't. */
  showHpNumbers?: boolean;
  className?: string;
};

export function BattleHud({ pokemon, showHpNumbers = false, className = "" }: Props) {
  const ratio = Math.max(0, Math.min(1, pokemon.hpCurrent / pokemon.hpMax));
  const fillColor =
    ratio > 0.5
      ? "var(--pkmn-hp-green)"
      : ratio > 0.2
      ? "var(--pkmn-hp-yellow)"
      : "var(--pkmn-hp-red)";

  return (
    <div className={`pkmn-hud px-3 py-2 min-w-[16rem] ${className}`}>
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-[10px] tracking-wider">
          {pokemon.name}
          {pokemon.gender === "M" && (
            <span className="ml-1 text-pkmn-accent-blue">♂</span>
          )}
          {pokemon.gender === "F" && (
            <span className="ml-1 text-pkmn-accent-red">♀</span>
          )}
        </span>
        <span className="text-[10px]">:L{pokemon.level}</span>
      </div>

      <div className="mt-1.5 flex items-center gap-1.5">
        <span className="text-[9px] font-bold text-pkmn-text">HP</span>
        <div className="pkmn-hp-track flex-1">
          <div
            className="pkmn-hp-fill"
            style={{ width: `${ratio * 100}%`, background: fillColor }}
          />
        </div>
      </div>

      {showHpNumbers && (
        <div className="mt-1 text-right text-[10px]">
          {pokemon.hpCurrent}/{pokemon.hpMax}
        </div>
      )}
    </div>
  );
}
