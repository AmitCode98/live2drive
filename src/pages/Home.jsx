import React from "react";
import HeroSection from "../sections/HeroSection";
import AboutUsSection from "../sections/AboutUsSection";
import KeyFeatures from "../sections/KeyFeatures";
import NftMarketplace from "../sections/NftMarketplace";
import Newsletter from "../sections/Newsletter";


const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <KeyFeatures/>
      <NftMarketplace/>
      <Newsletter/>
     
    </>
  );
};

export default Home;
