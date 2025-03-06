import { useState } from "react"
import { useNavigate } from "react-router-dom";

export function Navbar(){
    const [isMenuOpen,SetMenuOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    return (
        <div>
          <header className="flex justify-between items-end text-gray-50 py-6 px-8 md:px-32 bg-white drop-shadow-sm">
              <img src="logo.jpeg" className="w-56 h-24 cursor-pointer"></img>
              <ul className="hidden lg:flex items-center gap-12 font-semibold text-gray-600">
                  <li className="p-3 hover:bg-gray-100 text-green-500 hover:text-gray-400 rounded-md transition-all cursor-pointer">Home</li>
                  <li className="p-3 hover:bg-gray-100 hover:text-gray-400 rounded-md transition-all cursor-pointer">Products</li>
                  <li onClick={() => navigate('/about')} className="p-3 hover:bg-gray-100 hover:text-gray-400 rounded-md transition-all cursor-pointer">About <span ><i className='bx bxs-chevron-down'></i></span></li>
                  <li onClick={() => navigate('/contact')} className="p-3 hover:bg-gray-100 hover:text-gray-400 rounded-md transition-all cursor-pointer">Contact</li>
              </ul>
              <i className="hidden bx bx-menu lg:opacity-0 text-5xl text-black cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    SetMenuOpen(!isMenuOpen);
                  }}
              ></i>

              <div className={`absolute xl:hidden top-28 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? 
                "opacity-100" : "opacity-0"
              }`} style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}
              >
                <li className="list-none w-full text-center p-4 hover::bg-gray-400 hover:text-gray-400 transition-all cursor-pointer text-gray-600">Home</li>
                <li className="list-none w-full text-center p-4 hover::bg-gray-400 hover:text-gray-400 transition-all cursor-pointer text-gray-600">Products</li>
                <li onClick={() => navigate('/about')} className="list-none w-full text-center p-4 hover::bg-gray-400 hover:text-gray-400 transition-all cursor-pointer text-gray-600">About</li>
                <li onClick={() => navigate('/contact')} className="list-none w-full text-center p-4 hover::bg-gray-400 hover:text-gray-400 transition-all cursor-pointer text-gray-600">Contacts</li>
              </div>
          </header>
      </div>

    )
}