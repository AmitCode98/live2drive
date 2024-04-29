import React from "react";
import HeroBgImg from "../assets/images/hero-bg-img2.png";
import Button from "../components/Button";
import LogoForMobile from "../assets/icons/logo-mobile.svg";
// import HeroHeadingShadowImg from '../assets/images/hero-ellips-img.png'
import MobileHeroBgImg from '../assets/images/mobile-hero-bg-img.png'

const HeroSection = () => {
  return (
    <section
      className="h-screen w-full"
      style={{
        backgroundImage: `url(${HeroBgImg})`,
        width: "100%",
        backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundPosition: "42% 50%",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#222222",
        // "@media (min-width: 640px)": {
        //   backgroundImage: `url(${MobileHeroBgImg})`,
        //   backgroundPosition: "30% 50%",
        //   /* Add any additional styles for larger screen background */
        // },
      }}
    >
      <div className="container h-full flex flex-col items-center justify-center">
        <img src={LogoForMobile} alt="img" className="md:hidden z-20 pb-5 " />
        <div className=" relative text-white flex flex-col items-center gap-[10px] md:gap-[23px]">
          <h1 className="font-alumni-sans font-black text-[120px] md:text-[250px] leading-[83px] md:leading-[168px] italic uppercase text-white text-center xl:w-[60%] z-20 ">
            REV UP GAME ON
          </h1>
          <p className="font-montserrat font-bold text-[10px] md:text-[20px] text-white text-center uppercase z-20">
            Join the fast lane with car gamers worldwide
          </p>
          <div className="w-[400px] h-[450px] md:w-[750px] md:h-[500px]  rounded-full  bg-[#0D0A1A] absolute -top-24 blur-[40px]  md:blur-[75px]"></div>
        </div>

        <div className="flex gap-3 sm:gap-4 md:gap-7 pt-[44px] md:pt-[40px] z-20">
          <Button buttonText="learn more " variant="gradient" />
          <Button buttonText="join us" variant="transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
