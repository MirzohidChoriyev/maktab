import React, {useEffect} from 'react'
import "./Navbar.css"
import $ from 'jquery'
import gerb from '../../Image/gerb.png';

function Navbar() {
   
    const inputShow = () =>{
        $('.navbar-input').click(()=>{
            let a = document.querySelector('.navbar-input-item').style.width;
            if(a == '400px'){  $('.navbar-input-item').css({'width': '100px', 'box-shadow': '0px 0px 0px white'})
            $('.navbar-opacity').css({'display': 'none'});
        } else {
                $('.navbar-input-item').css({'width': '400px', 'box-shadow': '0px 0px 10px blue'});
                $('.navbar-opacity').css({'display': 'block'});
            }
        })
    }
    const keyupShow = () =>{
        $('.navbar-input-item').keyup(()=>{
            let a = document.querySelector('.navbar-input-item').style.width;
            $('.navbar-input-item').css({'width': '400px', 'box-shadow': '0px 0px 10px blue'});
            $('.navbar-opacity').css({'display': 'block'});
        })
        $(window).scroll(()=>{
            if(window.scrollY > 20){
                $('.navbar-input-item').css({'width': '100px', 'box-shadow': '0px 0px 0px white'});
                $('.navbar-opacity').css({'display': 'none'});
            }
        })
        $('.navbar-opacity').click(()=>{
            $('.navbar-input-item').css({'width': '100px', 'box-shadow': '0px 0px 0px white'});
            $('.navbar-opacity').css({'display': 'none'});
        })
    }
    const hoverAngle = () =>{
        $('.navbar-li').mouseover(()=>{
            $('.navbar-text i').addClass('fa fa-angle-down');
        })
    }

useEffect(()=>{
    inputShow()
    keyupShow()
    hoverAngle()
}, [])
    return (
        <div className="Navbar">
            <div className="navbar-opacity">

            </div>
            <div className="navbar-item">
                <ul className="navbar-ul">
                    <li className="navbar-li">
                        <span className="navbar-icon"><i class="fa fa-home"></i></span>  
                        <span className="navbar-text">Bosh sahifa<i class="fa fa-angle-down" id = "navbar-angle-icon"></i></span>   
                    </li>
                    <li className="navbar-li">
                        <span className="navbar-icon"><i class="fa fa-home"></i></span>  
                        <span className="navbar-text">Bosh sahifa<i class="fa fa-angle-down" id = "navbar-angle-icon"></i></span>   
                    </li>
                    <li className="navbar-li">
                        <span className="navbar-icon"><i class="fa fa-home"></i></span>  
                        <span className="navbar-text">Bosh sahifa<i class="fa fa-angle-down" id = "navbar-angle-icon"></i></span>   
                    </li>
                    <li className="navbar-li">
                        <span className="navbar-icon"><i class="fa fa-home"></i></span>  
                        <span className="navbar-text">Bosh sahifa<i class="fa fa-angle-down" id = "navbar-angle-icon"></i></span>   
                    </li>
                    <li className="navbar-li">
                        <span className="navbar-icon"><i class="fa fa-home"></i></span>  
                        <span className="navbar-text">Bosh sahifa<i class="fa fa-angle-down" id = "navbar-angle-icon"></i></span>   
                    </li>
                    <li className="navbar-li">
                        <span className="navbar-icon"><i class="fa fa-home"></i></span>  
                        <span className="navbar-text">Bosh sahifa<i class="fa fa-angle-down" id = "navbar-angle-icon"></i></span>   
                    </li>
                </ul>
            </div>

            <div className="navbar-logo">
                <img className="navbar-logo-image" src = {gerb} />
                <span className="navbar-logo-text">k - <span className="navbar-space">M</span>aktab</span>
            </div>

            <div className='navbar-input'>
                  <input type = "search" className="navbar-input-item" placeholder = "Qidiruv" />
                  <span className='navbar-search-icon'><i class="fa fa-search"></i></span>
            </div>
        </div>
    )
}

export default Navbar
