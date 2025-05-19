import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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
import Connect from './components/connect/connect'

const App = () => {
  return (
    <div className='all'>
      <Router>
        <Navbar />
        <div className='all1'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/connect' element={<Connect />} />
            <Route path='/testimonial' element={<Testimonial />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/footer' element={<Footer />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
