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
import AboutUsBgImg from "../assets/images/aboutUs-bg-img.png";
import HeadingTextGradientColor from "../assets/images/heading-gradient-color.png";
import ArrowRightImg from "../assets/images/arrow-right-img.png";

const AboutUsSection = () => {
  return (
    <section className="relative h-[650px]">
      <MarqueeContainer marqueeText={'about us'}/>
      <img src={AboutUsBgImg} alt="img" className="absolute top-0 right-0" />
     
      <div className=" container flex gap-14 items-center py-20 absolute top-0 right-0 left-0">
        <img src={AboutUsAddImg} alt="img" />
        <div className="flex flex-col gap-20  w-[63%]">
          <div className=" flex items-center justify-start">
            <h1 className="font-montserrat font-black text-[60px] uppercase text-white relative">
              about us
            </h1>
            <img
              src={HeadingTextGradientColor}
              alt="img"
              className="absolute left-0"
            />
          </div>
          <div className="">
            <p className="font-montserrat font-medium text-2xl text-white capitalize leading-[40px] ">
              Live2Drive is more than just a typical racing game, but rather a
              pioneering Web3.0 venture poised to revolutionize the gaming
              sector. It combines blockchain technology, futuristic themes, and
              a play-to-earn model to offer an unprecedented gaming experience.
              The document outlines the game's distinctive features, NFT
              characteristics, and the play-to-earn system it utilizes.
            </p>
            <img src={ArrowRightImg} alt="img" />
          </div>
        </div>
        
      </div>

    </section>
  );
};

export default AboutUsSection;
