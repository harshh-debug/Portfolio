import "boxicons/css/boxicons.min.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-black/30" : "bg-transparent"
      } flex justify-between items-center py-4 px-4 lg:px-20`}
    >
      {/* Logo */}
      <NavLink
        to="/"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#b85c1e] via-[#e99b63] to-[#a8551a] bg-clip-text text-transparent"
      >
        Harsh
      </NavLink>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-12">
        {navLinks.map(({ name, path }, index) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `relative text-base tracking-wider transition-all duration-300 z-50
              after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px]
              after:w-0 after:bg-gradient-to-r from-[#b85c1e] via-[#e99b63] to-[#a8551a]
              after:transition-all after:duration-300 hover:after:w-full 
              hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#b85c1e] via-[#e99b63] to-[#a8551a]
              ${
                isActive
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#b85c1e] via-[#e99b63] to-[#a8551a] after:w-full"
                  : "text-white"
              }`
            }
          >
            {name}
          </NavLink>
        ))}
      </nav>

      {/* Contact Me Button (Desktop) */}
      <NavLink
        to="/contact"
        className="hidden md:block relative font-medium rounded-full transition-all duration-500 z-50 border-2 border-white group"
      >
        <span className="block px-6 py-2 rounded-full bg-white text-black group-hover:bg-transparent group-hover:text-white transition-all duration-500">
          Contact Me
        </span>
      </NavLink>

      {/* Mobile menu toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-3xl p-2 z-50"
      >
        <i className={`bx ${menuOpen ? "bx-x" : "bx-menu"}`}></i>
      </button>

      {/* Mobile menu */}
      <div
        className={`fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col items-center gap-6">
          {navLinks.map(({ name, path }, index) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `relative text-lg tracking-wider transition-all duration-300 z-50
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px]
                after:w-0 after:bg-gradient-to-r from-[#b85c1e] via-[#e99b63] to-[#a8551a]
                after:transition-all after:duration-300 hover:after:w-full 
                hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#b85c1e] via-[#e99b63] to-[#a8551a]
                ${
                  isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#b85c1e] via-[#e99b63] to-[#a8551a] after:w-full"
                    : "text-white"
                }`
              }
              onClick={() => setMenuOpen(false)} // close menu on link click
            >
              {name}
            </NavLink>
          ))}

          {/* Contact button inside mobile menu */}
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="relative font-medium rounded-full transition-all duration-500 z-50 border-2 border-white group"
          >
            <span className="block px-6 py-2 rounded-full bg-white text-black group-hover:bg-transparent group-hover:text-white transition-all duration-500">
              Contact Me
            </span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;

