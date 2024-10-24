import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import QuickLinks from "../Components/QuickLinks";
import ShopProducts from "../Components/Shop/ShopProducts";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
    }
  };

  return (
    <>
      <Navbar />
      <main className="mt-[170px] md:m-12 sm:m-0 md:mt-[150px]">
        <h1 className="text-center text-2xl font-bold">Choose a filter:</h1>
        <div className="flex justify-center flex-col-2 md:flex-col-4">
          <button
            onClick={() => handleCategoryClick(1)}
            className={`font-bold font-xl bg-white border-2 border-yellow-300 mx-3 mt-2 py-1 px-4 rounded-xl ${
              selectedCategory === 1 ? "bg-violet-800 text-white" : ""
            }`}
          >
            Royal Foam
          </button>
          <button
            onClick={() => handleCategoryClick(2)}
            className={`font-bold font-xl bg-white border-2 border-yellow-300 mx-3 mt-2 py-1 px-4 rounded-xl ${
              selectedCategory === 2 ? "bg-red-400 text-white" : ""
            }`}
          >
            Latex Foam
          </button>
          <button
            onClick={() => handleCategoryClick(3)}
            className={`font-bold font-xl bg-white border-2 border-yellow-300 mx-3 mt-2 py-1 px-4 rounded-xl ${
              selectedCategory === 3 ? "bg-yellow-300" : ""
            }`}
          >
            Ash Foam
          </button>
          <button
            onClick={() => handleCategoryClick(4)}
            className={`font-bold font-xl bg-white border-2 border-yellow-300 mx-3 mt-2 py-1 px-4 rounded-xl ${
              selectedCategory === 4 ? "bg-black text-white" : ""
            }`}
          >
            Foreign Brand
          </button>
        </div>

        <ShopProducts selectedCategory={selectedCategory} className="mx-2" />
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
