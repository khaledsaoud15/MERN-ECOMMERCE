import React from "react";
import Navbar from "../components/Navbar";
import SpecialOffre from "../women/SpecialOffre";
import ProductsPopular from "../women/ProductsPopular";
import Offre from "../women/Offre";
import RecentProducts from "../women/RecentProducts";
import NewProducts from "../women/NewProducts";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Women = () => {
  return (
    <div>
      <Navbar />
      <div style={{ overflow: "hidden" }}>
        <SpecialOffre />
        <ProductsPopular />
        <Offre />
        <RecentProducts />
        <NewProducts />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default Women;
