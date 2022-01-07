import React from "react";
import "./Teachers";
import { Col } from "react-bootstrap";
import Item from "antd/lib/list/Item";

function Teach({ item, index }) {
  return (
    <div className="teacher-cards" style={{ textAlign: "center" }}>
      <img className="teacher-cards-image" src={item.image} />
      <div className="teacher-cards-title">
        <div className="teacher-title-span" style={{ textAlign: "center" }}>
          <span className="teacher-icon" style={{ textAlign: "center" }}>
            <img src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F669868153%2F0x0.jpg%3Ffit%3Dscale" />
          </span>
          <span className="teacher-bookname">{item.learn}</span>
          <span className="teacher-bookcount">{item.learnclass}</span>
        </div>

        <div className="teacher-eye">
          <span className="teacher-count">
            <i class="fa fa-eye eye1"></i>
            <span className="teacher-eye-count">{item.eyecount}</span>
          </span>
          <span className="teacher-check">
            <i class="fa fa-check check"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Teach;
