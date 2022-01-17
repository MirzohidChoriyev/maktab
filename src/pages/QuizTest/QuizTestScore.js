import { data } from "jquery";
import React, { useEffect, useState } from "react";
import "./QuizTest.css";
import { Button } from "antd";
import { datajson } from "../Tests/Data";
import { formatTime } from "../HardTests/Content/utils";

function QuizTestScore({ data, dedlineTime }) {
  return (
    <div className="quiztest-score">
      <div className="qs-container">
        <div className="qs-title">
          <div className="qs-toggle-btn">
            <i className="fa fa-angle-right"></i>
          </div>
          <div className="qs-time">
            <span id="qs-time-minutes">{formatTime(dedlineTime)}</span>
          </div>
          <div className="qs-close">
            <span>Chiqish</span>
          </div>
        </div>

        <div className="qs-body">
          <div className="qs-fan">
            <span id="qs-fan-item">{datajson[1].categorytitle}</span>
            <span id="qs-fan-count">
              <span>01</span>
              <span>/</span>
              <span>23</span>
            </span>
          </div>
          <div className="qs-btn-container">
            {data.map((item, index) => {
              return <button id="qs-btn">{index + 1}</button>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizTestScore;
