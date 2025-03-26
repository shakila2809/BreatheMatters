import React from 'react'
import './whatmakescapiono.css'
import sports from "../../assets/spotsimage.jpeg"

function whtaMakesCapino() {
    return (
        <div className='container pt-5 p-5 mb-5'>
            <div className='d-flex flex-wrap '>
                <div className=''>
                    <img src={sports} width={"100%"} className='imagecove' alt="icon" />
                </div>
                <div className='ms-4 secondiv p-3'>
                    <p className='hedfontwhat'>
                        WHAT MAKES THE CAPNOTRAINER&#174; GO DIFFERENT?
                    </p>
                    <p className='w-75'>Unlike Traditional breathing tools that focus on shallow techniques, the CapnoTrainer&#174; GO gose deeper. It integrates <span className='greencolor'>psychophysiology, behavioral analysis, and cutting-edge technologyv</span> to provide a complete understanding of you breath's role in health and perfomance. </p>
                    <div class="card shadow-lg leftalighnsecondiv p-2">
                        <div class="card-body">
                            <h4 className='greencolor'> "Breathing is behaviour. And behaviour can be changed. The CapnoTrainer&#174; helps you edit, optimize, and own your breath for life"</h4>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default whtaMakesCapino