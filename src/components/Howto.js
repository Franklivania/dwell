import React from 'react'
import '../sass/Howto.scss'
import house from '../assets/house.png'

const Howto = () => {
  return (
    <div className='howto'>
        <h2>How it works</h2>
        <p>
        Here is a step by step process to acquire your very own Dwell <br />
        State Pride Home!.
        </p>
        <div className="container">
            <div className="left">
                <div className="box 1"></div>
                <div className="box 2"></div>
                <img src={house} alt="" />
            </div>
        </div>

        <div className="text">

        </div>
    </div>
  )
}

export default Howto