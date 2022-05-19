import React, {useEffect, useState} from "react";
import { Col, Row } from "react-bootstrap";
import "./ScienceAdd.css";
import $ from "jquery";
import {Button, message, Table} from "antd";
import axios from "axios";
import {url} from "../../../components/Utils/Api/Api";

const initialValue = {
    science_name: "",
    science_body: "",
    active: "on",
    class_id: 0
}

const ScienceAdd = () => {
    const [science, setScience] = useState(initialValue);
    const {science_name, science_body, active, class_id} = science;
    const [visible, setVisible] = useState("hidden");
    const [data, setData] = useState([]);
    const [classes, setClasses] = useState([]);

    const columns = [
        {
            key: '1',
            title: "Id",
            dataIndex: "id",
        },
        {
            key: '2',
            title: "Class id",
            dataIndex: "class_id",
        },
        {
            key: '3',
            title: "Science name",
            dataIndex: "science_name",
        },
        {
            key: '4',
            title: "Science body",
            dataIndex: "science_body",
        },
        {
            key: '5',
            title: "Active",
            dataIndex: "active",
        },
        {
            key: '6',
            title: "Test counter",
            dataIndex: "test_counter",
        },
        {
            key: '7',
            title: "Open counter",
            dataIndex: "open_counter",
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

    const inputChange = (e) => {
        setScience({ ...science, [e.target.name]: e.target.value });

        let a = $(".science-name").val();

        let b = $(".science-body").val();

        let c = $(".class-id").val();

        if (b.length !== 0 && a.length !== 0 && c !== 0) {
            setVisible("visible");
        } else {
            setVisible("hidden");
        }
    };

    console.log(science);

    const success = () => {
        message.success("Muvvafaqiyatli saqlandi");
    };

    const error = () => {
        message.error("Saqlashda xatolik yuz berdi");
    };

    const saveButtonEquals = () => {
        let a = $(".science-name").val();

        let b = $(".science-body").val();

        let c = $(".class-id").val();

        if (b.length !== 0 && a.length !== 0 && c !== 0) {
            axios({
                url: `${url}/science/save`,
                method: "POST",
                data: science
            }).then((response) => success())
                .catch(error => error());

            getDataAll();
        }

        $(".science-name").val("");
        $(".science-body").val("");
        $(".class-id").val(0);
        setVisible("hidden");
    };

    const getDataAll = () => {
        axios({
            url: `${url}/science/getall`,
            method: 'GET'
        }).then((response) => setData(response.data.object))
            .catch((error) => console.log(error));
    };

    const getDataClassAll = () => {
        axios({
            url: `${url}/classes/getall`,
            method: 'GET'
        }).then((response) => setClasses(response.data.object))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getDataAll();
        getDataClassAll();
    }, []);

    const delete_classes = (key, value) => {
        axios({
            url: `${url}/science/delete/${value.id}`,
            method: 'DELETE'
        }).then((response) => getDataAll())
            .catch((error) => console.log(error))
    }

    return (
        <div className="class-add">
            <div className="class-add-title" style={{ color: "rgb(100, 100, 100)" }}>
                <span>Science add activation</span>
                <Button
                    type="primary"
                    onClick={() => saveButtonEquals()}
                    style={{visibility: visible}}
                >
                    Data storage
                </Button>
            </div>
            <div className="class-add-container">
                <div className="class-add-body">
                    <form>
                        <Row>
                            <Col lg={6} md={12} sm={12}>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="class-form-label">
                                        Science name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control science-name"
                                        name="science_name"
                                        id="exampleInputEmail1"
                                        placeholder="Matematika"
                                        onChange={(e) => inputChange(e)}
                                    />
                                </div>
                            </Col>

                            <Col lg={6} md={12} sm={12}>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="class-form-label">
                                        Science body
                                    </label>
                                    <input
                                        type="text"
                                        name = "science_body"
                                        className="form-control science-body"
                                        id="exampleInputEmail1"
                                        onChange={(e) => inputChange(e)}
                                    />
                                </div>
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" className="class-form-label">
                                        Active
                                    </label>
                                    <select
                                        className="form-select science-active"
                                        name = "active"
                                        onChange={(e) => inputChange(e)}
                                    >
                                        <option value="on">On</option>
                                        <option value="off">Off</option>
                                    </select>
                                </div>
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="class-form-label">
                                        Class id
                                    </label>
                                    <select name="class_id"
                                            className="form-select class-id"
                                            onChange={(e) => inputChange(e)}>
                                        <option value="0">Class id</option>
                                        {
                                            classes.map((item, key)=> (
                                                item.active === 'on' && <option value={item.id}>( {item.id} ) {item.class_name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </Col>
                        </Row>
                    </form>
                </div>
            </div>

            <div>
                <div className="classadddata-table-user-text" style={{marginTop: "20px"}}>
                    <div
                        className="classadddata-table-user-title"
                        style={{ color: "rgb(100, 100, 100)" }}
                    >
                        Sinflar
                    </div>
                    <div style={{ color: "royalblue" }} className="classadddata-table-user-title">
                        Soni: {science.length} ta
                    </div>
                </div>
                <Table columns={columns} dataSource={data}>

                </Table>
            </div>
        </div>
    );
};

export default ScienceAdd;