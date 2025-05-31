import React, { useState, useRef } from "react";

interface CartDrawerComponentProps {
    isOpen: boolean;
    onClose: () => void;
}

type CartItem = {
    id: number;
    name: string;
    subtitle: string;
    price: number;
    quantity: number;
};

const initialCartItems: CartItem[] = [
    {
        id: 1,
        name: "Organic Almonds",
        subtitle: "250g pack",
        price: 299,
        quantity: 2,
    },
    {
        id: 2,
        name: "Chia Seeds",
        subtitle: "100g pack",
        price: 199,
        quantity: 1,
    },
];

const initialSuggestedItems: CartItem[] = [
  {
    id: 101,
    name: "White Quinoa, Superfood 500g",
    subtitle: "5 options",
    price: Math.floor(Math.random() * 200) + 100,
    quantity: 1,
  },
  {
    id: 102,
    name: "Millet milk original- 1 litre - d...",
    subtitle: "5 options",
    price: Math.floor(Math.random() * 200) + 100,
    quantity: 1,
  },
  {
    id: 103,
    name: "Goji Berries, 200g",
    subtitle: "3 options",
    price: Math.floor(Math.random() * 200) + 100,
    quantity: 1,
  },
  {
    id: 104,
    name: "Pumpkin Seeds, 150g",
    subtitle: "2 options",
    price: Math.floor(Math.random() * 200) + 100,
    quantity: 1,
  },
  {
    id: 105,
    name: "Dried Figs, 250g",
    subtitle: "4 options",
    price: Math.floor(Math.random() * 200) + 100,
    quantity: 1,
  },
  {
    id: 106,
    name: "Sunflower Seeds, 100g",
    subtitle: "2 options",
    price: Math.floor(Math.random() * 200) + 100,
    quantity: 1,
  },
];

