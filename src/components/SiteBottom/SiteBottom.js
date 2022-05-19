import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { url } from '../Utils/Api/Api';
import "./SiteBottom.css"
// import {MdPhoneAndroid} from "@react-icons/all-files/fi/MdPhoneAndroid";

function SiteBottom() {     
    const [json, setJson] = useState([]);

    const get_all_data = () => {
        axios({
            url: `${url}/data/getall`,
            method: 'get'
        }).then((res) => setJson(res.data.object))
        .catch((err) => console.log(err));
    }

    useEffect(() => {  
        get_all_data();
    }, []);

    return (
        <div className = "sitebottom">
            <span className='sitebottom-text'>Site haqida ma'lumot</span>
            <span className='sitebottom-number'><i className='fa fa-phone'></i><span id = "number-site">+998 (99) 033 31 79</span></span>
        </div>      
    )   
}
    
export default SiteBottom;