import { Button} from "antd";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./TestAdd.css";

const TestAdd = () => {
  const [enter, setEnter] = useState("text");
  return (
    <div className="test-add">
      <div className="test-add-content-select">
          <Row>
            <Col lg = {6} md = {12} sm = {12}>
              <select id = "test-add-content-select1">
                <option value={12}>6 - sinf</option>
                <option value={12}>7 - sinf</option>
                <option value={12}>8 - sinf</option>
                <option value={12}>9 - sinf</option>
                <option value={12}>10 - sinf</option>
              </select>
            </Col>
            <Col lg = {6} md = {12} sm = {12}>
              <select id = "test-add-content-select1">
                <option value={12}>6 - sinf</option>
                <option value={12}>7 - sinf</option>
                <option value={12}>8 - sinf</option>
                <option value={12}>9 - sinf</option>
                <option value={12}>10 - sinf</option>
              </select>
            </Col>
          </Row>
      </div>
      <div className="test-add-container">
        
        <div className="test-add-question">
          <div className="test-add-question-item">
            
          <span id = "test_add_count">10</span>
            <div id = "test-add-div1">
            <span className="test-add-question-span">
              <i className="fa fa-edit test-add-question-icon"></i>
            </span>
            <span className="test-add-question-span">
              <i className="fa fa-image test-add-question-icon"></i>
            </span>
            <span className="test-add-question-span">
              <i className="fa fa-file test-add-question-icon"></i>
            </span>
            </div>
            <div className="text-add-answer-change">
            <select id = "text-add-change" disabled>
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
            </select>
        </div>
            <div id = "test-add-div2">
               <Button type = "primary" disabled>Question add</Button>
            </div>
          </div>
          <div id = "test-add-question-input-div">
            <textarea type="text" className="test-add-question-input" rows={6}></textarea>
          </div>
        </div>
        <Row>
          <Col lg = {6} md = {12} sm = {12}>
            <div className="text-add-answer">
                <span id = "text-add-span-answer">A</span>
                <textarea type = "text" rows = {4} id = "text-add-answer-item">
                    
                </textarea>
            </div>
          </Col>
          <Col lg = {6} md = {12} sm = {12}>
            <div className="text-add-answer">
            <span id = "text-add-span-answer">B</span>
                <textarea type = "text" rows = {4} id = "text-add-answer-item">
                    
                </textarea>
            </div>
          </Col>
          <Col lg = {6} md = {12} sm = {12}>
            <div className="text-add-answer">
            <span id = "text-add-span-answer">C</span>
                <textarea type = "text" rows = {4} id = "text-add-answer-item">
                    
                </textarea>
            </div>
          </Col>
          <Col lg = {6} md = {12} sm = {12}>
            <div className="text-add-answer">
            <span id = "text-add-span-answer">D</span>
                <textarea type = "text" rows = {4} id = "text-add-answer-item">
                    
                </textarea>
            </div>
          </Col>
        </Row>
        
      </div>
    </div>
  );
};

export default TestAdd;
