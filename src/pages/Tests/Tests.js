import React, { useEffect, useState } from "react";
import "./Tests.css";
import { datajson } from "./Data";
import Sidebar from "../../components/Sidebar/Sidebar";
import TestsCategory from "../../components/TestsCategory/TestsCategory";
import { Row } from "react-bootstrap";
import $ from "jquery";
import { Button, Modal } from "antd";
import { Link } from "react-router-dom";
import QuizTest from "../QuizTest/QuizTest";
import QuizEnd from "../QuizTest/QuizTestContainer/QuizEnd";
import QuizResult from "../QuizTest/QuizTestContainer/QuizResult";
import quiztest from "../QuizTest/TestsData.json";
import Notice from "../QuizTest/Notice/Notice";

let interval;
let interval1;

function Tests() {
  const [data, setData] = useState(datajson);
  const [results, setResults] = useState([]);
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState(0);
  const [step, setStep] = useState(1);
  const [quizdata, setQuizdata] = useState([]);
  const [time, setTime] = useState(0);
  const [natija, setNatija] = useState(0);
  const [dedlineTime, setDedlineTime] = useState(quiztest.data[0].dedlineTime);
  const [noticeShow, setNoticeShow] = useState(false);
  const [quiz, setQuiz] = useState([]);

  const clearTime = () => {
    if (step === 3) {
      clearInterval(interval);
      clearInterval(interval1);
    }
  };

  const okStep = (c, s) => {
    setStep(2);
    window.localStorage.setItem("sinfId", c);
    window.localStorage.setItem("fanId", s);

    interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);

    interval1 = setInterval(() => {
      setDedlineTime((item) => item - 1);
    }, 1000);

    closeModal();
  };
  console.log(time);

  const showModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };

  const Toggle = () => {
    $(".news-bars").click(() => {
      $(".sidebar").css({ left: "0px" });
    });
  };

  const openTestModal = (e) => {
    setNumber(e);
    showModal();
  };

  const path = window.location.pathname.split("/")[2];

  const [filter, setFilter] = useState("");
  const searchText = (event) => {
    setFilter(event.target.value);
  };
  let dataSearch = data.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  useEffect(() => {
    Toggle();
  }, []);

  useEffect(() => {
    clearTime();
  }, [step]);

  return (
    <div>
      {step === 1 && (
        <div className="tests">
          <div className="news-topbar-container">
            <div className="news-topbar">
              <div className="news-bars">
                <i class="fa fa-bars"></i>
              </div>
              <div className="news-title">
                <span>O'zingizni sinab ko'ring</span>
              </div>
              <div className="news-search">
                <input
                  type="search"
                  placeholder="Fanlarni qidiring"
                  className="news-search-item"
                  onChange={searchText.bind(this)}
                />
                <i class="fa fa-search fa-search-icon"></i>
              </div>
            </div>
          </div>

          <div className="tests-container">
            {data.length !== 0 ? (
              dataSearch.length !== 0 ? (
                <Row>
                  {dataSearch.map(
                    (item, index) =>
                      Number(path) === item.classId && (
                        <TestsCategory
                          key={item.id}
                          item={item}
                          index={index}
                          openTestModal={openTestModal}
                          show={show}
                        />
                      )
                  )}
                </Row>
              ) : (
                <div className="book-void">
                  <span className="book-void-item">Fanlar topilmadi.</span>
                </div>
              )
            ) : (
              <div className="book-void">
                <span className="book-void-item">Ma'lumotlar mavjud emas.</span>
              </div>
            )}
          </div>

          <Modal
            visible={show}
            closable={false}
            title={`Test ma'lumoti`}
            footer={false}
          >
            <div className="tests-open-container">
              <div className="tests-open">
                <span className="tests-open-title">Fan nomi:</span>
                <span className="tests-class test-open">
                  {data[number].categorytitle}
                </span>
              </div>
              <div className="tests-open">
                <span className="tests-open-title">Ishlaganlar soni:</span>
                <span className="tests-using test-open">10 ta</span>
              </div>
              <div className="tests-open">
                <span className="tests-open-title">Test soni:</span>
                <span className="tests-count test-open">
                  {data[number].testcount} ta
                </span>
              </div>
              <div className="tests-open" style={{ marginBottom: "20px" }}>
                <span className="tests-open-title">Belgilangan vaqt:</span>
                <span className="tests-time test-open">
                  {data[number].time} min
                </span>
              </div>
            </div>

            <Button type="primary" danger onClick={closeModal}>
              Yopish
            </Button>
            <Button
              type="primary"
              style={{ marginLeft: "4px" }}
              onClick={() => {
                okStep(data[number].classId, data[number].scienseId);
              }}
            >
              Boshlash
            </Button>
          </Modal>

          <Sidebar />
        </div>
      )}
      {step === 2 && (
        <QuizTest
          setStep={setStep}
          step={step}
          setResults={setResults}
          results={results}
          setQuizdata={setQuizdata}
          dedlineTime={dedlineTime}
          setNoticeShow={setNoticeShow}
          quiz={quiz}
          setQuiz={setQuiz}
        />
      )}
      {step === 3 && (
        <QuizEnd
          step={step}
          setStep={setStep}
          time={time}
          data={quizdata}
          results={results}
          setNatija={setNatija}
        />
      )}
      {step === 4 && (
        <QuizResult
          setStep={setStep}
          step={step}
          results={results}
          data={quizdata}
          time={time}
          natija={natija}
        />
      )}
    </div>
  );
}

export default Tests;
