import { Button } from '@mui/material'
import React from 'react'
import "./QuizEnd.css"

function QuizEnd() {
    return (
        <div className='e-quiz'>
            <div className='e-quiz-content'>
                <div className='e-quiz-content-data'>
                <div className='e-title'>
                <p className="e-quiz-title">
                    <span>Natijangiz</span>
                </p>
                </div>
                <p className='e-quiz-p'>
                    <span>
                        Savollar soni: 
                    </span>
                    <span>
                        30
                    </span>
                </p>
                <p className='e-quiz-p'>
                    <span>
                    To'g'ri javoblar soni: 
                    </span>
                    <span>
                        30
                    </span>
                </p>
                <p className='e-quiz-p'>
                    <span>
                        Natijangiz: 
                    </span>
                    <span>
                        30
                    </span>
                </p>
                <p className='e-quiz-p'>
                    <span>
                        Test uchun berilgan vaqt: 
                    </span>
                    <span>
                        30
                    </span>
                </p>
                <p className='e-quiz-p'>
                    <span>
                        Sarflangan vaqt: 
                    </span>
                    <span>
                        30
                    </span>
                </p>
                <button className = "end-quiz-button"  style = {{background: 'green'}}>
                   Natijani ko'rish
                </button>
                <button className = "end-quiz-button" style = {{background: "royalblue", marginLeft:"5px"}}>
                   Ortga qaytish
                </button>
                </div>
            </div>
        </div>
    )
}

export default QuizEnd
