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
    try {
      const response = await axios.get("http://localhost:3000/pokemons");
      const res = await response.data;
      setPokemon(res);
    } catch (error) {
      console.error(error);
    }
  };
  // pokemon.map((pkmn) => {
  //   console.log(pkmn.id)
  // })
  return (
    <>
      <Navbar />
      <SearchBox />

      <a href="/add-pokemon">
        <div className="flex justify-end p-0 mr-7">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md my-5">
            Tambah Pokemon
          </button>
        </div>
      </a>

      <div className="flex gap-4 justify-start">
        {pokemon &&
          pokemon.map((pkmn) => (
            <CardPokemon key={pkmn.id} title={pkmn.name} id={pkmn.id} />
          ))}
      </div>
    </>
  );
};

export default ListPokemonPage;
