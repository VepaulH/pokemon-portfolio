/**
 * Central place to edit the two Pokémon shown on the battle screen
 * and the trainer's name used in the dialog box.
 *
 * Sprite URLs come from the public PokeAPI sprite repo on GitHub —
 * swap the number to use a different Pokémon.
 *   front: .../sprites/pokemon/<id>.png
 *   back:  .../sprites/pokemon/back/<id>.png
 */
export type PokemonCard = {
  name: string;
  level: number;
  hpCurrent: number;
  hpMax: number;
  spriteUrl: string;
  gender?: "M" | "F" | null;
};

export const trainerName = "VEPAUL";

export const opponentPokemon: PokemonCard = {
  name: "GARDEVOIR",
  level: 38,
  hpCurrent: 95,
  hpMax: 110,
  gender: "F",
  spriteUrl:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
};

export const playerPokemon: PokemonCard = {
  name: "LUCARIO",
  level: 42,
  hpCurrent: 118,
  hpMax: 130,
  gender: "M",
  spriteUrl:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/448.png",
};
