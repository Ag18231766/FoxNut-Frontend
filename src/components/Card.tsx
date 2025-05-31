
type ProductCardProps = {
  id: number;
  imageUrl: string;
  productName: string;
  description: string;
  quantity: number;
};




export function AllCards({ Productcards , SetCards}: {Productcards: ProductCardProps[] , SetCards?: React.Dispatch<React.SetStateAction<ProductCardProps[]>>}) {
  {Productcards?.forEach((c, i) => console.log(c.quantity + "  " + c.productName))}
  return (
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-1 p-6 gap-1">
      {Productcards?.map((card, index) => (
        <ProductCard key={index} {...card} SetCards={SetCards} />
      ))}
    </div>
  );
}

function ProductCard({
  imageUrl,
  productName,
  description,
  id,
  quantity,
  SetCards
}: ProductCardProps & { SetCards?: React.Dispatch<React.SetStateAction<ProductCardProps[]>> }) {
  console.log("SetCards function is", SetCards , "from ProductCard component");
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
        <button className="text-black"
        onClick={() => {
          if (SetCards) {
            SetCards((cards) =>
              cards.map((card) =>
                card.id === id
                  ? { ...card, quantity: card.quantity + 1 }
                  : card
              )
            );
          }
        }}
      >
        Add to Cart ({quantity})
      </button>
      </div>
      
    </div>
  );
}

// if I am trying to retain the selected product in cards I have to call the db to update the quantity whenever the user adds a product otherwise whenever refreshed the data will be gone
