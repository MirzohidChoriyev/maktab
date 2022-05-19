import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import $ from "jquery";
import "./ClassAdd.css";
import { getData, saveData } from "../ClassAddContent/api";
import {Button, message} from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";
import {url} from "../../../components/Utils/Api/Api";

const initialValue = {
  class_name: "",
  class_body: "",
  active: "on",
  other: "Information",
};

function ClassAdd({ setData_ref }) {
  const [classes, setClasses] = useState(initialValue);
  const { class_name, class_body, active, other } = classes;
  const [visible, setVisible] = useState("hidden");

  const inputChange = (e) => {
    setClasses({ ...classes, [e.target.name]: e.target.value });
    console.log(classes.active);

    let a = $(".class-add-class-name").val();

    let b = $(".class-add-class-body").val();

    if (b.length !== 0 && a.length !== 0) {
      setVisible("visible");
    } else {
      setVisible("hidden");
    }
  };

  const success = () => {
    message.success("Muvvafaqiyatli saqlandi");
  };

  const error = () => {
    message.error("Saqlashda xatolik yuz berdi");
  };

  const saveButtonEquals = async () => {
    let a = $(".class-add-class-name").val();

    let b = $(".class-add-class-body").val();

    if (b.length !== 0 && a.length !== 0) {
      axios({
        url: `${url}/classes/save`,
        method: "POST",
        data: classes
      }).then((response) => success())
          .catch(error => error());

      setData_ref("2");
    }

    $(".class-add-class-name").val("");
    $(".class-add-class-body").val("");
    setVisible("hidden");
  };

  return (
    <div className="class-add">
      <div className="class-add-title" style={{ color: "rgb(100, 100, 100)" }}>
        <span>Class add activation</span>
        <Button
          type="primary"
          onClick={() => saveButtonEquals()}
          style={{visibility: visible}}
        >
          Data storage
        </Button>
      </div>
      <div className="class-add-container">
        <div className="class-add-body">
          <form>
            <Row>
              <Col lg={6} md={12} sm={12}>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="class-form-label">
                   Class name
                  </label>
                  <input
                    type="text"
                    className="form-control class-add-class-name"
                    name="class_name"
                    id="exampleInputEmail1"
                    placeholder="Class name"
                    maxLength={100}
                    onChange={(e) => inputChange(e)}
                    style={{
                      fontFamily: "verdana"
                    }}
                  />
                </div>
              </Col>

              <Col lg={6} md={12} sm={12}>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="class-form-label">
                    Class body
                  </label>
                  <input
                    type="text"
                    className="form-control class-add-class-body"
                    name="class_body"
                    maxLength={100}
                    placeholder="Class body"
                    id="exampleInputEmail1"
                    onChange={(e) => inputChange(e)}
                  />
                </div>
              </Col>
              <Col lg={6} md={12} sm={12}>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="class-form-label">
                    Class active
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    name="active"
                    onChange={(e) => inputChange(e)}
                  >
                    <option value="on">On</option>
                    <option value="off">Off</option>
                  </select>
                </div>
              </Col>
              <Col lg={6} md={12} sm={12}>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="class-form-label">
                    Information
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    name="other"
                    onChange={(e) => inputChange(e)}
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
}

export default ClassAdd;
