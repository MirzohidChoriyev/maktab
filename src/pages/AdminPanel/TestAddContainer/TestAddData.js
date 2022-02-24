import { data } from 'jquery';
import React, { useEffect, useState } from 'react'
import { deleteData, getData, saveData } from './api';
import "./TestAddData.css"


function TestAddData({setRefresh, refresh}) {
    const [json, setJson] = useState([]);

    const getDataAll = async () => {
        const response = await getData();
        setJson(response.data);
        console.log(response.data);
    }

    const deleteObject = async (i) => {
        await deleteData(i);
        getDataAll()
    }

    useEffect(()=> {
       getDataAll();
    }, [])

  return (
    <div className='test-add-data'>
        <div className = "test-add-data-container">
               <table id = "testadd-table">
                   <thead>
                     <tr>
                         <th>T/R</th>
                         <th>QuestionId</th>
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
                         <td>{item.id}</td>
                         <td>{item.classId}</td>
                         <td>{item.scienceId}</td>
                         <td>{item.question}</td>
                         <td>{item.answer}</td>
                         <td>{item.answer1}</td>
                         <td>{item.answer2}</td>
                        <td>{item.answer3}</td>
                         <td>{item.answer4}</td>
                         <td><button className="classadddata-edit">Edit</button></td>
                         <td><button  onClick={() => deleteObject(item.id)} className="classadddata-delete">Delete</button></td>
                     </tr>)
                         })
                     }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default TestAddData