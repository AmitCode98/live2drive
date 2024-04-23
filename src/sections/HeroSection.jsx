import React from "react";
import HeroBgImg from "../assets/images/hero-bg-img2.png";
import Button from "../components/Button";


const HeroSection = () => {
  return (
    <section
      className="h-screen w-full"
      style={{
        backgroundImage: `url(${HeroBgImg})`,
        width:'100%',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#222222",
      }}
    >
      <div className="container h-full flex flex-col items-center justify-center">
        <div className=" h-[610px] w-full md:h-[594px] md:w-[771px] absolute rounded-full bg-[#0D0A1A] blur-[70px]"></div>
        <div className="z-20 text-white flex flex-col  items-center gap-7 md:gap-10">
          <div className="flex flex-col items-center text-center gap-4">
            <h1 className="font-alumni-sans uppercase font-black text-[120px] md:text-[187px] xl:text-[250px] md:w-[70%] leading-[100px] md:leading-[170px] italic">rev up game on</h1>
            <p className="font-montserrat font-bold text-lg md:text-xl uppercase">Join the fast lane with car gamers worldwide</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-7">
            <Button buttonText="learn more " variant="gradient"/>
            <Button buttonText="join us" variant="transparent"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
