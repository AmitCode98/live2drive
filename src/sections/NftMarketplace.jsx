import React from "react";
import MarqueeContainer from "../components/MarqueeContainer";
import CarImg from "../assets/images/car-img.png";
import BnbIcon from "../assets/icons/bnb-icon.svg";
import HeartIcon from "../assets/icons/heart-icon.svg";

const NftMarketplace = () => {
  return (
    <section className="relative">
      <div className="relative flex items-center justify-center">
        <MarqueeContainer marqueeText={"nft marketplace"} />
        <h1 className="font-montserrat font-black text-6xl leading-[64px] text-white uppercase absolute">
          nft marketplace
        </h1>
        {/* <img
          src={HeadingTextGradientColor}
          alt="Heading Gradient"
          className="absolute"
        /> */}
      </div>

      <div className="container ">
        <h2 className="font-montserrat font-black text-5xl uppercase text-white">
          car type
        </h2>
        <div className="flex justify-between w-full py-10 ">
          {/* Card */}
          <div className=" p-6 border border-[#C2C2C2] rounded-[30px] ">
            <div className="flex flex-col gap-4 relative">
              {/* heart icon */}
              <img
                src={HeartIcon}
                className="absolute right-3 top-3 p-3 bg-white rounded-full  "
              />
              <img src={CarImg} alt="img" />
              <h1 className="text-white text-center font-montserrat font-black text-3xl uppercase">
                CHIMERA
              </h1>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <h4 className="font-montserrat text-base font-bold uppercase text-white ">
                    speed
                  </h4>
                  <p className="font-montserrat font-light text-base text-muted">
                    56%
                  </p>
                </div>
                <div>
                  <div className="w-full border outer-border rounded-md">
                    <div className="h-4 bg-gradient-to-r from-[#5E0616] to-[#DA00B7] w-[56%] rounded-sm"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <h4 className="font-montserrat text-base font-bold uppercase text-white ">
                    speed
                  </h4>
                  <p className="font-montserrat font-light text-base text-muted">
                    56%
                  </p>
                </div>
                <div>
                  <div className="w-full border outer-border rounded-md">
                    <div className="h-4 bg-gradient-to-r from-[#5E0616] to-[#DA00B7] w-[56%] rounded-sm"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <h4 className="font-montserrat text-base font-bold uppercase text-white ">
                    speed
                  </h4>
                  <p className="font-montserrat font-light text-base text-muted">
                    56%
                  </p>
                </div>
                <div>
                  <div className="w-full border outer-border rounded-md">
                    <div className="h-4 bg-gradient-to-r from-[#5E0616] to-[#DA00B7] w-[56%] rounded-sm"></div>
                  </div>
                </div>
              </div>
              <button className="py-2 px-4 text-white bg-gradient-to-r from-[#5E0616] to-[#DA00B7] self-end rounded-[8px] uppercase font-bold text-sm flex justify-center items-center gap-[10px]">
                <img src={BnbIcon} />
                2223 bnb
              </button>
            </div>
          </div>
          <div className=" p-6 border border-[#C2C2C2] rounded-[30px] ">
            <div className="flex flex-col gap-4 relative">
              {/* heart icon */}
              <img
                src={HeartIcon}
                className="absolute right-3 top-3 p-3 bg-white rounded-full  "
              />
              <img src={CarImg} alt="img" />
              <h1 className="text-white text-center font-montserrat font-black text-3xl uppercase">
                CHIMERA
              </h1>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <h4 className="font-montserrat text-base font-bold uppercase text-white ">
                    speed
                  </h4>
                  <p className="font-montserrat font-light text-base text-muted">
                    56%
                  </p>
                </div>
                <div>
                  <div className="w-full border outer-border rounded-md">
                    <div className="h-4 bg-gradient-to-r from-[#5E0616] to-[#DA00B7] w-[56%] rounded-sm"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <h4 className="font-montserrat text-base font-bold uppercase text-white ">
                    speed
                  </h4>
                  <p className="font-montserrat font-light text-base text-muted">
                    56%
                  </p>
                </div>
                <div>
                  <div className="w-full border outer-border rounded-md">
                    <div className="h-4 bg-gradient-to-r from-[#5E0616] to-[#DA00B7] w-[56%] rounded-sm"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <h4 className="font-montserrat text-base font-bold uppercase text-white ">
                    speed
                  </h4>
                  <p className="font-montserrat font-light text-base text-muted">
                    56%
                  </p>
                </div>
                <div>
                  <div className="w-full border outer-border rounded-md">
                    <div className="h-4 bg-gradient-to-r from-[#5E0616] to-[#DA00B7] w-[56%] rounded-sm"></div>
                  </div>
                </div>
              </div>
              <button className="py-2 px-4 text-white bg-gradient-to-r from-[#5E0616] to-[#DA00B7] self-end rounded-[8px] uppercase font-bold text-sm flex justify-center items-center gap-[10px]">
                <img src={BnbIcon} />
                222.3 bnb
              </button>
            </div>
          </div>
          <div className=" p-6 border border-[#C2C2C2] rounded-[30px] ">
            <div className="flex flex-col gap-4 relative">
              {/* heart icon */}
              <img
                src={HeartIcon}
                className="absolute right-3 top-3 p-3 bg-white rounded-full  "
              />
              <img src={CarImg} alt="img" />
              <h1 className="text-white text-center font-montserrat font-black text-3xl uppercase">
                CHIMERA
              </h1>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <h4 className="font-montserrat text-base font-bold uppercase text-white ">
                    speed
                  </h4>
                  <p className="font-montserrat font-light text-base text-muted">
                    56%
                  </p>
                </div>
                <div>
                  <div className="w-full border outer-border rounded-md">
                    <div className="h-4 bg-gradient-to-r from-[#5E0616] to-[#DA00B7] w-[56%] rounded-sm"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <h4 className="font-montserrat text-base font-bold uppercase text-white ">
                    speed
                  </h4>
                  <p className="font-montserrat font-light text-base text-muted">
                    56%
                  </p>
                </div>
                <div>
                  <div className="w-full border outer-border rounded-md">
                    <div className="h-4 bg-gradient-to-r from-[#5E0616] to-[#DA00B7] w-[56%] rounded-sm"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <h4 className="font-montserrat text-base font-bold uppercase text-white ">
                    speed
                  </h4>
                  <p className="font-montserrat font-light text-base text-muted">
                    56%
                  </p>
                </div>
                <div>
                  <div className="w-full border outer-border rounded-md">
                    <div className="h-4 bg-gradient-to-r from-[#5E0616] to-[#DA00B7] w-[56%] rounded-sm"></div>
                  </div>
                </div>
              </div>
              <button className="py-2 px-4 text-white bg-gradient-to-r from-[#5E0616] to-[#DA00B7] self-end rounded-[8px] uppercase font-bold text-sm flex justify-center items-center gap-[10px]">
                <img src={BnbIcon} />
                222.3 bnb
              </button>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default NftMarketplace;
