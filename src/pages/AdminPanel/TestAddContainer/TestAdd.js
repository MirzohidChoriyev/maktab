import {Button, message} from 'antd';
import React, {useEffect, useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import "./TestAdd.css"
import {url} from "../../../components/Utils/Api/Api";
import axios from "axios";

const initialValue = {
    "questions_id": 1,
    "category_id": 1,
    "class_id": 0,
    "science_id": 0,
    "question": "",
    "answer": "A",
    "answer1": "A#",
    "answer2": "B#",
    "answer3": "C#",
    "answer4": "D#"
}


function TestAdd({setRefresh, refresh}) {
    const [item, setItem] = useState(initialValue);
    const [classes, setClasses] = useState([]);
    const [science, setScience] = useState([]);
    const {questions_id, category_id, class_id, science_id, question, answer, answer1, answer2, answer3, answer4} = item;

    const inputChange = (e) => {
        setItem({...item, [e.target.name]: e.target.value });
        console.log(item);
    }

    const success = () => {
        message.success("Muvvafaqiyatli saqlandi");
    };

    const error = () => {
        message.error("Saqlashda xatolik yuz berdi");
    };

    const saveDataObject = () => {
        axios({
            url: `${url}/question/save`,
            method: 'POST',
            data: item
        }).then((response) => success())
            .catch((error) => error());
    }

    const data_get_all_class = () => {
        axios({
            url: `${url}/classes/getall`,
            method: 'GET'
        }).then((response) => setClasses(response.data.object))
            .catch(error => console.log(error));
    }

    const data_get_all_science = () => {
        axios({
            url: `${url}/science/getall`,
            method: 'GET'
        }).then((response) => setScience(response.data.object))
            .catch(error => console.log(error));
    }

    useEffect(() => {
        data_get_all_class();
        data_get_all_science();
    }, [])

  return (
    <div className='test-add'>
        <div className='test-add-container'>
            <div className='test-add-textarea'>
                <button style = {{marginTop: '-10px', background: 'green', color: 'white', width: '60px'}} onClick={()=> saveDataObject()}>Save</button>
                <div className='test-select-content'>
                <Row>
                    <Col lg = {3} md = {6} sm = {12}>
                        <label>Question id</label>
                        <select class="form-select questions_id" name='questions_id' onChange={(e) => inputChange(e)} aria-label="Default select example">
                            <option value = {1}>1</option>
                            <option value = {2}>2</option>
                            <option value = {3}>3</option>
                            <option value = {4}>4</option>
                            <option value = {5}>5</option>
                        </select>
                    </Col>
                    <Col lg = {3} md = {6} sm = {12}>
                        <label>Category id</label>
                        <select class="form-select category_id" name='category_id' onChange={(e) => inputChange(e)} aria-label="Default select example">
                            <option value = {1}>1</option>
                            <option value = {2}>2</option>
                            <option value = {3}>3</option>
                            <option value = {4}>4</option>
                            <option value = {5}>5</option>
                        </select>
                    </Col>

                    <Col lg = {3} md = {6} sm = {12}>
                        <label>Class id</label>
                        <select class="form-select class_id" name='class_id' onChange={(e) => inputChange(e)} aria-label="Default select example">
                            {
                                classes.map((item, key)=>(
                                    <option value = {item.id} key={key}>( {item.id} )  {item.class_name}</option>
                                ))
                            }
                        </select>
                    </Col>

                    <Col lg = {3} md = {6} sm = {12}>
                        <label>Science id</label>
                        <select class="form-select science_id" name = "science_id" onChange={(e) => inputChange(e)} aria-label="Default select example">
                            {
                                science.map((y, key)=>(
                                   <option value = {y.id} key={key}>( {y.class_id} ):( {y.id} ) {y.science_name}</option>
                                ))
                            }
                        </select>
                    </Col>

                    <Col lg = {3} md = {6} sm = {12}>
                        <label>True answer</label>
                        <select class="form-select" name = "answer" onChange={(e) => inputChange(e)} aria-label="Default select example">
                           <option value={"A"}>A</option>
                           <option value={"B"}>B</option>
                           <option value={"C"}>C</option>
                           <option value={"D"}>D</option>
                        </select>
                    </Col>

                </Row>
            </div>
                <div id = "test-add-question">
                    <span>Add question content</span>
                    <textarea type = "text" className="question" name = "question" rows={4} placeholder="..." onChange={(e) => inputChange(e)}>
                        
                    </textarea>
                </div>
                <Row>
                    <Col lg = {6} md = {12} sm = {12}>
                        <div className='test-add-relative'>
                            <span>A</span>
                            <textarea type = "text" defaultValue={"A#"} className="answer1"  name = "answer1" rows={3} placeholder="..." onChange={(e) => inputChange(e)}>
                    
                            </textarea>
                        </div>
                    </Col>
                    <Col lg = {6} md = {12} sm = {12}>
                        <div className='test-add-relative'>
                            <span>B</span>
                            <textarea type = "text" defaultValue={"B#"} className="answer2"  name = "answer2" rows={3} placeholder="..." onChange={(e) => inputChange(e)}>
                    
                            </textarea>
                        </div>
                    </Col>
                    <Col lg = {6} md = {12} sm = {12}>
                       <div className='test-add-relative'>
                            <span>C</span>
                            <textarea type = "text" defaultValue={"C#"} className="answer3"  name = "answer3" rows={3} placeholder="..." onChange={(e) => inputChange(e)}>
                    
                            </textarea>
                        </div>
                    </Col>
                    <Col lg = {6} md = {12} sm = {12}>
                       <div className='test-add-relative'>
                            <span>D</span>
                            <textarea type = "text" defaultValue={"D#"} className="answer4"  rows={3} name = "answer4" placeholder="..." onChange={(e) => inputChange(e)}>

                            </textarea>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
  )
}

export default TestAdd