import React from 'react'
import "./Topbar.css"

function Topbar() {
    return (
        <div className="Topbar">
            <div className="topbar-container">
                <div className="topbar-left">
                    <span className="topbar-item">Savolingiz bo'lsa marhamat?</span>
                    <span className="topbar-item"><span className="topbar-icon"><i class="fa fa-phone"></i></span>+998 (99) 033 31 79</span>
                    <span className="topbar-item"><span className="topbar-icon"><i class="fa fa-envelope-o"></i></span>buxorobuxoro2001@gmail.com</span>
                </div>
                <div className="topbar-right">
                    <span className="topbar-item">Ro'yxatdan o'tish</span>
                    <span className="topbar-item">Login</span>
                    <span className="topbar-item-search"><i className="fa fa-search"></i></span>
                </div>
            </div>
        </div>
    )
}

export default Topbar
