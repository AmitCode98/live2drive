import React from "react";
import MarqueeContainer from "../components/MarqueeContainer";
import CarImg1 from "../assets/images/car-img1.png";
import CarImg2 from "../assets/images/car-img2.png";
import CarImg3 from "../assets/images/car-img3.png";
import BnbIcon from "../assets/icons/bnb-icon.svg";
import HeartIcon from "../assets/icons/heart-icon.svg";
import HandlingBgImg from "../assets/images/handling-bg-img.png";
import DiskBrakeImg from '../assets/images/disk-brake-img.png';
import ElectroSystemImg from '../assets/images/electro-system-img.png'
import TurboRunnerImg from '../assets/images/turbo-runner-img.png'

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

      {/* Cartype */}
      <div className="container pt-20">
        <h2 className="font-montserrat font-black text-5xl uppercase text-white">
          car type
        </h2>
        <div className="flex justify-between gap-16 w-full py-10 ">
          {/* Card */}
          <div className=" p-6 border border-[#C2C2C2] rounded-[30px] ">
            <div className="flex flex-col gap-4 relative">
              {/* heart icon */}
              <img
                src={HeartIcon}
                className="absolute right-3 top-3 p-3 bg-white rounded-full  "
              />
              <img src={CarImg1} alt="img" />
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
                    <div className="h-4 bg-gradient-to-r from-[#5E0616] to-[#DA00B7] w-[66%] rounded-sm"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <h4 className="font-montserrat text-base font-bold uppercase text-white ">
                    HANDLING
                  </h4>
                  <p className="font-montserrat font-light text-base text-muted">
                    56%
                  </p>
                </div>
                <div>
                  <div className="w-full border outer-border rounded-md">
                    <div className="h-4 bg-gradient-to-r from-[#5E0616] to-[#DA00B7] w-[36%] rounded-sm"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <h4 className="font-montserrat text-base font-bold uppercase text-white ">
                    HOOVERING
                  </h4>
                  <p className="font-montserrat font-light text-base text-muted">
                    56%
                  </p>
                </div>
                <div>
                  <div className="w-full border outer-border rounded-md">
                    <div className="h-4 bg-gradient-to-r from-[#5E0616] to-[#DA00B7] w-[86%] rounded-sm"></div>
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
              <img src={CarImg2} alt="img" />
              <h1 className="text-white text-center font-montserrat font-black text-3xl uppercase">
                BONBON
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
                    <div className="h-4 bg-gradient-to-r from-[#5E0616] to-[#DA00B7] w-[46%] rounded-sm"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <h4 className="font-montserrat text-base font-bold uppercase text-white ">
                    HANDLING
                  </h4>
                  <p className="font-montserrat font-light text-base text-muted">
                    56%
                  </p>
                </div>
                <div>
                  <div className="w-full border outer-border rounded-md">
                    <div className="h-4 bg-gradient-to-r from-[#5E0616] to-[#DA00B7] w-[86%] rounded-sm"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <h4 className="font-montserrat text-base font-bold uppercase text-white ">
                    HANDLING
                  </h4>
                  <p className="font-montserrat font-light text-base text-muted">
                    56%
                  </p>
                </div>
                <div>
                  <div className="w-full border outer-border rounded-md">
                    <div className="h-4 bg-gradient-to-r from-[#5E0616] to-[#DA00B7] w-[36%] rounded-sm"></div>
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
              <img src={CarImg3} alt="img" />
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
                    <div className="h-4 bg-gradient-to-r from-[#5E0616] to-[#DA00B7] w-[76%] rounded-sm"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <h4 className="font-montserrat text-base font-bold uppercase text-white ">
                    HANDLING
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
                    HANDLING
                  </h4>
                  <p className="font-montserrat font-light text-base text-muted">
                    56%
                  </p>
                </div>
                <div>
                  <div className="w-full border outer-border rounded-md">
                    <div className="h-4 bg-gradient-to-r from-[#5E0616] to-[#DA00B7] w-[66%] rounded-sm"></div>
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
            <div className=" p-6 border border-[#C2C2C2] rounded-[30px] ">
              <div className="flex flex-col gap-4 relative">
                {/* heart icon */}
                <img
                  src={HeartIcon}
                  className="absolute right-3 top-3 p-3 bg-white rounded-full  "
                />
                <img src={DiskBrakeImg} alt="img" />
                <h1 className="text-white text-center font-montserrat font-black text-3xl uppercase">
                  DISK BRAKE
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
                      <div className="h-4 bg-gradient-to-r from-[#5E0616] to-[#DA00B7] w-[66%] rounded-sm"></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <h4 className="font-montserrat text-base font-bold uppercase text-white ">
                      HANDLING
                    </h4>
                    <p className="font-montserrat font-light text-base text-muted">
                      56%
                    </p>
                  </div>
                  <div>
                    <div className="w-full border outer-border rounded-md">
                      <div className="h-4 bg-gradient-to-r from-[#5E0616] to-[#DA00B7] w-[36%] rounded-sm"></div>
                    </div>
                  </div>
                </div>
                <p className="font-montserrat  font-normal text-muted text-xs uppercase w-[87%] 2xl:w-[83%]">
                  Race against time, outsmart the cops, and take on weekly
                  qualifiers to reach The Grand
                </p>
                {/* <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <h4 className="font-montserrat text-base font-bold uppercase text-white ">
                      HOOVERING
                    </h4>
                    <p className="font-montserrat font-light text-base text-muted">
                      56%
                    </p>
                  </div>
                  <div>
                    <div className="w-full border outer-border rounded-md">
                      <div className="h-4 bg-gradient-to-r from-[#5E0616] to-[#DA00B7] w-[86%] rounded-sm"></div>
                    </div>
                  </div>
                </div> */}
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
                <img src={ElectroSystemImg} alt="img" />
                <h1 className="text-white text-center font-montserrat font-black text-3xl uppercase">
                  ELECTRO SYSTEM
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
                      <div className="h-4 bg-gradient-to-r from-[#5E0616] to-[#DA00B7] w-[46%] rounded-sm"></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <h4 className="font-montserrat text-base font-bold uppercase text-white ">
                      HANDLING
                    </h4>
                    <p className="font-montserrat font-light text-base text-muted">
                      56%
                    </p>
                  </div>
                  <div>
                    <div className="w-full border outer-border rounded-md">
                      <div className="h-4 bg-gradient-to-r from-[#5E0616] to-[#DA00B7] w-[86%] rounded-sm"></div>
                    </div>
                  </div>
                </div>
                <p className="font-montserrat  font-normal text-muted text-xs uppercase w-[87%] 2xl:w-[83%]">
                  Race against time, outsmart the cops, and take on weekly
                  qualifiers to reach The Grand
                </p>
                {/* <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <h4 className="font-montserrat text-base font-bold uppercase text-white ">
                      HANDLING
                    </h4>
                    <p className="font-montserrat font-light text-base text-muted">
                      56%
                    </p>
                  </div>
                  <div>
                    <div className="w-full border outer-border rounded-md">
                      <div className="h-4 bg-gradient-to-r from-[#5E0616] to-[#DA00B7] w-[36%] rounded-sm"></div>
                    </div>
                  </div>
                </div> */}
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
                <img src={TurboRunnerImg} alt="img" />
                <h1 className="text-white text-center font-montserrat font-black text-3xl uppercase">
                  TURBO RUNNER
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
                      <div className="h-4 bg-gradient-to-r from-[#5E0616] to-[#DA00B7] w-[76%] rounded-sm"></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <h4 className="font-montserrat text-base font-bold uppercase text-white ">
                      HANDLING
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
                <p className="font-montserrat  font-normal text-muted text-xs uppercase w-[87%] 2xl:w-[83%]">
                  Race against time, outsmart the cops, and take on weekly
                  qualifiers to reach The Grand
                </p>
                {/* <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <h4 className="font-montserrat text-base font-bold uppercase text-white ">
                      HANDLING
                    </h4>
                    <p className="font-montserrat font-light text-base text-muted">
                      56%
                    </p>
                  </div>
                  <div>
                    <div className="w-full border outer-border rounded-md">
                      <div className="h-4 bg-gradient-to-r from-[#5E0616] to-[#DA00B7] w-[66%] rounded-sm"></div>
                    </div>
                  </div>
                </div> */}
                <button className="py-2 px-4 text-white bg-gradient-to-r from-[#5E0616] to-[#DA00B7] self-end rounded-[8px] uppercase font-bold text-sm flex justify-center items-center gap-[10px]">
                  <img src={BnbIcon} />
                  222.3 bnb
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NftMarketplace;
