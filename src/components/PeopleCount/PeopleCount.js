import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "./PeopleCount.css"

function PeopleCount() {
    return (
        <div className="p-count">
            <div className="p-container">  
                <Row>
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
