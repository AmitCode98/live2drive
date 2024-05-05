import React from "react";
import MarqueeContainer from "../components/MarqueeContainer";
import HeadingTextGradientColor from "../assets/images/heading-gradient-color.png";
import NftHubImg from "../assets/images/nft-hub-img.png";
import BaseCarsImg from "../assets/NewImages/base-cars-img.png";
import FuturisticEnvironmentImg from "../assets/NewImages/futuristic-environment-img.png";
import keyFeaturesAddImg from "../assets/images/key-features-add-img.png";
import ArrowImg from "../assets/images/arrow-top-img.png";
import MobileNftHubImg from "../assets/images/mobile-nft-hub-img.png";
import MobileBaseCarsImg from "../assets/NewImages/mobile-base-cars-img.png";
import MobileFuturisticEnvironmentImg from "../assets/NewImages/mobile-futuristic-environment-img.png";

const features = [
  {
    title: "NFT Hub",
    description:
      "Live2Drive uses blockchain for safety and fairness. Each car in the game is a unique digital item that players can buy, sell, or trade. In the first stage, we plan to introduce 15,000 of these special cars.",
    image: {
      desktop: NftHubImg,
      mobile: MobileNftHubImg,
    },
  },
  {
    title: "Base Cars",
    description:
      "Live2Drive presents five foundational cars, each with its own special design, traits, and skills. These cars act as the starting point for players to tailor and improve based on their own preferences and style of play.",
    image: {
      desktop: BaseCarsImg,
      mobile: MobileBaseCarsImg,
    },
  },
  {
    title: "Futuristic Environment",
    description:
      "Live2Drive presents five foundational cars, each with its own special design, traits, and skills. These cars act as the starting point for players to tailor and improve based on their own preferences and style of play.",
    image: {
      desktop: FuturisticEnvironmentImg,
      mobile: MobileFuturisticEnvironmentImg,
    },
  },
];

const KeyFeature = ({ title, description, image, index }) => {
  console.log(index)

  return (
    <div className="relative ">
      <img src={image.desktop} alt="img" className="hidden md:block" />
      <img src={image.mobile} alt="img" className="md:hidden" />
      {/* <div className="absolute top-0 right- h-full w-full md:w-3/5 p-10 md:px-10 flex flex-col justify-start md:justify-center items-center md:items-start gap-5 lg:gap-7 text-center md:text-start"> */}
      <div
        className={`absolute top-0 ${
          index % 2 === 0 ? "left-0" : "right-0"
        }  h-full w-full md:w-3/5 p-10 md:px-10 flex flex-col justify-start md:justify-center items-center md:items-start gap-5 lg:gap-7 text-center md:text-start`}
      >
        <h1 className="text-white uppercase font-montserrat font-extrabold text-xl lg:text-5xl">
          {title}
        </h1>
        <p className="text-muted text-center md:text-start font-montserrat font-medium text-base md:text-lg lg:text-2xl leading-[25px] md:leading-[26px] lg:leading-10">
          {description}
        </p>
      </div>
    </div>
  );
};

const KeyFeatures = () => {
  return (
    <section className="relative md:mt-[450px]">
      <div className="relative flex items-center justify-center overflow-hidde">
        <MarqueeContainer marqueeText={"key features"} />
        <h1 className="font-montserrat font-black text-[26px] md:text-6xl leading-[64px] text-white uppercase absolute">
          key features
        </h1>
        <img
          src={HeadingTextGradientColor}
          alt="Heading Gradient"
          className="absolute"
        />
      </div>
      <div className="container py-7 relative ">
        <div className=" absolute right-0 -top-40 flex flex-col items-center">
          <img src={keyFeaturesAddImg} alt="img" className="hidden xl:block" />
          <img src={ArrowImg} alt="img" className="hidden xl:block" />
        </div>
        <div className="flex flex-col items-center justify-end gap-12">
          {features.map((feature, index) => (
            <KeyFeature key={index} index={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
