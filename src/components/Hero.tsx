export function Hero(){
    return (
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-1.5 mt-28 text-gray-600">
            <div className="flex justify-center content-center lg:pl-9">
                <img src="hero.png" alt="Banner" className="h-2xl w-96 rounded-b-md"/>
            </div>
            <div className="mt-8 relative">
                <div className="mb-3 lg:text-xl flex justify-center content-center"><div className="font-bold mt-0.5 mb-0.5 pl-1">Best Product Out There</div></div>
                <div className="text-center lg:pl-24">
                    <div className="text-3xl lg:text-6xl">India’s finest 100% organic and healthy Makhana pure, crunchy, and packed with nutrition!</div>
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
        </div>
      )
}