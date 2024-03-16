const Navbar = () => {
  return (
    <nav className="flex w-full bg-slate-500 justify-between h-20">
      <div className="flex items-center py-0 px-3">
        <img src="/public/images/pokemon-logo.png" alt="" className="h-28" />
      </div>
      <div className="flex items-center">
        <a href="/" className="py-0 px-2 mx-1 text-white text-xl font-medium">
          List Pokemon
        </a>
        <a href="/my-pokemon" className="p-3 px-2 mx-1 text-white text-xl font-medium">
          My Pokemon
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
