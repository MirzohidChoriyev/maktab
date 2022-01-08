import { Button } from "antd";
import React, { useEffect, useRef, useState } from "react";
import "./Question.css";

function Question1({
  data,
  activeQuestion,
  setActiveQuestion,
  lengthData,
  setStep,
  setAnswers,
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

  const nextQuiz = () => {
    if (selected === "") {
      return setError("Bitta variantni tanlashingiz shart!");
    } else {
      setAnswers((answers) => [
        ...answers,
        {
          questionItem: data.question,
          answerItem: selected,
        },
      ]);
      setSelected("");
    }

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
            {activeQuestion + 1}. {data.question}
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
                  />
                  <span className="easy-answer">{choice}</span>
                </label>
              </div>
            ))}
          </div>
          {error && <div className="easy-error">{error}</div>}
          <div className="easy-button">
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
