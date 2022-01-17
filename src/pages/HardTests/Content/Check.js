import React from "react";
import { Button } from "antd";
import "./Check.css";
import { formatTimeStr } from "antd/lib/statistic/utils";
import { formatTime } from "./utils";
import { Link } from "react-router-dom";

function Check({ data, results, time, natija, setStep }) {
  return (
    <div className="check">
      <div className="check-container">
        <div className="check-head">
          <Button type="primary" danger onClick={() => setStep(1)}>
            Bosh sahifa
          </Button>
        </div>
        <div className="check-body">
          <ul style={{ padding: "0px" }}>
            {results.map((result, index) => (
              <div className="check-content">
                <li style={{ listStyle: "none" }}>
                  <p className="check-question">
                    <strong>
                      {index + 1}.{data[index].question}
                    </strong>
                  </p>
                  <p
                    className={
                      data[index].answer === result.answerItem
                        ? "check-result has-background-success p-2 mt-2 has-text-white"
                        : "check-danger has-background-danger p-2 mt-2 has-text-white"
                    }
                  >
                    {result.answerItem}{" "}
                    <i
                      class={
                        data[index].answer === result.answerItem
                          ? "fa fa-check check-icon"
                          : "fa fa-close check-icon"
                      }
                    ></i>
                  </p>
                  {data[index].answer !== result.answerItem && (
                    <p className="check-link has-background-link p-2 mt-2 has-text-white">
                      To'g'ri javob: {data[index].answer}
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
            <Button
              className="button-download"
              type="primary"
              style={{ background: "green" }}
            >
              <i class="fa fa-download" style={{ marginRight: "5px" }}></i>
              Yuklab olish
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Check;
