import axios from "axios";
import CardPokemon from "../components/CardPokemon";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import { useEffect, useState } from "react";

const MyPokemonPage = () => {
  const [pokemon, setPokemon] = useState([]);
  const [myPokemon, setMyPokemon] = useState([]);

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
  useEffect(() => {
    const filteredPokemon = pokemon.filter(pkmn => pkmn.status === '1');
    setMyPokemon(filteredPokemon);
  }, [pokemon]);

  console.log(myPokemon)
  return (
    <>
    <Navbar />
    <SearchBox />

    <div className="flex gap-4 justify-start">
      {myPokemon && myPokemon.map((myPkmn) => (
        <CardPokemon title={myPkmn.name} key={myPkmn.id} id={myPkmn.id}/>
      ))
      }
    </div>


    </>
  );
};

export default MyPokemonPage;
