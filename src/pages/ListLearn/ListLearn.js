import React, { useEffect, useState } from "react";
import "./ListLearn.css";
import $ from "jquery";
import { datajson } from "../../components/Teachers/Data";

function ListLearn() {
  const [data, setData] = useState(datajson);

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

  const learnToggleNews = () => {
    $(".news-bars").click(() => {
      $(".sidebar").css({ left: "0px" });
    });
  };

  useEffect(() => {
    learnToggleNews();
  }, []);

  return (
    <div className="listlearn">
      <div className="news-topbar-container">
        <div className="news-topbar">
          <div className="news-bars">
            <i class="fa fa-bars"></i>
          </div>
          <div className="news-title">
            <span>Kitoblarni yuklab oling</span>
            <span className="news-badge">
              <i class="fa fa-book"></i>
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
      <div className="listlearn-container">
        {data.length !== 0 ? (
          dataSearch.length !== 0 ? (
            dataSearch.map((item, key) => {
              return (
                <div className="listlearn-container-item">
                  <span className="listlearn-item">
                    <span>{key + 1}. </span>
                    {item.learn} / {item.learnclass}
                  </span>
                  <span className="listlearn-icon">
                    <i class="fa fa-download"></i>
                  </span>
                </div>
              );
            })
          ) : (
            <div className="book-void">
              <span className="book-void-item">Ma'lumot topilmadi.</span>
            </div>
          )
        ) : (
          <div className="book-void">
            <span className="book-void-item">Ma'lumot mavjud emas</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListLearn;
