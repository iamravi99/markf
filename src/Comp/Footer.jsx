// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-gray-300 py-10 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-pink-500 text-2xl font-bold mb-3">LustVerse</h2>
          <p className="text-sm">
            LustVerse is an adult blog platform sharing bold stories, advice, and fantasies for mature audiences. For entertainment and 18+ only.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-pink-400 transition">Home</a></li>
            <li><a href="/categories" className="hover:text-pink-400 transition">Categories</a></li>
            <li><a href="/contact" className="hover:text-pink-400 transition">Contact</a></li>
            <li><a href="/disclaimer" className="hover:text-pink-400 transition">Disclaimer</a></li>
            <li><a href="/privacy-policy" className="hover:text-pink-400 transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Follow Us (optional) */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-pink-400 transition">Twitter</a>
            <a href="#" className="hover:text-pink-400 transition">Instagram</a>
            <a href="#" className="hover:text-pink-400 transition">Reddit</a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-sm text-zinc-500 mt-10">
        © {new Date().getFullYear()} LustVerse. All rights reserved. | Adults 18+ Only
      </div>
    </footer>
  );
};

export default Footer;
