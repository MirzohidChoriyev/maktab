import { Button, Card } from "antd";
import Item from "antd/lib/list/Item";
import { FlatButton, RadioButton } from "material-ui";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import quizdata from "../Data/CategoryData.json";
import "./Style.css";

function Category({ onQuizStart1 }) {
  const [data, setData] = useState(quizdata.data);
  console.log(data);
  const searchText = () => {};

  return (
    <div className="category">
      <div className="news-topbar-container" style={{ background: "crimson" }}>
        <div className="news-topbar">
          <div className="news-bars">
            <i class="fa fa-bars"></i>
          </div>
          <div className="news-title">
            <span>Qiyin darajadagi mantiqiy savollar</span>
          </div>
          <div className="news-search">
            <input
              type="search"
              placeholder="Fanlarni qidiring"
              className="news-search-item"
              onChange={searchText.bind(this)}
            />
            <i class="fa fa-search fa-search-icon"></i>
          </div>
        </div>
      </div>

      <div className="category-container">
        <Row>
          {data.map((item, index) => (
            <Col lg={4} md={6} sm={12}>
              <div className="class-t-item">
                <div className="class-t-title">
                  <span>{item.title}</span>
                </div>
                <div className="class-t-body">
                  <div className="class-t-count">
                    <span>Kirishlar soni:</span>
                    <span id="class-t-count">{item.eyecount} ta</span>
                  </div>
                  <div className="class-t-count">
                    <span>Savollar soni:</span>
                    <span id="class-t-count" className="sciense-class">
                      {item.questioncount} ta
                    </span>
                  </div>
                  <div className="class-t-count">
                    <span>Umumiy natijalar ko'rsatgichi:</span>
                    <span id="class-t-count" className="sciense-class">
                      {item.allresult} %
                    </span>
                  </div>

                  <div className="class-t-btn">
                    <span>Fanlarga kirish:</span>
                    <button
                      id="class-t-btn"
                      className="class-t-btn-item"
                      onClick={() => {
                        onQuizStart1(index);
                      }}
                    >
                      Kirish
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Category;
