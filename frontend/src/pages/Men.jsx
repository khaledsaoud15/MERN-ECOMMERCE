import Navbar from "../components/Navbar";
import ProductsPopular from "../men/ProductsPopular";
import RecentProducts from "../men/RecentProducts";
import NewProducts from "../men/NewProducts";
import Offre from "../men/Offre";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import SpecialOffre from "../men/SpecialOffre";
import Brands from "../men/Brands";

const Men = () => {
  return (
    <div>
      <Navbar />
      <div style={{ overflow: "hidden" }}>
        <SpecialOffre />
        <ProductsPopular />
        <Offre />
        <RecentProducts />
        <Brands />
        <NewProducts />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default Men;
