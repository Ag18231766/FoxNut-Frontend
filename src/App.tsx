import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Loader from "./components/Loader"
import Privacy from "./Privacy"
import TermsAndConditions from "./Terms"
import RefundPolicy from "./RefundPolicy"
import ContactPage from "./Contacts"
import About from "./AboutUs"
// import ProductPage from "./ProductPage"
import { RecoilRoot } from "recoil"
import Cart from "./components/Cart"
// import { AllProducts } from "./components/AllProducts"
const Landing = lazy(() => import("./Landing"))



function App() {
  

  return (
    <div>
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<Suspense fallback={<Loader></Loader>}><Landing></Landing></Suspense>}></Route>
            <Route path="/privacy-policy" element={<Suspense fallback={<Loader></Loader>}><Cart Component={Privacy}></Cart></Suspense>}></Route>
            <Route path="/termsandconditions" element={<Suspense fallback={<Loader></Loader>}><Cart Component={TermsAndConditions}></Cart></Suspense>}></Route>
            <Route path="/return-policy" element={<Suspense fallback={<Loader></Loader>}><Cart Component={RefundPolicy}></Cart></Suspense>}></Route>
            <Route path="/contact" element={<Suspense fallback={<Loader></Loader>}><Cart Component={ContactPage}></Cart></Suspense>}></Route>          
            <Route path="/about" element={<Suspense fallback={<Loader></Loader>}><Cart Component={About}></Cart></Suspense>}></Route>  
            {/* <Route path="/productpage" element={<Suspense fallback={<Loader></Loader>}><Cart Component={ProductPage}></Cart></Suspense>}></Route>  */}
            {/* <Route path="/allproducts" element={<Suspense fallback={<Loader></Loader>}><Cart Component={AllProducts}></Cart></Suspense>}></Route>                   */}

          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </div>

      
  )
  
}

export default App


