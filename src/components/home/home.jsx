import React from 'react'
import "./home.css"
const home = () => {
  return (
    <section className='home-container flex' id="home">
      <div className='hr'>
        <img src="src/assets/pfp.jpg" alt="" className='home__img '/>
        </div>
        <div className='about'>
        <h1 className='home__name'>Hi,My name is Akpan Victor Edikan</h1>
        <span className='home__education'>I am a full stack software developer</span>
        </div>
        <hr />
    </section>
  )
}

export default home;