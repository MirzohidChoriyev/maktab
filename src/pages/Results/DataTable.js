import React from "react";
import { Col, Row } from "react-bootstrap";
import "./DataTable.css";

function DataTable({ item }) {
  return (
    <div className="datatable-main">
      <div className="datatable">
        <div className="datatable-container">
          <table className="datatable-table">
            <thead className="datatable-thead">
              <tr className="datatable-thead-tr">
                <th id="id-space">Id</th>
                <th id="name-space">Ism familiyasi</th>
                <th id="type-space">O'qish turi</th>
                <th id="result-space">Natijasi</th>
                <th id="date-space">Sana</th>
                <th id="date-space">Fan nomi</th>
              </tr>
            </thead>
            <tbody className="datatable-tbody">
              {item.map((res, i) => {
                return (
                  <tr className="datatable-tbody-tr">
                    <td id="id-space">{res.id}</td>
                    <td>{res.userId}</td>
                    <td>Mirzohid</td>
                    <td>Mirzohid</td>
                    <td>Mirzohid</td>
                    <td>Matematika</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
