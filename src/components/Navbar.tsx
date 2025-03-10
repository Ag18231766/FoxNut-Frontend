import { useState } from "react"
import { useNavigate } from "react-router-dom";

export function Navbar(){
    const [isMenuOpen,SetMenuOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    return (
        <div>
          <header className="flex justify-between items-end text-gray-50 py-6 px-8 md:px-32 bg-white drop-shadow-sm">
              <img src="logo.jpeg" className="w-56 h-24 cursor-pointer lg:ml-48"></img>
              <ul className="hidden lg:flex items-center gap-12 font-semibold text-gray-600">
                  <li onClick={() => navigate('/')} className="p-3 hover:bg-gray-100 text-green-500 hover:text-gray-400 rounded-md transition-all cursor-pointer">Home</li>
                  {/* <li className="p-3 hover:bg-gray-100 hover:text-gray-400 rounded-md transition-all cursor-pointer">Products</li> */}
                  <li onClick={() => navigate('/about')} className="p-3 hover:bg-gray-100 hover:text-gray-400 rounded-md transition-all cursor-pointer">About</li>
                  <li onClick={() => navigate('/contact')} className="p-3 hover:bg-gray-100 hover:text-gray-400 rounded-md transition-all cursor-pointer">Contact</li>
              </ul>
              <div className="lg:hidden text-5xl text-black cursor-pointer">
                <i className="bx bx-menu"
                    onClick={(e) => {
                      e.preventDefault();
                      SetMenuOpen(!isMenuOpen);
                    }}
                ></i>
              </div>

              <div className={`absolute xl:hidden top-28 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? 
  "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`} style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}
              >
                <li onClick={(e) => {navigate('/')
                    e.preventDefault();
                    SetMenuOpen(!isMenuOpen);
                }} className="list-none w-full text-center p-4 hover::bg-gray-400 hover:text-gray-400 transition-all cursor-pointer text-gray-600">Home</li>
                {/* <li className="list-none w-full text-center p-4 hover::bg-gray-400 hover:text-gray-400 transition-all cursor-pointer text-gray-600">Products</li> */}
                <li onClick={(e) => {navigate('/about')
                  e.preventDefault();
                  SetMenuOpen(!isMenuOpen);
                }} className="list-none w-full text-center p-4 hover::bg-gray-400 hover:text-gray-400 transition-all cursor-pointer text-gray-600">About</li>
                <li onClick={(e) => {navigate('/contact')
                  e.preventDefault();
                  SetMenuOpen(!isMenuOpen);
                }} className="list-none w-full text-center p-4 hover::bg-gray-400 hover:text-gray-400 transition-all cursor-pointer text-gray-600">Contacts</li>
              </div>
          </header>
      </div>

    )
}

// <span ><i className='bx bxs-chevron-down'></i></span>