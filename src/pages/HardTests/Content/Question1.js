import { Button } from "antd";
import React, { useEffect, useRef, useState } from "react";
import "./Question.css";
import { formatTime } from "./utils";

function Question1({
  data,
  activeQuestion,
  setActiveQuestion,
  lengthData,
  setStep,
  setAnswers,
  time,
  dedline
}) {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const radioWrapper = useRef();

  const Func = () => {
    const findInputChange = radioWrapper.current.querySelector("input:checked");
    if (findInputChange) {
      findInputChange.checked = false;
    }
  };

  useEffect(() => {
    Func();
  }, [data]);

  const changeInput = (e) => {
    setSelected(e.target.value);
    if (error) {
      setError("");
    }
  };
  useEffect(()=>{
      if(dedline === 0){
         setStep(3);
      }
  }, [dedline])

  const nextQuiz = () => {
    if (selected === "") {
      return setError("Bitta variantni tanlashingiz shart!");
    }
      setAnswers((answers) => [
        ...answers,
        {
          questionItem: data.question,
          answerItem: selected,
        },
      ]);
      setSelected("");

    if (activeQuestion < lengthData - 1) {
      setActiveQuestion(activeQuestion + 1);
    } else {
      setStep(3);
    }
  };

  return (
    <div className="easy">
      <div className="easy-container">
        <div className="easy-question">
          <span className="easy-que">
            <span>{activeQuestion + 1}. </span> <span>{data.question}</span>
          </span>
          <div className="easy-content" ref={radioWrapper}>
            {data.choices.map((choice, index) => (
              <div className="easy-label-item">    
                <label className="easy-label">
                  <input
                    type="radio"
                    value={choice}
                    name="answer"
                    onChange={changeInput}
                    className="label-input"
                  />
                  <span className="easy-answer">{choice}</span>
                </label>
              </div>
            ))}
          </div>
          {error && <div className="easy-error">{error}</div>}
          <div className="easy-button">
            <div className={dedline > 15 ? "easy-time-item" : "easy-time-item text-danger"}>
            <i class="fa fa-clock-o" aria-hidden="true"></i> <span className="time-span">{formatTime(dedline)}</span>
            </div>
            <Button style={{ width: "100%" }} type="primary" onClick={nextQuiz}>
              Keyingi savolga o'tish
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question1;
