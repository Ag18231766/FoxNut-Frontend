import { useState } from "react";

type ProductCardProps = {
  imageUrl: string;
  productName: string;
  description:string
}

export function AllCards(){
    const [cards] = useState<ProductCardProps[]>([{
      imageUrl:"bone.jpg",
      productName:"Fortifies Bones",
      description:"Makhana strengthens bones with calcium, phosphorus, and magnesium. These minerals maintain density, support formation, and enhance calcium absorption."
    },{
      imageUrl:"heart.jpg",
      productName:"Enhances Cardiovascular Health",
      description:"Makhana boosts heart health with magnesium, potassium, fiber, and antioxidants, which help regulate blood pressure and cholesterol."
    },{
      imageUrl:"antioxidants.jpg",
      productName:"Good Antioxidants source",
      description:"Makhana's antioxidants neutralize free radicals, protecting against chronic diseases. Roasting enhances this antioxidant activity for better health benefits."
    },{
      imageUrl:"sugar.jpg",
      productName:"Manage Blood Sugar Levels",
      description:"Makhana stabilizes blood sugar due to its low GI and high fiber, ensuring gradual glucose release and improved digestion."
    }]);
    return (
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-1 p-6 gap-1">
        {cards.map((card, index) => (
          <ProductCard key={index} {...card} />
        ))}
      </div>
    );
    

}



function ProductCard({ imageUrl, productName, description }: ProductCardProps) {
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:scale-105">
      <div className="flex flex-col justify-between h-full">
        <img className="w-full object-cover" src={imageUrl} alt={productName} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-gray-600 min-h-[56px] flex justify-center items-center">
            {productName}
          </div>
          <p className="h-32 text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}











{/* <button
          onClick={onKnowMore}
          className="w-full bg-[#4B7B48] hover:bg-[#3d6339] text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
        >
          Know More
          <i className='bx bxs-like bx-fade-right-hover'></i>
        </button> */}