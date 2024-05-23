import React from "react";
import { FaAsterisk } from "react-icons/fa";
import { IoMedicalOutline } from "react-icons/io5";
import PatientQueque from "./PatientQueque";

const Card2 = () => {
  return (
    <div className="right w-3/5 bg-white rounded-md p-6 relative overflow-hidden ">
      <IoMedicalOutline
        size={250}
        className="absolute z-0 -bottom-1/4 right-[28%] text-gray-300 font-light"
      />
      <div className="flex justify-start z-10">
        <span className="text-2xl font-medium text-center">
          <span className="flex items-center">
            {" "}
            MEDI-ZEN &nbsp;
            <span className="h-4 flex gap-1">
              <div className="h-4 w-6">
                <img
                  className="h-6 w-6 rounded-full"
                  src="card2-1.webp"
                  alt=""
                />
              </div>
              <div className="h-4 w-6">
                <img
                  className="h-6 w-6 rounded-full"
                  src="card2-2.webp"
                  alt=""
                />
              </div>
            </span>
            &nbsp; FOR
          </span>
          EVERYONE
        </span>
      </div>
      <div className="w-full flex justify-end px-4 z-10">
        <span className="text-md font-medium">02</span>
      </div>
      <div className="flex mt-12 z-10">
        <div className="left-sec w-3/4">
          <div className="flex justify-center">
            <span className="text-gray-500 text-xs mx-auto z-10">
              We have telemedicine <br /> extremely easy to use for both
            </span>
          </div>
          <div className="flex mt-16 gap-2">
            <div className="flex place-items-center px-1 py-0 border-red-400 border-[0.7px] rounded-full text-xs">
              <span>Popular Telemedicines</span>
            </div>
            <div className=" flex items-center p-1 rounded-full font-bold text-md text-white bg-red-400 z-50">
              <FaAsterisk />
            </div>
          </div>
        </div>
        <PatientQueque />
      </div>
    </div>
  );
};

export default Card2;
