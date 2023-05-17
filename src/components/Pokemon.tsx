import { PokemonType } from "../models/PokemonType";

const Pokemon = (props: PokemonType) => {
  const { name, id, types } = props;
  const paddedIndex = ("000" + id).slice(-3);

  return (
    <div className="bg-gray-600 rounded-2xl p-2 transform h-180 min-w-250 transition duration-500 hover:scale-180 hover:drop-shadow-[0_10px_10px_rgba(0,0,0,.5)] border-gray-950 border-4 overflow-clip">
      <div className="bg-gray-900 text-white rounded-xl p-2 w-20 text-center absolute top-2 right-2 font-pokemonGB border-white border-2">
        #{paddedIndex}
      </div>
      <img
        className="scale-125 relative"
        width={150}
        height={150}
        alt={name}
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedIndex}.png`}
      />
      <div className="font-pokemonGB text-black bg-white w-auto text-sm text-center capitalize rounded-tl-2xl p-2 absolute right-0 bottom-0 slant-x-[30deg] border-gray-950 border-4 -m-1">
        {name}
      </div>
      <div className=" flex flex-row fixed right-2 top-16 space-x-3">
        {types?.map((item) => (
          <p
            key={item.slot}
            className="bg-red-500 rounded-lg p-2 capitalize border-gray-950 border-2"
          >
            {item.type?.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Pokemon;
