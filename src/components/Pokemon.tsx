import { PokemonType } from "../models/PokemonType";
import Card from "./Card";

const Pokemon = (props: PokemonType) => {
  const { name, id, types } = props;
  const paddedIndex = ("000" + id).slice(-3);
  const parsedIndex = parseInt(paddedIndex);

  return <Card name={name} id={parsedIndex} types={types}></Card>;
};

export default Pokemon;
