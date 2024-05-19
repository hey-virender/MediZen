import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <div className="p-2 flex items-center justify-between">
      <div className="logo text-red-400 font-bold text-3xl">
        Medi<span className="text-black">Zen</span>
      </div>
      <div className="border-gray-500 border-[0.5px] rounded-full flex items-center p-2 gap-1">
        <FaFacebook />
        <span>Instagram</span>
        <FaXTwitter />
      </div>
      <div className="flex items-center gap-1 ">
        <div className="border-red-400 border-[0.5px] px-3 rounded-full">
          Login
        </div>
        <div className="bg-red-400 p-1 rounded-full">
          <IoMenu className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Header;
