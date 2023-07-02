import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PokemonType } from "../models/PokemonType";
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

  const mapPokemon = async (name: string) => {
    const res = await axiosInstance.get(`pokemon/${name}`);

    if (res !== undefined) {
      const pokemonObject: PokemonType = res.data;
      setPokemon(pokemonObject);
    }
  };

  const navBack = useNavigate();

  return (
    <>
      <div>
        <button
          className="bg-black text-white p-2 m-5 rounded-full"
          onClick={() => {
            navBack(-1);
            setPokemon(undefined);
          }}
        >
          ← Go Back
        </button>
      </div>
      <div className="absoloute p-10 rounded-3xl m-10 border-4 border-black">
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
