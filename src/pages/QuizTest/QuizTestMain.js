import { Button } from "antd";
import React, { useRef, useState, useEffect } from "react";
import "./QuizTest.css";

function QuizTestMain({ data, answers, setAnswers }) {
  const [selected, setSelected] = useState([]);
  const [answersSort, setAnswersSort] = useState([]);
  const [aStep, setAstep] = useState(1);
  const [answersItem, setAnswersItem] = useState([]);
  const [bStep, setBstep] = useState(1);

  const onChangeInput = (e, i) => {
    console.log(e.target.name, e.target.value);
    setSelected((selected) => [
      ...selected,
      {
        indexItem: i,
        nameItem: e.target.name,
        answerItem: e.target.value,
        questionItem: data[i].question.savol,
      },
    ]);
  };

  const testEnd = () => {
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
    setAnswersItem(filtered);
    setBstep(2);
  };

  const addAnswers = () => {
    for (let j = 0; j < data.length; j++) {
      if (answersItem[j].indexItem !== j) {
        answersItem = answersItem.concat({
          indexItem: j,
          nameItem: `answer${j}`,
          answerItem: "undefined",
          questionItem: data[j].question.savol,
        });
      }

      setAnswers(answersItem);
    }
  };

  useEffect(() => {
    answerFilter();
  }, [aStep]);

  useEffect(() => {
    addAnswers();
  }, [bStep]);

  return (
    <div>
      <Button type="primary" onClick={testEnd}>
        Yakunlash
      </Button>
      {data.map((dataItem, index) => (
        <div className="quiztest-main">
          <div className="qm-container">
            <div className="qm-item">
              <div className="qm-item-question">
                <span id="qm-number">{index + 1}. </span>
                <span id="qm-question">{dataItem.question.savol}</span>
              </div>
              <div className="qm-question-container">
                {data[index].question.choices.map((choice, i) => (
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
                      <span>{choice}</span>
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
