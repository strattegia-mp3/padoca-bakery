import { greatVibes } from "/public/styles/font.js";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-[100] w-full flex items-center justify-between py-5 px-12 bg-mescuro shadow-lg text-white">
      <Link
        to="slider"
        spy={true}
        smooth={true}
        duration={500}
        className="text-2xl cursor-pointer"
      >
        <div>
          <span className={greatVibes.className}>Padoca Bakery</span>
        </div>
      </Link>
      <ul className="flex justify-end m-0">
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="ml-6 hover:text-gray-400 cursor-pointer"
        >
          About
        </Link>
        <Link
          to="brazil"
          spy={true}
          smooth={true}
          duration={500}
          className="ml-6 hover:text-gray-400 cursor-pointer"
        >
          Why Brazil?
        </Link>
        <Link
          to="menu"
          spy={true}
          smooth={true}
          duration={500}
          className="ml-6 hover:text-gray-400 cursor-pointer"
        >
          Menu
        </Link>
        <Link
          to="reviews"
          spy={true}
          smooth={true}
          duration={500}
          className="ml-6 hover:text-gray-400 cursor-pointer"
        >
          Reviews
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="ml-6 hover:text-gray-400 cursor-pointer"
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
}
