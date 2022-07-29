import React from "react";
import Footer from "../components/homepage/Footer";
import Hero from "../components/homepage/Hero";
import Skill from "../components/homepage/Skill";
import Work from "../components/homepage/Work";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Skill />
      <Work />
      <Footer />
    </div>
  );
};

export default Homepage;
