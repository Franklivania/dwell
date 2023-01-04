import React from 'react'
import Brand from '../components/Brand'
import Companies from '../components/Companies'
import Hero from '../components/Hero'
import Howto from '../components/Howto'
import '../sass/Landing.scss'

const Landing = () => {
  return (
    <div className='landing'>

        <Hero/>

        <Companies/>

        <Howto/>

        <Brand/>

    </div>
  )
}

export default Landing