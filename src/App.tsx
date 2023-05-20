import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { PokemonType } from "./models/PokemonType";
import Pokemon from "./components/Pokemon";
import Header from "./components/Header";
function App() {
  const [pokedex, setPokedex] = useState<PokemonType[] | []>([]);
  const limit = 151;

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const axiosInstance = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
  });

  useEffect(() => {
    setLoading(true);
    collectPokemon(limit);
  }, []);

  const collectPokemon = async (limit: number) => {
    const res = await axiosInstance.get(`pokemon?limit=${limit}`);
    const promises = res.data.results.map((item: PokemonType) =>
      mapPokemon(item.name!)
    );
    const pokemons = await Promise.all(promises);
    setPokedex(pokemons);
    setLoading(false);
  };

  const mapPokemon = async (name: string) => {
    const res = await axiosInstance.get(`pokemon/${name}`);
    return res.data;
  };

  return loading ? (
    <div className="flex flex-col space-y-4 justify-center items-center h-screen">
      <img
        className="animate-spin"
        width={150}
        height={150}
        src={"./pokeball.png"}
      ></img>
      <h1 className="font-PokemonGB text 2xl:">Loading...</h1>
    </div>
  ) : (
    <>
      <Header title="Pokédex App" />
      <div className="flex flex-row absolute top-16 right-10">
        <input
          className="text-slate-900 mx-auto bg-white p-2 border-slate-800 border-4 rounded-full m-2 w-fit"
          type="text"
          placeholder="Search Pokémon"
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          className="absolute right-0.5 top-0.5 scale-75"
          src="./pokeball-transparent.png"
          alt=""
          width={60}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 m-10">
        {pokedex
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.name?.toLowerCase().includes(search);
          })
          .map((mon: PokemonType) => (
            <Pokemon
              key={mon.id}
              name={mon.name}
              id={mon.id}
              types={mon.types}
            />
          ))}
      </div>
    </>
  );
}

export default App;
