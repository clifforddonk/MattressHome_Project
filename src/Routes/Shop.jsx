import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import QuickLinks from "../Components/QuickLinks";
const Shop = () => {
  return (
    <>
      <Navbar />
      <main className="mt-[170px] md:m-12 sm:m-0 md:mt-[150px]">
        <h1 className="text-center text-2xl font-bold">Choose a filter:</h1>
        <div className=" flex justify-center">
          <button className="font-bold font-xl bg-white border-2 border-yellow-300  mx-3 mt-2 py-1 px-4 rounded-xl">
            Royal Foam
          </button>
          <button className="font-bold font-xl bg-white border-2 border-yellow-300 mx-3 mt-2 py-1 px-4 rounded-xl">
            Latex Foam
          </button>
          <button className="font-bold font-xl bg-white border-2 border-yellow-300 mx-3 mt-2 py-1 px-4 rounded-xl">
            Ash Foam
          </button>
          <button className="font-bold font-xl bg-white border-2 border-yellow-300 mx-3 mt-2 py-1 px-4 rounded-xl">
            Foreign Brand
          </button>
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

export default Shop;
