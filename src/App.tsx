import { lazy, Suspense } from "react"
import { Navbar } from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Loader from "./components/Loader"
import Privacy from "./Privacy"
const Landing = lazy(() => import("./Landing"))

function App() {
  
  return (
    <div>
      
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Suspense fallback={<Loader></Loader>}><Landing></Landing></Suspense>}></Route>
          <Route path="/privacy" element={<Suspense fallback={<Loader></Loader>}><Privacy></Privacy></Suspense>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>

      
  )
  
}

export default App


