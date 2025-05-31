import React, { useState } from "react";
import { FooterComp } from "./FooterComp";

// Example product data (replace with real data or props as needed)
const products = [
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
  {
    id: 4,
    name: "Millet mlk original 1 ltr",
    price: 299,
    description: "The most delicious vegan mlk to exist (1ltr)",
    image: "/fig4.jpeg",
    badge: "Bestseller",
    sold: 1500,
  },
  {
    id: 5,
    name: "Sugar-free original cashew oat millet mlk | 1 litre",
    price: 165,
    description: "No moo, no sugar, no compromise",
    image: "/fig5.jpeg",
    badge: "Sugar Free",
    sold: 800,
  },
  {
    id: 6,
    name: "Vegan Prodigee - 500 ml | Zero cholesterol, zero trans fat, clean label",
    price: 499,
    description: "Holy cow - oh wait, there's no cow! Prodigee for the win",
    image: "/fig1.jpeg",
    badge: "Vegan",
    sold: 600,
  },
  {
    id: 7,
    name: "Black chia seeds | Superfood, Rich in Omega-3 and Fiber",
    price: 225,
    description: "Hydrating, tiny, fibrous and protein packed",
    image: "/fig2.jpeg",
    badge: "Superfood",
    sold: 1100,
  },
  {
    id: 8,
    name: "Super muesli - Belgium dark chocolate | 400g",
    price: 555,
    oldPrice: 629,
    description: "Backed by the best vegan chocolate",
    image: "/fig3.jpeg",
    badge: "11% OFF",
    sold: 950,
  },
  {
    id: 9,
    name: "White Quinoa, Superfood 500g",
    price: 289,
    description: "One superfood that excites the super you",
    image: "/fig4.jpeg",
    badge: "Superfood",
    sold: 1000,
  },
];

export const AllProducts: React.FC = () => {
  const [sortBy, setSortBy] = useState("bestselling");

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "bestselling") {
      return b.sold - a.sold;
    } else if (sortBy === "priceLow") {
      return a.price - b.price;
    } else if (sortBy === "priceHigh") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <>
        <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-medium font-['Chewy'] mb-8 text-center text-gray-600">
        All Products
      </h2>
      <div className="flex justify-end mb-6">
        <label className="mr-2 text-gray-600 font-medium">Sort by:</label>
        <select
          className="border rounded px-3 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-300"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="bestselling">Bestselling</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col border border-gray-100 relative group"
          >
            {product.badge && (
              <span className="absolute top-3 left-3 bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded z-10">
                {product.badge}
              </span>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-xl mb-3"
            />
            <div className="flex-1 flex flex-col px-4 pb-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-1 group-hover:text-green-700 transition-colors">
                {product.name}
              </h3>
              <p className="text-xs text-gray-500 mb-2 min-h-[32px]">
                {product.description}
              </p>
              <div className="flex items-center gap-2 mb-2">
                {product.oldPrice && (
                  <span className="text-gray-400 line-through text-sm">
                    ₹{product.oldPrice}
                  </span>
                )}
                <span className="text-xl font-bold text-green-700">
                  ₹{product.price}
                </span>
              </div>
              <button className="mt-auto bg-green-300 hover:bg-green-400 text-gray-800 font-semibold py-2 rounded-lg transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    <FooterComp />
    </>
  );
};


