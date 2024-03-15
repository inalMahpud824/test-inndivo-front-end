import { useEffect, useState } from "react";
import CardPokemon from "../components/CardPokemon";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import axios from "axios";

const ListPokemonPage = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemon();
  }, []);
const getPokemon = async () => {
  try{
    const response = await axios.get("http://localhost:5000/pokemon")
    const res = await response.data
    setPokemon(res)
  }catch (error) {
    console.error(error)
  }
}
// pokemon.map((pkmn) => {
//   console.log(pkmn.id)
// })
  return (
    <>
    <Navbar />
    <SearchBox />

      <div className="flex gap-4 justify-start">
        {pokemon && pokemon.map((pkmn) => (
          <CardPokemon key={pkmn.id} title={pkmn.name} id={pkmn.id} />
        ))}
      </div>
    </>
  );
};

export default ListPokemonPage;
