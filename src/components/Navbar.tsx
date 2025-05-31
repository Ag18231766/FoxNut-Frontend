import { useNavigate } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";

export interface NavbarProps {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Navbar({ setIsMenuOpen, isMenuOpen, setIsCartOpen }: NavbarProps) {
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // --- Search Bar State ---
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<typeof searchProducts>([]);
  const [searchProducts] = useState([
    // Example product data (should match your product structure)
    {
      id: 1,
      name: "Millet mlk original- 200ml",
      price: 354,
      description: "The most delicious vegan mlk to exist",
      image: "/fig1.jpeg",
      badge: "Bestseller",
      sold: 1200,
    },
    {
      id: 2,
      name: "Vegan curd - 450g",
      price: 99,
      description: "You know it's good when 'curd' and 'vegan' are seen together",
      image: "/fig2.jpeg",
      badge: "Popular",
      sold: 900,
    },
    {
      id: 3,
      name: "Millet mlk chocolate flavour - 200 ml",
      price: 354,
      description: "The healthiest chocolatey treat out there",
      image: "/fig3.jpeg",
      badge: "New",
      sold: 700,
    },
    // ...add all products here...
  ]);

  // Debounce search
  useEffect(() => {
    if (!search) {
      setResults([]);
      return;
    }
    const handler = setTimeout(() => {
      setResults(
        searchProducts.filter((p) =>
          p.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }, 250); // 250ms debounce
    return () => clearTimeout(handler);
  }, [search, searchProducts]);

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

  // Hide search results on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    }
    if (searchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-2 h-20 relative">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 cursor-pointer mr-8" onClick={() => navigate("/")}> 
          <img src="/logo.jpeg" alt="Logo" className="h-14 w-auto" />
        </div>
        {/* Nav Links (left of search bar, but more right) */}
        <ul className="hidden lg:flex items-center gap-4 font-semibold text-gray-600 ml-20">
          <li onClick={() => navigate('/about')} className="p-3 hover:bg-gray-100 hover:text-gray-400 rounded-md transition-all cursor-pointer">About</li>
          <li onClick={() => navigate('/contact')} className="p-3 hover:bg-gray-100 hover:text-gray-400 rounded-md transition-all cursor-pointer">Contact</li>
          <li onClick={() => navigate('/allproducts')} className="p-3 hover:bg-gray-100 hover:text-gray-600 rounded-md transition-all cursor-pointer">Our Products</li>
        </ul>
        {/* Search Bar (center) */}
        <div className="flex-1 flex justify-center relative" ref={searchRef}>
          <div className="w-full max-w-md">
            <input
              type="text"
              className="w-full border border-gray-200 rounded-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-green-300 transition-all bg-gray-50"
              placeholder="Search for products..."
              value={search}
              onFocus={() => setSearchOpen(true)}
              onChange={e => setSearch(e.target.value)}
            />
            {/* Dropdown */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 mt-2 bg-white rounded-xl shadow-lg transition-all duration-200 ${searchOpen && results.length > 0 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} z-50`}
              style={{ width: 320, minWidth: 220 }}
              onMouseDown={e => e.preventDefault()}
            >
              {results.map(product => (
                <div
                  key={product.id}
                  className="flex items-center gap-3 px-3 py-2 hover:bg-green-50 cursor-pointer border-b last:border-b-0"
                  onClick={() => { navigate(`/productpage?id=${product.id}`); setSearchOpen(false); setSearch(""); }}
                  style={{ minWidth: 220, maxWidth: 320 }}
                >
                  <img src={product.image} alt={product.name} className="w-10 h-10 object-cover rounded-lg bg-gray-100" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800 text-sm">{product.name}</div>
                    <div className="text-xs text-gray-500">₹{product.price}</div>
                  </div>
                </div>
              ))}
              {search && results.length === 0 && (
                <div className="px-3 py-2 text-gray-400 text-center text-sm">No products found</div>
              )}
            </div>
          </div>
        </div>
        {/* Cart and Hamburger (rightmost) */}
        <div className="flex items-center gap-2 ml-4">
          <button onClick={() => setIsCartOpen(true)} className="relative p-2 rounded-full hover:bg-gray-100 transition">
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
              <li onClick={() => { setIsCartOpen(true); setIsMenuOpen(false); }} className="p-3 hover:text-gray-600 transition cursor-pointer flex items-center gap-2">
                <i className="bx bx-cart text-xl"></i> Cart
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}