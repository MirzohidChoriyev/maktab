import React, { useEffect, useState } from "react";
import Category from "./Content/Category";
import Check from "./Content/Check";
import Question1 from "./Content/Question1";
import Result from "./Content/Result";
import quizdata from "./Data/quizdata.json";

let interval;
let interval1;

function HardTest() {
  const [data, setData] = useState(quizdata.data);
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [time, setTime] = useState(0);
  const [natija, setNatija] = useState();
  const [dedline, setDedline] = useState(quizdata.time[0].dedlinetime);

  const clearTime = () => {
    if (step === 3) {
      clearInterval(interval);
      clearInterval(interval1);
    }
  };

  useEffect(() => {
    clearTime();
  }, [step]);

  const quizStart1 = (i) => {
    if (i === 0) {
      setStep(2);
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      interval1 = setInterval(() => {
        setDedline((time) => time - 1);
      }, 1000);
    }
  };

  const resultCheck = () => {
    setStep(4);
    window.localStorage.setItem("natija", natija);
  };

  return (
    <div className="hardtest">
      {step === 1 && <Category onQuizStart1={quizStart1} />}
      {step === 2 && (
        <Question1
          data={data[activeQuestion]}
          activeQuestion={activeQuestion}
          setActiveQuestion={setActiveQuestion}
          lengthData={data.length}
          setStep={setStep}
          setAnswers={setAnswers}
          time={time}
          dedline={dedline}
        />
      )}
      {step === 3 && (
        <Result
          data={data}
          results={answers}
          lengthData={data.length}
          resultCheck={resultCheck}
          time={time}
          setNatija={setNatija}
        />
      )}

      {step === 4 && (
        <Check
          data={data}
          time={time}
          results={answers}
          natija={natija}
          setStep={setStep}
        />
      )}
    </div>
  );
}

export default HardTest;
