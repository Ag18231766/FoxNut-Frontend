import { lazy, Suspense } from "react"
import { Navbar } from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Loader from "./components/Loader"
import Privacy from "./Privacy"
import TermsAndConditions from "./Terms"
import RefundPolicy from "./RefundPolicy"
import ContactPage from "./Contacts"
import About from "./AboutUs"
const Landing = lazy(() => import("./Landing"))

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Suspense fallback={<Loader></Loader>}><Landing></Landing></Suspense>}></Route>
          <Route path="/privacy-policy" element={<Suspense fallback={<Loader></Loader>}><Privacy></Privacy></Suspense>}></Route>
          <Route path="/termsandconditions" element={<Suspense fallback={<Loader></Loader>}><TermsAndConditions></TermsAndConditions></Suspense>}></Route>
          <Route path="/return-policy" element={<Suspense fallback={<Loader></Loader>}><RefundPolicy></RefundPolicy></Suspense>}></Route>
          <Route path="/contact" element={<Suspense fallback={<Loader></Loader>}><ContactPage></ContactPage></Suspense>}></Route>          
          <Route path="/about" element={<Suspense fallback={<Loader></Loader>}><About></About></Suspense>}></Route>                  
        </Routes>
      </BrowserRouter>
    </div>

      
  )
  
}

export default App


