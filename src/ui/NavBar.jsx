import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  // { name: "Order", path: "/order" },
  { name: "Cart", path: "/cart" },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#1a1a2e] backdrop-blur-md border-b border-[#ff4d00]/20 text-[#fff8e7] px-4 py-4 shadow-[0_0_10px_#ff4d00]">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          {/* <img src={Logo} alt="Retro Pizza" className="w-10 h-10" /> */}
          <span className="font-[Orbitron] text-xl text-[#ff4d00] drop-shadow-[0_0_5px_#ff4d00]">
            RETRO PIZZA
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 font-[Audiowide] text-sm">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="hover:text-[#ffe600] transition relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#ff4d00] after:transition-all"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-4 space-y-3 text-center font-[Audiowide] text-lg">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="block text-[#ffe600] hover:text-[#ff4d00] transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
