import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Card1 = () => {
  return (
    <div className="left w-2/5 relative bg-white rounded-md p-3">
      <div className="flex items-center gap-2 absolute top-4 right-2">
        <div className="p-2 pb-2 bg-red-400 rounded-full text-xs font-semibold">
          Telemedicine
        </div>
        <IoIosInformationCircleOutline className="font-bold" />
      </div>
      <div className="absolute h-48 w-44">
        <img className="h-full w-full object-contain" src="card1.webp" alt="" />
      </div>
      <div>
        <span className="absolute text-3xl font-medium left-1/4 top-32">
          &nbsp; &nbsp; THE SIMPLE &<br />
          SECURE
        </span>
      </div>

      <div className="text-red-400 absolute font-semibold top-52 left-1/4 text-3xl">
        TELE 00
      </div>
      <div className="absolute bottom-4 flex justify-between items-center text-xs">
        <div className="w-3/5 ">
          Join more than <span className="font-bold">400K</span> clinicals who
          trust us already
        </div>
        <div className="flex h-2/5 items-center gap-2">
          <div className="p-1 border-gray-700 border-[0.6px] rounded-full items-center">
            24/7
          </div>
          <div className="p-1 border-gray-700 border-[0.6px] rounded-full">
            Secure
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
