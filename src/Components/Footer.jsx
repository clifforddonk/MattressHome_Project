import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-700 text-center border-white border-2 border-x-0 font-bold py-5 text-white">
      <p className="mx-2">&copy; 2024 THE SLEEP SANTUARY POWERED By</p>
      <Link
        to="https//:linkedin.com/in/clifford-donkor-1a2b3c
        "
        className="text-blue-500"
      >
        CLIFFORD ADUAKO DONKOR
        <span>
          <FaGithub className="text-white" />
        </span>
      </Link>
    </div>
  );
};

export default Footer;
