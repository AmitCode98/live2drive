import React from "react";
import Button from "../components/Button";
import MobileNewsletterBgImg from '../assets/images/mobile-newsletter-bg-gradient-img.png'

const Newsletter = () => {
  return (
    <section className="py-20 relative">
      <img src={MobileNewsletterBgImg} alt="img" className="absolute left-0 -top-20 -z-20 md:hidden" />
      <div className="container">
        <div className="flex flex-col justify-center items-center gap-9">
          <h1 className="font-montserrat font-black text-[26px] md:text-6xl  text-white text-center uppercase">
            SUBSCRIBE TO OUR NEWSLETTER
          </h1>
          <p className="text-white font-montserrat font-semibold text-[15px] text-xl text-center md:w-[60%]">
            Rev up your excitement! Join the waitlist now for exclusive access
            to our thrilling car game website.
          </p>
        </div>
        <div className="pt-9 flex flex-col md:flex-row items-center justify-center  gap-6 md:gap-11 ">
          <input type="text" className="text-white p-2 md:p-4 w-full md:w-[50%] bg-transparent rounded-md border-[1px] border-muted select-none outline-non  " style={{ backgroundColor: 'rgba(217, 217, 217, 0.01)' }} />
          <Button buttonText={"join us"} variant={"gradient"} />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
