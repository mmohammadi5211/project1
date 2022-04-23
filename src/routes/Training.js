import React from "react";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import TrainingSection from '../components/Training';

const Training = () => {
  return (
    <>
      <Navbar />
      <HeroImage heading="Training" text="Pre-Flight & In-Flight Training." />
      <TrainingSection />
      <Footer />
    </>
  );
};

export default Training;
