const SearchBox = () => {
  return (
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
  );
};
export default SearchBox;
