import React from 'react'
import Navbar from './Navbar'
import '../sass/Hero.scss'
import Properties from './Properties'

const Hero = () => {

  return (
    <main>
        <Navbar/>

        <div className="text">
            <h1>
            We Provide Quality Housing For You
            </h1>
            <p>
            At Dwellstate Pride, we can be your agent at getting that real 
            estate property appealing to your tastes at the best competitive 
            market rate and from the best real estate market deals.
            </p>

            <a href="/" rel='noreferrer'>Discover More</a>
        </div>
        <div className="box"></div>
        <div className="circle"></div>

        <Properties/>
        
    </main>
  )
}


export default Hero