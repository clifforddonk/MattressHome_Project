import { useState, useEffect } from "react";
import axios from "axios";

const Card = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://ecommerce-api.event-pulse.com/products"
        );
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error Fetching Products");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-wrap gap-10">
      {products.map((product) => (
        <div key={product.id} className="p-4 border rounded-md shadow-md">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover mb-2"
          />
          <h1 className="text-lg font-bold">{product.title}</h1>
          <p className="text-gray-600">GH&#8373;{product.price}</p>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">
            View Product
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
