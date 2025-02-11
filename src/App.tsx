import { FooterComp } from "./FooterComp"
import { Hero } from "./Hero"
import { Navbar } from "./Navbar"
import AllCards from "./Card"
import Journey from "./Journey"

function App() {
  
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <AllCards></AllCards>
      <Journey></Journey>
      <FooterComp></FooterComp>
    </div>

      
  )
  
}

export default App


// ideas 
{/* <div className="flex justify-center content-center mt-24"><div className="text-6xl text-gray-600">Best Products We Offer</div></div> */}
