import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import QuickLinks from "../Components/QuickLinks";
import { FaLayerGroup } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
const Services = () => {
  return (
    <>
      <Navbar />
      <main className="mt-[200px] md:m-12  md:mt-[200px]">
        <div className="flex md:flex-row flex-col gap-10 justify-between w-full p-6 md:p-0">
          <div className="w-full">
            <h2 className="text-xl font-bold text-yellow-400">Sleep Better</h2>
            <h1 className="text-3xl font-bold ">Our Services|Mattress Home</h1>
            <p className="text-xl py-5 text-gray-800">
              At Mattress Home, we are dedicated to providing top-notch services
              that cater to your sleep needs. Whether you need a new mattress or
              wish to restore your old one, we have the perfect solution for you
            </p>
            <div className="flex gap-3 justify-evenly mt-4">
              <FaLayerGroup className="text-yellow-300 text-4xl" />
              <h3 className="text-gray-700">
                <b>New Mattresses </b>Choose from our wide range of high-quality
                mattresses from popular brands like Royal Foam, Latex Foam,
                Ashfoam, and other foreign brands.
              </h3>
            </div>
            <div className="flex gap-3 justify-evenly  mt-4">
              <FaCloudUploadAlt className="text-yellow-300 text-3xl" />
              <h3 className="text-gray-700">
                <b>Restoration Services</b> Give your old mattress a new life
                with our professional restoration services, ensuring comfort and
                durability.
              </h3>
            </div>
            <div className="flex gap-3 justify-evenly  mt-4">
              <FaTools className="text-yellow-300 text-3xl" />
              <h3 className="text-gray-700">
                <b>Customer Support</b> We are here to solve your sleep needs.
                Give us a call or chat with us for personalized recommendations
                and assistance.
              </h3>
            </div>
          </div>
          <div className="overflow-hidden rounded-md w-full">
            <img src="images/image.avif" className="" alt="" />
          </div>
        </div>
      </main>

      <QuickLinks />

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Services;
