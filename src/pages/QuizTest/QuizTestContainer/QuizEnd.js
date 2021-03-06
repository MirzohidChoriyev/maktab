import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatTime } from "../../HardTests/Content/utils";
import "./QuizEnd.css";

function QuizEnd({ setStep, step, time, data, results, setNatija }) {
  const [correct, setCorrect] = useState(0);

  const resultCorrect = () => {
    let count = 0;
    results.forEach((result, i) => {
      if (data[i].question.answer === result.answerItem) {
        count++;
      }
    });
    setCorrect(count);
    setNatija(count);
  };

  useEffect(() => {
    resultCorrect();
  }, []);

  return (
    <Modal visible={true} footer={false} closable={false}>
      <div className="e-title">
        <p className="e-quiz-title">
          <span>Natijangiz</span>
        </p>
      </div>
      <p className="e-quiz-p">
        <span>Savollar soni:</span>
        <span>{data.length} ta</span>
      </p>
      <p className="e-quiz-p">
        <span>To'g'ri javoblar soni:</span>
        <span>{correct} ta</span>
      </p>
      <p className="e-quiz-p">
        <span>Natijangiz:</span>
        <span>{Math.floor((correct / data.length) * 100)} %</span>
      </p>
      <p className="e-quiz-p">
        <span>Test uchun berilgan vaqt:</span>
        <span>{formatTime(data[0].dedlineTime)}</span>
      </p>
      <p className="e-quiz-p">
        <span>Sarflangan vaqt:</span>
        <span>{formatTime(time)}</span>
      </p>
      <Button type="primary" onClick={() => setStep(4)}>
        Natijani ko'rish
      </Button>
      <Link to="/classes" style={{ color: "white" }}>
        <Button
          type="primary"
          onClick={() => setStep(1)}
          danger
          style={{ marginLeft: "3px" }}
        >
          Ortga qaytish
        </Button>
      </Link>
    </Modal>
  );
}

export default QuizEnd;
