import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeContainer = ({marqueeText}) => {
  return (
    <Marquee className="top-0 -z-20" loop={0} >
      <h1 className="font-montserrat font-black text-[100px] md:text-[200px] lg:text-[300px] lg:leading-none uppercase mr-20 overflow-hidden text-shadow text-background opacity-45">
       {marqueeText}
      </h1>
    </Marquee>
  );
};

export default MarqueeContainer;
