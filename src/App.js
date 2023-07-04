import { Route, Routes } from "react-router-dom"
import Banner from "./Components/Banner"

import Shop from "./Components/Shop/Shop/Shop"
import Blogs from "./Components/Blogs/Blogs"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Layout from "./Layout"



function App() {


   return (
      <>
         <div className="container">
            <Routes>
               <Route path='/' element={<Layout />}>
                  <Route path="/" element={<Banner />} />
                  <Route path="/Shop" element={<Shop />} />
                  <Route path="/Blogs" element={<Blogs />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/Contact" element={<Contact />} />
               </Route>
            </Routes>
         </div>



      </>
   )
}

export default App
