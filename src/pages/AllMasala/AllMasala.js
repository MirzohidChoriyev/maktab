import React from 'react'
import { Link } from 'react-router-dom'
import "./AllMasala.css"

function AllMasala() {
  return (
    <div>
        <div className='allmasala-container'>  
        <div className="news-topbar-container">
                    <div className="news-topbar">
                        <div className="news-bars">
                            <i className="fa fa-bars"></i>
                        </div>
                        <div className="news-title">
                            <span>Savollaringizni yuboring</span>
                        </div>   
                        <div className="news-search">
                            
                        </div>
                    </div>
                </div>
        </div>
        <div className='body-to-back'>
            <Link to = "/"><button className='back-button'>Orqaga</button></Link>     
        </div>
    </div>   
  )
}

export default AllMasala