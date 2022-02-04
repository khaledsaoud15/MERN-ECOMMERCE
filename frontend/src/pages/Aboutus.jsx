import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHeader from "../spare/AboutHeader";
import AboutSection from "../spare/AboutSection";
import AboutTeam from "../spare/AboutTeam";

const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
        <AboutHeader />
        <AboutSection />
        <AboutTeam />
      </div>
      <Footer />
    </div>
  );
};

export default Aboutus;
