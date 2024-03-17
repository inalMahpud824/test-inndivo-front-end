import axios from "axios";
import LabelInput from "../components/InputLabel";
import Navbar from "../components/Navbar";

const AddPokemonPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault(); // Menyembunyikan perilaku default form
    const formData = new FormData();
    formData.append("name", e.target.elements.name.value);
    formData.append("height", e.target.elements.height.value);
    formData.append("width", e.target.elements.width.value);
    formData.append("length", e.target.elements.leng.value);
    formData.append("skill", e.target.elements.skill.value);
    formData.append("hp", e.target.elements.hp.value);
    formData.append("damage", e.target.elements.damage.value);
    formData.append("image", e.target.elements.image.files[0]); // Mengambil file gambar

    try {
      await axios.post("http://localhost:3000/pokemons", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Mengatur tipe konten sebagai multipart/form-data untuk FormData
        },
      });
      window.location.href = "/";
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="  mx-7 my-9 p-9 max-w-[620px] shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap flex-row gap-x-4">
              <LabelInput id="name" label="Name" type="text" />
              <LabelInput id="height" label="Height" type="text" />
              <LabelInput id="width" label="width" type="text" />
              <LabelInput id="leng" label="Length" type="text" />
              <LabelInput id="skill" label="Skill" type="text" />
              <LabelInput id="hp" label="Hp" type="text" className="mx-4" />
              <LabelInput id="damage" label="Damage" type="text" />
              <LabelInput id="image" label="Image" type="file" />
            </div>
            <div className="flex justify-center mt-4">
              <button className="px-8 py-2 bg-blue-500 rounded-md shadow-sm text-white font-medium">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPokemonPage;
