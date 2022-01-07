import React, { useState } from "react";
import "./SchoolActive.css";
import { Col, Modal, ModalBody } from "react-bootstrap";
import Item from "antd/lib/list/Item";
import { datajson } from "./Data";
import $ from "jquery";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

function Active({ item, index, textModal, number }) {
  const [data, setData] = useState(datajson);

  return (
    <div className="active-cards" style={{ textAlign: "center" }}>
      <img className="active-cards-image" src={item.image} />
      <div className="active-cards-title">
        <div className="active-title-span" style={{ textAlign: "center" }}>
          <span className="active-bookcount" style={{ fontSize: "15px" }}>
            {item.about.substring(0, 43)}...
          </span>
          <span className="active-typeId">
            {item.typeId === 4500 ? "O'qituvchi" : "O'quvchi"}
          </span>
          <button
            onClick={() => {
              textModal(index);
            }}
            className="active-all-text"
          >
            Batafsil
          </button>
        </div>

        <div className="active-eye">
          <span className="active-icons">
            <i class="fa fa-book"></i>
          </span>
          <span className="active-icons">
            <i class="fa fa-book"></i>
          </span>
          <span className="active-icons">
            <i class="fa fa-bars"></i>
          </span>
          <span className="active-icons">
            <i class="fa fa-search"></i>
          </span>
          <span className="active-icons">
            <i class="fa fa-search"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Active;
