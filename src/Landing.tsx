import { useState } from "react";
import {AllCards} from "./components/Card";
import { FooterComp } from "./components/FooterComp";
import { Hero } from "./components/Hero";
import Journey from "./components/Journey";
import { Navbar } from "./components/Navbar";
import CartDrawer from "./components/CartDrawer";


export default function Landing() {
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
        <>
            <Hero isMenuOpen={isMenuOpen} />
            <AllCards></AllCards>
            <Journey></Journey>
            <FooterComp></FooterComp>
            <div className="fixed flex justify-center items-center bottom-5 right-5 ">
                <div className="mr-2 text-gray-600 bg-gray-200 font-medium font-['Chewy']">Want to chat?</div>
                <div onClick={() => {window.open('https://wa.me/9110908363')}} className=" h-14 w-14 rounded-full bg-green-500 cursor-pointer transition-transform duration-400 hover:scale-120"><div className="flex justify-center items-center pt-0.5"><i className='bx bxl-whatsapp text-white bx-lg'></i></div></div>
            </div>
        </>
      </div>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}


