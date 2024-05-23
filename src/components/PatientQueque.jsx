import React from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const PatientQueque = () => {
  const imgData = [
    {
      id: 1,
      url: "card2-3.jpg",
    },
    {
      id: 2,
      url: "card2-4.webp",
    },
    {
      id: 3,
      url: "card2-5.webp",
    },
    {
      id: 4,
      url: "card2-6.webp",
    },
  ];
  useGSAP(() => {
    gsap.from("#imagegroup div", {
      scale: 0,
      duration: 0.5,
      delay: 0.2,
      stagger: 0.2,
      scrollTrigger: {
        scroller: "body",
        trigger: "#imagegroup",
        start: "top 90%",
        end: "top 50%",
        scrub: 2,
      },
    });
  });
  return (
    <div className="right-sec w-2/4 h-full rounded-md bg-gray-300 p-3 relative">
      <div className="absolute w-[3vw] h-[4vw] top-0 right-2 bg-orange-500 rounded-b-full flex items-end justify-center p-1">
        <MdOutlineKeyboardDoubleArrowUp size={30} className="text-white" />
      </div>
      <div>
        <span className="font-bold">Patient Queque</span>
      </div>
      <div className="flex gap-3 mt-4">
        <div
          id="imagegroup"
          className="grid grid-cols-2 grid-rows-2 bg-white p-1 rounded-2xl gap-2"
        >
          {imgData.map((item) => (
            <div className="col-span-1 row-span-1 flex" key={item.id}>
              <img
                className="w-8 h-8 rounded-full mx-auto"
                src={item.url}
                alt={item.id}
              />
            </div>
          ))}
        </div>
        <div className="w-1/2 text-xs pt-2">
          <div>
            <span className="block font-semibold">Bessie Cooper</span>
            <span className="text-[0.8em] text-gray-500 italic">23:23 pm</span>
          </div>
          <div>
            <span className="block font-semibold">Jenny Wilson</span>
            <span className="text-[0.8em] text-gray-500 italic">02:43 am</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientQueque;
