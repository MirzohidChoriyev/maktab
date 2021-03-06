import { data } from "jquery";
import React, { useEffect, useState } from "react";
import "./QuizTest.css";
import { formatTime } from "../HardTests/Content/utils";
function QuizTestScore({ data, dedlineTime, setVisible, sanagich, change }) {

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
            <span onClick={() => setVisible(true)}>Chiqish</span>
          </div>
        </div>

        <div className="qs-body">
          <div className="qs-fan">
            <span id="qs-fan-item">
              {/*{datajson[localStorage.getItem("fanIndexId")].categorytitle}*/}
            </span>
            <span id="qs-fan-count">
              <span>{sanagich < 10 ? "0" + sanagich : sanagich}</span>
              <span>/</span>
              <span>{data.length < 10 ? "0" + data.length : data.length}</span>
            </span>
          </div>
          <div className="qs-btn-container">
            {data.map((item, index) => {
              return (
                <button
                  className={
                    change[index].answerItem !== "belgilanmagan"
                      ? "qs-btn qs-black"
                      : "qs-btn qs-none"
                  }
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizTestScore;
