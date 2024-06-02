import React from "react";
import Hero from "./home/Hero";
import About from "./home/About";
import Event from "./home/Event";
import Wayang from "./home/Wayang";
import Footer from "../components/Footer";
import Museum from "./home/Museum";
import Article from "./home/Article";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Event />
      <Wayang />
      <Museum />
      <Article />
      <Footer />
    </>
  );
};

export default Home;
