import React from 'react'
import "./section.css"
import Flowicon from "../../assets/flowicon.png"
import record1n from "../../assets/record1.jpg"

function SectionFour() {
    return (
        <>
            <div className='container mt-5 pt-5.rowheight'>
                <div className='row rowheight'>
                    <div className='col-12 col-lg-6'>
                        <div className='hedfontpoer'>WHAT IS THE</div>
                        <div className='hedfontpoer'>CAPNOTRAINER&#174; GO?</div>

                        <div>The Capno Trainer&#174; GO isn't just a tool-it's your personal gateway to a healthier, more aligned you. Using advanced <span className='higlight'>capnography technology</span>, it provides real-time insights into your breathing behavior by measuring CO2 levels and visualizing your breathing patterns Paired with a guided learning framework, it empowers you to:</div>
                    </div>
                    <div className='col-12 col-lg-6 d-flex flex-column justify-content-center h-100'>
                        <div className='listbox mb-3 mt-3'> <img src={Flowicon} className='me-2' width={30} alt="icon" /> Identify and correct dysfunctional breathing habits.</div>
                        <div className='listbox mb-3'> <img src={Flowicon} className='me-2' width={30} alt="icon" /> Understand the triggers and motivations behind your habits.</div>
                        <div className='listbox mb-3'> <img src={Flowicon} className='me-2' width={30} alt="icon" /> Optimize your respiration for health, focus, and perfomance</div>
                    </div>

                </div>
            </div>
            <div className='sectionFive'>

                <div className='d-flex flex-column justify-content-center align-items-center pt-5 container'>
                    <div>
                        <div className='fw-bold'>EXPERINENCE THE</div>
                        <div className='hedfontpoer'>POWER OF CAPNOTRAINER&#174; GO?</div>
                    </div>
                    <div className='row d-flex justify-content-center align-items-center'>
                        <div className='col-12 col-lg-3 shadow p-0 cardview m-2'>
                           
                            <div className='imageoverdiv'>
                                <p>See Your Breating in Action</p>
                                <p>Gain an immediate understanding of your breating patterns. See how each breath impacts your health and peerformance with clear, dynamic visuals.</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 shadow p-0 cardview m-2'>
                            <div className='imageoverdiv'>
                                <p>See Your Breating in Action</p>
                                <p>Gain an immediate understanding of your breating patterns. See how each breath impacts your health and peerformance with clear, dynamic visuals.</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 shadow p-0 cardview m-2'>
                            <div className='imageoverdiv'>
                                <p>See Your Breating in Action</p>
                                <p>Gain an immediate understanding of your breating patterns. See how each breath impacts your health and peerformance with clear, dynamic visuals.</p>
                            </div>

                        </div>
                       

                    </div>


                </div>

            </div>
        </>
    )
}

export default SectionFour