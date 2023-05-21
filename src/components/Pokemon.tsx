import { PokemonType } from "../models/PokemonType";
import Card from "./Card";

const Pokemon = (props: PokemonType) => {
  const { name, id, types } = props;

  return <Card name={name} id={id} types={types}></Card>;
};

export default Pokemon;
