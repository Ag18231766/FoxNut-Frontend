import { useState } from "react"
import { FooterComp } from "./components/FooterComp"
import ZoomImage from "./components/ZoomImage"




export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(1)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState<"150g" | "300g" | "500g" | "1kg">("150g")
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const productImages = [
    "bone.jpg",
    "fig1.jpeg",
    "fig2.jpeg",
    "fig3.jpeg",
  ]

  const sizes: Array<"150g" | "300g" | "500g" | "1kg"> = ["150g", "300g", "500g", "1kg"]
  const prices = { "150g": "₹225", "300g": "₹425", "500g": "₹675", "1kg": "₹1250" }

  const trustBadges = [
    { icon: "🌱", label: "ORGANIC" },
    { icon: "🏆", label: "PREMIUM QUALITY" },
    { icon: "✓", label: "TESTED" },
    { icon: "🛡️", label: "SAFE" },
    { icon: "⭐", label: "QUALITY" },
    { icon: "🔬", label: "TESTED" },
  ]

  const nutritionFacts = [
    { label: "Iron", value: "7.7mg", color: "bg-red-500" },
    { label: "Antioxidants", value: "High", color: "bg-orange-500" },
    { label: "Calcium", value: "631mg", color: "bg-blue-500" },
    { label: "Omega", value: "17.8g", color: "bg-green-500" },
    { label: "Potassium", value: "407mg", color: "bg-purple-500" },
  ]
  const faqs = [
    {
      title: "How to use Black Chia seeds?",
      description: "You can sprinkle them on yogurt, blend into smoothies, or soak in water to make chia pudding.",
    },
    {
      title: "What do Chia seeds taste like?",
      description: "Chia seeds have a mild, nutty flavor and easily take on the taste of other ingredients.",
    },
    {
      title: "Do the seeds need to be soaked?",
      description: "Soaking is not required, but it helps with digestion and texture in recipes.",
    },
    {
      title: "What is the difference between black and white chia seeds?",
      description: "Nutritionally, there is little difference; both are equally healthy.",
    },
    {
      title: "How can I substitute chia seeds for eggs in my recipes?",
      description: "Mix 1 tablespoon of chia seeds with 3 tablespoons of water, let it sit for 10 minutes, and use as an egg replacement.",
    },
  ]
  

  return (
    <div className="min-h-screen bg-white">

        {/* Main Content */}
        <main className="py-8 lg:py-12 ">
            {/* {Product Description} */}
            <section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 justify-center items-center text-center md:text-center lg:text-left">
                    {/* Product Images */}
                    <div className="flex flex-col-reverse lg:flex-row gap-4 justify-center items-center">
                        <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 justify-center">
                            {productImages.map((image, index) => (
                                <button
                                    key={image}
                                    className={`flex-shrink-0 w-20 h-20 border-2 rounded-lg overflow-hidden transition-colors ${
                                        selectedImage === index ? "border-green-500" : "border-transparent"
                                    }`}
                                    onClick={() => {
                                        setSelectedImage(index);
                                        console.log(`Selected image: ${image}`);
                                    }}
                                >
                                    <img
                                        src={productImages[index] || image}
                                        alt={`Product ${index + 1}`}
                                        width={80}
                                        height={80}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                        <div className="flex-1 max-w-lg overflow-hidden rounded-lg flex justify-center">
                            <ZoomImage imagestring={productImages[selectedImage]} />
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-6 flex flex-col items-center md:items-center lg:items-start">
                        <h1 className={`text-2xl lg:text-4xl font-medium font-['Chewy'] text-gray-900 leading-tight `}>
                            Black chia seeds | Superfood, Rich in Omega-3 and Fiber
                        </h1>

                        <div className="flex items-center space-x-3">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={`text-lg ${i < 4 ? "text-yellow-400" : "text-gray-300"}`}>
                                        ★
                                    </span>
                                ))}
                            </div>
                            <span className="text-sm text-gray-600">(24 reviews)</span>
                        </div>

                        <div className="flex items-center space-x-4">
                            <span className="text-3xl lg:text-4xl font-bold text-gray-900">{prices[selectedSize]}</span>
                            <span className="text-lg text-gray-500 line-thmarough">
                                ₹{Math.round(Number.parseInt(prices[selectedSize].slice(1)) * 1.2)}
                            </span>
                            <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">20% OFF</span>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">Size:</label>
                                <div className="flex flex-wrap gap-2">
                                    {sizes.map((size) => (
                                        <button
                                            key={size}
                                            className={`px-5 py-2 border-2 rounded-md font-medium transition-all ${
                                                selectedSize === size
                                                    ? "border-green-500 bg-green-500 text-white"
                                                    : "border-gray-200 bg-white text-gray-900 hover:border-green-500"
                                            }`}
                                            onClick={() => setSelectedSize(size)}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center">
                                <label className="block text-sm font-semibold text-gray-900 mb-2 mr-2">Quantity:</label>
                                <div className="flex items-center space-x-4">
                                    <button
                                        className="w-10 h-10 border-2 border-gray-200 rounded-md font-bold hover:border-green-500 hover:text-green-500 transition-colors"
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    >
                                        -
                                    </button>
                                    <span className="text-lg font-semibold min-w-8 text-center">{quantity}</span>
                                    <button
                                        className="w-10 h-10 border-2 border-gray-200 rounded-md font-bold hover:border-green-500 hover:text-green-500 transition-colors"
                                        onClick={() => setQuantity(quantity + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full md:justify-center lg:justify-start">
                            <button className="flex-1 bg-green-500 text-white py-4 px-8 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                                Add to Cart
                            </button>
                            <button className="flex-1 bg-white text-green-500 py-4 px-8 rounded-lg font-semibold border-2 border-green-500 hover:bg-green-500 hover:text-white transition-colors">
                                Buy Now
                            </button>
                        </div>

                        <div className="text-gray-600 leading-relaxed text-center lg:text-left">
                            <p>
                                Chia seeds are tiny black seeds from the plant Salvia hispanica, which is related to the mint. They were
                                an important food for the Aztecs and Mayans back in the day. They prized them for their ability to
                                provide sustainable energy.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-sm text-gray-600 justify-center lg:justify-start">
                                <span className="text-base">🚚</span>
                                <span>Free delivery above ₹499</span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm text-gray-600 justify-center lg:justify-start">
                                <span className="text-base">📦</span>
                                <span>Easy 30 day returns</span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm text-gray-600 justify-center lg:justify-start">
                                <span className="text-base">🔒</span>
                                <span>Secure payments</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section>
                <div className="flex items-center justify-center my-8 bg-green-50">
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-6 lg:gap-10 my-16 justify-items-center">
                        {trustBadges.map((badge, index) => (
                            <div key={index} className="flex flex-col items-center space-y-2">
                            <div className="w-12 h-12 lg:w-15 lg:h-15 bg-green-500 rounded-full flex items-center justify-center text-white text-lg lg:text-xl">
                                {badge.icon}
                            </div>
                            <span className="text-xs lg:text-sm font-semibold text-gray-600 text-center">{badge.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nutrition Facts */}
            <section>
            <div className="my-16 grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                {/* Product Showcase */}
                <div className="my-16">
                    <img
                        src="bone.jpg"
                        alt="Chia Seeds"
                        width={400}
                        height={400}
                        className="rounded-xl mx-auto"
                    />
                </div>
                    <div>
                        <h3 className="text-2xl font-medium font-['Chewy'] text-center mb-8">Nutrition Facts (per 100g)</h3>
                        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {nutritionFacts.map((fact, index) => (
                                <div key={index} className="flex justify-center items-center space-x-4 p-5 bg-gray-50 rounded-lg">
                                    <div className="w-16">


                                      {/* tags side by side description are to be done */}
                                        <div className={`w-10 h-10 ${fact.color} rounded-full flex items-center justify-center`}>
                                      <span className="text-white text-lg">●</span>
                                      </div>
                                      <div className="flex flex-col">
                                      <span className="font-semibold text-gray-900">{fact.label}</span>
                                      <span className="text-sm text-gray-600">{fact.value}</span>
                                      </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>    
            </section>        

            {/* FAQs Section */}
            <section>
                    
                    <div className="my-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 ">
                        <h3 className="text-2xl font-medium font-['Chewy'] text-center mb-8">Frequently Asked Questions</h3>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border-b border-gray-200 pb-4">
                                    <button
                                        className="w-full text-left flex justify-between items-center text-lg font-semibold text-gray-900 transition-transform duration-200 ease-in-out"
                                        onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                    >
                                        {faq.title}
                                        <span
                                            className={`text-xl inline-block transition-transform duration-200 ease-in-out ${
                                                openFaqIndex === index ? "rotate-180" : "rotate-0"
                                            }`}
                                            style={{ willChange: "transform" }}
                                        >
                                            ▼
                                        </span>
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                            openFaqIndex === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                                        }`}
                                    >
                                        <p className="text-gray-600">{faq.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
            </section>

            {/* Health Benefits */}
            <section>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                <h3 className="text-2xl font-medium font-['Chewy'] text-center mb-8">Health Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                    <img
                        src="fig3.jpeg"
                        alt="Yoga pose"
                        width={200}
                        height={400}
                        className="w-full h-72 object-cover rounded-xl mb-4"
                    />
                    <p className="font-medium text-gray-600">Supports flexibility and joint health</p>
                    </div>
                    <div className="text-center">
                    <img
                        src="fig1.jpeg"
                        alt="Hydration"
                        width={300}
                        height={200}
                        className="w-full h-72 object-cover rounded-xl mb-4"
                    />
                    <p className="font-medium text-gray-600">Helps maintain hydration levels</p>
                    </div>
                    <div className="text-center">
                    <img
                        src="fig2.jpeg"
                        alt="Energy"
                        width={300}
                        height={200}
                        className="w-full h-72 object-cover rounded-xl mb-4"
                    />
                    <p className="font-medium text-gray-600">Provides sustained energy throughout the day</p>
                    </div>
                </div>
                </div>
            </section>
            {/* How to Use Section */}
            <section className="relative overflow-hidden">
              {/* Background layer */}
              <div className="absolute inset-0 bg-sky-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12"></div>

              {/* Foreground content container - offset to the left */}
              <div className="relative z-10 bg-sky-100 ml-4 sm:ml-8 lg:ml-12 mr-8 sm:mr-16 lg:mr-24 rounded-r-2xl shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                  <h2 className="text-3xl font-medium font-['Chewy'] text-center text-gray-900 mb-8">How to Use</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                      <div className="relative h-48 w-full max-w-xs overflow-hidden rounded-lg mb-4">
                        <img
                          src="fig1.jpeg"
                          alt="Milk with cookies"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="text-gray-800 font-medium text-center">Grab &amp; guzzle on the go</p>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="relative h-48 w-full max-w-xs overflow-hidden rounded-lg mb-4">
                        <img
                          src="fig1.jpeg"
                          alt="Hot chocolate with cookies"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="text-gray-800 font-medium text-center">Enjoy a cup of hot chocolate</p>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="relative h-48 w-full max-w-xs overflow-hidden rounded-lg mb-4">
                        <img
                          src="fig1.jpeg"
                          alt="Layered mocha drink"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="text-gray-800 font-medium text-center">Blend into your mocha</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Reviews Section */}
            <section className="bg-sky-50 mt-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                <h2 className="text-3xl font-medium font-['Chewy'] text-center text-gray-900 mb-8">Real People. Real Reviews.</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* Review Card 1 */}
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-lg ${i < 4 ? "text-yellow-400" : "text-gray-300"}`}>★</span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <p className="font-medium text-gray-900">Swatha Suri</p>
                      <span className="text-xs bg-teal-100 text-teal-800 px-2 py-0.5 rounded">VERIFIED</span>
                    </div>
                    <p className="text-gray-700 mb-2">Really good</p>
                    <p className="text-xs text-gray-500 mb-4">01/15/2023</p>
                    <a href="#" className="text-sm text-teal-600 hover:underline">
                      Full Review
                    </a>
                  </div>

                  {/* Review Card 2 */}
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-lg ${i < 4 ? "text-yellow-400" : "text-gray-300"}`}>★</span>
                        
                      ))}
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <p className="font-medium text-gray-900">Shalini Sharma</p>
                      <span className="text-xs bg-teal-100 text-teal-800 px-2 py-0.5 rounded">VERIFIED</span>
                    </div>
                    <p className="text-gray-700 mb-2">DELICIOUS MILK</p>
                    <p className="text-gray-700 mb-2">NUTRITION MADE DELICIOUS, MY DAUGHTER LOVES IT.</p>
                    <p className="text-xs text-gray-500 mb-4">03/17/2023</p>
                    <a href="#" className="text-sm text-teal-600 hover:underline">
                      Full Review
                    </a>
                  </div>

                  {/* Review Card 3 */}
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-lg ${i < 4 ? "text-yellow-400" : "text-gray-300"}`}>★</span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <p className="font-medium text-gray-900">Gayatri Srinivasan</p>
                      <span className="text-xs bg-teal-100 text-teal-800 px-2 py-0.5 rounded">VERIFIED</span>
                    </div>
                    <p className="text-gray-700 mb-2">Very tasty!</p>
                    <p className="text-gray-700 mb-2">
                      The choco drink was very tasty and refreshing. Light on the stomach too.
                    </p>
                    <p className="text-xs text-gray-500 mb-4">01/17/2023</p>
                    <a href="#" className="text-sm text-teal-600 hover:underline">
                      Full Review
                    </a>
                  </div>
                </div>

                {/* Review Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* Rating Summary */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-lg ${i < 4 ? "text-yellow-400" : "text-gray-300"}`}>★</span>
                        
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mb-1">4.95 out of 5</p>
                    <p className="text-sm text-gray-600">Based on 27 reviews</p>
                  </div>

                  {/* Rating Breakdown */}
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center">
                        <span className="text-sm text-gray-600 w-3">{rating}</span>
                        <div className="w-full bg-gray-200 rounded-full h-2 mx-2">
                          <div
                            className={`bg-teal-500 h-2 rounded-full ${
                              rating === 5 ? "w-5/6" : rating === 4 ? "w-1/6" : "w-0"
                            }`}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 w-3">{rating === 5 ? "24" : rating === 4 ? "3" : "0"}</span>
                      </div>
                    ))}
                  </div>

                  {/* Write Review Button */}
                  <div className="flex justify-center items-center">
                    <button className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition-colors">
                      Write a review
                    </button>
                  </div>
                </div>

                {/* Read More Reviews Button */}
                <div className="flex justify-center">
                  <button className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition-colors">
                    Read More Reviews
                  </button>
                </div>
              </div>
            </section>

            {/* You Might Also Like Section */}
            <section className="bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                <h2 className="text-3xl font-medium text-center text-gray-900 mb-8 font-['Chewy']">You Might Also Like</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Product 1 */}
                  <div className="group relative">
                    <div className="bg-purple-100 aspect-square rounded-lg overflow-hidden">
                      <img src="fig1.jpeg" alt="Product" className="h-full w-full object-cover" />
                    </div>
                    <div className="mt-4">
                      <p className="text-xs text-gray-500">MILK MILK ORIGINAL 200 ML</p>
                      <p className="font-medium">₹264</p>
                    </div>
                  </div>

                  {/* Product 2 */}
                  <div className="group relative">
                    <div className="bg-rose-200 aspect-square rounded-lg overflow-hidden">
                      <img src="fig1.jpeg" alt="Product" className="h-full w-full object-cover" />
                    </div>
                    <div className="mt-4">
                      <p className="text-xs text-gray-500">MILK MILK CHOCOLATE FLAVOR | DELICIOUS</p>
                      <p className="font-medium">₹240</p>
                    </div>
                  </div>

                  {/* Product 3 */}
                  <div className="group relative">
                    <div className="bg-purple-100 aspect-square rounded-lg overflow-hidden">
                      <img src="fig1.jpeg" alt="Product" className="h-full w-full object-cover" />
                    </div>
                    <div className="mt-4">
                      <p className="text-xs text-gray-500">MILK MILK ORIGINAL | 100 ML</p>
                      <p className="font-medium">₹240</p>
                    </div>
                  </div>

                  {/* Product 4 */}
                  <div className="group relative">
                    <div className="bg-purple-200 aspect-square rounded-lg overflow-hidden">
                      <img src="fig1.jpeg" alt="Product" className="h-full w-full object-cover" />
                    </div>
                    <div className="mt-4">
                      <p className="text-xs text-gray-500">MILK MILK ORIGINAL 200 ML DELICIOUS | BEST</p>
                      <p className="font-medium">₹240</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

        
      </main>
      <FooterComp></FooterComp>
    </div>
  )
}



