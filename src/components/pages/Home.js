import React from "react";
import About from "../About";
import Banner from "../Banner";
import Contact from "../Contact";
import Counter from "../Counter";
import Fetures from "../Fetures";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Protfolio from "../Protfolio";
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
      <Protfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
