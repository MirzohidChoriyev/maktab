import React, { useEffect, useState } from "react";
import "./Tests.css";
import { datajson } from "./Data";
import Sidebar from "../../components/Sidebar/Sidebar";
import TestsCategory from "../../components/TestsCategory/TestsCategory";
import { Row } from "react-bootstrap";
import $ from "jquery";
import { Button, Modal } from "antd";
import { Link } from "react-router-dom";

function Tests() {
  const [data, setData] = useState(datajson);
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState(0);
  const [step, setStep] = useState(1);

  const okStep = () => {
    setStep(2);
  };

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

  return (
    <div>
{
  step === 1 && <div className="tests">
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
        okStep();
      }}
    >
        Boshlash
    </Button>
  </Modal>

  <Sidebar />
</div>
}
    </div>
  );
}

export default Tests;
