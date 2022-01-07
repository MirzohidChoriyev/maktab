import React, { useRef, useState, useEffect } from "react";
import "./QuizTest.css";

function QuizTestMain({
  data,
  dataItem,
  index,
  lengthData,
  activeQuestion,
  setActiveQuestion,
  setAnswers,
}) {
  const radioWrapper = useRef();
  const [selected, setSelected] = useState("");

  useEffect(() => {}, []);

  const onChangeInput = (e) => {
    const findCheckedInput =
      radioWrapper.current.querySelector("input:checked");
    findCheckedInput.checked = true;
    console.log(findCheckedInput);
  };

  return (
    <div className="quiztest-main">
      <div className="qm-container">
        <div className="qm-item">
          <div className="qm-item-question">
            <span id="qm-number">{index + 1}. </span>
            <span id="qm-question">{dataItem.question.savol}</span>
          </div>
          <div className="qm-question-container" ref={radioWrapper}>
            {dataItem.question.choices.map((choice, i) => (
              <div className="qm-item-answer">
                <label className="qm-label" key={i}>
                  <input
                    type="radio"
                    id="qm-label-input"
                    value={choice}
                    key={i}
                    name="answer"
                    onChange={onChangeInput}
                  ></input>
                  <span>{choice}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizTestMain;
