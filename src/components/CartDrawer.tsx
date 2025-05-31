// components/CartDrawer.tsx
import React from "react";


interface CartDrawerComponentProps {
    isOpen: boolean;
    onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerComponentProps> = ({ isOpen, onClose }) => {
    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={onClose}
                />
            )}

            {/* Slide-in Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-[350px] bg-white z-50 transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } shadow-lg`}
            >
                <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Your Cart</h2>
                        <button onClick={onClose}>&times;</button>
                    </div>
                    {/* Cart Content Here */}
                    <p>Millet Milk Chocolate (200ml)</p>
                    <p>₹354</p>
                </div>
            </div>
        </>
    );
};

export default CartDrawer;
