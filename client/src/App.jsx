import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import AppNavbar from "./components/AppNavbar"
import CartPage from "./Pages/CartPage"
import Footer from "./components/Footer"
import CheckoutPage from "./Pages/CheckoutPage"
import ErrorPage from "./components/ErrorPage"
import FAQPage from "./Pages/FAQPage"
import RegisterPage from "./Pages/RegisterPage"
import ThankYouPage from "./Pages/ThankYouPage"
import ContactPage from "./Pages/ContactPage"
import BlogPage from "./Pages/BlogPage"
import PrivacyPage from "./Pages/PrivacyPage"
import SearchPage from "./Pages/SearchPage"
import ReviewPage from "./Pages/ReviewPage"
import ProductPage from "./Pages/ProductPage"

function App() {
  return(
    <BrowserRouter>
      <AppNavbar/>

      <Routes>
        <Route path='*' element={<ErrorPage/>} />
        <Route path='/' element={<HomePage/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path="/checkout" element={<CheckoutPage/>} />
        <Route path='/faq' element={<FAQPage/>} />
        <Route path="/login" element={<RegisterPage/>} />
        <Route path="/thank-you" element={<ThankYouPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path='/blog' element={<BlogPage/>} />
        <Route path='/privacy' element={<PrivacyPage/>} />
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/review" element={<ReviewPage/>} />
        <Route path="/product" element={<ProductPage/>} />
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
    
  }
  
  export default App
  
