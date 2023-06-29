import { useParams } from "react-router-dom";

const PokemonDetails = (props) => {
  const { name } = useParams();

  return (
    <>
      <div>
        <div>{name}</div>
      </div>
    </>
  );
};

export default PokemonDetails;
