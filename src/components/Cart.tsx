import { useState } from "react";
import CartDrawer from "./CartDrawer";
import { Navbar } from "./Navbar";



type Props<T = object> = {
  Component: React.ComponentType<T>;
};

export default function Cart({ Component}: Props) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      {/* Overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-30 transition-opacity duration-300"></div>
      )}

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
        />
        <Component/>
      </div>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
