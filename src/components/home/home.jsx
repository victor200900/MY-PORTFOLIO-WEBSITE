import React from 'react'
import "./home.css"
const home = () => {
  return (
    <section className='home container' id="home">
      <div className='intro'>
        <img src="src/assets/pfp.jpg" alt="" className='home__img'/>
        <h1 className='home__name'>Akpan victor Edikan</h1>
        <span className='home__education'>am a full stack software developer</span>
      </div>
    </section>
  )
}

export default home;