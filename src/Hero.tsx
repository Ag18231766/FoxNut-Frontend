export function Hero(){
    return (
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-1.5 mt-32 text-gray-600">
            <div className="flex justify-center content-center pl-9">
                <img src="hero.png" alt="Banner" className="h-2xl w-96 rounded-b-md"/>
            </div>
            <div className="mt-8 relative">
                {/* <div
                    className="absolute inset-0 bg-[url('leaf.png')] bg-cover  bg-center opacity-30 blur-sm"
                    style={{
                        zIndex: -1
                    }}
                ></div> */}
                <div className="flex justify-center content-center"><div className="font-bold mt-0.5 mb-0.5 pl-1">Best Product Out There</div></div>
                <div className="pl-24">
                    <div className="text-6xl">Best Makhana (Foxnut) company in India!</div>
                </div>
                <div className="mt-6 pl-1 flex justify-center content-center">
                    <div>Our Legacy is our products which are made locally in India</div>
                </div>
                <div className="mt-2.5 pl-1 flex justify-center content-center">
                    <button className="bg-green-300 cursor-pointer mt-4 text-gray-600 w-44 h-8 rounded-xl">
                        Shop Now
                    </button>
                </div>
                
            </div>
        </div>
      )
}