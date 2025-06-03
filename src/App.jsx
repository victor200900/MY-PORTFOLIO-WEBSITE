import React from 'react'
import "./App.css"
import Navbar from "./components/navbar/navbar"
import Home from './components/home/home'
import About from './components/about/about'
import Services from './components/services/services'
import Resume from './components/resume/resume' 
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Connect from './components/connect/connect'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const App = () => {
useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);

  return (
    <div className='all'>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Resume />
      <Contact />
       <Connect />
      <Footer />
    </div>
  )
}

export default App
