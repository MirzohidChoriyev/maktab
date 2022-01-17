import React, { useEffect } from "react";
import { formatTime } from "../../HardTests/Content/utils";
import "../../HardTests/Content/Check.css";
import { Button } from "antd";

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
                    {data[index].question.answer !== result.answerItem && (
                      <p className="check-link  p-2 mt-2 has-text-white">
                        To'g'ri javob: {data[index].question.answer}
                      </p>
                    )}
                  </li>
                </div>
              ))}
            </ul>
            <div className="check-check">
              <p>Test uchun ketgan vaqt: {formatTime(time)}</p>
              <p>Savollar soni: {data.length} ta</p>
              <p>To'g'ri javoblar soni: {natija} ta</p>

              <p>
                Umumiy natijangiz: {Math.floor((natija / data.length) * 100)}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizResult;
