import { useEffect, useState } from "react";
import axiosInstance from "../../axios/axiosInstance";

const Product = ({ product }) => {
  const imageUrl = `${import.meta.env.VITE_APP_API_URL}/${
    product.pictures[0].image_path
  }`;

  return (
    <div className="w-full h-85">
      <div className="h-[83%]">
        <img src={imageUrl} className="h-full w-full" alt={product.name} />
      </div>
      <div className="flex justify-between py-2">
        <h3 className="text-left font-bold">{product.name}</h3>
        <h3 className="text-right font-bold">GH₵ {product.prices[0].price}</h3>
      </div>
    </div>
  );
};

const Products = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/products/limit/8");
        setData(response.data.products);
      } catch (error) {
        setError(error);
      }
    };
    fetchProducts();
  }, []);
  if (!data) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full py-2">
      {data.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
