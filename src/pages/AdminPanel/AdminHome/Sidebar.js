import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "./Sidebar.css";

function Sidebar({ eni }) {
  return (
    <div className="sidebar-ad">
      <div className="sidebar-ad-container" style={{ width: eni }}>
        <div className="sidebar-menu-ad">
          <div className="sidebar-menu-ad-logo">
            <Link to="/" style={{ cursor: "pointer", color: "white" }}>
              <i className="fa fa-edit"></i>
              {eni === "300px" && <span>Admin Panel</span>}
            </Link>
          </div>
          <ul>
            <Link to="/" id="speciallink">
              <li className="sidebar-ad-space">
                <span>
                  <span className="sidebar-li-icon">
                    <i className="fa fa-home"></i>
                  </span>
                  {eni === "300px" && (
                    <span className="sidebar-li-text">Dashboard</span>
                  )}
                </span>
              </li>
            </Link>
            <Link to="/allusers" id="speciallink">
              <li>
                <span>
                  <span className="sidebar-li-icon">
                    <i className="fa fa-users"></i>
                  </span>
                  {eni === "300px" && (
                    <span className="sidebar-li-text">Site users table</span>
                  )}
                </span>
              </li>
            </Link>
            <Link to="/statistics" id="speciallink">
              <li>
                <span className="sidebar-li-icon">
                  <i className="fa fa-bar-chart"></i>
                </span>
                {eni === "300px" && (
                  <span className="sidebar-li-text">
                    Registration statistics
                  </span>
                )}
              </li>
            </Link>
            <Link to="/classadd" id="speciallink">
              <li>
                <span className="sidebar-li-icon">
                  <i class="fa fa-list-ol"></i>
                </span>
                {eni === "300px" && (
                  <span className="sidebar-li-text">Class add activation</span>
                )}
              </li>
            </Link>
            <li>
              <span className="sidebar-li-icon">
                <i class="fa fa-list-ol"></i>
              </span>
              {eni === "300px" && (
                <span className="sidebar-li-text">Science add activation</span>
              )}
            </li>
            <li>
              <span className="sidebar-li-icon">
                <i class="fa fa-list-ol"></i>
              </span>
              {eni === "300px" && (
                <span className="sidebar-li-text">Science add activation</span>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
