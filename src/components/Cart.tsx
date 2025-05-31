import { useState } from "react";
import CartDrawer from "./CartDrawer";
import { Navbar } from "./Navbar";

type ProductCardProps = {
  id: number;
  imageUrl: string;
  productName: string;
  description: string;
  quantity: number;
};

type Props<T = ProductCardProps[]> = {
  Component: React.ComponentType<T>;
  componentProps?: T;
  SetCards?: React.Dispatch<React.SetStateAction<ProductCardProps[]>>;
};

export default function Cart<T extends object = object>({ Component, componentProps ,SetCards}: Props<T>) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  console.log("SetCards function is", SetCards , "from Cart component");
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
        <Component {...(componentProps as T)} SetCards={SetCards} />
      </div>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
