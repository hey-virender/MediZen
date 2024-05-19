import React from "react";
import { PiUsersFill } from "react-icons/pi";
import { MdThumbUp } from "react-icons/md";
import { CiMedicalCross } from "react-icons/ci";

const WhyChoose = () => {
  return (
    <div className="mt-8">
      <div className="p-3 bg-white rounded-lg flex justify-between">
        <div className="flex gap-1 items-center font-semibold">
          <div>
            <img className="h-7 w-7  rounded-full" src="card2-1.webp" alt="" />
          </div>
          <div>
            <img className="h-7 w-7  rounded-full" src="card2-2.webp" alt="" />
          </div>
          <span>Why Choose Medizen ?</span>
        </div>
        <div className="flex place-items-center gap-2">
          <div className="bg-red-400 p-1 rounded-full">
            <PiUsersFill className="text-white" />
          </div>
          <span className="font-medium text-xs">Our Services</span>
        </div>
      </div>
      <div className="bg-white mt-2 rounded-lg p-3">
        <div className="top flex justify-around">
          <div className="text-5xl font-medium">
            <span className="flex items-end">
              Your Health,
              <div className="bg-red-400 p-1 rounded-full">
                <MdThumbUp className="text-white" size={15} />
              </div>
            </span>
            <span className="ml-24">Anytime, Anywhere</span>
          </div>
          <div className="flex justify-start items-center">
            <span className="text-gray-500 font-xs font-me">
              We are revolutionizing HealthCare by bringing it to <br /> your
              Doorstep, Or rather, To your Device.
            </span>
          </div>
        </div>
        <div className="bottom flex gap-3 h-3/4 mt-12">
          <div className="1 w-1/4 flex justify-center items-center p-3  bg-slate-100 rounded-lg relative overflow-hidden">
            <CiMedicalCross
              className="absolute text-gray-300 -left-1/4 -bottom-1/4 "
              size={400}
            />
            <span className="underline font-semibold z-10">See More</span>
          </div>

          <div className="2 w-1/4 p-3 bg-slate-100 rounded-lg">
            <img className="h-full rounded-xl" src="card2-3.jpg" alt="" />
          </div>
          <div className="3 w-1/4  p-3 bg-slate-100 rounded-lg">
            <div className="flex justify-end">
              <img className="h-[10vw] rounded-xl" src="card2-6.webp" alt="" />
            </div>
            <div className="flex justify-center mt-16">
              <span className="underline text-2xl font-medium italic">
                Second
              </span>
            </div>
          </div>

          <div className="4 w-1/4 p-3 bg-slate-100 rounded-lg">
            <div>
              <span className="text-6xl font-bold">
                370<span className="text-orange-500">K</span>
              </span>
            </div>
            <div className="mt-16 flex flex-col justify-end items-end">
              <div>
                <span className="block text-md font-bold">
                  User-Friendly Platform
                </span>
                <span className="block text-gray-500 font-medium">
                  Our User-Friendly interface <br /> Makes it Easy.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
