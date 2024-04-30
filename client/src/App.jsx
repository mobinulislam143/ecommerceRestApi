import React, { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import BlogPage from "./Pages/BlogPage"
import CartPage from "./Pages/CartPage"
import CheckoutPage from './Pages/CheckoutPage'
import ContactPage from "./Pages/ContactPage"
import FAQPage from "./Pages/FAQPage"
import HomePage from "./Pages/HomePage"
import OtpPage from "./Pages/OtpPage"
import PrivacyPage from "./Pages/PrivacyPage"
import ProductByBrand from "./Pages/ProductByBrand"
import ProductByCategory from "./Pages/ProductByCategory"
import ProductByKeyword from "./Pages/ProductByKeyword"
import ProductDetails from "./Pages/ProductDetails"
import ProductPage from "./Pages/ProductPage"
import ProfilePage from "./Pages/ProfilePage"
import RegisterPage from "./Pages/RegisterPage"
import ReviewPage from "./Pages/ReviewPage"
import SearchPage from "./Pages/SearchPage"
import ThankYouPage from "./Pages/ThankYouPage"
import ErrorPage from "./components/ErrorPage"
import WishListPage from "./Pages/WishListPage"
import OrderPage from "./Pages/OrderPage"
import InvoicePage from "./Pages/InvoicePage"




function App() {

  return(
    <BrowserRouter>
      <Routes>

        <Route path='*' element={<ErrorPage/>} />
        <Route path='/' element={<HomePage/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/by-brand/:id' element={<ProductByBrand/>} />
        <Route path='/by-category/:id' element={<ProductByCategory/>} />
        <Route path='/by-keyword/:Keyword' element={<ProductByKeyword/>} />
        
        <Route path='/details/:id' element={<ProductDetails/>} />
        


        <Route path="/checkout" element={<CheckoutPage/>} />
        <Route path='/faq' element={<FAQPage/>} />
        <Route path="/login" element={<RegisterPage/>} />
        <Route path="/otp" element={<OtpPage/>} />
        <Route path="/profile" element={<ProfilePage/>} />

        <Route path="/thank-you" element={<ThankYouPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path='/blog' element={<BlogPage/>} />
        <Route path='/privacy' element={<PrivacyPage/>} />
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/review" element={<ReviewPage/>} />
        <Route path="/product" element={<ProductPage/>} />
        <Route path="/wish-list" element={<WishListPage/>} />
        <Route path="/order-list" element={<OrderPage/>} />
        <Route path="/invoice/:id" element={<InvoicePage/>} />
        
      </Routes>
    </BrowserRouter>
  )
    
  }
  
  export default App
  
