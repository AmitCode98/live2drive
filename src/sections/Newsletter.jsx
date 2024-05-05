import React from "react";
import Button from "../components/Button";
import MobileNewsletterGradientBgImg from "../assets/images/mobile-newsletter-bg-gradient-img.png";
import MobileNewLetterBgImg from "../assets/NewImages/mobile-news-letter-bg-img.png";
import NewsLetterBgImg from "../assets/NewImages/news-letter-bg-img.png";

const Newsletter = () => {
  return (
    <section className="relative  ">
      <div className="flex justify-center items-center mt-10 md:mt-0  lg:py-28 2xl:py-44 ">
        <img
          src={MobileNewLetterBgImg}
          alt="img"
          className="md:hidden absolute w-full h-full top-0"
        />
        <img
          src={NewsLetterBgImg}
          alt="img"
          className="hidden md:block absolute  w-full -z-20"
        />

        <div className="container">
          <div className="p-3 sm:p-4 md:p-0 md:py-14 bg-[#D9D9D9] rounded-md  border-[0.5px] bg-opacity-[1%] backdrop-blur-[10px]">
            <div className="flex flex-col justify-center items-center gap-3 sm:gap-9">
              <h1 className="font-montserrat font-black text-[26px] md:text-6xl  text-white text-center uppercase">
                SUBSCRIBE TO OUR NEWSLETTER
              </h1>
              <p className="text-white font-montserrat font-semibold text-[15px] text-xl text-center md:w-[60%]">
                Rev up your excitement! Join the waitlist now for exclusive
                access to our thrilling car game website.
              </p>
            </div>
            <div className="pt-4 sm:pt-9 flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-11">
              <input
                type="text"
                className="text-white p-2 md:p-4 w-full md:w-[50%] bg-transparent rounded-md border-[1px] border-muted select-none outline-none"
                style={{ backgroundColor: "rgba(217, 217, 217, 0.01)" }}
              />
              <Button buttonText={"join us"} variant={"gradient"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

// when i am see the blur value in figma then i see the bg color is #d9d9d9 opecity 1% and
