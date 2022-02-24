import { Button, Modal } from 'antd';
import { data } from 'jquery';
import React, { useEffect, useState } from 'react'
import { deleteData, getData, saveData } from './api';
import "./TestAddData.css"


function TestAddData({setRefresh, refresh}) {
    const [json, setJson] = useState([]);
    const [textsee, setTextsee] = useState('');
    const [show, setShow] = useState(false);

    const getDataAll = async () => {
        const response = await getData();
        setJson(response.data);
        console.log(response.data);
    }

    const deleteObject = async (i) => {
        await deleteData(i);
        getDataAll()
    }

    const refreshFunction = () => {
        getDataAll();
        setRefresh("save");
    }

    useEffect(()=> {
       getDataAll();
    }, [])

    useEffect(()=> {
       refreshFunction(); 
    }, [refresh])

    const textSeeFunc = (text) => {
        setShow(true);
        setTextsee(text);
    }

  return (
    <div className='test-add-data'>
        <div className = "test-add-data-container">
               <table id = "testadd-table">
                   <thead>
                     <tr>
                         <th>T/R</th>
                         <th id = "test-que-id">QId</th>
                         <th>ClassId</th>
                         <th>ScienceId</th>
                         <th>Question</th>
                         <th>Answer</th>
                         <th>Option1</th>
                         <th>Option2</th>
                         <th>Option3</th>
                         <th>Option4</th>
                         <th>Edit</th>
                         <th>Delete</th>
                     </tr>
                </thead>
                
                    <tbody>
                     {
                         json.map((item, index)=>{
                             return(<tr>
                         <td style = {{width: '35px', textAlign: "center", fontWeight: '600'}}>{index + 1}</td>
                         <td id = "test-que-id">{item.id}</td>
                         <td>{item.classId}</td>
                         <td style={{textAlign: 'center', fontWeight: 'bold'}}>{item.scienceId}</td>
                         <td>{item.question.substring(0, 20)}..<i className='fa fa-edit test-add-icon-see' onClick = {() => textSeeFunc(item.question)}></i></td>
                         <td style={{textAlign: 'center', fontWeight: 'bold'}}>{item.answer}</td>
                         <td>{item.answer1.substring(0, 20)}.. <i className='fa fa-edit test-add-icon-see'></i></td>
                         <td>{item.answer2.substring(0, 20)}.. <i className='fa fa-edit test-add-icon-see'></i></td>
                         <td>{item.answer3.substring(0, 20)}..<i className='fa fa-edit test-add-icon-see'></i></td>
                         <td>{item.answer4.substring(0, 20)}..<i className='fa fa-edit test-add-icon-see'></i></td>
                         <td><button className="classadddata-edit">Edit</button></td>
                         <td><button  onClick={() => deleteObject(item.id)} className="classadddata-delete">Delete</button></td>
                     </tr>)  
                         })  
                     }
                </tbody>
            </table>
        </div>
        <Modal title = {"All data"} visible={show} footer = {false}>
             <b style = {{color: "rgb(100, 100, 100)", fontSize: "15px"}}>{textsee}</b>
             <hr />
             <Button type = "primary" onClick={() => setShow(false)} danger>Close</Button>
             <Button style = {{marginLeft: '6px'}} type = "primary">Copy</Button>
        </Modal>
    </div>
  )
}

export default TestAddData