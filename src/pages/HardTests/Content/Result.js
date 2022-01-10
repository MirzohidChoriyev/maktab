import { Button } from "antd";
import React, { useEffect, useState } from "react";
import "./Result.css";
import { formatTime } from "./utils";

function Result({ data, lengthData, results, resultCheck, time, setNatija }) {
  const [correct, setCorrect] = useState(0);

  const correactCount = () => {
    let count = 0;
    results.forEach((result, index) => {
      if (result.answerItem === data[index].answer) {
        count++;
        console.log("qhjaqjaqha");
      }
    });
    setCorrect(count);
    setNatija(count);
  };

  console.log(correct);

  useEffect(() => {
    correactCount();
  }, []);

  return (
    <div className="result">
      <div className="result-container">
        <div className="result-title">
          <span>Natijangiz</span>
        </div>
        <div className="result-con">
        <div className="result-p">
            <span className="result-p-title">Savollar soni:</span>
            <span>
              <strong>
                {lengthData} ta
              </strong>
            </span>
          </div>
          <div className="result-p">
            <span className="result-p-title">To'g'ri javoblar soni:</span>
            <span>
              <strong>
                {correct} ta
              </strong>
            </span>
          </div>
          <div className="result-p">
            <span className="result-p-title">Test natijangiz:</span>
            <span>
              <strong>{Math.floor((correct / lengthData) * 100)}%</strong>
            </span>
          </div>
          <div className="result-p">
            <span className="result-p-title">Test uchun ketgan vaqt:</span>
            <span>
              <strong>{formatTime(time)}</strong>
            </span>
          </div>
          <div className="result-p">
            <span className="result-p-title">Natija statusi:</span>
            <span>
              <strong>A'lo natija</strong>
            </span>
          </div>
          <div className="result-btn">
            <button type="primary" className="result-button-button" onClick={resultCheck}>
              Natijani ko'rish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
