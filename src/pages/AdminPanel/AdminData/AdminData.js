import React from "react";
import { Link } from "react-router-dom";
import "./AdminData.css";

function AdminData() {
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
        <table id="admindata-table">
          <tr>
            <th id="admindata-id-th">ID</th>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
            <th>Contact</th>
            <th>Country</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          <tr>
            <td id="admindata-id">1</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td id="admindata-edit-td">
              <button className="admindata-edit">
                <i className="fa fa-edit"></i>
                <span>Edit</span>
              </button>
            </td>
            <td id="admindata-delete-td">
              <button className="admindata-delete">
                <i className="fa fa-trash"></i>
                <span>Delete</span>
              </button>
            </td>
          </tr>
          <tr>
            <td id="admindata-id">1</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td id="admindata-edit-td">
              <button className="admindata-edit">
                <i className="fa fa-edit"></i>
                <span>Edit</span>
              </button>
            </td>
            <td id="admindata-delete-td">
              <button className="admindata-delete">
                <i className="fa fa-trash"></i>
                <span>Delete</span>
              </button>
            </td>
          </tr>
          <tr>
            <td id="admindata-id">1</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td id="admindata-edit-td">
              <button className="admindata-edit">
                <i className="fa fa-edit"></i>
                <span>Edit</span>
              </button>
            </td>
            <td id="admindata-delete-td">
              <button className="admindata-delete">
                <i className="fa fa-trash"></i>
                <span>Delete</span>
              </button>
            </td>
          </tr>
          <tr>
            <td id="admindata-id">1</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td id="admindata-edit-td">
              <button className="admindata-edit">
                <i className="fa fa-edit"></i>
                <span>Edit</span>
              </button>
            </td>
            <td id="admindata-delete-td">
              <button className="admindata-delete">
                <i className="fa fa-trash"></i>
                <span>Delete</span>
              </button>
            </td>
          </tr>
          <tr>
            <td id="admindata-id">1</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td id="admindata-edit-td">
              <button className="admindata-edit">
                <i className="fa fa-edit"></i>
                <span>Edit</span>
              </button>
            </td>
            <td id="admindata-delete-td">
              <button className="admindata-delete">
                <i className="fa fa-trash"></i>
                <span>Delete</span>
              </button>
            </td>
          </tr>
          <tr>
            <td id="admindata-id">1</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td id="admindata-edit-td">
              <button className="admindata-edit">
                <i className="fa fa-edit"></i>
                <span>Edit</span>
              </button>
            </td>
            <td id="admindata-delete-td">
              <button className="admindata-delete">
                <i className="fa fa-trash"></i>
                <span>Delete</span>
              </button>
            </td>
          </tr>
          <tr>
            <td id="admindata-id">1</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td id="admindata-edit-td">
              <button className="admindata-edit">
                <i className="fa fa-edit"></i>
                <span>Edit</span>
              </button>
            </td>
            <td id="admindata-delete-td">
              <button className="admindata-delete">
                <i className="fa fa-trash"></i>
                <span>Delete</span>
              </button>
            </td>
          </tr>
          <tr>
            <td id="admindata-id">1</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td id="admindata-edit-td">
              <button className="admindata-edit">
                <i className="fa fa-edit"></i>
                <span>Edit</span>
              </button>
            </td>
            <td id="admindata-delete-td">
              <button className="admindata-delete">
                <i className="fa fa-trash"></i>
                <span>Delete</span>
              </button>
            </td>
          </tr>
          <tr>
            <td id="admindata-id">1</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td id="admindata-edit-td">
              <button className="admindata-edit">
                <i className="fa fa-edit"></i>
                <span>Edit</span>
              </button>
            </td>
            <td id="admindata-delete-td">
              <button className="admindata-delete">
                <i className="fa fa-trash"></i>
                <span>Delete</span>
              </button>
            </td>
          </tr>
          <tr>
            <td id="admindata-id">1</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td id="admindata-edit-td">
              <button className="admindata-edit">
                <i className="fa fa-edit"></i>
                <span>Edit</span>
              </button>
            </td>
            <td id="admindata-delete-td">
              <button className="admindata-delete">
                <i className="fa fa-trash"></i>
                <span>Delete</span>
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default AdminData;
