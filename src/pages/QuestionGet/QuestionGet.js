import React, { useEffect } from 'react';
import './QuestionGet.css';
import $ from 'jquery'

function QuestionGet() {

    const messageKeyup = () =>{     
        $(".que-fullname").keyup(()=>{
            let len = $(".que-fullname").val().length;
            if(len >= 10){     
                $(".que-fullname").css({'border': '1px solid lightgreen'});
            } else {
                $(".que-fullname").css({'border': '1px solid red'});
            }
        })

        $(".que-phone").keyup(()=>{
            let len = $(".que-phone").val().length;
            if(len == 12){     
                $(".que-phone").css({'border': '1px solid lightgreen'});
            } else {
                $(".que-phone").css({'border': '1px solid red'});
            }    
        })

        $(".que-text").keyup(()=>{
            let len = $(".que-text").val().length;
            if(len >= 1){     
                $(".que-text").css({'border': '1px solid lightgreen'});
            } else {
                $(".que-text").css({'border': '1px solid red'});
            }    
        })

        $(".que-button").click(()=>{
            if($(".que-text").val().length >=1 && $(".que-phone").val().length==12 && $(".que-fullname").val().length >= 10){
                $('.que-bildirishnoma-success').show(10);
                $('.que-bildirishnoma-error').hide(10);
                $(".que-text").val('');
                $(".que-phone").val('');
                $(".que-fullname").val('');
            } else {
                $('.que-bildirishnoma-success').hide(10);
                $('.que-bildirishnoma-error').show(10);
            }
        })   
    }

useEffect(()=>{
    messageKeyup();
})




    return (     
        <div className="que-accaunt">    
            <div className="que-container">
                <span className="que-title">{"Xabar yuborish".toUpperCase()}</span>
                       
                <form className="que-form">  
                    <label id = "que-fullname-label">ISM FAMILIYANGIZ</label>
                    <input className="que-fullname" id = "que-fullname" placeholder="Ism familiya" />
                    <label id = "que-phone-label">TELEFON RAQAMINGIZ</label>  
                    <input type="number" className="que-phone" id = "que-phone" placeholder="+998990333179" />
                    <label id = "que-text-label">XABAR MATNI</label>    
                    <textarea className="que-text" id = "que-text" placeholder="Xabar matni..." />   
                    <input className="que-button" id = "que-button" value = "Yuborish" />  
                </form>              
            </div>

            <div className="que-bildirishnoma">
                <span className="que-bildirishnoma-error">Ma'lumotlarni to'liq kiriting</span>
                <span className="que-bildirishnoma-success">Xabaringiz jo'natildi</span>
            </div>
        </div>   
    )
}

export default QuestionGet
