import React from 'react'
import '../sass/Companies.scss'
import lafarge from '../assets/lafarge.png'
import dangote from '../assets/dangote.png'
import berger from '../assets/berger.png'
import ministry from '../assets/ministry.png'
import amen from '../assets/Amen.png'

const Companies = () => {
  return (
    <div className='companies'>
        <div className="text">
            <p>Trusted by the world's most popular companies</p>
        </div>
        <div className="img">
            <img src={lafarge} alt={'company logo'} />
            <img src={dangote} alt={'company logo'} />
            <img src={berger} alt={'company logo'} />
            <img src={ministry} alt={'company logo'} />
            <img src={amen} alt={'company logo'} />
        </div>
    </div>
  )
}

export default Companies