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

        <div
          className={`absolute top-full left-0 w-full transition-all duration-300 overflow-hidden md:static md:w-auto md:flex md:items-center md:gap-9 font-semibold bg-rose-900 text-white z-[150] backdrop-blur-3xl bg-opacity-90 ${
            open ? "flex flex-col py-5" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-5 text-lg items-center">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/category">Categories</Link>
            </li>
          </ul>

          <form
            onSubmit={handleSearch}
            className="flex items-center justify-between border border-white w-[90%] rounded px-4 py-2 mt-4 mx-4  md:mt-0"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search..."
              className="bg-transparent outline-none text-white placeholder-gray-300"
            />
            <button type="submit" className="text-white ml-2">
              <SearchIcon className="text-white cursor-pointer" />
            </button>
          </form>
        </div>

        <div className="md:hidden text-white">
          <button onClick={toggleButton}>
            <MenuIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

