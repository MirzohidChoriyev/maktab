import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TestsClassItem.css";

function TestsClassItem({ item, index }) {
  return (
    <Col lg={4} md={6} sm={12}>
      <div className="class-t-item">
        <div className="class-t-title">
          <span>{item.title}</span>
        </div>
        <div className="class-t-body">
          <div className="class-t-count">
            <span>Kirishlar soni:</span>
            <span id="class-t-count">{item.usecount} ta</span>
          </div>
          <div className="class-t-count">
            <span>Fanlar soni:</span>
            <span id="class-t-count" className="sciense-class">
              {item.scienseCount} ta
            </span>
          </div>
          <div className="class-t-btn">
            <span>Fanlarga kirish:</span>
            <Link to={`/class/${item.classId}`}>
              <button id="class-t-btn" className="class-t-btn-item">
                Kirish
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default TestsClassItem;
