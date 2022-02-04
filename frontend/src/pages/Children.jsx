import React from "react";
import NewChildren from "../children/NewChildren";
import PopularChildren from "../children/PopularChildren";
import RecentChildren from "../children/RecentChildren";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Offre from "../children/Offre";
import ChildrenOffre from "../children/ChildrenOffre";
import SpecialOffre from "../children/SpecialOffre";

const Children = () => {
  return (
    <div>
      <Navbar />
      <Offre />
      <ChildrenOffre />
      <PopularChildren />
      <RecentChildren />
      <SpecialOffre />
      <NewChildren />
      <Footer />
    </div>
  );
};

export default Children;
