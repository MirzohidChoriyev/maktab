import React from 'react'
import "./Header.css"

function Header() {
    return (
        <div className="Header">
            <div className="header-image">
                <img src = "https://media.edutopia.org/styles/responsive_2880px_16x9/s3/masters/2019-10/PW2BXT.jpg" />
            </div> 
            <div className="header-opacity">
                  
            </div>  
            <div className="header-body">
                <span className="header-text">SHOFIRKON TUMANI UMUMIY</span>
                <span className="header-school">O'RTA TA'LIM MAKTABI</span>
                <span className="header-btn">KIRISH</span>
            </div> 

            <div className="header-page">
                 <div className="header-page-item">
                      <span className="header-page-icon"><i class = "fa fa-graduation-cap"></i></span>
                      <span className="header-span1">MAKTAB ZO'RLARI</span>
                      <span className="header-span2">MAKTAB</span>
                      <span className="header-more">Batafsil <i class="fa fa-angle-right"></i></span>
                 </div>
                 <div className="header-page-item">
                      <span className="header-page-icon"><i class = "fa fa-graduation-cap"></i></span>
                      <span className="header-span1">MAKTAB ZO'RLARI</span>
                      <span className="header-span2">MAKTAB</span>
                      <span className="header-more">Batafsil <i class="fa fa-angle-right"></i></span>
                 </div>
                 <div className="header-page-item">
                      <span className="header-page-icon"><i class = "fa fa-graduation-cap"></i></span>
                      <span className="header-span1">MAKTAB ZO'RLARI</span>
                      <span className="header-span2">MAKTAB</span>
                      <span className="header-more">Batafsil <i class="fa fa-angle-right"></i></span>
                 </div>  
            </div>  
        </div>
    )
}

export default Header
