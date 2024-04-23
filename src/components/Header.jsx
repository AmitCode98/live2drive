import React from "react";
import Logo from "../assets/icons/logo.svg";
import Button from "./Button";

const Header = () => {
  return (
    <header className="w-full position: fixed bg-red-40 z-50">
      <nav className="container flex justify-between items-center">
        <div className="relative flex items-center justify-center">
          <div className="h-[200px] w-[200px] absolute rounded-full bg-[#0D0A1A] blur-[50px]"></div>
          <img src={Logo} alt="company logo" className="relative z-20" />
        </div>
        <Button buttonText="Join Us" variant={"gradient"} />
      </nav>
    </header>
  );
};

export default Header;
