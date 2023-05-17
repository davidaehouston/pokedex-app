import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { PokemonType } from "./models/PokemonType";
import Pokemon from "./components/Pokemon";

function App() {
  const [pokedex, setPokedex] = useState<PokemonType[] | []>([]);
  const limit = 151;

  const axiosInstance = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
  });

  useEffect(() => {
    collectPokemon(limit);
  }, []);

  const collectPokemon = async (limit: number) => {
    const res = await axiosInstance.get(`pokemon?limit=${limit}`);
    const promises = res.data.results.map((item: PokemonType) =>
      mapPokemon(item.name!)
    );
    const pokemons = await Promise.all(promises);
    setPokedex(pokemons);
  };

  const mapPokemon = async (name: string) => {
    const res = await axiosInstance.get(`pokemon/${name}`);
    return res.data;
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 m-10">
        {pokedex.map((mon: PokemonType) => (
          <Pokemon key={mon.id} name={mon.name} id={mon.id} types={mon.types} />
        ))}
      </div>
    </>
  );
}

export default App;
