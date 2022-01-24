import React, { useRef, useState, useEffect } from "react";
import { Button, makeStyles } from "@mui/material";
import $ from "jquery";
import "./QuizTest.css";
import { Link } from "react-router-dom";
import { Modal } from "antd";

const initialValue = {
  answer1: "belgilanmagan",
  answer2: "belgilanmagan",
  answer3: "belgilanmagan",
  answer4: "belgilanmagan",
  answer5: "belgilanmagan",
  answer6: "belgilanmagan",
  answer7: "belgilanmagan",
  answer8: "belgilanmagan",
  answer9: "belgilanmagan",
  answer10: "belgilanmagan",
  answer11: "belgilanmagan",
  answer12: "belgilanmagan",
  answer13: "belgilanmagan",
  answer14: "belgilanmagan",
  answer15: "belgilanmagan",
  answer16: "belgilanmagan",
  answer17: "belgilanmagan",
  answer18: "belgilanmagan",
  answer19: "belgilanmagan",
  answer20: "belgilanmagan",
};

function QuizTestMain({
  quiz,
  quizlength,
  endStep,
  setEndStep,
  setResults,
  dedlineTime,
  setVisible,
  isVisible,
}) {
  const [answer, setAnswer] = useState(initialValue);
  console.log(endStep);

  const onChangeInput = (e, i) => {
    setAnswer({ ...answer, [e.target.name]: e.target.value });
  };
  console.log(answer);

  const quizEndHandler = () => {
    setResults([
      {
        id: 1,
        answerItem: answer.answer1,
        questionItem: quiz[0].question.savol,
      },
      {
        id: 2,
        answerItem: answer.answer2,
        questionItem: quiz[1].question.savol,
      },
      {
        id: 3,
        answerItem: answer.answer3,
        questionItem: quiz[2].question.savol,
      },
      {
        id: 4,
        answerItem: answer.answer4,
        questionItem: quiz[3].question.savol,
      },
      // {
      //   id: 5,
      //   answerItem: answer.answer5,
      //   questionItem: quiz[4].question.savol,
      // },
      // {
      //   id: 6,
      //   answerItem: answer.answer6,
      //   questionItem: quiz[5].question.savol,
      // },
      // {
      //   id: 7,
      //   answerItem: answer.answer7,
      //   questionItem: quiz[6].question.savol,
      // },
      // {
      //   id: 8,
      //   answerItem: answer.answer8,
      //   questionItem: quiz[7].question.savol,
      // },
      // {
      //   id: 9,
      //   answerItem: answer.answer9,
      //   questionItem: quiz[8].question.savol,
      // },
      // {
      //   id: 10,
      //   answerItem: answer.answer10,
      //   questionItem: quiz[9].question.savol,
      // },
      // {
      //   id: 11,
      //   answerItem: answer.answer11,
      //   questionItem: quiz[10].question.savol,
      // },
      // {
      //   id: 12,
      //   answerItem: answer.answer12,
      //   questionItem: quiz[11].question.savol,
      // },
      // {
      //   id: 13,
      //   answerItem: answer.answer13,
      //   questionItem: quiz[12].question.savol,
      // },
      // {
      //   id: 14,
      //   answerItem: answer.answer14,
      //   questionItem: quiz[13].question.savol,
      // },
      // {
      //   id: 15,
      //   answerItem: answer.answer15,
      //   questionItem: quiz[14].question.savol,
      // },
      // {
      //   id: 16,
      //   answerItem: answer.answer16,
      //   questionItem: quiz[15].question.savol,
      // },
      // {
      //   id: 17,
      //   answerItem: answer.answer17,
      //   questionItem: quiz[16].question.savol,
      // },
      // {
      //   id: 18,
      //   answerItem: answer.answer18,
      //   questionItem: quiz[17].question.savol,
      // },
      // {
      //   id: 19,
      //   answerItem: answer.answer19,
      //   questionItem: quiz[18].question.savol,
      // },
      // {
      //   id: 20,
      //   answerItem: answer.answer20,
      //   questionItem: quiz[19].question.savol,
      // },
    ]);
    setEndStep(3);
  };

  useEffect(() => {
    if (dedlineTime === 0) {
      quizEndHandler();
    }
  }, [dedlineTime]);
  console.log("dedline", dedlineTime);

  return (
    <div>
      <div>
        <div className="button-end-quiz">
          <button
            className="end-quiz-button"
            size="small"
            variant="contained"
            color="primary"
            onClick={() => setVisible(true)}
          >
            Yakunlash
          </button>
        </div>
        {quiz.map((quizItem, index) => (
          <div className="quiztest-main">
            <div className="qm-container">
              <div className="qm-item">
                <div className="qm-item-question">
                  <span id="qm-question">
                    {index + 1}. {quizItem.question.savol}
                  </span>
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
                          name={`answer${index + 1}`}
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
      <Modal
        title="Testni yakunlaysizmi"
        visible={isVisible}
        footer={false}
        closable={false}
      >
        <Button
          variant="contained"
          color="success"
          size="small"
          onClick={quizEndHandler}
        >
          Ha
        </Button>
        <Button
          style={{ marginLeft: "3px" }}
          variant="contained"
          color="info"
          size="small"
          onClick={() => setVisible(false)}
        >
          Yo'q
        </Button>
      </Modal>
    </div>
  );
}

export default QuizTestMain;
