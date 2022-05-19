import React, {useEffect, useState} from 'react';
import "./MasalaContainer.css"
import $ from "jquery";
import axios from "axios";
import {url} from "../../components/Utils/Api/Api";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Link } from 'react-router-dom';

function MasalaContainer(){
    const [data, setData] = useState([]);

    const data_get_all = () => {
        axios({
            url: `${url}/masala/getall`,
            method: 'GET'
        }).then((response) => setData(response.data.object))
            .catch(error => console.log(error));
        console.log("Data:", data);
    }

    useEffect(() => {
        data_get_all();
    }, []);

    
    const Toggle = () => {
        $(".news-bars").click(() => {
            $(".sidebar").css({ left: "0px" });
        });
    };

    const [filter, setFilter] = useState("");
  const searchText = (event) => {
    setFilter(event.target.value);
  };

  let dataSearch = data.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

    useEffect(() => {
        Toggle();
    }, []);

    return(
        <div style={{backgroundColor: '#f8f9fc', minHeight: '100vh', height: 'auto'}}>
            <div className="masala-container">
                <div className="news-topbar-container">
                    <div className="news-topbar">
                        <div className="news-bars">
                            <i className="fa fa-bars"></i>
                        </div>
                        <div className="news-title">
                            <span>Masalalarga urinib ko'ring</span>
                        </div>
                        <div className="news-search">
                            <input
                                type="search"
                                placeholder="Fanlarni qidiring"
                                className="news-search-item"
                                onChange={searchText.bind(this)}
                            />
                            <i className="fa fa-search fa-search-icon"></i>
                        </div>
                    </div>
                </div>

                <div className = "masalar">
                    {
                        dataSearch.map((item, key) => (
                    <div className="masala-item">
                        <div className="masala-title">
                            <div className="masala-user-data">
                                <span className="masala-user-image">
                                    {item.username.substring(0, 1)}
                                </span>
                                <span id = "masala-user-text">{item.username.toUpperCase()}</span>
                            </div>
                        </div>
                        <div className="masala-body">
                            {item.masala}
                        </div>     
                    </div>
                        ))
                    }
                   
                </div>  
            </div>
            <Sidebar />

        <div className='body-to-back'>
            <Link to = "/"><button className='back-button'>Orqaga</button></Link>     
        </div>
        </div>
    )
}
export default MasalaContainer;