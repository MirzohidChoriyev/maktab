import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-logo">
            <span className="navbar-logo-icon">
              <i class="fa fa-graduation-cap"></i>
            </span>
            <span className="navbar-logo-text">MAKTAB</span>
          </div>
        </div>
        <div className="navbar-right">
          <Link to="/classes" style={{ color: "white" }}>
            <span className="navbar-item">TESTLAR</span>
          </Link>
          <Link to="/results">
            <span className="navbar-item">NATIJALAR</span>
          </Link>
          <span className="navbar-item">DARSLIKLAR</span>
          <span className="navbar-item">MAKTAB FAOLLARI</span>
          <Link to="/news" style={{ color: "white" }}>
            <span className="navbar-item">YANGILIKLAR</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
