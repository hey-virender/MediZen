import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NavMenu = () => {
  useGSAP(() => {
    gsap.from("#menu li", {
      x: -100,
      opacity: 0,
      duration: 0.5,
      delay: 0.3,
      stagger: 0.2,
    });
  });
  return (
    <div className="m-5">
      <div className="text-5xl font-bold text-red-400">*</div>
      <ul id="menu" className="text-sm font-medium">
        <li>Home</li>
        <li>Find a Provider</li>
        <li>Telemedicine</li>
      </ul>
    </div>
  );
};

export default NavMenu;
