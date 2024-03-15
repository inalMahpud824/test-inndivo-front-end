import CardPokemon from "../components/CardPokemon";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";

const MyPokemonPage = () => {
  return (
    <>
    <Navbar />
    <SearchBox />

    <div className="flex gap-4 justify-start">
      <CardPokemon title='charizhard'/>
    </div>


    </>
  );
};

export default MyPokemonPage;
