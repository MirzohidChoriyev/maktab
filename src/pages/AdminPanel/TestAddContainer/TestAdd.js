import { Button } from 'antd';
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { saveData } from './api';
import "./TestAdd.css"

const initialValue = {
            "id": "",
            "questionId": "",
            "classId": "",
            "scienceId": "",
            "question": "",
            "answer": "A",
            "answer1": "",
            "answer2": "",
            "answer3": "",
            "answer4": ""
}


function TestAdd({setRefresh}) {
    const [json, setJson] = useState(initialValue);
    const {id, questionId, classId, scienceId, question, answer, answer1, answer2, answer3, answer4} = json;

    const inputChange = (e) => {
        setJson({...json, [e.target.name]: e.target.value });
        console.log(json);
    }

    const saveDataObject = async () => {
        await saveData(json);
        setRefresh("saving");
    }

  return (
    <div className='test-add'>
        <div className='test-add-container'>
            <div className='test-add-textarea'>
                <button onClick={()=> saveDataObject()}>Save</button>
                <div className='test-select-content'>
                <Row>
                    <Col lg = {3} md = {6} sm = {12}>
                        <label>Select a class</label>
                        <select class="form-select" name='classId' onChange={(e) => inputChange(e)} aria-label="Default select example">
  <option selected value = {1000}>5 - Sinflar uchun</option>
  <option value = {1001}>6 - Sinflar uchun</option>
  <option value = {1002}>7 - Sinflar uchun</option>
  <option value = {1003}>8 - Sinflar uchun</option>
</select>
                    </Col>
                    <Col lg = {3} md = {6} sm = {12}>
                        <label>Select a science</label>
                        <select class="form-select" name = "scienceId" onChange={(e) => inputChange(e)} aria-label="Default select example">
  <option selected value={10000}>Matematika</option>
  <option value={10001}>Matematika</option>
  <option value={10002}>Matematika</option>
  <option value={10003}>Matematika</option>
</select>
                    </Col>
                    <Col lg = {3} md = {6} sm = {12}>
                        <label>Select a test id</label>
                        <select class="form-select" name = "questionId" onChange={(e) => inputChange(e)} aria-label="Default select example">
  <option selected value={1}>1 - Test</option>
  <option value={2}>2 - Test</option>
  <option value={3}>3 - Test</option>
  <option value={4}>4 - Test</option>
</select>
                    </Col>
            <Col lg = {3} md = {6} sm = {12}>
                        <label>True answer select</label>
                        <select class="form-select" name = "answer" onChange={(e) => inputChange(e)} aria-label="Default select example">
  <option selected value={"A"}>A</option>
  <option value={"B"}>B</option>
  <option value={"C"}>C</option>
  <option value={"D"}>D</option>
</select>
                    </Col>
                </Row>
            </div>
                <div id = "test-add-question">
                    <span>Add question content</span>
                    <textarea type = "text" name = "question" rows={4} placeholder="..." onChange={(e) => inputChange(e)}>
                        
                    </textarea>
                </div>
                <Row>
                    <Col lg = {6} md = {12} sm = {12}>
                        <div className='test-add-relative'>
                            <span>A</span>
                            <textarea type = "text" name = "answer1" rows={3} placeholder="..." onChange={(e) => inputChange(e)}>
                    
                            </textarea>
                        </div>
                    </Col>
                    <Col lg = {6} md = {12} sm = {12}>
                        <div className='test-add-relative'>
                            <span>B</span>
                            <textarea type = "text" name = "answer2" rows={3} placeholder="..." onChange={(e) => inputChange(e)}>
                    
                      </textarea>
                        </div>
                    </Col>
                    <Col lg = {6} md = {12} sm = {12}>
                       <div className='test-add-relative'>
                            <span>C</span>
                            <textarea type = "text" name = "answer3" rows={3} placeholder="..." onChange={(e) => inputChange(e)}>
                    
                      </textarea>
                        </div>
                    </Col>
                    <Col lg = {6} md = {12} sm = {12}>
                       <div className='test-add-relative'>
                            <span>D</span>
                            <textarea type = "text" rows={3} name = "answer4" placeholder="..." onChange={(e) => inputChange(e)}>
                    
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