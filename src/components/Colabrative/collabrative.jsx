import React from 'react'
import logo1 from "../../assets/images (1) (1).png"
import logo2 from "../../assets/air.png"
import logo3 from "../../assets/conspire logo_transparent.avif"
import logo4 from "../../assets/Cone.png"

function collabrative() {
  return (
    <div className='container mt-3'>
        <div className='d-flex justify-content-evenly align-items-center row'>
            <div className='col d-flex justify-content-evenly align-items-center'>
            <img src={logo1}  height={150} alt="logo1"/>
            </div>
            <div className='col d-flex justify-content-evenly align-items-center'>
            <img src={logo2} height={100} alt="logo1"/>
            </div>
            <div className='col d-flex justify-content-evenly align-items-center'>
            <img src={logo4}  height={100} alt="logo1"/>
            </div>
            <div className='col d-flex justify-content-evenly align-items-center'>
            <img src={logo3}  height={100} alt="logo1"/>
            </div>
            
          
            


           

        </div>

    </div>
  )
}

export default collabrative