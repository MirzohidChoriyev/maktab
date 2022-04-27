import React, {useEffect, useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import "./PeopleCount.css"
import {url} from "../Utils/Api/Api";
import axios from "axios";

function PeopleCount() {
    const [data, setData] = useState([]);

    const data_get_all = () => {
        axios({
            url: `${url}/users/getall`,
            method: 'GET'
        }).then(response => setData(response.data.object))
            .catch((error) => console.log(error));
    }

useEffect(() =>{
    data_get_all();
}, []);

    return (
        <div className="p-count">
            <div className="p-container">  
                <Row>
                     <Col lg = {3} md = {3} sm = {6}>   
                         <div className="count-item">
                              <span className="count-item-number">
                                   {data.length}
                              </span>  
                              <span className="count-item-title">
                                   Users
                              </span>  
                         </div>
                     </Col>
                     <Col lg = {3} md = {3} sm = {6}>   
                         <div className="count-item">
                              <span className="count-item-number">
                                   1000
                              </span>
                              <span className="count-item-title">
                              Users
                              </span>  
                         </div>
                     </Col>
                     <Col lg = {3} md = {3} sm = {6}>   
                         <div className="count-item">
                              <span className="count-item-number">
                                   1000
                              </span>
                              <span className="count-item-title">
                              Users
                              </span>  
                         </div>
                     </Col>
                     <Col lg = {3} md = {3} sm = {6}>   
                         <div className="count-item">
                              <span className="count-item-number">
                                   1000
                              </span>
                              <span className="count-item-title">
                                    Users
                              </span>  
                         </div>
                     </Col>
                </Row>
                </div>  
            </div>
    )
}

export default PeopleCount
