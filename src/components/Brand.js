import React from 'react'
import '../sass/Brand.scss'
import agent from '../assets/agent.png'
import eye from '../assets/eye.png'
import home from '../assets/home.png'
import person from '../assets/person.png'
import thumbs from '../assets/thumbs.png'

const Brand = () => {
  return (
    <div className='brand'>
        <div className="top">
            <h1>
                What makes us <span>Different</span>
                <hr />
            </h1>
            <div className="circle"></div>
            <p>
                Check out our best service you can possibly 
                orders in building your company and don't 
                forget to ask via our email or our
                customer service if you are interested in using our services
            </p>
        </div>

        <div className="bottom">
            <div className="card">
                <img src={home} alt="" />
                <div className="text">
                    <h3>Extensive knowlege of the market</h3>
                    <p>
                    Firstly, we have comprehensive market knowledge 
                    of the Nigeria real estate market
                    </p>

                    <a href="/">Learn more &nbsp; <i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>
            <div className="card">
                <img src={person} alt="" />
                <div className="text">
                    <h3>Competent representation</h3>
                    <p>
                    Secondly, we give our clients the most competent 
                    representation in property sourcing, vetting and negotiations.
                    </p>

                    <a href="/">Learn more &nbsp; <i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>
            <div className="card">
                <img src={thumbs} alt="" />
                <div className="text">
                    <h3>Best deals in the market</h3>
                    <p>
                    Thirdly, we supply the best property 
                    deals in the market.
                    </p>

                    <a href="/">Learn more &nbsp; <i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>
            <div className="card">
                <img src={agent} alt="" />
                <div className="text">
                    <h3>We handle all Documentations</h3>
                    <p>
                    Fourthly, we handle all documentations 
                    and paperwork required for our client’s 
                    property choice while they dedicate their 
                    precious time to other activities.
                    </p>

                    <a href="/">Learn more &nbsp; <i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>
            <div className="card">
                <img src={eye} alt="" />
                <div className="text">
                    <h3>Attention to detail</h3>
                    <p>
                    And most importantly, we pay attention to 
                    every detail of our client’s property requests.
                    </p>

                    <a href="/">Learn more &nbsp; <i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Brand