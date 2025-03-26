import React from 'react'
import "./homepage.css"
import capimage from "../../assets/image1.png"

function homePage() {

    
    return (
        <div className='backhome '>
            <div className='container'>
                <div className='headoneb'>TRANSFORM YOUR LIFE WITH THE REVOLUTIONARY <br></br> CAPNOTRAINER&#174; GO</div>

                <div className='d-flex justify-content-between align-items-center row'>
                    <div className='col'>
                        <h6 className='head2'> Breathe Smarter, Live Better</h6>
                        <section className='text-white mb-3'>
                            Breathing is more than just an unconscious action--it's as foundation of health, performance, and emotional ell-beeing. But hat if your breathing habits are silently holding you back? Enter the Capno Trainer&#174; Go, the groundbreaking tool that merges science, physchology, and technology to revoluationize your breathing habits and transform you life.
                        </section>
                    </div>
                    <div className='col'>
                        <img className='imagesha' src={capimage} height="auto" alt="image" />
                    </div>
                </div>
            </div>



        </div>
    )
}

export default homePage