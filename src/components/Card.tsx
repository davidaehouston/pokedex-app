import { PokemonType } from "../models/PokemonType";
import { PokemonTypeColors } from "../utils/globals";
import { useNavigate } from "react-router-dom";

const Card = (props: PokemonType) => {
  const { name, id, types } = props;
  const paddedIndex = ("000" + id).slice(-3);

  const navigate = useNavigate();

  const backgroundColors = types!.map(({ type }) => {
    const [[, backgroundColor]] = Object.entries(PokemonTypeColors).filter(
      ([k]) => k === type!.name
    );

    return backgroundColor;
  });

  return (
    <div
      onClick={() => navigate(`/pokemon/${name}`)}
      className="cursor-pointer relative rounded-2xl p-2 transform h-180 min-w-250 transition duration-500 hover:scale-180 hover:drop-shadow-[0_10px_10px_rgba(0,0,0,.5)] border-gray-950 border-4 overflow-clip"
      style={{
        backgroundColor: backgroundColors[0].color,
      }}
    >
      <div className="bg-gray-900 text-white rounded-xl p-2 w-20 text-center absolute top-2 right-2 font-PokemonGB border-white border-2">
        #{paddedIndex}
      </div>
      <img
        className="absolute bg-cover z-0 opacity-5 -right-10 -top-10"
        alt={name}
        src={"./pokeball-transparent.png"}
      />
      <img
        className="relative scale-125 z-10 drop-shadow-[0_10px_10px_rgba(0,0,0,.5)]"
        width={150}
        height={150}
        alt={name}
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedIndex}.png`}
      />
      <div className="font-PokemonGB text-black bg-white w-auto text-sm text-center capitalize rounded-tl-2xl p-2 absolute right-0 bottom-0 slant-x-[30deg] border-gray-950 border-4 -m-1">
        {name}
      </div>
      <div className=" flex flex-row fixed right-2 top-16 space-x-4">
        {types?.map((item) => (
          <img
            key={item.type?.name}
            className="relative opacity-70"
            src={`./typeIcons/${item.type?.name}.svg`}
            alt={item.type?.name}
            width={40}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
