import React from 'react'
import '../sass/Howto.scss'
import house from '../assets/house.png'
import file from '../assets/file.png'
import dollar from '../assets/dollar.png'
import shake from '../assets/shake.png'


const Howto = () => {
  return (
    <div className='howto'>
        <div className="circle"></div>
        <h2>How it works!</h2>
        <p>
        Here is a step by step process to acquire your very own Dwell <br />
        State Pride Home!.
        </p>
        <div className="container">
            <div className="left">
                <div className={`box one`}></div>
                <div className={`box two`}></div>
                <img src={house} alt="" />
            </div>

            <div className="right">
                <div className="obj home">
                    <img src={file} alt={'file'} />
                    <div className="text">
                        <h3>Find a home</h3>
                        <p>
                        Our properties are located at prime areas where by 
                        there won’t be problem with transportation 
                        </p>
                    </div>
                </div>
                <div className="obj pay">
                    <img src={dollar} alt={'dollar sign'} />
                    <div className="text">
                        <h3>Make payment</h3>
                        <p>
                        Our estates comes with good network, portable water, 
                        24hrs light and round the clock security.
                        </p>
                    </div>
                </div>
                <div className="obj make">
                    <img src={shake} alt={'heartshake'} />
                    <div className="text">
                        <h3>Make it official!</h3>
                        <p>
                        We have been in business for over 32 years,for client 
                        outside the country you can trust  us to deliver well. 
                        </p>
                    </div>
                </div>

                <div className="link">
                    <a href="/" className='start'>Get started</a>
                    <a href="/" className='more'>Learn more &nbsp; <i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>
        </div>

        <div className="diamond"></div>
    </div>
  )
}

export default Howto