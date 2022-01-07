import React, { useEffect, useState } from "react";
import "./News.css";
import $ from "jquery";
import { Row, Col } from "react-bootstrap";
import { datajson } from "./Data.js";
function News() {
  const [data, setData] = useState(datajson);

  const sidebarToggleNews = () => {
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
    sidebarToggleNews();
  }, []);

  return (
    <div className="news">
      <div className="news-topbar-container">
        <div className="news-topbar">
          <div className="news-bars">
            <i class="fa fa-bars"></i>
          </div>
          <div className="news-title">
            <span>Yangiliklarni kuzatib boring</span>
            <span className="news-badge">
              <i class="fa fa-bell-o"></i>
              <span className="news-badge-note">20</span>
            </span>
          </div>
          <div className="news-search">
            <input
              type="search"
              onChange={searchText.bind(this)}
              placeholder="Qidiruv"
              className="news-search-item"
            />
            <i class="fa fa-search fa-search-icon"></i>
          </div>
        </div>
      </div>

      <div className="news-container">
        <div className="news-pages">
          {data.length !== 0 ? (
            dataSearch.length !== 0 ? (
              dataSearch.map((item, key) => {
                return (
                  <div className="news-pages-item">
                    <div className="news-item-title">
                      <span className="news-count">{key + 1}</span>
                      <span className="news-item">{item.title}</span>
                    </div>
                    <div className="news-item-body">{item.message}</div>
                    <div className="news-date">
                      <span className="news-date-eye">
                        <i class="fa fa-eye"></i>
                        <span className="news-date-eye-count">199</span>
                      </span>
                      <span className="news-date-item">2021-22-89</span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="news-void">
                <span className="news-void-item">Xabarlar topilmadi.</span>
              </div>
            )
          ) : (
            <div className="news-void">
              <span className="news-void-item">Xabarlar mavjud emas.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default News;
