import React from 'react'
import './realsuccess.css'

function realSuccess() {
    return (
        <div className='successrange'>
            <div className='container'>

                <p className='hedfontwho text-center pt-5 pb-3'> REAL SUCCESS STORIES
                </p>

                <div className='d-flex flex-wrap'>
                    <div className='realsuccess '>
                        <div class=" successback shadow">
                            <div class="fw-bold">
                                "I Thought i knew how to breath--unitl I used the CapnoTrainer&#174; GO. This device opened my eyes to habits i never realize were harming me. I feel more energized and focused than ever before!"
                            </div>
                        </div>
                        <div className='d-flex justify-content-center m-3'>
                            <div className='profileimage'>

                            </div>
                            <div className='ms-2'>
                                <div><strong>Amanda K</strong></div>
                                <div>Enterpreneur</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='realsuccess'>
                        <div class="successback shadow">
                            <div class="fw-bold">
                                "Aa a therapist, the CapnoTrainer&#174; GO has completely transformed how i work with clients. It's a game-changers in helping people trackle anixiety and performance issues."
                            </div>
                        </div>
                        <div className='d-flex justify-content-center m-3'>
                            <div className='profileimage2'>

                            </div>
                            <div className='ms-2'>
                                <div><strong>Dr. Michael J</strong></div>
                                <div>Clinical Psychologist</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default realSuccess