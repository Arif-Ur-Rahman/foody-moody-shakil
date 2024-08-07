import React from "react";
import { Navbar } from "../components";
import { Footer } from "../container";
import AboutUs from "../components/About_Us/About_Us";

const About = () => {
  return (
    <>
      <Navbar />

      <AboutUs />
      <Footer />
    </>
  );
};

export default About;
