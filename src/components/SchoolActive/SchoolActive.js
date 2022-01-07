import React, { useEffect } from "react";
import Slider from "react-slick";
import { datajson } from "./Data.js";
import $ from "jquery";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./SchoolActive.css";
import Active from "./Active";
import { Button, Modal, Card } from "antd";

function SchoolActive() {
  const [data, setData] = useState(datajson);
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState(0);
  const [copy, setCopy] = useState("");

  const showModal = (e) => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };
  const textCopy = () => {};

  const scrollNext = () => {
    var sum = 0;
    $(".nextIcon").click(() => {
      $(".active-item").scrollX = 20;
    });
  };

  const textModal = (e) => {
    showModal();
    console.log(e);
    let props = e;
    setNumber(Number(e));
  };
  console.log(number);

  var settings = {
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { Meta } = Card;
  useEffect(() => {
    scrollNext();
  }, []);
  return (
    <div className="active">
      <div className="active-container">
        <div className="active-title">
          <div className="active-title-text">
            <span>MAKTAB FAOLLARI</span>
            <span className="active-title-line">
              <hr />
            </span>
          </div>
        </div>
        {data.length !== 0 ? (
          <Slider {...settings} className="active-slider">
            {datajson.map((item, index) => {
              return (
                <Active
                  key={item.id}
                  item={item}
                  textModal={textModal}
                  index={index}
                  number={number}
                />
              );
            })}
          </Slider>
        ) : (
          <div className="active-void">
            <span className="active-void-item">Ma'lumotlar mavjud emas.</span>
          </div>
        )}
      </div>

      <Modal
        visible={show}
        onOk={showModal}
        onCancel={closeModal}
        title={`Ma'lumot`}
        footer={false}
      >
        <Card
          hoverable
          style={{ width: "100%", height: "auto", marginBottom: "11px" }}
          cover={
            <img
              alt="example"
              src={data[number].image}
              className="modal-card-img"
            />
          }
        >
          <Meta
            style={{ color: "red", fontSize: "17px" }}
            description={
              data[number].typeId === 4500 ? "O'qituvchi" : "O'quvchi"
            }
          />
          <p
            style={{ fontWeight: "bolder", fontSize: "14px", marginTop: "5px" }}
          >
            {data[number].about}
          </p>
        </Card>
        <Button type="primary" danger onClick={closeModal}>
          Close
        </Button>
        <Button
          type="primary"
          onCopy={() => setCopy(true)}
          style={{ marginLeft: "4px" }}
        >
          Ulashish
        </Button>
      </Modal>
    </div>
  );
}

export default SchoolActive;
