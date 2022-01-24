import React, { useEffect, useState } from "react";
import "./QuizTest.css";
import QuizTestMain from "./QuizTestMain.js";
import QuizTestScore from "./QuizTestScore.js";
import { datajson } from "../Tests/Data";
import $ from "jquery";
import quizdata from "./TestsData.json";
import { Button } from "antd";
import QuizEnd from "./QuizTestContainer/QuizEnd";
import { formatTime } from "../HardTests/Content/utils";

function QuizTest({
  setStep,
  step,
  setResults,
  results,
  setQuizdata,
  time,
  dedlineTime,
  setNoticeShow,
  quiz,
  setQuiz,
}) {
  const [data, setData] = useState(quizdata.data);
  const [stepEnd, setEndStep] = useState(step);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setStep(stepEnd);
  }, [stepEnd]);

  // console.log(data);
  const [count, setCount] = useState(0);
  const [sinfId, setSinfId] = useState(0);
  const [fanId, setFanId] = useState(0);

  const getId = () => {
    setSinfId();
    setFanId();
  };
  useEffect(() => {
    getId();
  }, []);
  console.log("sinfid", sinfId);
  console.log("fanId", fanId);
  useEffect(() => {
    let dataSort = data.filter(
      (item) =>
        Number(localStorage.getItem("sinfId")) === item.classId &&
        Number(localStorage.getItem("fanId")) === item.scienseId
    );
    setQuiz(dataSort);
    setQuizdata(dataSort);
  }, []);

  return (
    <div>
      <div className="quiz">
        <div className="quiz-container">
          <div className="quiz-title">
            <div className="quiz-title-item"></div>
            <div className="quiz-title-time" style={{ fontWeight: "bolder" }}>
              <span>{1}</span>
              <span>/</span>
              <span>{quiz.length < 10 ? "0" + quiz.length : quiz.length}</span>
            </div>
            <div className="quiz-title-number">
              <span id="quiz-minutes" style={{ fontWeight: "bolder" }}>
                {formatTime(dedlineTime)}
              </span>
            </div>
          </div>
        </div>

        <div className="quiz-main-container">
          <div className="quiz-main">
            <QuizTestMain
              quiz={quiz}
              quizlength={quiz.length}
              setResults={setResults}
              setEndStep={setEndStep}
              dedlineTime={dedlineTime}
              isVisible={isVisible}
              setVisible={setVisible}
            />
          </div>
          <div className="quiz-score">
            <QuizTestScore
              dedlineTime={dedlineTime}
              data={quiz}
              setVisible={setVisible}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizTest;
