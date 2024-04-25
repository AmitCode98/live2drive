import React from "react";
import Button from "../components/Button";

const Newsletter = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col justify-center items-center gap-9">
          <h1 className="text-white font-montserrat text-[60px] font-black uppercase">
            SUBSCRIBE TO OUR NEWSLETTER
          </h1>
          <p className="text-white font-montserrat font-semibold text-xl text-center w-[60%]">
            Rev up your excitement! Join the waitlist now for exclusive access
            to our thrilling car game website.
          </p>
        </div>
        <div className="pt-9 flex justify-center gap-11 ">
          <input type="text" className="text-white pl-5 w-[50%] bg-transparent rounded-md border-[0.1px] border-muted select-none outline-none " />
          <Button buttonText={"join us"} variant={"gradient"} />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
