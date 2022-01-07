
import React, {useEffect, useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import {images} from './Images'
import "./Header.css"
import { data } from 'jquery';
     
function Header() {  
    const [index, setIndex] = useState(0);
    console.log(images);

    const checkNumber=(number)=>{
        if(number < 0){
            return images.length - 1;
        }
        if(number > images.length - 1){
            return 0;
        }
        return number;
    }

    const backImage = (index) =>{
        setIndex(index => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
    }

    const nextImage = (index) =>{
        setIndex(index => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        })
    }

    const dateImage = (index) =>{
        setIndex(index => {
        let dateImage = new Date().getHours();
            let newIndex;
            if(dateImage >= 7 && dateImage < 12 ){   
                newIndex = 0;
            } else if(dateImage >= 12 && dateImage < 18){
                newIndex = 1;      
            } else if(dateImage >= 18 && dateImage < 23 ){
                newIndex = 2;
            } else {
                newIndex = 1;    
            }
            return checkNumber(newIndex);
        })
    }
    
useEffect(()=>{
    dateImage();
}, [])

    return (  
        <div className="Header">
            <div className="header-image">   
                <img src = {images[index].poster} />          
            </div> 
            <div className="header-opacity">    
            
            </div>  
            <div className="header-image-exchange">
                 <span className="header-image-next" onClick = {()=>{backImage()}}><i class="fa fa-angle-left"></i></span>
                 <span className="header-image-back" onClick = {()=>{nextImage()}}><i class="fa fa-angle-right"></i></span>
            </div>  

            <div className="sidebar-menu">
                <span className='sidebar-menu-span'>
                    <i class="fa fa-bars"></i>  
                </span>  
            </div> 
            
            <div className="header-body">
                <span className="header-text">SHOFIRKON TUMANI UMUMIY</span>
                <span className="header-school">O'RTA TA'LIM MAKTABI</span>
                <span className="header-btn">KIRISH</span>
            </div> 

            <div className="header-page">
                <Row>
                    <Col lg = {4} md = {12} sm = {12}>  
                <div className="header-page-item">
                      <span className="header-page-icon"><i class = "fa fa-question-circle-o"></i></span>
                      <span className="header-span1">O'ZINGIZNI SINAB</span>
                      <span className="header-span2">KO'RING</span>
                      <span className="header-more">Batafsil <i class="fa fa-angle-right"></i></span>
                 </div>  
                    </Col> 
                    <Col lg = {4} md = {12} sm = {12}>  
                <div className="header-page-item">
                      <span className="header-page-icon"><i class = "fa fa-graduation-cap"></i></span>
                      <span className="header-span1">MAKTAB HAQIDA</span>
                      <span className="header-span2">100 - MAKTAB</span>
                      <span className="header-more">Batafsil <i class="fa fa-angle-right"></i></span>
                 </div>
                    </Col>  
                    <Col lg = {4} md = {12} sm = {12}>  
                <div className="header-page-item">
                      <span className="header-page-icon"><i class = "fa fa-user"></i></span>
                      <span className="header-span1">MAKTAB FAOL</span>
                      <span className="header-span2">O'QUVCHILARI</span>
                      <span className="header-more">Batafsil <i class="fa fa-angle-right"></i></span>
                 </div>
                    </Col>
                </Row>
            </div>  
        </div>
    )
}

export default Header
