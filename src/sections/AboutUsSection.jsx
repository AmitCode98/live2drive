import React from "react";
import AboutUsAddImg from "../assets/images/about-us-add-img.png";
import AboutUsBgImg from "../assets/images/aboutUs-bg-img.png";
import HeadingTextGradientColor from "../assets/images/heading-gradient-color.png";
import MarqueeContainer from "../components/MarqueeContainer";

const AboutUsSection = () => {
  return (
    <section className="py-20 relative border">
      <MarqueeContainer marqueeText={"about us"} />

      <div className="container flex md:gap-8 lg:gap-16">
        <img src={AboutUsAddImg} alt="Additional Image" />
        <div className="flex flex-col xl:justify-between gap-5 md:gap-14">
          <div className="relative flex items-center justify-start">
            <h1 className="font-montserrat font-black text-6xl leading-[64px] text-white uppercase">
              about us
            </h1>
            <img
              src={HeadingTextGradientColor}
              alt="Gradient Color"
              className="absolute -left-[20%]"
            />
          </div>
          <p className=" xl:w-2/3 font-montserrat text-xl md:text-2xl font-medium md:leading-[52px] text-white">
            Live2Drive is more than just a typical racing game, but rather a
            pioneering Web3.0 venture poised to revolutionize the gaming sector.
            It combines blockchain technology, futuristic themes, and a
            play-to-earn model to offer an unprecedented gaming experience. The
            document outlines the game's distinctive features, NFT
            characteristics, and the play-to-earn system it utilizes.
          </p>
        </div>
      </div>
      <img
        src={AboutUsBgImg}
        alt="Background Image"
        className="absolute xl:inset-y-0 right-0 mt-5 md:mt-0  -z-10"
      />
    </section>
  );
};

export default AboutUsSection;
