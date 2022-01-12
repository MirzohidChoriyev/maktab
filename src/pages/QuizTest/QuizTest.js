import React, { useEffect, useState } from "react";
import "./QuizTest.css";
import QuizTestMain from "./QuizTestMain.js";
import QuizTestScore from "./QuizTestScore.js";
import { datajson } from "../Tests/Data";
import $ from "jquery";
import quizdata from "./TestsData.json";
import { Button } from "antd";

function QuizTest() {
  const [data, setData] = useState(quizdata.data);
  const [answers, setAnswers] = useState([]);
  const [step, setStep] = useState(1);
  const [quiz, setQuiz] = useState([]);
  const [endStep, setEndStep] = useState("start");

  // console.log(data);
  const [count, setCount] = useState(0);
  const pathtitle = window.location.pathname.split("/")[2];
  const pathclass = window.location.pathname.split("/")[3];
  const pathsciense = window.location.pathname.split("/")[4];

  console.log("answers", answers);

  useEffect(() => {
    let dataSort = data.filter(
      (item) =>
        Number(pathclass) === item.classId &&
        Number(pathsciense) === item.scienseId
    );
    setQuiz(dataSort);
  }, []);
  return (
    <div className="quiz">
      <div className="quiz-container">
        <div className="quiz-title">
          <div className="quiz-title-item">
            {datajson[pathtitle].categorytitle}
          </div>
          <div className="quiz-title-time" style={{ fontWeight: "bolder" }}>
            <span>20</span>
            <span>/</span>
            <span>10</span>
          </div>
          <div className="quiz-title-number">
            <span id="quiz-minutes" style={{ fontWeight: "bolder" }}>
              16
            </span>
            <span
              className="quiz-on-off"
              style={{ fontWeight: "bolder", visibility: "visible" }}
            >
              :
            </span>
            <span id="quiz-second" style={{ fontWeight: "bolder" }}>
              25
            </span>
          </div>
        </div>
      </div>

      <div className="quiz-main-container">
        <div className="quiz-main">
          <QuizTestMain
            quiz={quiz}
            quizlength={quiz.length}
            answers={answers}
            setAnswers={setAnswers}
            setEndStep={setEndStep}
            endStep={endStep}
          />
        </div>
        <div className="quiz-score">
          <QuizTestScore onsetEndStep={setEndStep} onendStep={endStep} />
        </div>
      </div>
    </div>
  );
}

export default QuizTest;
