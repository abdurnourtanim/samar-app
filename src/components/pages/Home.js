import React from "react";
import About from "../About";
import Banner from "../Banner";
import Counter from "../Counter";
import Fetures from "../Fetures";
import Navbar from "../Navbar";
import Services from "../Services";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <About />
      <Counter />
      <Fetures />
    </>
  );
};

export default Home;
