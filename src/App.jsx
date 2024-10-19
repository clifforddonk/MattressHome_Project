import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
import QuickLinks from "./Components/QuickLinks";
import BrandsCard from "./Components/BrandsCard";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="mt-[200px] md:m-12 sm:m-0 md:mt-[200px]">
        <Carousel />
        <div className="py-5">
          <BrandsCard />
        </div>
      </main>
      <div className="bg-[#F40000] text-white flex flex-col md:flex-row py-10 justify-evenly gap-10">
        <QuickLinks />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
