import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import QuickLinks from "../Components/QuickLinks";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="mt-[200px] md:m-12 sm:m-0 md:mt-[200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl relative h-full mx-4 md:mx-0">
            <img
              src="brand images/image (1).avif"
              className="w-full h-[full]"
              alt=""
            />
            <h1 className="left-4 top-4 absolute text-white font-bold text-3xl">
              Contact Us
            </h1>
            <div className="absolute bottom-4 border rounded-xl h-40 w-80 left-4 bg-white text-xl p-4">
              <div className="flex items-center justify-center gap-2">
                <Phone
                  size={20}
                  className="text-blue-950 hover:scale-125 transition"
                />
                <p className="p-2"></p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail
                  size={20}
                  className="text-blue-950 hover:scale-125 transition"
                />
                <p className="p-2">clifforddonk@gmail.com</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin
                  size={20}
                  className="text-blue-950 hover:scale-125 transition"
                />
                <p className="p-2">Accra,Ghana</p>
              </div>
            </div>
          </div>
          <div className="mx-0 w-full shadow rounded-xl bg-white">
            <form action="">
              <p className="text-center text-yellow-300 text-4xl font-bold pt-4 mt-2">
                Send Us a Message
              </p>
              <div className="flex flex-col mx-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="border-gray-300 mt-6 mx-6"
                  style={{ borderRadius: "50px" }}
                />
                <input
                  style={{ borderRadius: "50px" }}
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                  className="border-b-gray-100 mt-8 rounded mx-6"
                />
                <input
                  style={{ borderRadius: "50px" }}
                  type="number"
                  name=""
                  id=""
                  placeholder="Phone"
                  className="border-b-gray-100 mt-8 mx-6"
                />
              </div>
              <p className="px-10 text-gray-600 text-lg mt-4">
                Preferred method of communication
              </p>
              <div className="flex gap-5 px-10">
                <div className="">
                  <input type="radio" name="phone" id="" className="" />
                  <label
                    className="px-1 text-gray-600 font-semibold"
                    htmlFor=""
                  >
                    Email
                  </label>
                </div>
                <div>
                  <input type="radio" name="phone" id="" />
                  <label
                    className="px-1 text-gray-600 font-semibold"
                    htmlFor=""
                  >
                    Phone
                  </label>
                </div>
              </div>
              <div className="mx-6">
                <textarea
                  style={{ borderRadius: "12px" }}
                  className="px-2 w-full mt-3 min-h-32"
                  name=""
                  id=""
                  placeholder="Message..."
                ></textarea>
                <button className="w-full mb-2 bg-yellow-300 text-white p-2 font-semibold text-xl mt-3 rounded-full hover:bg-yellow-400 duration-500">
                  Send
                </button>
              </div>
            </form>
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

export default Contact;
