import { useNavigate } from "react-router-dom";
import React, { useRef } from "react";

export interface NavbarProps {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Navbar({ setIsMenuOpen, isMenuOpen, setIsCartOpen }: NavbarProps) {
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen, setIsMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-2 h-20">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 cursor-pointer" onClick={() => navigate("/")}> 
          <img src="/logo.jpeg" alt="Logo" className="h-14 w-auto" />
        </div>
        {/* Center nav links (desktop) */}
        <ul className="hidden lg:flex items-center gap-4 font-semibold text-gray-600">
          {/* Home button removed */}
          <li onClick={() => navigate('/about')} className="p-3 hover:bg-gray-100 hover:text-gray-400 rounded-md transition-all cursor-pointer">About</li>
          <li onClick={() => navigate('/contact')} className="p-3 hover:bg-gray-100 hover:text-gray-400 rounded-md transition-all cursor-pointer">Contact</li>
          <li onClick={() => setIsCartOpen(true)} className="p-3 hover:bg-gray-100 hover:text-gray-400 rounded-md transition-all cursor-pointer">Cart</li>
        </ul>
        {/* Cart and Hamburger (right) */}
        <div className="flex items-center gap-2">
          <button onClick={() => setIsCartOpen(true)} className="relative p-2 rounded-full hover:bg-green-100 transition">
            <i className="bx bx-cart text-2xl text-green-700"></i>
          </button>
          {/* Hamburger for mobile */}
          <button className="md:hidden p-2 rounded-full hover:bg-green-100 transition" onClick={() => setIsMenuOpen(true)}>
            <i className="bx bx-menu text-3xl text-green-700"></i>
          </button>
        </div>
      </div>
      {/* Mobile Drawer */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setIsMenuOpen(false)}></div>
          {/* Drawer */}
          <div
            ref={menuRef}
            className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 flex flex-col pt-8"
            style={{ maxWidth: "80vw" }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 mb-4">
              <img src="/logo.jpeg" alt="Logo" className="h-12 w-auto" onClick={() => {navigate('/'); setIsMenuOpen(false);}} />
              <button onClick={() => setIsMenuOpen(false)} className="p-2 rounded-full hover:bg-green-100 transition">
                <i className="bx bx-x text-2xl text-green-700"></i>
              </button>
            </div>
            <ul className="flex flex-col gap-2 font-semibold text-lg px-4">
              {/* Removed Home button */}
              <li onClick={() => { navigate('/about'); setIsMenuOpen(false); }} className="p-3 hover:text-green-600 transition cursor-pointer">About</li>
              <li onClick={() => { navigate('/contact'); setIsMenuOpen(false); }} className="p-3 hover:text-green-600 transition cursor-pointer">Contact</li>
              <li onClick={() => { navigate('/allproducts'); setIsMenuOpen(false); }} className="p-3 hover:text-green-600 transition cursor-pointer">Our Products</li>
              <li onClick={() => { setIsCartOpen(true); setIsMenuOpen(false); }} className="p-3 hover:text-green-600 transition cursor-pointer flex items-center gap-2">
                <i className="bx bx-cart text-xl"></i> Cart
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}