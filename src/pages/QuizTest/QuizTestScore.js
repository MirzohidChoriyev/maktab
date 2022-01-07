import { data } from "jquery";
import React, { useState } from "react";
import "./QuizTest.css";
import { Button } from "antd";
import { datajson } from "../Tests/Data";

function QuizTestScore() {
  const pathtitle = window.location.pathname.split("/")[2];
  return (
    <div className="quiztest-score">
      <div className="qs-container">
        <div className="qs-title">
          <div className="qs-toggle-btn">
            <i className="fa fa-angle-right"></i>
          </div>
          <div className="qs-time">
            <span id="qs-time-minutes">00</span> <span> : </span>
            <span id="qs-time-seconds">00</span>
          </div>
          <div className="qs-close">
            <span>Chiqish</span>
          </div>
        </div>

        <div className="qs-body">
          <div className="qs-fan">
            <span id="qs-fan-item">{datajson[pathtitle].categorytitle}</span>
            <span id="qs-fan-count">
              <span>01</span>
              <span>/</span>
              <span>23</span>
            </span>
          </div>
          <div className="qs-btn-container">
            {[1, 2, 3, 33, 89, 90, 18, 26, 89, 25, 672, 89, 27, 27, 27].map(
              (item, index) => {
                return <button id="qs-btn">{index + 1}</button>;
              }
            )}
          </div>
        </div>
        <div className="qs-end">
          <Button type="primary">Testni yakunlash</Button>
        </div>
      </div>
    </div>
  );
}

export default QuizTestScore;
