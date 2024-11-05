import { useState, useEffect } from "react";
import axiosInstance from "../axios/axiosInstance";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import QuickLinks from "../Components/QuickLinks";
import Footer from "../Components/Footer";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Details = ({ product }) => {
  const imageUrl = `${import.meta.env.VITE_APP_API_URL}/${
    product.pictures[0].image_path
  }`;
  const fetchBrand = (category) => {
    switch (category) {
      case 1:
        return "Royal Foam";
      case 2:
        return "Latex Foam";
      case 3:
        return "AshFoam";
      case 4:
        return "Foreign Brands";
    }
  };
  const fetchBrandColor = (category) => {
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

  const fetchStars = (star) => {
    switch (star) {
      case 1:
        return (
          <div className="flex text-blue-700 text-xl">
            <FaStar />
          </div>
        );
      case 2:
        return (
          <div className="flex text-blue-700 text-xl">
            <FaStar />
            <FaStar />
          </div>
        );

      case 3:
        return (
          <div className="flex text-blue-700 text-xl">
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        );
      case 4:
        return (
          <div className="flex text-blue-700 text-xl ">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        );
      case 5:
        return (
          <div className="flex ">
            <FaStar className="text-blue-700 text-xl" />
            <FaStar className="text-blue-700 text-xl" />
            <FaStar className="text-blue-700 text-xl" />
            <FaStar className="text-blue-700 text-xl" />
            <FaStar className="text-blue-700 text-xl" />
          </div>
        );
    }
  };
  return (
    <div className="bg-blue-200  p-8 md:p-14 rounded-xl pt-22 ">
      <div className=" gap-5 w-400 h-300 bg-white grid grid-cols-1 md:grid-cols-2 shadow-xl shadow-gray-400 rounded-xl">
        <div className="full h-200 overflow-hidden  p-4">
          <img src={imageUrl} alt={product.name} className="p-6" />
          <div className="mt-4 flex justify-center overflow-hidden">
            <img
              className="h-20 w-20 mb-2 shadow-xl p-2 shadow-gray-100 rounded-lg"
              src={imageUrl}
              alt={product.name}
            />
          </div>
        </div>

        <div className="w-full h-200 p-4 md:p-10 ">
          <h1 className="font-bold text-3xl">{product.name}</h1>
          <div className=" flex justify-between">
            <h2 className="font-bold text-2xl mt-4">
              GH₵ {product.prices[0].price}{" "}
            </h2>
            <div className="mt-6">{fetchStars(product.stars)}</div>
          </div>

          <h3 className="font-bold text-xl mt-10">Select Size:</h3>
          <div className="flex mt-2 gap-5 ">
            <button className="sizebutton">K/S</button>
            <button className="sizebutton">Q/S</button>
            <button className="sizebutton">L/S</button>
            <button className="sizebutton">M/S</button>
            <button className="sizebutton">S/S</button>
          </div>
          <div className="mt-8">
            <button className="w-full bg-yellow-400 p-1 rounded-full text-white font-bold">
              Buy Now
            </button>
          </div>
          <div className="mt-14">
            <h1 className="font-bold text-xl">About this Product:</h1>
            <h2 className=" text-gray-600">{product.description}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductDetails = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/products");
        setData(response.data.products);
        console.log(response.data.products);
      } catch (error) {
        setError(error);
      }
    };
    fetchProducts();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const product = data.find((prod) => prod.id === parseInt(id));

  return (
    <>
      <Navbar />
      <main className="mt-[140px] md:m-12 sm:m-0 md:mt-[140px]">
        <Link to="/shop">
          <button className="flex px-2 py-1 rounded-lg bg-white shadow-lg ml-4 md:ml-0">
            <div>
              <TiArrowBack className="text-blue-500 text-3xl " />
            </div>
            <div>
              <h1 className="font-bold text-xl py-1">Back</h1>
            </div>
          </button>
        </Link>
        <div className="gap-10 mt-2 mb-5">
          <Details product={product} />
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

export default ProductDetails;