const CartDrawer: React.FC<CartDrawerComponentProps> = ({ isOpen, onClose }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
    const [addPaperBag, setAddPaperBag] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    const paperBagPrice = 20;
    const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalWithBag = cartTotal + (addPaperBag ? paperBagPrice : 0);

    const updateQuantity = (id: number, delta: number) => {
        setCartItems((prev) =>
            prev.flatMap((item) => {
                if (item.id === id) {
                    if (item.quantity === 1 && delta === -1) {
                        // Remove item if quantity is 1 and minus is clicked
                        return [];
                    }
                    return { ...item, quantity: item.quantity + delta };
                }
                return item;
            })
        );
    };

    // Add to cart from suggestions
    const addSuggestedToCart = (item: CartItem) => {
      setCartItems((prev) => {
        const exists = prev.find((ci) => ci.id === item.id);
        if (exists) {
          return prev.map((ci) => ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci);
        }
        return [...prev, { ...item }];
      });
    };

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={onClose}
                >
                    {/* Slide-in Drawer */}
                    <div
                        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
                            isOpen ? "translate-x-0" : "translate-x-full"
                        } flex flex-col`}
                        style={{ maxWidth: "100vw" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b ">
                            <div className="flex items-center space-x-2">
                                <span className="font-bold text-lg">Cart</span>
                                <span className="bg-green-300 text-white rounded-full px-2 py-0.5 text-xs">
                                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                                </span>
                            </div>
                            <button onClick={onClose} className="text-gray-500 hover:bg-gray-600 p-1 rounded flex items-center justify-center">
                                <i className='bx bx-x text-2xl'></i>
                            </button>
                        </div>

                        {/* Progress Bar and Labels */}
                        <div className="px-4 my-4">
                          <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
                            {/* This fill bar grows with totalWithBag (max cap at 3000) */}
                            <div
                              className="absolute top-0 left-0 h-4 bg-green-300 rounded-full transition-all duration-500"
                              style={{ width: `${Math.min((totalWithBag / 3000) * 100, 100)}%` }}
                            ></div>
                            {/* Threshold Markers */}
                            {/* Free Shipping at 1000 */}
                            <div className="absolute -top-2 left-0">
                              <div
                                className={`w-4 h-4 mt-2 rounded-full border-2 border-white transition-all duration-500 ${
                                  cartTotal >= 1000 ? "bg-green-300" : "bg-gray-300"
                                }`}
                              ></div>
                            </div>
                            {/* 10% OFF at 2000 */}
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                              <div
                                className={`w-4 h-4 mt-2 rounded-full border-2 border-white transition-all duration-500 ${
                                  cartTotal >= 2000 ? "bg-green-300" : "bg-gray-300"
                                }`}
                              ></div>
                            </div>
                            {/* 20% OFF at 3000 */}
                            {/* Progress Info Badges */}
                            <div className="absolute left-1/2 -translate-x-1/2 top-6 text-xs text-gray-700">
                              {cartTotal < 2000 && (
                                <span>
                                  ₹{2000 - cartTotal} more for <span className="font-semibold text-green-600">10% OFF</span>
                                </span>
                              )}
                              {cartTotal >= 2000 && cartTotal < 3000 && (
                                <span>
                                  ₹{3000 - cartTotal} more for <span className="font-semibold text-green-300">20% OFF</span>
                                </span>
                              )}
                            </div>
                            <div className="absolute -top-2 right-0">
                              <div
                                className={`w-4 h-4 mt-2 rounded-full border-2 border-white transition-all duration-500 ${
                                  cartTotal >= 3000 ? "bg-green-300" : "bg-gray-300"
                                }`}
                              ></div>
                            </div>
                          </div>
                          {/* Labels */}
                          <div className="flex justify-between text-xs text-gray-600 mt-2">
                            <span>Free Shipping</span>
                            <span>10% OFF</span>
                            <span>20% OFF</span>
                          </div>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-4">
                            {/* Divider before cart items if there are any */}
                            {cartItems.length > 0 && (
                              <>
                                <hr className="border-t border-black mb-4" />
                                {cartItems.map((item, idx) => (
                                  <React.Fragment key={item.id}>
                                    <div className="flex items-start space-x-3 py-4">
                                        <img
                                            src={`fig${item.id > 100 ? item.id - 100 : item.id}.jpeg`}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded-lg bg-gray-100"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-medium text-sm text-gray-800 mb-1">{item.name}</h3>
                                            <p className="text-xs text-gray-500 mb-3">{item.subtitle}</p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-0 border border-gray-400 rounded-md overflow-hidden bg-white">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="w-8 h-8 bg-green-300 text-gray-600 flex items-center justify-center hover:bg-green-300"
                                                    >
                                                        <i className='bx bx-minus'></i>
                                                    </button>
                                                    <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="w-8 h-8 bg-green-300 text-gray-600 flex items-center justify-center hover:bg-green-300"
                                                    >
                                                        <i className='bx bx-plus'></i>
                                                    </button>
                                                </div>
                                                <span className="font-semibold text-lg">₹{item.price * item.quantity}</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Divider between products, except after last */}
                                    {idx < cartItems.length - 1 && (
                                      <hr className="border-t border-gray-300 my-2" />
                                    )}
                                  </React.Fragment>
                                ))}
                              </>
                            )}

                            {/* Coupon Section */}
                            <div className="py-4 border-t">
                                <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg">
                                    <i className='bx bx-tag text-gray-400'></i>
                                    {/* Replace Input with your own input component */}
                                    <input
                                        placeholder="Enter coupon code"
                                        className="border-0 p-0 text-sm focus-visible:ring-0 placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            {/* You might also like */}
                            <div className="py-4 relative">
                              <h3 className="font-medium mb-3 text-gray-600 text-center">You might also like</h3>
                              <button
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-1 items-center justify-center text-lg hidden md:flex w-8 h-8"
                                style={{marginLeft: '-12px'}}
                                onClick={() => {
                                  if (scrollRef && scrollRef.current) scrollRef.current.scrollBy({ left: -180, behavior: 'smooth' });
                                }}
                                aria-label="Scroll left"
                              >
                                <i className='bx bx-chevron-left text-2xl flex items-center justify-center'></i>
                              </button>
                              <div
                                className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar scroll-smooth"
                                ref={scrollRef}
                                style={{scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none'}}
                              >
                                {initialSuggestedItems.map((item) => (
                                  <div key={item.id} className="min-w-[140px] border rounded-lg p-3 bg-white flex-shrink-0 flex flex-col items-center">
                                    <div className="relative mb-2">
                                      <img
                                        src={`fig${(item.id-100) || 1}.jpeg`}
                                        alt={item.name}
                                        className="w-full h-16 object-cover rounded bg-green-50"
                                      />
                                    </div>
                                    <h4 className="text-xs font-medium text-gray-800 mb-1">{item.name}</h4>
                                    <span className="text-xs font-bold text-green-700 mb-2">₹{item.price}</span>
                                    <button
                                      className="mt-auto bg-green-300 hover:bg-green-400 text-gray-700 px-2 py-1 rounded text-xs font-semibold"
                                      onClick={() => addSuggestedToCart(item)}
                                    >
                                      Add to Cart
                                    </button>
                                  </div>
                                ))}
                              </div>
                              <button
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-1 items-center justify-center text-lg hidden md:flex w-8 h-8"
                                style={{marginRight: '-12px'}}
                                onClick={() => {
                                  if (scrollRef && scrollRef.current) scrollRef.current.scrollBy({ left: 180, behavior: 'smooth' });
                                }}
                                aria-label="Scroll right"
                              >
                                <i className='bx bx-chevron-right text-2xl flex items-center justify-center'></i>
                              </button>
                            </div>

                            {/* Paper Bag Option */}
                            <div className="py-4 border-t">
                                <label className="flex items-center space-x-3">
                                    <input
                                      type="checkbox"
                                      className="rounded border-gray-300 text-green-300 focus:ring-teal-500"
                                      checked={addPaperBag}
                                      onChange={() => setAddPaperBag((prev) => !prev)}
                                    />
                                    <span className="text-sm font-medium">Add Paper Bag for ₹20</span>
                                </label>
                            </div>
                        </div>

                        {/* Cart Footer */}
                        <div className="border-t p-4 space-y-4 bg-white">
                            <div className="flex justify-between items-center">
                                <div>
                                    <span className="text-xl font-bold text-gray-800">₹{totalWithBag}</span>
                                    <div className="text-sm text-gray-500 underline">Estimated total</div>
                                </div>
                            </div>
                            {/* Replace Button with your own button component */}
                            <button className="w-full bg-green-300 hover:bg-green-300 text-gray-600 py-3 rounded-lg font-semibold text-lg">
                                Checkout
                            </button>
                        </div>
                    </div>
                    {/* End of Drawer */}
                </div>
            )}
        </>
    );
};

export default CartDrawer;
