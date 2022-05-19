import {Button, Modal, Table} from 'antd';
import React, { useEffect, useState } from 'react'
import "./TestAddData.css"
import axios from "axios";
import {url} from "../../../components/Utils/Api/Api";


function TestAddData({setRefresh, refresh}) {
    const [data, setData] = useState([]);

const columns = [
    {
        key: '1',
        title: "Id",
        dataIndex: 'id'
    },
    {
        key: '2',
        title: "Questions id",
        dataIndex: 'questions_id'
    },
    {
        key: '3',
        title: "Category id",
        dataIndex: 'category_id'
    },
    {
        key: '4',
        title: "Class id",
        dataIndex: 'class_id'
    },
    {
        key: '5',
        title: "Science id",
        dataIndex: 'science_id'
    },
    {
        key: '6',
        title: "Question",
        dataIndex: 'question'
    },
    {
        key: '7',
        title: "Answer",
        dataIndex: 'answer'
    },
    {
        key: '8',
        title: "Option1",
        dataIndex: 'answer1'
    },
    {
        key: '9',
        title: "Option1",
        dataIndex: 'answer1'
    },
    {
        key: '10',
        title: "Option2",
        dataIndex: 'answer2'
    },
    {
        key: '11',
        title: "Option3",
        dataIndex: 'answer3'
    },
    {
        key: '12',
        title: "Option4",
        dataIndex: 'answer4'
    },
    {
        key: '13',
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
        key: '14',
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

    const getDataAll = () => {
        axios({
            url: `${url}/question/getall`,
            method: 'GET'
        }).then((response) => setData(response.data.object))
            .catch((error) => console.log(error));
    };

useEffect(() =>{
    getDataAll();
}, [])

    const delete_classes = (key, value) => {
        axios({
            url: `${url}/question/delete/${value.id}`,
            method: 'DELETE'
        }).then((response) => console.log(response))
            .catch(error => console.log(error));

        getDataAll();
    }

  return (
    <div className='test-add-data'>
        <div className = "test-add-data-container">
              <Table columns={columns} dataSource={data} className="question-data-table">

              </Table>
        </div>
    </div>
  )
}

export default TestAddData