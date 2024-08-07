// Feature.js
import React from "react";
import Navbar from "../Navbar/Navbar";
import { Footer } from "../../container";
import "./Feature.css";
import Hero from "./Hero/Hero";
import FeatureCard from "../FeatureCard/FeatureCard";

function Feature() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeatureCard />
      <Footer />
    </div>
  );
}

export default Feature;
