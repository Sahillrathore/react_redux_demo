import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Dashboard from "./components/dashboard/Dashboard"
import About from "./components/about/About"
import OrderDetails from "./components/orders/OrderDetails"
import AddData from "./components/addData/AddData"
import Cart from "./components/cart/Cart"
import ProductLandingPage from "./components/product-landing-page/ProductLandingPage"
import Contact from "./components/contact/Contact"
import Random from "./components/random/Random"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="about" element={<About/>} />
            {/* <Route path="orders" element={<OrderDetails/>} /> */}
            <Route path="orders/add-data" element={<AddData/>} />
            <Route path="cart/:id" element={<Cart/>} />
            <Route path="Product/:id" element={<ProductLandingPage/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="rand" element={<Random/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
