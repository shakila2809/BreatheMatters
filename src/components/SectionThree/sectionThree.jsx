import React from 'react'
import './section.css'
import Yoag from "../../assets/yoga.svg"
import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon 3.png"


function sectionThree() {
    return (
        <div className='container mt-4 '>
            <h2 className='text-center'>DISCOVER THE HIDDEN POWER OF YOUR BREATH</h2>
            <div className='row shadow mt-4'>
                <div className='col'>
                    <img src={Yoag} className='yogaimage' alt="da" />
                </div>
                <div className='col  sec2back p-0'>
                    <div className='p-4'>
                    <p >Your breathing isn't just about oxygen in and carbon dioxide out--it's a complex behaviour shaped by triggers, habits, and physiology. When misaligned, these habits can:</p>
                    <p className='d-flex'>
                        <div className='me-3'>
                            <img src={icon1} width={50} alt="icon1" />
                        </div>
                        <div>Compromise Your Health<br></br> Triggering anxiety, fatigue, and physical discomfort. </div>
                    </p>
                    <p className='d-flex'>
                        <div className='me-3'>
                            <img src={icon2} width={50} alt="icon1" />
                        </div>
                        <div>Disrupt your performance:<br></br> Causing focus deficits, memory issues, and suboptimal endurance. </div>
                    </p>
                    <p className='d-flex'>
                        <div className='me-3'>
                            <img src={icon3} width={50} alt="icon1" />
                        </div>
                        <div>Exacerbate existing conditions:<br></br>Like asthma, chronic pain, and even stress-related disorders.</div>
                    </p>
                    </div>
                    <div className='mt-5 text-white milleback p-3'>
                        Millions of people suffer the consequences of poor breathing habits. But you don't have to be one of them. With the CapnoTrainer® GO, you'll unlock a scientifically-backed pathway to breathing mastery
                    </div>
                    
                </div>
                

            </div>

        </div>
    )
}

export default sectionThree