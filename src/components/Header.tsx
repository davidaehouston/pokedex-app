const Header = ({ title }: { title: string }) => {
  return (
    <>
      <div className="pt-5">
        <img
          className="mx-auto hover:animate-spin"
          width={50}
          height={50}
          src={"./pokeball.png"}
        ></img>
        <h1 className="text-center font-PokemonGB p-2 text-2xl">{title}</h1>
      </div>
    </>
  );
};

export default Header;
