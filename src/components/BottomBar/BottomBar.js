import React, { useEffect } from 'react'
import "./BottomBar.css"  
import $ from 'jquery'
import { Link } from 'react-router-dom'

function BottomBar() {  

    return (
        <div className="bottombar">
            <div className="bottom-container">
                    <Link to ="/questionget" style={{color: "white"}}>
                         <span className="bottom-item"><i class="fa fa-question-circle-o bottom-question"></i><span>Savolingiz bo'lsa marhamat?</span></span>
                    </Link>   
                    <span className="bottom-item"><span className="bottom-icon"><i class="fa fa-phone bottom-phone"></i></span><span>+998 (99) 033 31 79</span></span>
                    <span className="bottom-item"><span className="bottom-icon"><i class="fa fa-envelope-o bottom-email"></i></span><span>buxorobuxoro2001@gmail.com</span></span>
                    <Link to = "/createaccount" style={{color: "white"}}>
                       <span className="bottom-item"><i class="fa fa-address-card-o bottom-create" aria-hidden="true"></i><span>Ro'yxatdan o'tish</span></span>
                    </Link>     
                    <Link to = "/accauntlogin" style={{color: "white"}}>      
                        <span className="bottom-item"><i class="fa fa-user bottom-login"></i><span>Login</span></span>
                    </Link>  
                </div>
        </div>
    )
}

export default BottomBar
