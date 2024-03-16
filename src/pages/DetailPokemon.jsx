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
      const response = await axios.get(`http://localhost:5000/pokemon/${id}`);
      const res = await response.data;
      setPokemon(res);
    } catch (error) {
      console.error(error);
    }
  };
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
            <button className="bg-red-500 text-white px-4 py-2 rounded mx-4 shadow-md">
              Release Pokemon
            </button>
            <button className="bg-slate-500 text-white px-4 py-2 rounded mx-4 shadow-md">
              Rename Pokemon
            </button>
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
