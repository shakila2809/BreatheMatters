import React from 'react'
import "./navbar.css"
import logo from "../../assets/log.svg"

function navbar() {
    return (
        <>
        <div className='back'>
            <nav className=" container navbar navbar-light back">
                <div className='d-flex justify-content-between align-items-center w-100'>
                <div className="">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt=""  className="d-inline-block align-text-top" />
                        {/* Bootstrap */}
                    </a>
                </div>
                <div>
                    <button className='btn buttoncolor'>Book Now</button>
                </div>
                </div>
                
            </nav>
        </div>
        </>
    )
}

export default navbar