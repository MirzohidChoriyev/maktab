import React, { useEffect, useState } from "react";
import "./TestsClass.css";
import $ from "jquery";
import { datajson } from "./Data";
import TestsClassItem from "../../components/TestsClassItem/TestsClassItem";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Row } from "react-bootstrap";

function TestsClass() {
  const [data, setData] = useState(datajson);

  const Toggle = () => {
    $(".news-bars").click(() => {
      $(".sidebar").css({ left: "0px" });
    });
  };

  const [filter, setFilter] = useState("");
  const searchText = (event) => {
    setFilter(event.target.value);
  };
  let dataSearch = data.filter((item) => {
    console.log(Object.keys(item));
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
    <div className="class-t">
      <Sidebar />
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
              placeholder="Sinflarni qidiring"
              onChange={searchText.bind(this)}
              className="news-search-item"
            />
            <i class="fa fa-search fa-search-icon"></i>
          </div>
        </div>
      </div>
      <div className="class-t-container">
        {data.length !== 0 ? (
          dataSearch.length !== 0 ? (
            <Row>
              {data.map((item, index) => {
                return (
                  <TestsClassItem key={index + 1} item={item} index={index} />
                );
              })}
            </Row>
          ) : (
            <div className="book-void">
              <span className="book-void-item">Sinflar topilmadi.</span>
            </div>
          )
        ) : (
          <div className="book-void">
            <span className="book-void-item">Ma'lumotlar mavjud emas.</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default TestsClass;
