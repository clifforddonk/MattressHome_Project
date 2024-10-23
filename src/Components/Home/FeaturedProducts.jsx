import Products from "./Products";

const FeaturedProducts = () => {
  return (
    <div className="bg-white py-6 px-6 ">
      <div className="text-center py-4">
        <h1 className="text-3xl font-semibold">Our featured products</h1>
        <p className="mt-4">
          Take a look at our trending products. Browse through and <br />
          see what other people are buying
        </p>
      </div>
      <div>
        <Products />
      </div>
    </div>
  );
};

export default FeaturedProducts;
