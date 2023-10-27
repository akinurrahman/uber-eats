import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdHelp, MdFavorite } from "react-icons/md";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="mx-auto flex max-w-[1350px] items-center justify-between p-4 ">
      {/* left side */}
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={() => setNav((prev) => !prev)}>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="px-2 text-2xl sm:text-3xl lg:text-4xl whitespace-nowrap">
          Uber <span className="font-bold ">Eats</span>
        </h1>
        <div className="text-[14px] hidden items-center rounded-full bg-gray-200 p-1 lg:flex">
          <p className="rounded-full bg-black p-2 text-white">Delevery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/* search input */}
      <div
        className="w-[200px] sm:w-[400px] lg:w-[500px] flex items-center rounded-full bg-gray-200 px-2
      "
      >
        <AiOutlineSearch size={25} />
        <input
          type="text"
          placeholder="Search Foods"
          className="w-full bg-transparent p-2 focus:outline-none"
        />
      </div>
      {/* cart */}

      <button className="hidden items-center rounded-full bg-black py-2 text-white md:flex">
        <BsFillCartFill className="mr-2" /> Cart
      </button>

      {/* Mobile Menu */}

      {/* overlay */}
      {nav && (
        <div className="fixed left-0 top-0 z-10 h-screen w-full bg-black/80"></div>
      )}

      {/* side drawer menu */}
      <div
        className={`fixed ${nav ? "left-0" : "left-[-100%]"} top-0 z-10 h-screen w-[300px] bg-white duration-300
      `}
      >
        <AiOutlineClose
          size={30}
          className="absolute  right-4 top-4 cursor-pointer"
          onClick={() => setNav((prev) => !prev)}
        />
        <h2 className="p-4 text-2xl">
          Uber <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="flex py-4 text-xl">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="flex py-4 text-xl">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="flex py-4 text-xl">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="flex py-4 text-xl">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="flex py-4 text-xl">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="flex py-4 text-xl">
              <BsFillSaveFill size={25} className="mr-4" /> Best One
            </li>
            <li className="flex py-4 text-xl">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
