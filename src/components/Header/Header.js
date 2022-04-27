
import React, {useEffect, useState} from 'react'
import "./Header.css"
import {Link} from 'react-router-dom'
import axios from "axios";
import {url} from "../Utils/Api/Api";

function Header(){
    const [data, setData] = useState([]);

    const data_get_all = () => {
        axios({
            url: `${url}/classes/getall`,
            method: 'GET'
        }).then(response => setData(response.data.object))
            .catch(err => console.error(err));
    }

useEffect(() =>{
    data_get_all();
}, [])

    return(
        <div>
            <div className="courses-content">
                <div className="course-content-title">
                    <span id="cs-text">Savollar va testlar</span>
                </div>
                <div className="course-body">
                    <div className="row">
                        {
                            data.map((item, i) =>(
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="course-item">
                                    <span id="course-title">{item.class_name}</span>
                                    <div id="course-body" style={{borderLeft: `4px solid ${'blue'}`}}>Matematika</div>
                                    <Link to={`/class/${1}`}>
                                        <button id="course-btn" style={{background: `${'darkorange'}`}}>Kirish</button>
                                    </Link>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
} export default Header;
