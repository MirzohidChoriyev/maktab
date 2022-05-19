import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./AdminData.css";
import axios from "axios";
import {url} from "../../../components/Utils/Api/Api";
import {Table} from "antd";
import result from "../../HardTests/Content/Result";

function AdminData() {
  const [users, setUsers] = useState([]);

  const data_get_all = () => {
    axios({
      url: `${url}/users/getall`,
      method: 'GET'
    }).then((response) => setUsers(response.data.object))
        .catch(error => console.log(error));
  }

  useEffect(() =>{
    data_get_all();
  }, [])


  const columns = [
    {
      key: '1',
      title: "Id",
      dataIndex: "user_id",
    },
    {
      key: '2',
      title: "Fullname",
      dataIndex: "fullname",
    },
    {
      key: '3',
      title: "Kategoriya",
      dataIndex: "category",
    },
    {
      key: '4',
      title: "Login",
      dataIndex: "username",
    },
    {
      key: '5',
      title: "Telefon raqam",
      dataIndex: "phone_number"
    },
    {
      key: '6',
      title: "Address",
      dataIndex: "address"
    },
    {
      key: '7',
      title: "Natija",
      dataIndex: "result"
    },
    {
      key: '8',
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
      key: '9',
      title: "Delete",
      dataIndex: "delete",
      render: function () {
        return (
            <button className="admindata-delete">
              <i className="fa fa-trash"></i>
              <span>Delete</span>
            </button>
        )
      }
    }
  ]

  return (
    <div className="admindata-ad">
      <div className="admindata-container">
        <div className="admindata-table-user-text">
          <div
            className="admindata-table-user-title"
            style={{ color: "rgb(100, 100, 100)" }}
          >
            Sayt foydalanuvchilari
          </div>
          <div>
            <Link to = "/allusers">
            <button id="admindata-see-data">
              See all <i class="fa fa-share"></i>
            </button>
            </Link>
          </div>
        </div>
        <Table columns = {columns} className="ant-table" dataSource={users}>

        </Table>
        {/*<table id="admindata-table">*/}
        {/*  <tr>*/}
        {/*    <th id="admindata-id-th">ID</th>*/}
        {/*    <th>Company</th>*/}
        {/*    <th>Contact</th>*/}
        {/*    <th>Country</th>*/}
        {/*    <th>Contact</th>*/}
        {/*    <th>Country</th>*/}
        {/*    <th>Edit</th>*/}
        {/*    <th>Delete</th>*/}
        {/*  </tr>*/}
        {/*  <tr>*/}
        {/*    <td id="admindata-id">1</td>*/}
        {/*    <td>Alfreds Futterkiste</td>*/}
        {/*    <td>Maria Anders</td>*/}
        {/*    <td>Germany</td>*/}
        {/*    <td>Maria Anders</td>*/}
        {/*    <td>Germany</td>*/}
        {/*    <td id="admindata-edit-td">*/}
        {/*      <button className="admindata-edit">*/}
        {/*        <i className="fa fa-edit"></i>*/}
        {/*        <span>Edit</span>*/}
        {/*      </button>*/}
        {/*    </td>*/}
        {/*    <td id="admindata-delete-td">*/}
        {/*      <button className="admindata-delete">*/}
        {/*        <i className="fa fa-trash"></i>*/}
        {/*        <span>Delete</span>*/}
        {/*      </button>*/}
        {/*    </td>*/}
        {/*  </tr>*/}
        {/*</table>*/}
      </div>
    </div>
  );
}

export default AdminData;
