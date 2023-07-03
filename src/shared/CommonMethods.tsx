import { PokemonType } from "../models/PokemonType";
import { PokemonTypeColors } from "../utils/globals";

export const getBackgroundColor = (pokemon: PokemonType) => {
  pokemon?.types?.map(({ type }) => {
    const [[, backgroundColor]] = Object.entries(PokemonTypeColors).filter(
      ([key]) => key === type?.name
    );

    return backgroundColor;
  });
};
