import React from 'react'
import Brand from '../components/Brand'
import Companies from '../components/Companies'
import Display from '../components/Display'
import Hero from '../components/Hero'
import Howto from '../components/Howto'
import Testimonial from '../components/Testimonial'
import '../sass/Landing.scss'

const Landing = () => {
  return (
    <div className='landing'>

        <Hero/>

        <Companies/>

        <Howto/>

        <Brand/>

        <Display/>

        <Testimonial/>

    </div>
  )
}

export default Landing