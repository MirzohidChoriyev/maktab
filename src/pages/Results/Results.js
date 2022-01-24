import React, { useEffect } from "react";
import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import DataTable from "./DataTable";
import datajson from "./Types.json";
import "./Results.css";
import Pagenation from "./Pagenation";
import axios from "axios";

function Results() {
  const [type, setType] = useState(datajson.data);
  const [data, setData] = useState([]);
  const [lastIndex, setLastIndex] = useState(10);
  const [firstIndex, setFirstIndex] = useState(1);
  const [len, setLen] = useState(data.length);

  const dataSource = () => {
    axios({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "GET",
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Pagenation
  const indexOfLastPosts = lastIndex * firstIndex;
  const indexOfFirstPosts = indexOfLastPosts - lastIndex;
  const currentData = data.slice(indexOfFirstPosts, indexOfLastPosts);

  const pagenate = (number) => {
    setFirstIndex(number);
  };

  useEffect(() => {
    dataSource();
  }, []);

  return (
    <div className="natija">
      <div className="natija-container">
        <div className="news-topbar-container">
          <div
            className="news-topbar"
            style={{ background: "rgb(25, 135, 185)" }}
          >
            <div className="news-bars">
              <i class="fa fa-bars"></i>
            </div>
            <div className="news-title">
              <span>Natijalaringizni bilib oling</span>
            </div>
            <div className="news-search">
              <input
                type="search"
                placeholder="Qidirish"
                className="news-search-item"
              />
              <i class="fa fa-search fa-search-icon"></i>
            </div>
          </div>
        </div>

        <div className="natija-buttons">
          {type.map((item, key) => {
            return <button className="natija-button-item">{item.type}</button>;
          })}
        </div>
        <div className="datatable-content">
          {data.length !== 0 ? (
            <DataTable item={currentData} />
          ) : (
            <div className="data-not-found">Ma'lumot mavjud emas</div>
          )}
          {data.length !== 0 ? (
            <Pagenation
              lastIndex={lastIndex}
              totalLength={data.length}
              pagenate={pagenate}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default Results;
