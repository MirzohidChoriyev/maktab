import {Row} from 'react-bootstrap'
import React, { useEffect } from 'react'
import "./Teachers.css"
import Teach from './Teach'
import Slider from "react-slick";
import { datajson } from './Data.js'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Teachers() {
    const [data, setData] = useState(datajson);

    const scrollNext = () =>{
        var sum = 0;
        $('.nextIcon').click(()=>{
            $('.teacher-item').scrollX = 20;  
        })
    }

    var settings = {
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 2300,
        cssEase: "linear",
        responsive: [      
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
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
                      
                </div>  
                  { data.length !== 0 ?
                     <Slider {...settings} className="teacher-slider">   
                    { 
                        datajson.map((item, index)=>{
                            return <Teach key = {item.id} item = {item} index = {index} />
                        })  
                        
                    }    
                    </Slider> :
                <div className='teacher-void'>
                    <span className='teacher-void-item'>Ma'lumotlar mavjud emas.</span>
                </div>
                }
   
                <div className="teacher-download">
                  { data.length !== 0 ? 
                    <Link to = "/bookdownload"><span><i class="fa fa-download"></i> Kitoblarni yuklab olish.</span></Link>
                    :
                    "" 
                  } 
                </div>
            </div>
        </div>  
    )   
}  

export default Teachers
