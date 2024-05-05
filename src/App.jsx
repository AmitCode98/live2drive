import React from "react";
import HomePage from "../src/pages/Home";
import Header from "../src/components/Header";
import Footer from "./components/Footer";
import ArrowAnimation from "./components/ArrowAnimation";

const App = () => {
  return (
    <>
      <Header />
      <HomePage />
      <Footer/>
      {/* <ArrowAnimation /> */}
    </>
  );
};

export default App;
