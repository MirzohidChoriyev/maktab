import React, { useEffect, useState } from "react";
import "./Style.css";
import {message, Table} from "antd";
import {url} from "../../../components/Utils/Api/Api";
import axios from "axios";

function ClassAddData({data_ref, setData_ref}) {
  const [data, setData] = useState([]);

  const columns = [
    {
      key: '1',
      title: "Id",
      dataIndex: "id",
    },
    {
      key: '2',
      title: "Class name",
      dataIndex: "class_name",
    },
    {
      key: '3',
      title: "Class body",
      dataIndex: "class_body",
    },
    {
      key: '4',
      title: "Active",
      dataIndex: "active",
    },
    {
      key: '5',
      title: "Information",
      dataIndex: "other",
    },
    {
      key: '6',
      title: "Edit",
      dataIndex: "edit",
      render: function () {
        return (
            <button className="admindata-edit">
              <i className="fa fa-edit"></i>
              <span>Edit</span>
            </button>
        )
      }
    },
    {
      key: '7',
      title: "Delete",
      dataIndex: "delete",
      render: (key, value) => {
        return (
            <button className="admindata-delete" onClick={() => delete_classes(key, value)}>
              <i className="fa fa-trash"></i>
              <span>Delete</span>
            </button>
        )
      }
    }
  ]

  const success = () => {
    message.success("Muvvafaqiyatli saqlandi");
  };

  const error = () => {
    message.error("Saqlashda xatolik yuz berdi");
  };

  useEffect(() => {
    getDataAll();
  }, [data_ref])

  const getDataAll = () => {
    axios({
      url: `${url}/classes/getall`,
      method: 'GET'
    }).then((response) => setData(response.data.object))
        .catch((error) => console.log(error))

    setData_ref("1");
  };

  useEffect(() => {
    getDataAll();
  }, []);

  const delete_classes = (key, value) => {
    axios({
      url: `${url}/classes/delete/${value.id}`,
      method: 'DELETE'
    }).then((response) => getDataAll())
        .catch((error) => console.log(error))
  }

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
          <div style={{ color: "royalblue" }} className="classadddata-table-user-title">
            Soni: {data.length} ta
          </div>
        </div>
       <Table columns={columns} dataSource={data}>

       </Table>
      </div>
    </div>
  );
}

export default ClassAddData;
