const ListPokemonPage = () => {
  return (
    <>
      <nav className="flex w-full bg-slate-500 justify-between h-20">
        <div className="flex items-center py-0 px-3">
          <img src="/public/images/pokemon-logo.png" alt="" className="h-28" />
        </div>
        <div className="flex items-center">
          <a href="" className="py-0 px-2 mx-1 text-white text-xl font-medium">
            List Pokemon
          </a>
          <a href="" className="p-3 px-2 mx-1 text-white text-xl font-medium">
            My Pokemon
          </a>
        </div>
      </nav>

      <div className="flex justify-center w-full mt-4">
        <input
          type="text"
          placeholder="Search.."
          className="border border-slate-400 w-72 rounded-l-md outline-none px-4"
        />
        <div className="flex items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md">
            Search
          </button>
        </div>
      </div>

      <div className="flex gap-4 justify-start">
        <a href="">
        <div className="w-40 p-4 m-2 px-2 bg-blue-500 rounded-md flex flex-wrap justify-center gap-3">
          <img
            src="/public/images/pikachu.png"
            alt=""
            className="w-[120px] h-[120px]  rounded-full bg-white"
          />
          <div className="flex justify-center gap-3">
            <img src="/public/images/pokeball.png" alt="" className="h-6" />
            <h5 className="flex justify-center font-sm text-white">Title ini</h5>
          </div>
        </div>
        </a>
      </div>
    </>
  );
};

export default ListPokemonPage;
