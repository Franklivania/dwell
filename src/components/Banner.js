import React from 'react'
import '../sass/Banner.scss'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="text">
            <h1>
            Ready to choose your dream home?
            </h1>
            <p>
            Take the first step to becoming a luxury home owner. 
            You can never go wrong with Dwell State Pride Homes! 
            </p>

            <div className="links">
                <a href="/" className='homes'> View Homes</a>
                <a href="/" className='contact'>Contact Us</a>
            </div>
        </div>
    </div>
  )
}

export default Banner