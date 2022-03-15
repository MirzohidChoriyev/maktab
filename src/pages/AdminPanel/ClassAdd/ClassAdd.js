import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import $ from "jquery";
import "./ClassAdd.css";
import { getData, saveData } from "../ClassAddContent/api";
import { message } from "antd";
import { useParams } from "react-router-dom";

const initialValue = {
  id: "",
  classname: "",
  active: "on",
  discription: "Class add",
};

function ClassAdd({ refId }) {
  const [data, setData] = useState(initialValue);
  const { id, classname, active, discription } = data;
  const [visible, setVisible] = useState("hidden");
  const [param, setParam] = useState(null);
  const [json, setJson] = useState([]);

  const inputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data.active);

    let a = $(".class-add-fan-name").val();

    let b = $(".class-add-fan-id").val();

    if (b.length === 4 && a.length !== 0) {
      setVisible("visible");
    } else {
      setVisible("hidden");
    }
  };

  const success = () => {
    message.success("This is a success message");
  };

  const saveButtonEquals = async () => {
    await saveData(data);
    $(".class-add-fan-name").val("");
    $(".class-add-fan-id").val("");
    setVisible("hidden");
    success();
  };

  return (
    <div className="class-add">
      <div className="class-add-title" style={{ color: "rgb(100, 100, 100)" }}>
        <span>Class add activation</span>
        <button
          type="submit"
          style={{ visibility: visible }}
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
                    placeholder="8989"
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
