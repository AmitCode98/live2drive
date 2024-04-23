import React from "react";
import MarqueeContainer from "../components/MarqueeContainer";
import HeadingTextGradientColor from "../assets/images/heading-gradient-color.png";

const KeyFeatures = () => {
  return (
    <section className="relative">
      <div className="h-80 relative flex items-center justify-center ">
        <MarqueeContainer marqueeText={"key features"} />
        <h1 className="font-montserrat font-black text-6xl leading-[64px] text-white uppercase">
          key features
        </h1>
        <img
          src={HeadingTextGradientColor}
          alt="Heading Gradient"
          className="absolute"
        />
      </div>
    </section>
  );
};

export default KeyFeatures;
