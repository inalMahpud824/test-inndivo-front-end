const DetailPage = () => {
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

      <div className="container mx-auto my-9">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg p-4">Pokemon Name</h2>
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

          <tbody className="bg-white">
            <tr>
              <td className="px-6 py-4">height</td>
              <td className="px-6 py-4 border-b border-gray-200">hp</td>
            </tr>

            <tr>
              <td className="px-6 py-4">width</td>
              <td className="px-6 py-4 border-b border-gray-200">damage</td>
            </tr>
            <tr>
              <td className="px-6 py-4">length</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DetailPage;
