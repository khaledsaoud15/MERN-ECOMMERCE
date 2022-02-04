import React from "react";
import Collection from "../components/Collection";
import Discount from "../components/Discount";
import Footer from "../components/Footer";
import FromTheBlog from "../components/FromTheBlog";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Offre from "../components/Offre";
import Popular from "../components/Popular";
import Products from "../components/Products";
import SpecialOffre from "../components/SpecialOffre";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{ overflow: "hidden" }}>
        <SpecialOffre />
        <Collection />
        <Discount />
        <Popular />
        <Offre />
        <Products />
        <Newsletter />
        <FromTheBlog />
        <Cards />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
