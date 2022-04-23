import React from "react";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import PricingCards from "../components/Pricing";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <HeroImage  heading='Pricing' text='Choose your trip.'/>
      <PricingCards />
      <Footer />
    </>
  );
};

export default Pricing;
