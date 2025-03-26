import React from 'react'
import './keyfeatures.css'
import icon1 from "../../assets/keyicon1.png"
import icon2 from "../../assets/keyicon2.png"
import icon3 from "../../assets/keyicon3.png"
import icon4 from "../../assets/keyicon4.png"

function keyFeatures() {
  return (
    <div className='container mt-5 pt-5 '>
        <div className='headkey text-center'
        > KEY FEATURES YOU'LL LOVE </div>

        <div className='d-flex flex-wrap mt-3'>
            <div className='keybox'> 
                <div>
                    <img src={icon1} width={80} alt="sda"/>
                    <div className='fw-bold mt-3'>Real-Time Monitoring</div>
                    <div>Track your breathing  metrics like CO2 concentration, breathing rate, and rhythm</div>
                </div>
            </div>
            <div className='keybox'> 
                <div>
                    <img src={icon2} width={90} alt="sda"/>
                    <div className='fw-bold mt-3'>Real-Time Monitoring</div>
                    <div>Track your breathing  metrics like CO2 concentration, breathing rate, and rhythm</div>
                </div>
            </div>
            <div className='keybox'> 
                <div>
                    <img src={icon3} width={60} alt="sda"/>
                    <div className='fw-bold mt-3'>Real-Time Monitoring</div>
                    <div>Track your breathing  metrics like CO2 concentration, breathing rate, and rhythm</div>
                </div>
            </div>
            <div className='keybox'> 
                <div>
                    <img src={icon4} width={50} alt="sda"/>
                    <div className='fw-bold mt-3'>Real-Time Monitoring</div>
                    <div>Track your breathing  metrics like CO2 concentration, breathing rate, and rhythm</div>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default keyFeatures