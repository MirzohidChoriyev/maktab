import React from 'react'
import './AccauntLogin.css'

function AccauntLogin() {
    return (
        <div className="al-accaunt">
            <div className="al-container">
<div className="al-title-div">
    <span className="al-title">{"Login parolni kiriting".toUpperCase()}</span>
</div>
                <form className="al-form">
                    <label id = "al-fullname-label">LOGIN</label>
                    <div style={{position:'relative'}}>
                    <input className="al-fullname" id = "al-fullname" placeholder="Loginni kiriting" />
                    <i class="fa fa-user-o al-icon"></i>
                    </div>
                    <label id = "al-phone-label">PAROL</label> 
                    <div style = {{position: 'relative'}}> 
                    <input type="password" className="al-phone" id = "al-phone" placeholder="Parolni kiriting" />
                    <i class="fa fa-user-o al-icon"></i>
                    </div>  
                    <input className="al-button" id = "al-button" value = "KIRISH" />  
                </form>            
            </div>
        </div>  
    )
}

export default AccauntLogin
