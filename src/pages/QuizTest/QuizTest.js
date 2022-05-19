import React, { useEffect, useState } from "react";
import "./QuizTest.css";
import QuizTestMain from "./QuizTestMain.js";
import QuizTestScore from "./QuizTestScore.js";
import QuizEnd from "./QuizTestContainer/QuizEnd";
import { formatTime } from "../HardTests/Content/utils";
import axios from "axios";
import {url} from "../../components/Utils/Api/Api";

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
  setSanagich,
  sanagich,
  setChange,
  change,
  isVisible,
  setVisible,
}) {
  
  const [data, setData] = useState([]);

  const get_data_all = () => {
     axios({
       url: `${url}/question/getall`,
       method: 'GET'
     }).then((response) => setData(response.data.object))
         .catch((error) => console.log(error));
  }

  useEffect(() => {
    get_data_all();
  }, [])

  const [stepEnd, setEndStep] = useState(step);

  useEffect(() => {
    setStep(stepEnd);
  }, [stepEnd]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    let dataSort = data.filter(
      (item) =>
        Number(localStorage.getItem("sinfId")) === item.class_id &&
        Number(localStorage.getItem("fanId")) === item.science_id
    );
  }, []);

  useEffect(() => {
    setQuiz(data.filter(
        (item) =>
            Number(localStorage.getItem("sinfId")) === item.class_id &&
            Number(localStorage.getItem("fanId")) === item.science_id
    ));

    setQuizdata(data.filter(
        (item) =>
            Number(localStorage.getItem("sinfId")) === item.class_id &&
            Number(localStorage.getItem("fanId")) === item.science_id
    ));
  }, []);


  console.log("question", quiz);

  return (
    <div>
      <div className="quiz">
        <div className="quiz-container">
          <div className="quiz-title">
            <div className="quiz-title-time" style={{ fontWeight: "bolder" }}>
              <span>{sanagich < 10 ? "0" + sanagich : sanagich}</span>
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
              setSanagich={setSanagich}
              setChange={setChange}
              change={change}
              data={data}
            />
          </div>
          <div className="quiz-score">
            <QuizTestScore
              dedlineTime={dedlineTime}
              data={quiz}
              setVisible={setVisible}
              sanagich={sanagich}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizTest;
