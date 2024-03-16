import LabelInput from "../components/InputLabel";
import Navbar from "../components/Navbar";

const AddPokemonPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="  mx-7 my-9 p-9 max-w-[620px] shadow-md">
          <form action="">
            <div className="flex flex-wrap flex-row">
            <LabelInput id="name" label="Name" type="text" className="mr-4" />
            <LabelInput id="height" label="Height" type="text" />
            <LabelInput id="width" label="width" type="text" className="mr-4" />
            <LabelInput id="length" label="Length" type="text" />
            <LabelInput id="skill" label="Skill" type="text" className="mr-8" />
            <LabelInput id="hp" label="Hp" type="text" />
            <LabelInput id="damage" label="Damage" type="text" />
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
