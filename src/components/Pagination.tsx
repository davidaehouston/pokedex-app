const Pagination = ({ pokemonPerPage, totalPokemon, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPokemon / pokemonPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <nav className="text-center font-PokemonGB mx-auto">
        <ul>
          {pageNumbers.map((number) => (
            <li
              key={number}
              className=" relative flex-col inline-block mx-auto space-y-5 bottom-5"
            >
              <a
                onClick={() => paginate(number)}
                className="relative p-3 m-2 hover:bg-red-700 hover:rounded-full hover:text-white hover:drop-shadow-[0_10px_10px_rgba(0,0,0,.5)]"
                href="!#"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
