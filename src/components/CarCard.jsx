import React from "react";
import BnbIcon from "../assets/icons/bnb-icon.svg";
import HeartIcon from "../assets/icons/heart-icon.svg";

const CarCard = ({
  imgSrc,
  title,
  speedPercentage,
  handlingPercentage,
  hooveringPercentage,
  bnbAmount,
}) => {
  return (
    <div className="p-6 border border-[#C2C2C2] rounded-[30px]">
      <div className="flex flex-col gap-4 relative">
        {/* heart icon */}
        <img
          src={HeartIcon}
          className="absolute right-3 top-3 p-3 bg-white rounded-full"
          alt="Heart Icon"
        />
        <img src={imgSrc} alt="Car Image" />
        <h1 className="text-white text-center font-montserrat font-black text-xl lg:text-3xl uppercase">
          {title}
        </h1>

        {/* Speed Section */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <h4 className="font-montserrat text-base font-bold uppercase text-white">
              speed
            </h4>
            <p className="font-montserrat font-light text-base text-muted">
              {speedPercentage}
            </p>
          </div>
          <div>
            <div className="w-full border outer-border rounded-md">
              <div className="h-4 bg-gradient-to-r from-[#5E0616] to-[#DA00B7] w-[66%] rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* Handling Section */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <h4 className="font-montserrat text-base font-bold uppercase text-white">
              handling
            </h4>
            <p className="font-montserrat font-light text-base text-muted">
              {handlingPercentage}
            </p>
          </div>
          <div>
            <div className="w-full border outer-border rounded-md">
              <div className="h-4 bg-gradient-to-r from-[#5E0616] to-[#DA00B7] w-[36%] rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* Hoovering Section */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <h4 className="font-montserrat text-base font-bold uppercase text-white">
              hoovering
            </h4>
            <p className="font-montserrat font-light text-base text-muted">
              {hooveringPercentage}
            </p>
          </div>
          <div>
            <div className="w-full border outer-border rounded-md">
              <div className="h-4 bg-gradient-to-r from-[#5E0616] to-[#DA00B7] w-[86%] rounded-sm"></div>
            </div>
          </div>
        </div>
        {/* Button Section */}
        <button className="py-2 px-4 text-white bg-gradient-to-r from-[#5E0616] to-[#DA00B7]  rounded-[8px] uppercase font-bold text-sm flex justify-center items-center gap-[10px] self-center md:self-end">
          <img src={BnbIcon} alt="Bnb Icon" />
          {bnbAmount} bnb
        </button>
      </div>
    </div>
  );
};

export default CarCard;
