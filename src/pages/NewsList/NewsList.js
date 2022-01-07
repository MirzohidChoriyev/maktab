import React from "react";
import "./NewsList.css";
import Navbar from "../../components/Navbar/Navbar";
import News from "../../components/News/News";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";

function NewsList() {
  return (
    <div className="n">
      <Sidebar />
      <News />
    </div>
  );
}

export default NewsList;
