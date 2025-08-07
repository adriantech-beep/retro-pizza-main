import { useState } from "react";
import { Link } from "react-router-dom";
import { useCurrentCustomer } from "./useCurrentCustomer";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "Cart", path: "/cart" },
];

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { customer } = useCurrentCustomer();

  return (
    <nav className="fixed w-full z-50 bg-[#1a1a2e] backdrop-blur-md border-b border-[#ff4d00]/20 text-[#fff8e7] px-4 py-4 shadow-[0_0_10px_#ff4d00]">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-[Orbitron] text-xl text-[#ff4d00] drop-shadow-[0_0_5px_#ff4d00]">
            RETRO PIZZA
          </span>
        </Link>

        <ul className="hidden md:flex space-x-6 font-[Audiowide] text-sm">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:transition-all 
    ${
      isActive
        ? "text-[#ffe600] after:w-full"
        : "hover:text-[#ffe600] after:w-0 hover:after:w-full"
    }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="w-full sm:w-38 flex flex-col items-center justify-center text-center">
          <p className="font-[Audiowide] text-[10px] sm:text-[12px] text-gray-700 dark:text-gray-300 truncate max-w-[100px] sm:max-w-none">
            <span className="text-md text-[#ff4d00] ">Welcome back</span>{" "}
            {customer?.email}
          </p>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

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

export default NavigationBar;
