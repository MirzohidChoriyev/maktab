import React, { useEffect } from 'react'
import "./Topbar.css"
import $ from 'jquery'

function Topbar() {
    
    const searchShow=()=>{
        $('.topbar-item-search').click(()=>{
            $('.topbar-search').slideToggle();   
        })
    }
    const barsShow=()=>{
        $('.sidebar-menu-span').click(()=>{
            $('.sidebar').css({'left': '0px'});
        })
    }
useEffect(()=>{
    searchShow();
    barsShow();
}, [])  
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
                <div className = "topbar-search">
                    <input type='search' placeholder='Qidiruv' className="topbar-search-item" />
                </div>
            </div> 

            <div className="sidebar-menu">
                <span className='sidebar-menu-span'>
                    <i class="fa fa-bars"></i>  
                </span>
            </div> 
        </div>
    )
}

export default Topbar
