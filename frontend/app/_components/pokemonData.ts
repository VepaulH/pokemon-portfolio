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

export const trainerName = "TRAINER";

export const opponentPokemon: PokemonCard = {
  name: "PIKACHU",
  level: 25,
  hpCurrent: 60,
  hpMax: 70,
  gender: "M",
  spriteUrl:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
};

export const playerPokemon: PokemonCard = {
  name: "CHARIZARD",
  level: 36,
  hpCurrent: 104,
  hpMax: 120,
  gender: "M",
  spriteUrl:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
};
