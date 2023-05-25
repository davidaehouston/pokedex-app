const Pagination = ({ pokemonPerPage, totalPokemon }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPokemon / pokemonPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <nav className=" flex flex-col justify-center space-x-4">
        <ul>
          {pageNumbers.map((number) => (
            <li key={number} className="inline-block mx-auto space-x-5">
              <a className="justify-center" href="!#">
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
