import React, {useEffect, useState} from 'react'
import "./Topbar.css"
import {Link} from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import $ from "jquery";
import axios from "axios";
import {url} from "../Utils/Api/Api";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import {AiFillAppstore} from "@react-icons/all-files/ai/AiFillAppstore";
import {FiEdit} from "@react-icons/all-files/fi/FiEdit";
import {MdSendAndArchive} from "react-icons/all";
import {BiMailSend} from "@react-icons/all-files/bi/BiMailSend";
import {BsCardChecklist} from "@react-icons/all-files/bs/BsCardChecklist";
import Message from './Message';

function Topbar(){
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(false);

    const data_get_all = () => {
        axios({
            url: `${url}/main/getall`,
            method: 'GET'  
        }).then(response => setData(response.data.object))
            .catch(err => console.error(err));
        console.log(data);
    }

    useEffect(() =>{
        data_get_all();
    }, [])

    const Toggle = () => {
        $(".bars-icons").click(() => {
            $(".sidebar").css({ left: "0px" });
        });
    };

    useEffect(() =>{
        Toggle();
    }, [])

    return(
        <div style={{backgroundColor: '#f5f6fa'}}>
            <Sidebar />
            <div className="navbar-content">
                <div className="navbar-menu-icon">
                    <i className='fa fa-bars bars-icons'></i>
                </div>
                <div className = "user-class-container">
                    <span className="user-icon-class"><i className="fa fa-user-o fa-user-icons"></i></span>
                    <span className = "user-name">CHORIYEV MIRZOHID<span><i className="fa fa-angle-down" style={{marginLeft: '3px'}}></i></span></span>
                    <Link to = "/notification">
                    <span className = "user-settings">
                        <span><i className="fa fa-bell-o" style={{marginLeft: '3px'}}></i></span>
                        <span id = "fa-icons-note">1</span>
                    </span>
                    </Link>
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

                            <div className='message-content'>
                                <span id = "message-span" title = "Xabar yuborish" onClick={() => setVisible(true)}>
                                    <i className='fa fa-commenting-o fa-message-icons'></i>   
                                </span>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="data-content">
                            {   
                                data.map((item, index) =>(
                                    <div className="data-item" style={{borderTop: `3px solid ${item.color}`}}>
                                        <div className="data-item1">
                                            <span id="data-title">{item.name}</span>
                                            <Link to={item.link}><button id="data-btn">Kirish</button>

                                            </Link>
                                        </div>
                                        <div className="data-item2">
                                            {
                                                'icon1' === item.icon && <FiEdit className="react-icons" />
                                            }
                                            {
                                                'icon2' === item.icon && <BiMailSend className="react-icons" />
                                            }
                                            {
                                                'icon3' === item.icon && <BsCardChecklist className="react-icons" />
                                            }
                                        </div>
                                    </div>
                                ))
                            }   
                        </div>
                    </div>
                </div>
            </div>

            <Message setVisible={setVisible} visible={visible} />
        </div>
    );
} export default Topbar;
