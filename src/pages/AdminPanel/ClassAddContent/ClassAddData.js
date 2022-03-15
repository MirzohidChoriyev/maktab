import React, { useEffect, useState } from "react";
import "./Style.css";
import db from "./data.json";
import { deleteData, getData } from "./api";

function ClassAddData({setRefId}) {
  const [json, setJson] = useState([]);

  const getDataAll = async () => {
    const response = await getData();
    setJson(response.data);
  };

  const deleteDatas = async (e) => {
    await deleteData(e);
    console.log(e);
    getDataAll();
  };

  useEffect(() => {
    getDataAll();
  }, []);

  return (
    <div className="classadddata-ad">
      <div className="classadddata-container">
        <div className="classadddata-table-user-text">
          <div
            className="classadddata-table-user-title"
            style={{ color: "rgb(100, 100, 100)" }}
          >
            Sinflar
          </div>
        </div>
        <table id="classadddata-table">
          <tr>
            <th id="classadddata-id-th">T/R</th>
            <th>ID</th>
            <th>Class name</th>
            <th>Is active</th>
            <th>Discreption</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          <tbody>
            {json.map((item, i) => (
              <tr>
                <td id="classadddata-id">{i + 1}</td>
                <td>{item.id}</td>
                <td>{item.classname}</td>
                <td>{item.active}</td>
                <td>{item.discription}</td>
                <td id="classadddata-edit-td">
                  <button
                    className="classadddata-edit"
                    onClick={() => setRefId(item.id)}
                  >
                    <i className="fa fa-edit"></i>
                    <span>Edit</span>
                  </button>
                </td>
                <td id="classadddata-delete-td">
                  <button
                    className="classadddata-delete"
                    onClick={() => {
                      deleteDatas(item.id);
                    }}
                  >
                    <i className="fa fa-trash"></i>
                    <span>Delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClassAddData;