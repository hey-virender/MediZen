import React, { useRef } from "react";
import NavMenu from "./NavMenu";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const MainSection = () => {
  const toptext = useRef();
  useGSAP(() => {
    gsap.to("main", {
      scale: 3,
      top: "10%",
      opacity: 0,
      duration: 0.6,
      delay: 0.4,
      scrollTrigger: {
        trigger: "main",

        scroller: "body",
        start: "top -8%",
        end: "top 100%",
        scrub: 2,
        pin: true,
      },
    });
    gsap.from("#maintext span", {
      y: 100,
      opacity: 0,
      duration: 0.5,
      delay: 0.2,
      stagger: 0.1,
    });

    gsap.from(toptext.current, {
      y: -100,
      opacity: 0,
      duration: 0.7,
      delay: 0.3,
      stagger: 1,
    });
  });
  return (
    <main className="main my-20 flex mx-auto">
      <NavMenu />
      <div className=" w-5/6 relative">
        <h1 ref={toptext} className="text-gray-500 w-full text-center">
          Explore Our Comprehensive Healthcare Services And Trusted Healthcare
        </h1>

        <h1
          id="maintext"
          className="font-medium text-8xl w-[87%] text-center mx-auto"
        >
          {"WELLNESS-AND + LIFESTYL".split("").map((item, index) => (
            <span key={index} className="inline-block">
              {item}
            </span>
          ))}
        </h1>

        <span className="absolute top-32 left-32  text-2xl italic">Care</span>
        <div className="absolute bottom-7 -right-8 text-left text-xs">
          <span className="block text-gray-500">
            Our Mission is To Provide You With <br />
            Accesible, Reliable Healthcare.
          </span>
          <span className=" border-black border-b">Get Started</span>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
