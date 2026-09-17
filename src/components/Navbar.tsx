import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo-text.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center">
             <img src={logo} alt="Dev Stack" className="h-8" />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-slate-600 hover:text-pink-600 transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900">Sign In</a>
            <a href="#" className="brand-gradient text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-opacity">Sign Up</a>
          </div>
          <button className="md:hidden text-2xl text-slate-700" onClick={() => setIsMenuOpen((prev) => !prev)} aria-label="Toggle menu">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-slate-600 hover:text-pink-600">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4 pt-4 border-t border-slate-100 mt-3">
            <a href="#" className="text-sm font-medium text-slate-700">Sign In</a>
            <a href="#" className="brand-gradient text-white text-sm font-semibold px-5 py-2 rounded-full">Sign Up</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;