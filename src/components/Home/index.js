import React from "react";
import Navbar from "../Navbar/Navbar";
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "../../container";
import PreLoader from "../preLoader/PreLoader";

function Home() {
  return (
    <div>
      <PreLoader title1="Welcome" title2="To" title3="Foody-Moody" />
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default Home;
