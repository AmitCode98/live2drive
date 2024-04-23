import React from "react";

const Button = ({ buttonText, variant }) => {
  let buttonClasses =
    "text-base md:text-lg font-montserrat font-bold uppercase rounded-lg text-white  px-7 md:px-9 xl:px-11 py-4 ";

  if (variant === "gradient") {
    buttonClasses += "bg-gradient-to-r from-[#5E0616] to-[#DA00B7]";
  } else if (variant === "transparent") {
    buttonClasses += "bg-transparent border border-[1.5px]";
  }

  return <button className={buttonClasses}>{buttonText}</button>;
};

export default Button;