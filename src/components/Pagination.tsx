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
              className=" relative flex-col inline-flex mx-auto bottom-5 top-5"
            >
              <a
                onClick={() => paginate(number)}
                className="relative p-3 m-2 focus:border-black rounded-full hover:rounded-full drop-shadow-[0_10px_10px_rgba(0,0,0,.5)] hover:border-black hover: border-4"
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
