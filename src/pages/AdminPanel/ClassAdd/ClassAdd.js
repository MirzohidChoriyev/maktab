import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import $ from "jquery";
import "./ClassAdd.css";

const initialValue = {
  id: "",
  classname: "",
  active: "",
  discription: "Class add",
};

function ClassAdd() {
  const [data, setData] = useState(initialValue);
  const { id, classname, active, discription } = data;
  const [visible, setVisible] = useState("hidden");

  const inputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(e.target.value);

    let a = $(".class-add-fan-name").val();
    if (a !== 0) {
      $(".class-add-fan-name").css({ border: "1px solid rgb(0, 255, 55)" });
    }

    let b = $(".class-add-fan-id").val();
    if (b === 4) {
      $(".class-add-fan-id").css({ border: "1px solid rgb(0, 255, 55)" });
    }

    //    $(".class-add-button").css({ visibility: "visible" });
  };

  const saveButtonEquals = () => {};

  console.log(data);

  return (
    <div className="class-add">
      <div className="class-add-title" style={{ color: "rgb(100, 100, 100)" }}>
        <span>Class add activation</span>
        <button
          type="submit"
          onClick={() => saveButtonEquals()}
          className="btn btn-success class-add-button"
        >
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
                    type="text"
                    className="form-control class-add-fan-name"
                    name="classname"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Fan nomi"
                    maxLength={100}
                    onChange={(e) => inputChange(e)}
                    style={{
                      fontFamily: "verdana",
                    }}
                  />
                </div>
              </Col>

              <Col lg={6} md={12} sm={12}>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="class-form-label">
                    Science serial number
                  </label>
                  <input
                    type="number"
                    className="form-control class-add-fan-id"
                    name="id"
                    maxLength={4}
                    max={9999}
                    id="exampleInputEmail1"
                    onChange={(e) => inputChange(e)}
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
                    name="active"
                    onChange={(e) => inputChange(e)}
                  >
                    <option value="on">Activation of science(On)</option>
                    <option value="off">Not activating science(Off)</option>
                  </select>
                </div>
              </Col>
              <Col lg={6} md={12} sm={12}>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="class-form-label">
                    Enter more information
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    name="discription"
                    onChange={(e) => inputChange(e)}
                    aria-describedby="emailHelp"
                    placeholder="......"
                    defaultValue="Class Discription"
                  />
                </div>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ClassAdd;
