import React from "react";
import "./TestsCategory.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function TestsCategory({ item, index, openTestModal }) {
  return (
    <Col lg={4} md={6} sm={12}>
      <div className="t-c-item">
        <div className="t-c-title">{item.science_name}</div>
        <div className="t-c-body">
          <div className="t-c-count">
            <span className="t-c-count-title">Savollar soni:</span>
            <span className="t-c-count-item">
              <span className="t-c-count-item-count">{item.test_counter}</span>
              <span className="t-c-count-item-space">ta</span>
            </span>
          </div>
          <div className="t-c-do">
            <span className="t-c-do-title">Kirilganlar soni:</span>
            <span className="t-c-do-item">
              <span className="t-c-do-item-count">{item.open_counter}</span>
              <span className="t-c-do-item-space">ta</span>
            </span>
          </div>
          <div className="t-c-open">
            <span className="t-c-open-title">Testni boshlash:</span>
            <span
              className="t-c-open-item"
              onClick={() => {
                openTestModal(index);
              }}
            >
              Kirish
            </span>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default TestsCategory;
