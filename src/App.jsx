import React from "react";
import HomePage from "../src/pages/Home";
import Header from '../src/components/Header'
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    <Header/>
      <HomePage />
      <Footer/>
    </>
  );
};

export default App;
