import React from "react";
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

const NftMarketplace = () => {
  return (
    <section className="relative">
      <div className="relative flex items-center justify-center">
        <MarqueeContainer marqueeText={"nft marketplace"} />
        <h1 className="font-montserrat font-black text-6xl leading-[64px] text-white uppercase absolute">
          nft marketplace
        </h1>
      </div>

      {/* Cartype */}
      <div className="container pt-7">
        <h2 className="font-montserrat font-black text-5xl uppercase text-white">
          car type
        </h2>
        <div className="flex justify-between gap-16 w-full py-10 ">
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
            title="CHIMERA"
            speedPercentage="56%"
            handlingPercentage="56%"
            hooveringPercentage="66%"
            bnbAmount="222.3"
          />
        </div>
      </div>

      {/* Handling  */}

      <div className="relative">
        <img
          src={HandlingBgImg}
          alt="img"
          className=" absolute -top-[550px] -z-20"
        />
        <div className="container pt-20">
          <h2 className="font-montserrat font-black text-5xl uppercase text-white">
            handling
          </h2>
          <div className="flex justify-between gap-16 w-full py-10 ">
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
