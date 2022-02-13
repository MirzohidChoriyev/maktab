import React from "react";
import AdminData from "../AdminData/AdminData";
import AdminFetch from "../AdminFetch/AdminFetch";
import Navbar from "../Navbar/Navbar";
import "./AdminHome.css";
import Sidebar from "./Sidebar";
import $ from "jquery";

function AdminHome({ setWeight }) {
  return (
    <div className="home-navbar-content">
      <div className="home-navbar-body-ad">
        <div className="home-navbar-container">
          <AdminFetch />
          <AdminData />
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
