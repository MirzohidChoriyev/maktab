import React, {useState, useEffect} from "react";
import { Col, Row } from "react-bootstrap";
import "./AdminFetch.css";
import {url} from "../../../components/Utils/Api/Api";
import axios from "axios";

function AdminFetch() {
  const [users, setUsers] = useState([]);
  const [classes, setClasses] = useState([]);
  const [sciences, setSciences] = useState([]);
  const [main, setMain] = useState([])

  const data_get_all = () => {
    axios({
      url: `${url}/users/getall`,
      method: 'GET'
    }).then((response) => setUsers(response.data.object))
        .catch(error => console.log(error));

    axios({
      url: `${url}/classes/getall`,
      method: 'GET'
    }).then((response) => setClasses(response.data.object))
        .catch(error => console.log(error));

    axios({
      url: `${url}/science/getall`,
      method: 'GET'
    }).then((response) => setSciences(response.data.object))
        .catch(error => console.log(error));

    axios({
      url: `${url}/main/getall`,
      method: 'GET'
    }).then((response) => setMain(response.data.object))
        .catch(error => console.log(error));
  }

  useEffect(() =>{
    data_get_all();
  }, [])

  return (
    <div className="adminfetch-ad">
      <div className="adminfetch-ad-container">
        <Row>
          <Col lg={3} md={4} sm={12}>
            <div className="adminfetch-ad-content-users-count adminfetch-ad-content">
              <div id="adminfetch-ad-content-text">
                <span id="adminfetch-ad-content-number">{users.length}</span>
                <span id="adminfetch-ad-content-icon">
                  <i class="fa fa-users"></i>
                </span>
              </div>
              <div>
                <span id="adminfetch-ad-content-users">Foydalanuvchilar</span>
              </div>
            </div>
          </Col>
          <Col lg={3} md={4} sm={12}>
            <div className="adminfetch-ad-content-result-count adminfetch-ad-content">
              <div id="adminfetch-ad-content-text">
                <span id="adminfetch-ad-content-number">{classes.length + main.length}</span>
                <span id="adminfetch-ad-content-icon">
                  <i class="fa fa-users"></i>
                </span>
              </div>
              <div>
                <span id="adminfetch-ad-content-users">Sinflar</span>
              </div>
            </div>
          </Col>
          <Col lg={3} md={4} sm={12}>
            <div className="adminfetch-ad-content-sciense-count adminfetch-ad-content">
              <div id="adminfetch-ad-content-text">
                <span id="adminfetch-ad-content-number">{sciences.length}</span>
                <span id="adminfetch-ad-content-icon">
                  <i class="fa fa-users"></i>
                </span>
              </div>
              <div>
                <span id="adminfetch-ad-content-users">Fanlar</span>
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
                <span id="adminfetch-ad-content-users">Savollar</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AdminFetch;
