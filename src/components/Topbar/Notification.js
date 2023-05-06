import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import Sidebar from '../Sidebar/Sidebar';
import "./Notification.css"  
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { url } from '../Utils/Api/Api';

function Notification() {
  const [data, setData] = useState([]);
   
  const data_get_all = () => {
      axios({
          url: `${url}/notification/getall`,
          method: 'GET'
      }).then((res) => setData(res.data.object))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
      data_get_all();
  }, []);

  const [filter, setFilter] = useState("");
  const searchText = (event) => {
    setFilter(event.target.value);  
  };

  const Toggle = () => {
    $(".news-bars").click(() => {
      $(".sidebar").css({ left: "0px" });
    });
  };

  useEffect(() => {
    Toggle();
  }, []);

  return (
    <div style={{backgroundColor: 'rgb(250, 250, 250)', minHeight: '100vh', height: 'auto'}}>  
        <Sidebar />  
        <div className = "notification-container">
       
        <div className="news-topbar-container">
        <div className="news-topbar">
          <div className="news-bars">
            <i class="fa fa-bars"></i>
          </div>
          <div className="news-title">
            <span>O'zingizni sinab ko'ring</span>
          </div>
          <div className="news-search">
            <input
              type="search"
              placeholder="Sinflarni qidiring"
              onChange={searchText.bind(this)}
              className="news-search-item"
            />
            <i class="fa fa-search fa-search-icon"></i>
          </div>
        </div>
        </div>

        <div className='notification-item'>
            <Row>
                {
                    data.map((item, key) => (
                <Col sm = {12} md = {6} lg = {4}>
                   <div className = "note-item">
                     <div id = "note-title">
                       <span>{item.date}</span>    
                     </div>
                     <div id = "note-body">
                        {item.text}  
                     </div>
                   </div>
                </Col>
                    ))
                }

            </Row>
        </div>
        
        </div>
    </div>
  )
}

export default Notification