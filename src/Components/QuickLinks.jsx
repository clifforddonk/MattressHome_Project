import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const QuickLinks = () => {
  return (
    <>
      <div className="bg-[#f40000]  text-white flex flex-col md:flex-row py-10 justify-evenly gap-10">
        <div className="w-full px-10 md:w-1/3">
          <h1 className="mb-6 font-bold text-xl">QuickLinks</h1>
          <hr className="mb-2" />
          <ul className="ml-4 list-[square]">
            <li className="mt-3">
              <a href="/shop">View Products</a>
            </li>
            <li className="mt-3">
              <a href="/about">About Us</a>
            </li>
            <li className="mt-3">
              <a href="/services">Services</a>
            </li>
            <li className="mt-3">
              <a href="/contacts">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="px-10 w-full md:w-1/3">
          <h1 className="text-xl font-bold mb-6">Follow The Sleep Santuary</h1>
          <hr className="mb-2" />
          <div
            className="flex justify-evenly mt-3 lg:pl-4  lg:pr-20 px-2
        "
          >
            <BsFacebook className="text-4xl cursor-pointer" />
            <FaTwitter className="text-4xl cursor-pointer" />
            <FaInstagram className="text-4xl cursor-pointer" />
            <FaLinkedin className="text-4xl cursor-pointer" />
          </div>
        </div>
        <div className="px-10 md:w-1/3 w-full">
          <h1 className="mb-6 text-xl font-bold ">About Us </h1>
          <hr className="mb-2" />
          <p>
            The Sleep Santuary is dedicated to providing quality and affordable
            mattresses for your best rest. Our mission is to ensure that
            everyone can enjoy a good night&apos;s sleep with our wide range of
            products
          </p>
        </div>
      </div>
    </>
  );
};

export default QuickLinks;
