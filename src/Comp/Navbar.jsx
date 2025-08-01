// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "Stories", to: "/stories" },
    { name: "Desi Stories", to: "/desi" },
    { name: "About", to: "/about" },
    { name: "Disclaimer", to: "/disclaimer" }
  ];

  return (
    <nav className="bg-black text-white p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-widest text-pink-500">
          <Link to="/">LustVerse</Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm">
          {links.map((link) => (
            <li key={link.name}>
              <Link to={link.to} className="hover:text-pink-400 transition">{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden mt-4 flex flex-col gap-3 px-4">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                className="block hover:text-pink-400 transition"
                onClick={() => setOpen(false)} // close menu on link click
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

export default Navbar;
