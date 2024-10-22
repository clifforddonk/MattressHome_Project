import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import QuickLinks from "../Components/QuickLinks";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="mt-[200px] md:m-12 sm:m-0 md:mt-[200px]">
        <div className="flex">
          <div className="overflow-hidden rounded-xl relative">
            <img src="images/image (1).avif" className=" w-full" alt="" />
            <h1 className="left-4 top-4 absolute text-white font-bold text-3xl">
              Contact Us
            </h1>
            <div className="bg-white">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="mx-0 w-full bg-white shadow rounded-xl">
            <form action="">
              <p className="text-center text-yellow-400 text-3xl pt-4 mt-2">
                Send Us a Message
              </p>
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Name"
                  className="border-b-gray-100 mt-3 rounded mx-6 full"
                />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                  className="border-b-gray-100 mt-6 rounded mx-6 full"
                />
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="Phone"
                  className="border-b-gray-100 mt-6 rounded mx-6 full"
                />
              </div>
              <p>Preferred method of communication</p>
              div
              <input type="checkbox" name="" id="" />
              <input type="checkbox" name="" id="" />
              <textarea name="" id="" placeholder="Message..."></textarea>
              <button>Send</button>
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
