import { useEffect, useState } from "react";
import LabelInput from "../components/InputLabel";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdatePokemonPage = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault(); // Menyembunyikan perilaku default form
    const name = e.target.elements.name.value;
    const height = e.target.elements.height.value;
    const width = e.target.elements.width.value;
    const length = e.target.elements.leng.value;
    const skill = e.target.elements.skill.value;
    const hp = e.target.elements.hp.value;
    const damage = e.target.elements.damage.value;
    const image = e.target.elements.image.value;
    console.log(name, height, width, length, skill, hp, damage, image)
    try {
      await axios.patch(`http://localhost:5000/pokemon/${id}`, {
        name, skill, height, width, length, hp, damage, image
      })
      window.location.href=`/detail-pokemon/${pokemon.id}`
    }catch (error) {
      console.error(error)
    }
  }


  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="  mx-7 my-9 p-9 max-w-[620px] shadow-md">
          {pokemon && (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap flex-row gap-x-4">
              <LabelInput id="name" label="Name" type="text" defaultValue={pokemon.name}/>
              <LabelInput id="height" label="Height" type="text" defaultValue={pokemon.height}/>
              <LabelInput id="width" label="width" type="text" defaultValue={pokemon.width}/>
              <LabelInput id="leng" label="Length" type="text" defaultValue={pokemon.length}/>
              <LabelInput id="skill" label="Skill" type="text" defaultValue={pokemon.skill}/>
              <LabelInput id="hp" label="Hp" type="text" className="mx-4" defaultValue={pokemon.hp}/>
              <LabelInput id="damage" label="Damage" type="text" defaultValue={pokemon.damage}/>
              <LabelInput id="image" label="Image" type="text" defaultValue={pokemon.image}/>
            </div>
            <div className="flex justify-center mt-4">
              <button className="px-8 py-2 bg-blue-500 rounded-md shadow-sm text-white font-medium">
                Submit
              </button>
            </div>
          </form>
          )}
        </div>
      </div>
    </>
  );
};
export default UpdatePokemonPage;
