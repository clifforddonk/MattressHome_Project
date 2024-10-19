const BrandsCard = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full overflow-hidden rounded-md bg-white flex flex-col md:flex-row">
          <img
            src="images/royalfoam.jpg"
            className="h-48 w-full md:w-1/2 object-cover"
            alt="Royal Foam Mattress"
          />
          <div className="p-4 flex flex-col justify-between">
            <h1 className="font-bold text-xl mb-1">Royal Home</h1>
            <p className="mb-10">Royal foam mattresses for luxurious sleep</p>
            <button className="border border-black font-bold px-4 py-2 rounded-md hover:bg-gray-800 hover:text-white duration-500">
              Explore Brand
            </button>
          </div>
        </div>

        <div className="w-full overflow-hidden rounded-md bg-white flex flex-col md:flex-row">
          <img
            src="images/latexfoam.jpg"
            className="h-48 w-full md:w-1/2 object-cover"
            alt="latex foam"
          />
          <div className="p-4 flex flex-col justify-between">
            <h1 className="font-bold text-xl mb-1">Latex Foam</h1>
            <p className="mb-10">Latex Foam Mattresses for your comfort</p>
            <button className="border border-black font-bold px-2 py-2 rounded-md hover:bg-gray-800 hover:text-white duration-500">
              Explore Brand
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 py-8">
        <div className="w-full overflow-hidden rounded-md bg-white flex flex-col md:flex-row">
          <img
            src="images/ashfoam.jpg"
            className="h-48 w-full md:w-1/2 object-cover"
            alt="Royal Foam Mattress"
          />
          <div className="p-4 flex flex-col justify-between">
            <h1 className="font-bold text-xl mb-1">Ash Foam</h1>
            <p className="mb-10">Royal foam mattresses for luxurious sleep</p>
            <button className="border border-black font-bold px-4 py-2 rounded-md hover:bg-gray-800 hover:text-white duration-500">
              Explore Brand
            </button>
          </div>
        </div>

        <div className="w-full overflow-hidden rounded-md bg-white flex flex-col md:flex-row">
          <img
            src="images/sleepscience.jpg"
            className="h-48 w-full md:w-1/2 object-cover"
            alt="latex foam"
          />
          <div className="p-4 flex flex-col justify-between">
            <h1 className="font-bold text-xl mb-1">Other Brand</h1>
            <p className="mb-10">Premium mattresses for better sleep quality</p>
            <button className="border border-black font-bold px-2 py-2 rounded-md hover:bg-gray-800 hover:text-white duration-500">
              Explore Brand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsCard;
