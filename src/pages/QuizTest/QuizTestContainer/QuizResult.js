import React, { useEffect } from "react";
import { formatTime } from "../../HardTests/Content/utils";
import "./QuizResult.css";
import { Button } from "antd";
import { classUtils, statusUtils } from "./statusUtils";

function QuizResult({ data, results, setStep, time, natija }) {
  const windowDownload = () => {
    window.print();
  };

  return (
    <div>
      <div className="check">
        <div className="check-container">
          <div className="check-head">
            <span>
              <Button
                className="button-download"
                onClick={() => windowDownload()}
                id="download"
                type="primary"
              >
                <i class="fa fa-download" style={{ marginRight: "5px" }}></i>
                Yuklab olish
              </Button>
              <Button
                type="primary"
                danger
                onClick={() => setStep(1)}
                style={{
                  marginLeft: "3px",
                }}
              >
                Bosh sahifa
              </Button>
            </span>
          </div>
          <div className="check-body" id="invoice">
            <ul style={{ padding: "0px" }}>
              {results.map((result, index) => (
                <div className="check-content">
                  <li style={{ listStyle: "none" }}>
                    <p className="check-question">
                      <strong>
                        {index + 1}.{data[index].question.savol}
                      </strong>
                    </p>
                    {result.answerItem !== "belgilanmagan" && (
                      <p
                        className={
                          data[index].question.answer === result.answerItem
                            ? "check-result  p-2 mt-2 has-text-white"
                            : "check-danger  p-2 mt-2 has-text-white"
                        }
                      >
                        {result.answerItem}
                        <i
                          class={
                            data[index].question.answer === result.answerItem
                              ? "fa fa-check check-icon"
                              : "fa fa-close check-icon"
                          }
                        ></i>
                      </p>
                    )}
                    {result.answerItem !== "belgilanmagan" &&
                      data[index].question.answer !== result.answerItem && (
                        <p className="check-link  p-2 mt-2 has-text-white">
                          To'g'ri javob: {data[index].question.answer}
                        </p>
                      )}
                    {"belgilanmagan" === result.answerItem && (
                      <p className="check-secondary  p-2 mt-2 has-text-white">
                        Belgilanmagan
                      </p>
                    )}
                  </li>
                </div>
              ))}
            </ul>
            <div
              className={classUtils(Math.floor((natija / data.length) * 100))}
            >
              <p>
                <span>Test uchun ketgan vaqt:</span>{" "}
                <span>{formatTime(time)}</span>
              </p>
              <p>
                <span>Savollar soni:</span> <span>{data.length} ta</span>
              </p>
              <p>
                <span>To'g'ri javoblar soni:</span> <span>{natija} ta</span>
              </p>
              <p>
                <span>Natija statusi:</span>
                <span>
                  {statusUtils(Math.floor((natija / data.length) * 100))}
                </span>
              </p>

              <span className="final-check">
                Umumiy natijangiz: {Math.floor((natija / data.length) * 100)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizResult;
