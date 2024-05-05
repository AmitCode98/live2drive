// In your React component
import React from "react";
import ArrowImage1 from "../assets/images/arrow-1.png";
import ArrowImage2 from "../assets/images/arrow-2.png";
import ArrowImage3 from "../assets/images/arrow-3.png";
import ArrowImage4 from "../assets/images/arrow-4.png";
import ArrowImage5 from "../assets/images/arrow-5.png";
// import "./ArrowAnimation.css"; // Import your custom CSS file

const ArrowAnimation = () => {
  return (
    <div className="pt-20">
      <div className="border flex justify-center items-center gap- arrow">
        <img src={ArrowImage1} alt="img" className="" />
        <img src={ArrowImage2} alt="img" className="" />
        <img src={ArrowImage3} alt="img" className="" />
        <img src={ArrowImage4} alt="img" className="" />
        <img src={ArrowImage5} alt="img" className="" />
      </div>
    </div>
  );
};

export default ArrowAnimation;
