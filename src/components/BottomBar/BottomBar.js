import React, { useEffect } from "react";
import "./BottomBar.css";
import $ from "jquery";
import { Link } from "react-router-dom";

function BottomBar() {
  return (
    <div className="bottombar">
      <div className="bottom-container">
        <Link to="/questionget" style={{ color: "white" }}>
          <span className="bottom-item">
            <i class="fa fa-question-circle-o bottom-question"></i>
            <span>Savol va takliflar uchun</span>
          </span>
        </Link>
        <span className="bottom-item">
          <span className="bottom-icon">
            <i class="fa fa-phone bottom-phone"></i>
          </span>
          <span>+998 (99) 033 31 79</span>
        </span>
      </div>
    </div>
  );
}

export default BottomBar;
