import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
const DetailPage = () => {
  const [pokemon, setPokemon] = useState();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getPokemon();
    }
  }, [id]);
  

  const getPokemon = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/pokemons/${id}`);
      const res = await response.data;
      setPokemon(res);
    } catch (error) {
      console.error(error);
    }
  };
  const deletePokemon = async (id) => {
    await axios.delete(`http://localhost:3000/pokemons/${id}`)
    window.location.href="/"
  }
  const catchPokemon = async (id) => {
    await axios.put(`http://localhost:3000/pokemons/${id}`, {
      status: '1'
    })
    getPokemon()
  }
  const releasePokemon = async (id) => {
    await axios.put(`http://localhost:3000/pokemons/${id}`, {
      status: '0'
    })
    getPokemon()
  }
  return (
    <>
      <Navbar />

      <div className="container mx-auto my-9">
        <div className="flex justify-between items-center">
          {pokemon && (
            <h2 className="font-bold text-lg p-4">
              Pokemon Name: {pokemon.name}
            </h2>
          )}
          <div className="flex">
            {pokemon && pokemon.status !== '1' ? (
            <button className="bg-yellow-300 text-white px-4 py-2 rounded mx-4 shadow-md" onClick={() => catchPokemon(pokemon.id)}>
              Catch Pokemon
            </button>
            ) : (
            <button className="bg-yellow-600 text-white px-4 py-2 rounded mx-4 shadow-md" onClick={() => releasePokemon(pokemon.id)}>
              Release Pokemno
            </button>
            ) }
            
            <button className="bg-red-500 text-white px-4 py-2 rounded mx-4 shadow-md" onClick={() => deletePokemon(pokemon.id)}>
              Delete Pokemon
            </button>
            <a href={`/update/pokemon/${id}`}>
              <button className="bg-slate-500 text-white px-4 py-2 rounded mx-4 shadow-md">
                Update Pokemon
              </button>
            </a>
          </div>
        </div>
        <img
          src="/public/images/pikachu.png"
          alt="pokemon"
          className="w-72 mx-auto mb-10"
        />
        <table className="min-w-full divide-gray-200">
          <thead className="border-b border-gray-200">
            <tr>
              <th className=" px-6 py-3 text-sm font-medium text-left text-gray-700 uppercase ">
                Karakter
              </th>
              <th className=" px-6 py-3 text-sm font-medium text-left text-gray-700 uppercase ">
                Statistic
              </th>
            </tr>
          </thead>

          {pokemon && (
            <tbody className="bg-white">
              <tr>
                <td className="px-6 py-4">Height: {pokemon.height}</td>
                <td className="px-6 py-4 border-b border-gray-200">
                  Hp: {pokemon.hp}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4">Width: {pokemon.width}</td>
                <td className="px-6 py-4 border-b border-gray-200">
                  Damage: {pokemon.damage}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4">Length: {pokemon.length}</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Skill: {pokemon.skill}</td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};

export default DetailPage;
