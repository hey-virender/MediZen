import React from "react";
import NavMenu from "./NavMenu";

const MainSection = () => {
  return (
    <div className="my-20 flex mx-auto">
      <NavMenu />
      <div className="text-center w-5/6 relative">
        <span className="text-gray-500">
          Explore Our Comprehensive Healthcare Services And Trusted Healthcare
        </span>
        <h1 className="font-medium text-8xl">
          WELLNESS-AND <br />+ LIFESTYL
        </h1>
        <span className="absolute top-7 left-7 font-medium text-xl">02</span>
        <span className="absolute top-32 left-32  text-2xl italic">Care</span>
        <div className="absolute bottom-7 -right-8 text-left text-xs">
          <span className="block text-gray-500">
            Our Mission is To Provide You With <br />
            Accesible, Reliable Healthcare.
          </span>
          <span className=" border-black border-b">Get Started</span>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
