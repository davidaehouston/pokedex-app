import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokemonType } from "../models/PokemonType";
import { PokemonTypeColors } from "../utils/globals";
import axios from "axios";

const PokemonDetails = () => {
  const { name } = useParams();
  const axiosInstance = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
  });

  const [pokemon, setPokemon] = useState<PokemonType>();

  useEffect(() => {
    mapPokemon(`${name}`);
    setPokemon(pokemon);
  }, []);

  // const backgroundColors = pokemon!.types!.map(({ type }) => {
  //   const [[, backgroundColor]] = Object.entries(PokemonTypeColors).filter(
  //     ([k]) => k === type!.name
  //   );
  //   return backgroundColor;
  // });

  const mapPokemon = async (name: string) => {
    const res = await axiosInstance.get(`pokemon/${name}`);

    if (res !== undefined) {
      const pokemonObject: PokemonType = res.data;
      setPokemon(pokemonObject);
    }
  };

  console.log(pokemon);

  return (
    <>
      <div
        className="absoloute p-10 rounded-3xl m-10 border-4 border-black"
        // style={{
        //   backgroundColor: backgroundColors[0].light,
        // }}
      >
        <div className="text-center font-PokemonGB text 2xl uppercase">
          <div>{name}</div>
          <div className="">
            <img
              className="relative scale-125 z-10 drop-shadow-[0_10px_10px_rgba(0,0,0,.5)]"
              width={300}
              height={150}
              alt={name}
              src={pokemon?.sprites?.other?.["official-artwork"]?.front_default}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonDetails;
