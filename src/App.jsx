import React from 'react'
import "./App.css"
import Navbar from "./components/navbar/navbar"
import Home from './components/home/home'
import About from './components/about/about'
import Services from './components/services/services'
import Resume from './components/resume/resume' 
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'
import Testimonial from './components/testimonials/testimonial'
import Blog from './components/blog/blog'
import Pricing from './components/pricing/pricing'
import Footer from './components/footer/footer'
const App = () => {
  return (
    <>
    <div className='all'>
    <Navbar/>
  
    <div className='all1'>
     
      <Home/> 
      <About/>
      <Services/>  
      <Resume/>
      <Portfolio/>
      <Contact/>
      <Testimonial/>
      <Blog/>
      <Pricing/>
      <Footer/>
    </div>
    </div>
    </>
  )
}

export default App