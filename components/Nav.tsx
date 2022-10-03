import { useState } from "react";

const NavBar: React.FC = () => {
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);
  const handleDisplayMenu = () => setDisplayMenu((prev) => !prev);

  return (
    <>
      <nav className=" h-24 flex items-center px-2 sm:px-4  ">
        <div className=" w-1/2 sm:w-1/4 sm:mr-2">
          <img alt="logo" src={"/images/logo.svg"} className="h-8" />
        </div>
        <div className="  flex w-1/2 sm:w-3/4 justify-end  ">
          <div className=" w-1/2 hidden sm:flex justify-center  ">
            <div className="w-full px-2 rounded-lg  bg-zinc-800 h-10 flex items-center">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 hover:text-gray-600 mr-2  "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>

              <input
                type="search"
                id="default-search"
                className=" caret-zinc-500  focus:outline-none focus:border-transparent focus:ring-0 text-sm w-full text-zinc-400 bg-zinc-800 h-10  placeholder-gray-700 "
                placeholder="Lorem ipsum"
                required
              />
            </div>
          </div>
          <ul className="w-1/2 hidden   sm:flex justify-around items-center">
            <li className="text-white mx-4   hover:text-zinc-400">
              <a href="#">Lorem</a>
            </li>
            <li className="text-white mx-4 hover:text-zinc-400">
              <a href="#">Lorem</a>
            </li>
            <li className="text-white mx-4 hover:text-zinc-400">
              <a href="#">Lorem</a>
            </li>
          </ul>
          <div className="sm:hidden">
            <button onClick={handleDisplayMenu} className="hover:opacity-80">
              {displayMenu ? (
                <img alt="logo" src={"/images/close-icon.svg"} className="h-8" />
              ) : (
                <img alt="logo" src={"/images/menu-icon.svg"} className="h-8" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div className="h-2 w-full bg-green-200 bg-gradient-to-r from-indigo-500 to-red-500" />
      {displayMenu && (
        <ul className="sm:hidden w-full bg-gray-600 ">
          <li className="cursor-pointer hover:bg-gray-500 px-4 py-3 text-zinc-300 hover:text-zinc-400 ">
            <a href="#"> Lorem</a>
          </li>
          <li className="cursor-pointer hover:bg-gray-500 px-4 py-3 text-zinc-300 hover:text-zinc-400">
            <a href="#"> Lorem</a>
          </li>
          <li className="cursor-pointer hover:bg-gray-500 px-4 py-3 text-zinc-300 hover:text-zinc-400">
            <a href="#"> Lorem</a>
          </li>
        </ul>
      )}
    </>
  );
};

export default NavBar;
