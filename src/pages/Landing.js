import React from 'react'
import Banner from '../components/Banner'
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

        <Banner/>

    </div>
  )
}

export default Landing