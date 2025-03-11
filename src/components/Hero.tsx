export function Hero(){
    return (
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-1.5 mt-16 text-gray-600">
            
            <div className="mt-14 relative">
                <div className="mb-3 lg:text-xl flex justify-center content-center"><div className="font-bold mt-0.5 mb-0.5 pl-1">Best Product Out There</div></div>
                <div className="text-center lg:pl-24">
                    <div className="text-3xl lg:text-6xl">FOXNAMI India’s Finest 100% Organic Makhana Pure, Crunchy, Nutritious!</div>
                </div>
                <div className="text-center mt-3 lg:mt-6 pl-1 flex justify-center content-center">
                    <div>Our Legacy is our products which are made locally in India</div>
                </div>
                <div className="mt-2.5 pl-1 flex justify-center content-center">
                    <button className="bg-green-300 cursor-pointer mt-4 text-gray-600 w-44 h-8 rounded-xl">
                        Coming Soon...
                    </button>
                </div>
                
            </div>
            <div className="flex justify-center content-center lg:mb-20">
                <img src="hero.png" alt="Banner" className="h-xl w-96 rounded-b-md"/>
            </div>
        </div>
      )
}