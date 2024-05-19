import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaAsterisk } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { IoMedicalOutline } from "react-icons/io5";

const Cards = () => {
  return (
    <div className="flex gap-3 h-80  ">
      <div className="left w-2/5 relative bg-white rounded-md p-3">
        <div className="flex items-center gap-2 absolute top-4 right-2">
          <div className="p-1 pb-2 bg-red-400 rounded-full">Telemedicine</div>
          <IoIosInformationCircleOutline className="font-bold" />
        </div>
        <div className="absolute h-48 w-44">
          <img
            className="h-full w-full object-contain"
            src="card1.webp"
            alt=""
          />
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
      <div className="right w-3/5 bg-white rounded-md p-6 relative overflow-hidden ">
        <IoMedicalOutline
          size={300}
          className="absolute -z-1 -bottom-1/4 right-[28%] text-gray-300 font-light"
        />
        <div className="flex justify-start">
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
        <div className="w-full flex justify-end px-4">
          <span className="text-md font-medium">02</span>
        </div>
        <div className="flex mt-12">
          <div className="left-sec w-3/4">
            <div className="flex justify-center">
              <span className="text-gray-500 text-xs mx-auto">
                We have telemedicine <br /> extremely easy to use for both
              </span>
            </div>
            <div className="flex mt-16 gap-2">
              <div className="flex place-items-center px-1 py-0 border-red-400 border-[0.7px] rounded-full text-xs">
                <span>Popular Telemedicines</span>
              </div>
              <div className=" flex items-center p-1 border-red-400 border-[0.7px] rounded-full font-bold text-md text-white bg-red-400">
                <FaAsterisk />
              </div>
            </div>
          </div>
          <div className="right-sec w-2/4 h-full rounded-md bg-gray-300 p-3 relative">
            <div className="absolute w-[3vw] h-[4vw] top-0 right-2 bg-orange-500 rounded-b-full flex items-end justify-center p-1">
              <MdOutlineKeyboardDoubleArrowUp
                size={30}
                className="text-white"
              />
            </div>
            <div>
              <span className="font-bold">Patient Queque</span>
            </div>
            <div className="flex gap-3 mt-4">
              <div className="grid grid-cols-2 grid-rows-2 bg-white p-1 rounded-2xl gap-2">
                <div className="col-span-1 row-span-1 flex">
                  <img
                    className="w-8 h-8 rounded-full mx-auto"
                    src="card2-3.jpg"
                    alt=""
                  />
                </div>
                <div className="col-span-1 row-span-1 flex">
                  <img
                    className="w-8 h-8 rounded-full mx-auto"
                    src="card2-4.webp"
                    alt=""
                  />
                </div>
                <div className="col-span-1 flex">
                  <img
                    className="w-8 h-8 rounded-full mx-auto"
                    src="card2-5.webp"
                    alt=""
                  />
                </div>
                <div className="col-span-1 flex">
                  <img
                    className="w-8 h-8 rounded-full mx-auto"
                    src="card2-6.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-1/2 text-xs pt-2">
                <div>
                  <span className="block font-semibold">Bessie Cooper</span>
                  <span className="text-[0.8em] text-gray-500 italic">
                    23:23 pm
                  </span>
                </div>
                <div>
                  <span className="block font-semibold">Jenny Wilson</span>
                  <span className="text-[0.8em] text-gray-500 italic">
                    02:43 am
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
