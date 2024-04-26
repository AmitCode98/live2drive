import React from "react";
import MarqueeContainer from "../components/MarqueeContainer";
import HeadingTextGradientColor from "../assets/images/heading-gradient-color.png";
import NftHubImg from "../assets/images/nft-hub-img.png";
import BaseCardImg from "../assets/images/base-card-img.png";
import FuturisticEnvironmentImg from "../assets/images/futuristic-environment-img.png";
import keyFeaturesAddImg from "../assets/images/key-features-add-img.png";
import ArrowImg from '../assets/images/arrow-top-img.png'

const KeyFeatures = () => {
  return (
    <section className="relative  my-20 ">
        
      <div className="relative flex items-center justify-center overflow-hidde">
        <MarqueeContainer marqueeText={"key features"} />
        <h1 className="font-montserrat font-black text-6xl leading-[64px] text-white uppercase absolute">
          key features
        </h1>
        <img
          src={HeadingTextGradientColor}
          alt="Heading Gradient"
          className="absolute"
        />
      </div>
      <div className="container py-7 relative ">
       <div className="absolute right-0 -top-40 flex flex-col items-center">
         <img
          src={keyFeaturesAddImg}
          alt="img"
          className=""
        />
        <img src={ArrowImg} alt="img" />
       </div>
        <div className="flex flex-col items-center justify-star gap-12">
          <div className="relative ">
            <img src={NftHubImg} alt="img" className="" />
            <div className="absolute top-0  h-full w-3/5 px-10 flex flex-col justify-center gap-7">
              <h1 className="text-white uppercase font-montserrat font-extrabold text-5xl">
                nft hub
              </h1>
              <p className="text-muted  font-montserrat font-medium text-2xl leading-10">
                Live2Drive uses blockchain for safety and fairness. Each car in
                the game is a unique digital item that players can buy, sell, or
                trade. In the first stage, we plan to introduce 15,000 of these
                special cars.
              </p>
            </div>
          </div>

          <div className="relative">
            <img src={BaseCardImg} alt="img" />
            <div className="absolute top-0 right-0  h-full w-3/5 px-10 flex flex-col justify-center gap-7">
              <h1 className="text-white uppercase font-montserrat font-extrabold text-5xl">
                BASE CARS
              </h1>
              <p className="text-muted  font-montserrat font-medium text-2xl leading-10">
                Live2Drive presents five foundational cars, each with its own
                special design, traits, and skills. These cars act as the
                starting point for players to tailor and improve based on their
                own preferences and style of play.
              </p>
            </div>
          </div>

          <div className="relative ">
            <img src={FuturisticEnvironmentImg} alt="img" className="" />
            <div className="absolute top-0  h-full w-full px-10 flex flex-col justify-center gap-7">
              <h1 className="text-white  uppercase font-montserrat font-extrabold text-5xl">
                FUTURISTIC ENVIRONMENT
              </h1>
              <p className="text-muted font-montserrat font-medium text-2xl w-3/5 leading-10">
                Live2Drive transports players to a captivating futuristic realm
                with dazzling visuals, showcasing cutting-edge technology,
                futuristic cities, and breathtaking landscapes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
