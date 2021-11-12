import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <div className="Navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <div className="navbar-logo">
                        <span className="navbar-logo-icon"><i class="fa fa-graduation-cap"></i></span>
                        <span className="navbar-logo-text">MAKTAB</span>
                    </div>
                </div>  
                <div className="navbar-right">
                     <span className="navbar-item">ABOUT</span>
                     <span className="navbar-item">ABOUT</span>
                     <span className="navbar-item">ABOUT</span>
                     <span className="navbar-item">ABOUT</span>
                     <span className="navbar-item">ABOUT</span>
                     <span className="navbar-item">ABOUT</span>
                     <span className="navbar-item">ABOUT</span>
                     <span className="navbar-item">ABOUT</span>
                </div>
            </div>
        </div>
    ) 
}

export default Navbar
