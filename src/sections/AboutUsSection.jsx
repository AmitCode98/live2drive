// import React from "react";
// import AboutUsAddImg from "../assets/images/about-us-add-img.png";
// import AboutUsBgImg from "../assets/images/aboutUs-bg-img.png";
// import HeadingTextGradientColor from "../assets/images/heading-gradient-color.png";
// import MarqueeContainer from "../components/MarqueeContainer";

// const AboutUsSection = () => {
//   return (
//     <section className="py-20 relative ">
//       <MarqueeContainer marqueeText={"about us"} />

//       <div className="container w-full flex md:gap-8 lg:gap-16">
//         <img src={AboutUsAddImg} alt="Additional Image" />
//         <div className="flex flex-col xl:justify-between gap-5 md:gap-14">
//           <div className="relative flex items-center justify-center">
//             <h1 className="font-montserrat font-black text-6xl leading-[64px] text-white uppercase">
//               about us
//             </h1>
//             <img
//               src={HeadingTextGradientColor}
//               alt="Gradient Color"
//               className="absolute -left-[20%]"
//             />
//           </div>
//           <p className=" xl:w-2/3 font-montserrat text-xl md:text-2xl font-medium md:leading-[52px] text-white">
//             Live2Drive is more than just a typical racing game, but rather a
//             pioneering Web3.0 venture poised to revolutionize the gaming sector.
//             It combines blockchain technology, futuristic themes, and a
//             play-to-earn model to offer an unprecedented gaming experience. The
//             document outlines the game's distinctive features, NFT
//             characteristics, and the play-to-earn system it utilizes.
//           </p>
//         </div>
//         <img
//           src={AboutUsBgImg}
//           alt="Background Image"
//           className="absolute xl:inset-y-0 right-0 mt-5 md:mt-0  -z-10"
//         />
//       </div>
//     </section>
//   );
// };

// export default AboutUsSection;

import React from "react";
import MarqueeContainer from "../components/MarqueeContainer";
import AboutUsAddImg from "../assets/images/about-us-add-img.png";
import AboutUsImg from "../assets/NewImages/about-us-img.png";
import HeadingTextGradientColor from "../assets/images/heading-gradient-color.png";
import ArrowRightImg from "../assets/images/arrow-right-img.png";
import MobileAboutUsBgImg from "../assets/NewImages/mobile-about-us-bg-img.png";
import MobileAboutUsAddImg from "../assets/images/mobile-about-us-add-img.png";
import AboutUsBgCarImg from "../assets/NewImages/about-us-bg-car-img.png";

const AboutUsSection = () => {
  // h-[650px]
  return (
    <section className="relative">
      <MarqueeContainer marqueeText={"about us"} />
      <img
        src={AboutUsImg}
        alt="img"
        className="absolute top-0 right-0 hidden xl:block z-20 "
      />
      <img
        src={AboutUsBgCarImg}
        alt="img"
        className="absolute top-0 left-0   -z-20 "
      />

      <img
        src={MobileAboutUsBgImg}
        alt="img"
        className="md:hidden mt-[450px] right-0 "
      />

      <div className=" container absolute flex md:gap-10 items-center justify-center md:justify-start py-14 md:py-20  top-0 right-0 left-0">
        <img src={AboutUsAddImg} alt="img" className="hidden md:block" />
        <div className="flex flex-col  gap-10  w-[317px] md:w-[80%] lg:w-[63%] 2xl:w-[80%]">
          <div className=" flex items-center justify-center md:justify-start">
            <h1 className="font-montserrat font-black text-[26px] md:text-[60px] uppercase text-white relative">
              about us
            </h1>
            <img
              src={HeadingTextGradientColor}
              alt="img"
              className="absolute left-0"
            />
            <img
              src={ArrowRightImg}
              alt="img"
              className="hidden md:block pl-14"
            />
          </div>
          <div className=" ">
            <div className="md:bg-[#D9D9D9] md:rounded-md  md:border-[0.25px] md:bg-opacity-[1%] md:backdrop-blur-[10px]">
              <p className=" text-base md:text-2xl text-white font-montserrat font-medium  capitalize leading-[35px] md:leading-[45px] text-center md:text-start md:p-5">
                Live2Drive is more than just a typical racing game, but rather a
                pioneering Web3.0 venture poised to revolutionize the gaming
                sector. It combines blockchain technology, futuristic themes,
                and a play-to-earn model to offer an unprecedented gaming
                experience. The document outlines the game's distinctive
                features, NFT characteristics, and the play-to-earn system it
                utilizes.
              </p>
              <img
                src={MobileAboutUsAddImg}
                alt="img"
                className="md:hidden pt-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
