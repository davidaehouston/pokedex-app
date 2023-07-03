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
  const paddedIndex = ("000" + pokemon?.id).slice(-3);

  const mapPokemon = async (name: string) => {
    axiosInstance.get(`pokemon/${name}`).then((item) => {
      setPokemon(item.data);
    });
  };
  const navBack = useNavigate();

  useEffect(() => {
    mapPokemon(`${name}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="relative border-black border-4 rounded-2xl m-4 p-10 bg-slate-700 overflow-clip">
        <div className="fixed right-10 z-20 text-center font-PokemonGB uppercase top-8 bg-black text-white p-5 rounded-full border-white border-4">
          {pokemon?.name}
        </div>
        <div>
          <img
            className="relative scale-125 z-50 drop-shadow-[0_10px_10px_rgba(0,0,0,.5)]"
            width={300}
            height={150}
            alt={name}
            src={pokemon?.sprites?.other?.["official-artwork"]?.front_default}
          />
        </div>
        <div className="fixed z-20 font-PokemonGB bg-red-500 text-white p-2 rounded-full w-20 text-center border-black border-4 right-10 top-20">
          {`#${paddedIndex}`}
        </div>
        <div>
          <img
            className="absolute bg-cover opacity-5 z-0 -right-10 -top-20 animate-spin-slow"
            alt={name}
            src={"../pokeball-transparent.png"}
          />
        </div>
        <div className="flex flex-row fixed right-10 top-36 space-x-4 z-30">
          {pokemon?.types?.map((item) => (
            <>
              <img
                key={item.type?.name}
                className="relative opacity-70"
                src={`../typeIcons/${item.type?.name}.svg`}
                alt={item.type?.name}
                width={50}
              />
            </>
          ))}
        </div>
        <div className="bg-white rounded-full border-4 border-black absoloute w-36 p-2 text-center font-PokemonGB text-xs right-10 fixed uppercase top-52">
          Height: {pokemon?.height}
        </div>
        <div className="bg-white rounded-full border-4 border-black absoloute w-36 p-2 text-center font-PokemonGB text-xs right-10 fixed uppercase top-64">
          Weight: {pokemon?.weight}
        </div>
      </div>
    </>
  );
};

export default PokemonDetails;
