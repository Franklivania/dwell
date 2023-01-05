import React from 'react'
import '../sass/Footer.scss'
import logo from '../assets/logo.png'
import foot from '../assets/foot.png'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="left">
                <img src={logo} alt="" />

                <p>
                At Dwellstate Pride, we can be your agent at 
                getting that real estate property appealing to 
                your tastes at the best competitive market rate 
                and from the best real estate market deals.
                </p>
            </div>
            <div className="right">
                <div className="company">
                    <h2>Company</h2>
                    <a href="/">Home</a>
                    <a href="/">Rent</a>
                    <a href="/">Agents</a>
                    <a href="/">About Us</a>
                    <a href="/">Contact Us</a>
                </div>

                <div className="support">
                    <h2>Support</h2>
                    <a href="/">Help Center</a>
                    <a href="/">Terms and Conditions</a>
                    <a href="/">Legal</a>
                    <a href="/">Privacy need</a>
                    <a href="/">Status</a>
                </div>

            </div>
        </div>

        <hr />

        <div className="foot">
            <div className="social">
                <a href=""><i class="fa-brands fa-youtube"></i></a>
                <a href=""><i class="fa-brands fa-linkedin"></i></a>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
                <a href=""><i class="fa-brands fa-twitter"></i></a>
            </div>

            <p>
                @copyright 2023 All rights reserved
            </p>
        </div>

        <img src={foot} alt="" className='footimg'/>
    </footer>
  )
}

export default Footer