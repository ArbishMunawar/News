import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "../../assets/icons/MenuIcon";
import SearchIcon from "../../assets/icons/SearchIcon";

const Navbar = ({ setSearch }) => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(input);
  };
  const toggleButton = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-rose-900 w-full z-[100] relative">
      <div className="h-auto max-w-[1440px] px-4 mx-auto py-5 flex justify-between items-center">
        <h4 className="text-white text-2xl font-semibold">My News</h4>
        <div className="text-white hidden md:flex items-center gap-9 font-semibold">
          <ul>
            <li>
              <Link to="/home">Home</Link>
              <Link to="/category" className="pl-9">
                Categories
              </Link>
            </li>
          </ul>

          <form
            onSubmit={handleSearch}
            className="flex items-center border border-white rounded px-4 py-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search..."
              className="bg-transparent outline-none text-white placeholder-gray-300"
            />
            <button type="submit" className="text-white">
              <SearchIcon className="text-white cursor-pointer" />
            </button>
          </form>
        </div>

        <div className="lg:hidden md:hidden text-white">
          <button onClick={toggleButton}>
            <MenuIcon />
          </button>
        </div>
      </div>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? "max-h-[300px] py-5" : "max-h-0"
        } bg-rose-900 text-white flex flex-col items-center md:hidden relative z-[150] backdrop-blur-3xl bg-opacity-90`}
      >
        <ul className="flex flex-col gap-5 text-lg">
          <li className="flex flex-col gap-5 text-lg">
          <Link to="/home">Home</Link>
            <Link to="/category" >Categories</Link>
          </li>
        </ul>

        <form
          onSubmit={handleSearch}
          className="flex items-center border border-white rounded px-4 py-2 mt-3"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search..."
            className="bg-transparent outline-none text-white placeholder-gray-300"
          />
          <button type="submit" className="text-white cursor-pointer">
           <searchIcon className="text-white cursor-pointer" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
