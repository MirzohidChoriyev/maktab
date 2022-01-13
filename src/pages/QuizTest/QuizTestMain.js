import React, { useRef, useState, useEffect } from "react";
import { Button, makeStyles } from "@mui/material";
import $ from "jquery";
import "./QuizTest.css";
import { Link } from "react-router-dom";
import { Modal } from "antd";

function QuizTestMain({
  quiz,
  answers,
  setAnswers,
  quizlength,
  endStep,
  setEndStep,
  setResults
}) {
  const [selected, setSelected] = useState([]);
  const [answersSort, setAnswersSort] = useState([]);
  const [aStep, setAstep] = useState(1);
  const [bStep, setBstep] = useState(1);
  const [cStep, setCstep] = useState(0);
  const [isVisible, setVisible] = useState(false);
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
    setEndStep(3);
  };

  const answerFilter = () => {
    const ids = answersSort.map((o) => o.indexItem);
    const filtered = answersSort.filter(
      ({ indexItem }, e) => !ids.includes(indexItem, e + 1)
    );
    setBstep(2);
    setResults(filtered);
  };
  useEffect(() => {
    answerFilter();
  }, [aStep]);

  return (
    <div>
      <div>
        <div className="button-end-quiz">
          <button
            className="end-quiz-button"
            size="small"
            variant="contained"
            color="primary"
            onClick={()=> setVisible(true)}
          >
            Yakunlash
          </button>
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
                        <span id="qm-answer">{choice}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal title = "Testni yakunlaysizmi" visible={isVisible} footer = {false} closable={false}>
           <Button variant = "contained" color = "success" size = "small" onClick={quizEndHandler}>Ha</Button>
           <Button style = {{marginLeft: '3px'}} variant = "contained" color = "info" size = "small" onClick = {()=> setVisible(false)}>Yo'q</Button>
      </Modal>
    </div>
  );
}

export default QuizTestMain;
