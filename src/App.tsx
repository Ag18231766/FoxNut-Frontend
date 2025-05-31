import { lazy, Suspense, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Loader from "./components/Loader"
import Privacy from "./Privacy"
import TermsAndConditions from "./Terms"
import RefundPolicy from "./RefundPolicy"
import ContactPage from "./Contacts"
import About from "./AboutUs"
import ProductPage from "./ProductPage"
import { RecoilRoot } from "recoil"
import Cart from "./components/Cart"
const Landing = lazy(() => import("./Landing"))
type ProductCardProps = {
  id: number;
  imageUrl: string;
  productName: string;
  description: string;
  quantity: number;
  SetCards?: React.Dispatch<React.SetStateAction<ProductCardProps[]>>;
};


function App() {
  const [cards,SetCards] = useState<ProductCardProps[]>([{
      id: 1,
      imageUrl: "bone.jpg",
      productName: "Fortifies Bones",
      description:
        "Makhana strengthens bones with calcium, phosphorus, and magnesium. These minerals maintain density, support formation, and enhance calcium absorption.",
      quantity: 0,
    },
    {
      id: 2,
      imageUrl: "heart.jpg",
      productName: "Enhances Cardiovascular Health",
      description:
        "Makhana boosts heart health with magnesium, potassium, fiber, and antioxidants, which help regulate blood pressure and cholesterol.",
      quantity: 0,
    },
    {
      id: 3,
      imageUrl: "antioxidants.jpg",
      productName: "Good Antioxidants source",
      description:
        "Makhana's antioxidants neutralize free radicals, protecting against chronic diseases. Roasting enhances this antioxidant activity for better health benefits.",
      quantity: 0,
    },
    {
      id: 4,
      imageUrl: "sugar.jpg",
      productName: "Manage Blood Sugar Levels",
      description:
        "Makhana stabilizes blood sugar due to its low GI and high fiber, ensuring gradual glucose release and improved digestion.",
      quantity: 0,
    },])

  return (
    <div>
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<Suspense fallback={<Loader></Loader>}><Cart  Component={Landing} componentProps={{Productcards:cards}} SetCards={SetCards}></Cart></Suspense>}></Route>
            <Route path="/privacy-policy" element={<Suspense fallback={<Loader></Loader>}><Cart Component={Privacy}></Cart></Suspense>}></Route>
            <Route path="/termsandconditions" element={<Suspense fallback={<Loader></Loader>}><Cart Component={TermsAndConditions}></Cart></Suspense>}></Route>
            <Route path="/return-policy" element={<Suspense fallback={<Loader></Loader>}><Cart Component={RefundPolicy}></Cart></Suspense>}></Route>
            <Route path="/contact" element={<Suspense fallback={<Loader></Loader>}><Cart Component={ContactPage}></Cart></Suspense>}></Route>          
            <Route path="/about" element={<Suspense fallback={<Loader></Loader>}><Cart Component={About}></Cart></Suspense>}></Route>  
            <Route path="/productpage" element={<Suspense fallback={<Loader></Loader>}><Cart Component={ProductPage}></Cart></Suspense>}></Route>                  
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </div>

      
  )
  
}

export default App


