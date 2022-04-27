import React from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom'

function Navbar(){
    return(
            <div className="navbar-container">
                <div className="navbar-links">
                    <ul>
                        <li>Testlar</li>
                        <li>Testlar</li>
                        <li>Testlar</li>
                        <li>Testlar</li>
                        <li>Testlar</li>
                    </ul>
                </div>

                <div className="navbar-user">
                    <span className="navbar-user-icon">
                        <i className='fa fa-user'></i>
                    </span>
                    <span className="navbar-user-item">
                        <Link to='/accauntlogin'>
                            Kirish
                        </Link>
                    </span>
                </div>
            </div>
    );
} export default Navbar;