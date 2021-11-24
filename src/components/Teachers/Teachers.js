import {Row} from 'react-bootstrap'
import React, { useEffect } from 'react'
import "./Teachers.css"
import Teach from './Teach'
import { data } from './Data'
import $ from 'jquery'

function Teachers() {

    const scrollNext = () =>{
        var sum = 0;
        $('.nextIcon').click(()=>{
            $('.teacher-item').scrollX = 20;
        })
    }
useEffect(()=>{
    scrollNext();
}, [])
    return (
        <div className="Teachers">
            <div className="teacher-container">
                <div className="teacher-title">
                    <div className="teacher-title-text">
                        <span>O'QUV DARSLIKLARI</span>
                        <span className="teacher-title-line"><hr /></span>
                    </div>
                    <div className="teacher-pagenation">
                       <div className="book-back">
                           <i class="fa fa-angle-left backIcon"></i>
                           <i class="fa fa-angle-right nextIcon"></i>
                       </div>   
                    </div>      
                </div>  
                  
                <Row>
                     <div className="teacher-item">
                    {
                        data.map((item, index)=>{
                            return <Teach key = {item.id} item = {item} index = {index} />
                        })
                    } 
                     </div>  
                
                </Row>  
            </div>
        </div>  
    )   
}  

export default Teachers
