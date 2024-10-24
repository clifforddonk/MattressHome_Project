import { useEffect, useState } from "react";
import axiosInstance from "../../axios/axiosInstance";

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

const ShopProducts = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchShopProducts = async () => {
      const response = await axiosInstance.get("/products");
      setProducts(response.data.products);
    };
    fetchShopProducts();
  }, []);

  // Filter products based on selectedCategory
  useEffect(() => {
    if (selectedCategory) {
      const filtered = products.filter(
        (product) => product.category_id === selectedCategory
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // Show all products if no category is selected
    }
  }, [selectedCategory, products]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10  mt-10">
      {filteredProducts.map((product) => (
        <ShopProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ShopProducts;
