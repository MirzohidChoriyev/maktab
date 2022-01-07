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
          <h4>Natijangiz</h4>
        </div>
        <div>
          <div className="result-p">
            <span className="result-p-title">Test natijangiz:</span>
            <span>
              <strong>
                {correct} of {lengthData}
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
          <div className="result-btn">
            <Button type="primary" onClick={resultCheck}>
              Natijani ko'rish
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
