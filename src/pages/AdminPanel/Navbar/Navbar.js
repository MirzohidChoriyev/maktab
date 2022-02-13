import { Button, Modal } from "antd";
import React, { useState } from "react";
import $ from "jquery";
import "./Navbar.css";

function Navbar({ setWeight }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="navbar-ad">
      <div className="navbar-container-ad">
        <div className="navbar-menu-ad">
          <span onClick={() => setWeight()} className="menu-ad-icon">
            <i className="fa fa-bars"></i>
          </span>
          <span className="menu-ad-text">Dashboard</span>
        </div>
        <div className="navbar-ad-search">
          <i className="fa fa-search navbar-search-icon"></i>
          <input placeholder="Qidiruv" className="navbar-ad-input" />
        </div>
        <div
          className="navbar-ad-admin"
          onClick={() => {
            setVisible(true);
          }}
        >
          <div className="navbar-ad-image">
            <img src="https://choriyevabout.netlify.app/image/mirzohid.jpg" />
          </div>
          <div className="navbar-ad-fullname">
            <span className="navbar-ad-name">Choriyev Mirzohid</span>
          </div>
        </div>
        <div>
          <Modal visible={visible} footer={false} closable={false}>
            <div className="navbar-admin-image-modal">
              <img src="https://choriyevabout.netlify.app/image/mirzohid.jpg" />
            </div>
            <div style={{ marginTop: "20px" }}>
              <Button onClick={() => setVisible(false)} type="primary" danger>
                Close
              </Button>
              <Button type="primary" style={{ marginLeft: "6px" }}>
                <i className="fa fa-phone" style={{ marginRight: "4px" }}></i>
                Call
              </Button>
              <Button type="primary" style={{ marginLeft: "6px" }}>
                Message
                <i className="fa fa-share" style={{ marginLeft: "4px" }}></i>
              </Button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
