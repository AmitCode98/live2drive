import React from "react";
import { useState } from "react";
import MarqueeContainer from "../components/MarqueeContainer";
import CarImg1 from "../assets/images/car-img1.png";
import CarImg2 from "../assets/images/car-img2.png";
import CarImg3 from "../assets/images/car-img3.png";
import HandlingBgImg from "../assets/images/handling-bg-img.png";
import DiskBrakeImg from "../assets/images/disk-brake-img.png";
import ElectroSystemImg from "../assets/images/electro-system-img.png";
import TurboRunnerImg from "../assets/images/turbo-runner-img.png";
import CarCard from "../components/CarCard";
import HandlingCard from "../components/HandlingCard";
import HeadingTextGradientColor from "../assets/images/heading-gradient-color.png";
import MobileSliderArrowLeftNormalStateButtonimg from "../assets/images/mobile-slider-arrow-left-normal-state-button-img.png";
import MobileSliderArrowLeftHoverStateButtonimg from "../assets/images/mobile-slider-arrow-left-hover-state-button-img.png";
import MobileSliderArrowRightNormalButtonimg from "../assets/images/mobile-slider-arrow-right-normal-state-button-img.png";
import MobileSliderArrowRightHoverStateButtonimg from "../assets/images/mobile-slider-arrow-right-hover-state-button-img.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const NftMarketplace = () => {
  const [isLeftActive, setIsLeftActive] = useState(false);
  const [isRightActive, setIsRightActive] = useState(false);

  const handleLeftButtonClick = () => {
    setIsLeftActive(true);
    setIsRightActive(false);
  };

  const handleRightButtonClick = () => {
    setIsRightActive(true);
    setIsLeftActive(false);
  };
  return (
    <section className="relative">
      <div className="relative flex items-center justify-center">
        <MarqueeContainer marqueeText={"nft marketplace"} />
        <h1 className="font-montserrat font-black text-[26px] md:text-6xl leading-[64px] text-white uppercase absolute">
          nft marketplace
        </h1>
        <img
          src={HeadingTextGradientColor}
          alt="Heading Gradient"
          className="absolute"
        />
      </div>

      {/* Cartype */}
      <div className="container pt-7 flex flex-col items-center md:items-start">
        <h2 className="font-montserrat font-black text-xl md:text-5xl uppercase text-center md:text-start text-white">
          car type
        </h2>


        {/* mobile slider card  */}
        {/* <Swiper
          spaceBetween={50}
          modules={[Navigation]}
          className=" md:hidden"
          loop
          navigation={{
            prevEl: ".slide-prev",
            nextEl: ".slide-next",
          }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="">
            <CarCard
              imgSrc={CarImg1}
              title="CHIMERA"
              speedPercentage="56%"
              handlingPercentage="36%"
              hooveringPercentage="86%"
              bnbAmount="222.3"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <CarCard
              imgSrc={CarImg1}
              title="CHIMERA"
              speedPercentage="56%"
              handlingPercentage="36%"
              hooveringPercentage="86%"
              bnbAmount="222.3"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <CarCard
              imgSrc={CarImg1}
              title="CHIMERA"
              speedPercentage="56%"
              handlingPercentage="36%"
              hooveringPercentage="86%"
              bnbAmount="222.3"
            />
          </SwiperSlide>
        </Swiper> */}

        <div className="max-md:hidden flex flex-col md:flex-row justify-between gap-4 xl:gap-16 w-full py-10 ">
          {/* Card */}

          <CarCard
            imgSrc={CarImg1}
            title="CHIMERA"
            speedPercentage="56%"
            handlingPercentage="36%"
            hooveringPercentage="86%"
            bnbAmount="222.3"
          />

          <CarCard
            imgSrc={CarImg2}
            title="BONBON"
            speedPercentage="56%"
            handlingPercentage="86%"
            hooveringPercentage="36%"
            bnbAmount="222.3"
          />

          <CarCard
            imgSrc={CarImg3}
            title="UNDERTAKER"
            speedPercentage="56%"
            handlingPercentage="56%"
            hooveringPercentage="66%"
            bnbAmount="222.3"
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleLeftButtonClick}
            className="md:hidden slide-prev"
          >
            <img
              src={
                isLeftActive
                  ? MobileSliderArrowLeftHoverStateButtonimg
                  : MobileSliderArrowLeftNormalStateButtonimg
              }
              alt="left-arrow"
            />
          </button>
          <button
            onClick={handleRightButtonClick}
            className="md:hidden slide-next"
          >
            <img
              src={
                isRightActive
                  ? MobileSliderArrowRightHoverStateButtonimg
                  : MobileSliderArrowRightNormalButtonimg
              }
              alt="right-arrow"
            />
          </button>
        </div>
      </div>

      {/* Handling  */}

      <div className="relative">
        <img
          src={HandlingBgImg}
          alt="img"
          className=" absolute -top-[550px] -z-20 hidden md:block"
        />
        <div className="container pt-20 hidden md:block">
          <h2 className="font-montserrat font-black text-xl md:text-5xl uppercase text-center md:text-start text-white">
            handling
          </h2>
          <div className="flex flex-col md:flex-row justify-between gap-4 xl:gap-16 w-full py-10">
            {/* Card */}
            <HandlingCard
              imgSrc={DiskBrakeImg}
              title="DISK BRAKE"
              speedPercentage="55%"
              handlingPercentage="36%"
              bnbAmount="222.4"
            />
            <HandlingCard
              imgSrc={ElectroSystemImg}
              title="ELECTRO SYSTEM"
              speedPercentage="56%"
              handlingPercentage="86%"
              bnbAmount="222.3"
            />
            <HandlingCard
              imgSrc={TurboRunnerImg}
              title="TURBO RUNNER"
              speedPercentage="56%"
              handlingPercentage="56%"
              bnbAmount="222.3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NftMarketplace;
