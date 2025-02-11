export function FooterComp(){
    return (
        <div className="text-gray-600 bg-stone-200">
            <div className="grid grid-cols-1  lg:grid-cols-3 ">
                <div className="mt-2.5 flex justify-center content-center">
                    <div>
                        <div className="text-2xl flex justify-center content-center text-black mb-4">Address</div>
                        <div className="flex justify-center content-center">Kishoraganj, Ranchi</div>
                        <div className="flex justify-center content-center">, Jharkhand 834002</div>
                    </div>
                </div>

                <div className="mt-2.5 flex justify-center content-center">
                    <div>
                        <div className="text-2xl flex justify-center content-center text-black mb-4">Our Hours</div>
                        <div className="flex justify-center content-center">10:00 AM - 06.00 PM</div>
                        <div className="flex justify-center content-center">Monday - Saturday</div>
                    </div>
                </div>
                <div className="mt-2.5 flex justify-center content-center">
                    <div>
                        <div className="text-2xl flex justify-center content-center text-black">Contact Us</div>

                        <div className="flex justify-center content-center mt-3.5">Name</div>
                        <div className="flex justify-center content-center mt-3"><input placeholder="Your Name"  className="bg-white"></input></div>
                        <div className="flex justify-center content-center mt-3">Email</div>
                        <div className="flex justify-center content-center mt-3"><input placeholder="Your Email" className="bg-white"></input></div>
                        <div className="flex justify-center content-center mt-3">Subject</div>
                        <div className="flex justify-center content-center mt-3"><input placeholder="Subject" className="bg-white"></input></div>

                    </div>
                </div>
            
            </div>
            
            <div className="flex justify-center content-center mt-20">
                <div className="mr-3 cursor-pointer transition-transform duration-400 hover:scale-140"><i className='bx bxl-facebook-circle bx-md'></i></div>
                <div className="mr-3 cursor-pointer transition-transform duration-400 hover:scale-140"><i className='bx bxl-instagram bx-md'></i></div>
                <div className=" cursor-pointer transition-transform duration-400 hover:scale-140"><i className='bx bxl-twitter bx-md' ></i></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 mt-20">
                <div className="flex justify-center text-2xl"><a href="#">© FOXNAMI</a></div>
                <div className="flex justify-center text-2xl"><a href="#">Terms & Conditions</a></div>
                <div className="flex justify-center text-2xl"><a href="#">Return Policy</a></div>
                <div className="flex justify-center text-2xl"><a href="#">Contact Us</a></div>
            </div>
        </div>
    )
}