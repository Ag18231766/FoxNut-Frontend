import { useNavigate } from "react-router-dom"


export function FooterComp(){
    const navigate = useNavigate();
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
                        <div className="text-2xl flex justify-center content-center text-black mb-4">Contact Us</div>
                        <div className="flex justify-center content-center">Phone: +9453869972</div>
                        <div className="flex justify-center content-center">Email: amartyagupta@gmail.com</div>
                    </div>
                </div>
            
            </div>
            
            <div className="flex justify-center content-center mt-20">
                <div onClick={() => {window.open('https://www.facebook.com/share/1EMAu7eXnM/')}} className="mr-3 cursor-pointer transition-transform duration-400 hover:scale-140"><i className='bx bxl-facebook-circle bx-md'></i></div>
                <div onClick={() => {window.open('https://www.instagram.com/foxnami.organic/')}} className="mr-3 cursor-pointer transition-transform duration-400 hover:scale-140"><i className='bx bxl-instagram bx-md'></i></div>
                <div onClick={() => {window.open('https://x.com/foxnamisnacks')}} className=" cursor-pointer transition-transform duration-400 hover:scale-140"><i className='bx bxl-twitter bx-md' ></i></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 mt-20">
                <div className="flex justify-center text-2xl"><a href="#">© FOXNAMI</a></div>
                <div onClick={() => {navigate('/termsandconditions')}} className="flex justify-center text-2xl"><div className="cursor-pointer">Terms & Conditions</div></div>
                <div onClick={() => {navigate('/return-policy')}} className="flex justify-center text-2xl"><div className="cursor-pointer">Return Policy</div></div>
                <div onClick={() => {navigate('/privacy-policy')}} className="flex justify-center text-2xl"><div className="cursor-pointer">Privacy Policy</div></div>
                <div onClick={() => {navigate('/contact')}} className="flex justify-center text-2xl"><div className="cursor-pointer">Contact Us</div></div>
            </div>
        </div>
    )
}