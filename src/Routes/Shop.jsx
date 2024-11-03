import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import QuickLinks from "../Components/QuickLinks";
import axiosInstance from "../axios/axiosInstance";

const ShopProduct = ({ product }) => {
  const imageUrl = `${import.meta.env.VITE_APP_API_URL}/${
    product.pictures[0].image_path
  }`;
  return (
    <div className="w-full h-90 bg-white shadow-md h-full rounded-lg overflow-hidden ">
      <div className="h-48">
        <img src={imageUrl} className=" h-48 w-full" alt={product.name} />
      </div>
      <div className="flex flex-col justify-between py-2 ml-2 ">
        <h3 className="text-left font-bold ">{product.name}</h3>
        <h3 className="text-left font-bold mt-1">
          GH₵ {product.prices[0].price}
        </h3>
      </div>
      <div className="mb-2">
        <button className="border px-2 py-2 rounded-md bg-gray-600 text-sm text-white ml-2 ">
          View products
        </button>
      </div>
    </div>
  );
};

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const fetchShopProducts = async () => {
      const response = await axiosInstance.get("/products");
      setProducts(response.data.products);
    };
    fetchShopProducts();
  }, []);
  const fetchCategory = [
    { id: 1, name: "Royal Foam" },
    { id: 2, name: "Latex Foam" },
    { id: 3, name: "AshFoam" },
    { id: 4, name: "Foreign Brands" },
  ];
  const fetchCategoryColor = (category) => {
    switch (category) {
      case 1:
        return "bg-[#7e00a9] text-white";
      case 2:
        return "bg-red-500 text-white";
      case 3:
        return "bg-[#f6d00c] text-white";
      case 4:
        return "bg-black text-white";
    }
  };
  const handleCategoryClick = (id) => {
    const updatedFilterList = filterList.includes(id)
      ? filterList.filter((filter) => filter !== id)
      : [...filterList, id];
    setFilterList(updatedFilterList);
  };

  useEffect(() => {
    let itemstodisplay = products;

    if (filterList > 0) {
      itemstodisplay = products.filter((items) =>
        filterList.includes(items.category_id)
      );
    }
    setFilteredList(itemstodisplay);
  }, [filterList, products]);

  return (
    <>
      <Navbar />
      <main className="mt-[170px] md:m-12 sm:m-0 md:mt-[150px]">
        <h1 className="text-center text-3xl font-bold">Choose a filter:</h1>
        <div className="justify-center grid grid-cols-2 md:grid-cols-4 gap-10 mt-2">
          {fetchCategory.map((category) => (
            <button
              onClick={() => handleCategoryClick(category.id)}
              key={category.id}
              className={`font-bold font-xl border-2 border-yellow-300 mx-3 mt-2 py-1 rounded-xl ${
                filterList.includes(category.id)
                  ? fetchCategoryColor(category.id)
                  : "bg-white text-black"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10  mt-10">
          {filteredList.map((product) => (
            <ShopProduct key={product.id} product={product} />
          ))}
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
