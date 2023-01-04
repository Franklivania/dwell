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

        <div className="cont">
          <div className="left">
            <h1>25 &nbsp; <p><div>Years &nbsp; <i class="fa-solid fa-award fa-2x"></i></div><span> of QUALITY</span></p></h1>
          </div>
          <div className="right">
            <p>
              As a trusted realty company that has been
              operating for 25 years, our commitment is
              always to prioritize our client’s satisfaction.
            </p>
          </div>
        </div>

        <Properties/>
        
    </main>
  )
}


export default Hero