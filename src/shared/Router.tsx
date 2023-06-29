import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from "../components/Pokedex";
import PokemonDetails from "../components/PokemonDetails";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Pokedex />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
