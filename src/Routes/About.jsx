import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import QuickLinks from "../Components/QuickLinks";
const About = () => {
  return (
    <>
      <Navbar />
      <main className="mt-[200px] md:m-12 sm:m-0 md:mt-[200px] ">
        <div className="flex flex-col md:flex-row gap-10 p-6">
          <div>
            <img
              src="images/image (1).avif"
              alt=""
              className="w-full rounded-md"
            />
          </div>
          <div className="w-full">
            <h1 className="text-4xl font-bold text-center">About Us</h1>
            <p className="mt-4 text-xl font-gray-800">
              Welcome to Mattress Home, your ultimate sleep partner and
              solution. We specialize in providing high-quality new mattresses
              and offer expert restoration services for your old ones. Our
              mission is to ensure you get the best sleep possible, tailored to
              your unique needs
            </p>
            <p className="mt-3 text-xl font-gray-800">
              At Mattress Home, we understand that a good night's sleep is
              essential for a healthy and productive life. That’s why we offer a
              diverse range of mattresses from top brands such as Royal Foam,
              Latex Foam, Ashfoam, and various foreign brands. Whether you're
              looking for a new mattress or need to rejuvenate your existing
              one, we've got you covered.
            </p>
            <p className="mt-3 text-xl font-gray-800">
              We are here to solve your sleep needs. Give us a call or chat with
              us today to find the perfect mattress that suits you. Experience
              the difference with Mattress Home, where your comfort and
              satisfaction are our top priorities.
            </p>
          </div>
        </div>
      </main>
      <QuickLinks />
      <footer className="">
        <Footer />
      </footer>
    </>
  );
};

export default About;
