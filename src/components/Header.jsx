import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  useGSAP(() => {
    gsap.from("#logo span", {
      y: -100,
      opacity: 0,
      duration: 0.1,
      delay: 0.1,
      stagger: 0.1,
    });
    gsap.from("#social", {
      scale: 0.5,
      y: 100,
      opacity: 0.3,
      stagger: 0.2,
      duration: 0.3,
      delay: 0.1,
    });
  });

  return (
    <div className="sticky p-2 flex items-center justify-between z-20 bg-slate-100 top-0 mx-auto">
      <div id="logo" className="font-bold text-3xl">
        {"MediZen".split("").map((item, index) => (
          <span
            key={index}
            className={`${
              index > 3 ? "text-black" : "text-red-400"
            } inline-block`}
          >
            {item}
          </span>
        ))}
      </div>
      <div
        id="social"
        className="border-gray-500 border-[0.5px] rounded-full flex items-center p-2 gap-1"
      >
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
