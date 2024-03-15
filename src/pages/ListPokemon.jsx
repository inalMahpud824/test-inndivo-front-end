import CardPokemon from "../components/CardPokemon";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";

const ListPokemonPage = () => {
  return (
    <>
    <Navbar />
    <SearchBox />

      <div className="flex gap-4 justify-start">
        <CardPokemon title='Mudkip' />
      </div>
    </>
  );
};

export default ListPokemonPage;
