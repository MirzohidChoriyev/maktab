import React from "react";
import { Col, Row } from "react-bootstrap";
import "./ScienceAdd.css";

const ScienceAdd = () => {
  return (
    <div className="class-add">
      <div className="class-add-title" style={{ color: "rgb(100, 100, 100)" }}>
        <span>Science add activation</span>
        <button type="submit" class="btn btn-success" disabled>
          Data storage
        </button>
      </div>
      <div className="class-add-container">
        <div className="class-add-body">
          <form>
            <Row>
              <Col lg={6} md={12} sm={12}>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="class-form-label">
                    Enter the science name
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Matematika"
                  />
                </div>
              </Col>

              <Col lg={6} md={12} sm={12}>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="class-form-label">
                    Science serial number
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </Col>
              <Col lg={6} md={12} sm={12}>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="class-form-label">
                    Enter the science name
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="on">Activation of science</option>
                    <option value="off">Not activating science</option>
                  </select>
                </div>
              </Col>
              <Col lg={6} md={12} sm={12}>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="class-form-label">
                    Enter more information
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="......"
                  />
                </div>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ScienceAdd;
