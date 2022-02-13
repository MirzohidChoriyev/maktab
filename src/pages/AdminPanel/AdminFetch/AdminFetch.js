import React from "react";
import { Col, Row } from "react-bootstrap";
import "./AdminFetch.css";

function AdminFetch() {
  return (
    <div className="adminfetch-ad">
      <div className="adminfetch-ad-container">
        <Row>
          <Col lg={3} md={4} sm={12}>
            <div className="adminfetch-ad-content-users-count adminfetch-ad-content">
              <div id="adminfetch-ad-content-text">
                <span id="adminfetch-ad-content-number">100</span>
                <span id="adminfetch-ad-content-icon">
                  <i class="fa fa-users"></i>
                </span>
              </div>
              <div>
                <span id="adminfetch-ad-content-users">Customers</span>
              </div>
            </div>
          </Col>
          <Col lg={3} md={4} sm={12}>
            <div className="adminfetch-ad-content-result-count adminfetch-ad-content">
              <div id="adminfetch-ad-content-text">
                <span id="adminfetch-ad-content-number">100</span>
                <span id="adminfetch-ad-content-icon">
                  <i class="fa fa-users"></i>
                </span>
              </div>
              <div>
                <span id="adminfetch-ad-content-users">Customers</span>
              </div>
            </div>
          </Col>
          <Col lg={3} md={4} sm={12}>
            <div className="adminfetch-ad-content-sciense-count adminfetch-ad-content">
              <div id="adminfetch-ad-content-text">
                <span id="adminfetch-ad-content-number">100</span>
                <span id="adminfetch-ad-content-icon">
                  <i class="fa fa-users"></i>
                </span>
              </div>
              <div>
                <span id="adminfetch-ad-content-users">Customers</span>
              </div>
            </div>
          </Col>
          <Col lg={3} md={4} sm={12}>
            <div className="adminfetch-ad-content-users-count adminfetch-ad-content">
              <div id="adminfetch-ad-content-text">
                <span id="adminfetch-ad-content-number">100</span>
                <span id="adminfetch-ad-content-icon">
                  <i class="fa fa-users"></i>
                </span>
              </div>
              <div>
                <span id="adminfetch-ad-content-users">Customers</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AdminFetch;
