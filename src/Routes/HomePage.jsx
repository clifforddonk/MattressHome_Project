import Navbar from "../Components/Navbar";
import Carousel from "../Components/Home/Carousel";
import Footer from "../Components/Footer";
import QuickLinks from "../Components/QuickLinks";
import BrandsCard from "../Components/Home/BrandsCard";
import FeaturedProducts from "../Components/Home/FeaturedProducts";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="mt-[200px] md:m-12 sm:m-0 md:mt-[200px]">
        <Carousel />
        <div className="py-5">
          <BrandsCard />
        </div>
        <div>
          <FeaturedProducts />
        </div>
      </main>
      <div>
        <QuickLinks />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
