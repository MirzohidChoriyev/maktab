import React, {useEffect} from 'react'
import "./Topbar.css"
import {Link} from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import $ from "jquery";

function Topbar(){

    const Toggle = () => {
        $(".bars-icons").click(() => {
            $(".sidebar").css({ left: "0px" });
        });
    };

    useEffect(() =>{
        Toggle();
    }, [])

    return(
        <div>
            <Sidebar />
            <div className="navbar-content">
                <div className="navbar-menu-icon">
                    <i className='fa fa-bars bars-icons'></i>
                </div>
                <div className="site-input-search">
                    <input type="text" id = "search-item" placeholder="Qidirish" />
                </div>
            </div>

            <div className="body-content">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="image-content">
                            <div className="image-div">
                                <img
                                    id="image"
                                    alt="Image"
                                    src="http://static.norma.uz/images/138882_f82480491ac024e3b36ba6d16656.jpg"
                                />
                            </div>
                            <div className="opacity-content"></div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="data-content">
                            <div className="data-item">
                                <div className="data-item1">
                                    <span id="data-title">Masalalarga urinib ko'ring</span>
                                    <Link to={`/class/${1}`}>
                                        <button id="data-btn">Kirish</button>
                                    </Link>
                                </div>
                                <div className="data-item2">
                                    <i className="fa fa-question-circle data-icons"></i>
                                </div>
                            </div>

                            <div className="data-item">
                                <div className="data-item1">
                                    <span id="data-title">Masalalaringizni yuboring</span>
                                    <Link to={`/class/${1}`}>
                                        <button id="data-btn">Kirish</button>
                                    </Link>
                                </div>
                                <div className="data-item2">
                                    <i className="fa fa-share data-icons"></i>
                                </div>
                            </div>

                            <div className="data-item">
                                <div className="data-item1">
                                    <span id="data-title">Barcha test savollari</span>
                                    <Link to={`/class/${1}`}>
                                        <button id="data-btn">Kirish</button>
                                    </Link>
                                </div>
                                <div className="data-item2">
                                    <i className="fa fa-question-circle data-icons"></i>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} export default Topbar;