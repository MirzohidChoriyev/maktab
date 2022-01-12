import { Button } from "antd";
import React, { useRef, useState, useEffect } from "react";
import $ from 'jquery'
import "./QuizTest.css";

function QuizTestMain({
  quiz,
  answers,
  setAnswers,
  quizlength,
  endStep,
  setEndStep,
}) {
  const [selected, setSelected] = useState([]);
  const [answersSort, setAnswersSort] = useState([]);
  const [aStep, setAstep] = useState(1);
  const [bStep, setBstep] = useState(1);
  const [cStep, setCstep] = useState(0);
  console.log(endStep);

  const onChangeInput = (e, i) => {
  
  // quiz.forEach((item, i)=>{
  //   return(
  //     e.target.name === `answer${i}` ? $('.qm-label').css({"background-color": 'rgb(228, 122, 80)'}) : ""
  //   )
  // })
    

    console.log(e.target.name, e.target.value);
    setSelected((selected) => [
      ...selected,
      {
        indexItem: i,
        nameItem: e.target.name,
        answerItem: e.target.value,
        questionItem: quiz[i].question.savol,
      },
    ]);
  };

  const quizEndHandler = () => {
    console.log("Tugadi");
    setAnswersSort(
      selected.sort(function (a, b) {
        return a.indexItem - b.indexItem;
      })
    );
    setAstep(2);
  };

  const answerFilter = () => {
    const ids = answersSort.map((o) => o.indexItem);
    const filtered = answersSort.filter(
      ({ indexItem }, e) => !ids.includes(indexItem, e + 1)
    );
    setBstep(2);
    setAnswers(filtered);
  };
  useEffect(() => {
    answerFilter();
  }, [aStep]);

  useEffect(() => {}, []);

  console.log("answers", answers);

  return (
    <div>
      <div className="button-end-quiz">
        <Button type="primary" onClick={quizEndHandler}>
          Yakunlash
        </Button>
      </div>
      {quiz.map((quizItem, index) => (
        <div className="quiztest-main">
          <div className="qm-container">
            <div className="qm-item">
              <div className="qm-item-question">
                <span id="qm-number">{index + 1}. </span>
                <span id="qm-question">{quizItem.question.savol}</span>
              </div>
              <div className="qm-question-container">
                {quiz[index].question.choices.map((choice, i) => (
                  <div className="qm-item-answer">
                    <label className="qm-label" key={i}>
                      <input
                        type="radio"
                        id="qm-label-input"
                        value={choice}
                        key={i}
                        name={`answer${index}`}
                        onChange={(e) => onChangeInput(e, index)}
                      ></input>
                      <span id = "qm-answer">{choice}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuizTestMain;
