import React, { useEffect } from 'react'
import './CreateAccaunt.css'
import $ from "jquery"

function CreateAccaunt() {

    const inputKeyup = () =>{
        $(".c-fullname").keyup(()=>{
            let len = $(".c-fullname").val().length;
            if(len >= 10){     
                $(".c-fullname").css({'border': '1px solid lightgreen'});
                $(".c-icon-full1").hide(10);
                $(".c-icon-full2").show(10);
            } else {
                $(".c-fullname").css({'border': '1px solid red'});
                $(".c-icon-full1").show(10);
                $(".c-icon-full2").hide(10);
            }
        })

        $(".c-phone").keyup(()=>{
            let len = $(".c-phone").val().length;
            if(len == 12){     
                $(".c-phone").css({'border': '1px solid lightgreen'});
                $(".c-icon-phone1").hide(10);
                $(".c-icon-phone2").show(10);
            } else {
                $(".c-phone").css({'border': '1px solid red'});
                $(".c-icon-phone1").show(10);
                $(".c-icon-phone2").hide(10);
            }    
        })

        $(".c-button").click(()=>{
            if($(".c-phone").val().length == 12 && $(".c-fullname").val().length >= 10){
                $('.c-success-visible').css({'visibility': "visible"})
                $('.c-error-visible').css({'visibility': "hidden"})
                $(".c-phone").val('');
                $(".c-fullname").val('');
            } else {
                $('.c-error-visible').css({'visibility': "visible"})
                $('.c-success-visible').css({'visibility': "hidden"})
            }
        })   
    }

useEffect(()=>{
    inputKeyup();
})
    return (   
        <div className="c-accaunt">
            <div className="c-container">
                <div style={{textAlign: "center"}}>
                <span className="c-title">{"Ro'yxatdan o'tish".toUpperCase()}</span>
                </div>
                     
                <form className="c-form">
                    <label id = "c-fullname-label">ISM FAMILIYANGIZ</label>
                    <div style={{position: "relative", width: "100%"}}>
                      <input className="c-fullname" id = "c-fullname" placeholder="Ism familiya" />
                      <i class="fa fa-user-o c-icon c-icon-full1"></i>
                      <i class="fa fa-check c-icon c-icon-full2"></i>     
                    </div>
                    <label id = "c-phone-label">TELEFON RAQAMINGIZ</label>  
                    <div style={{position: "relative", width: "100%"}}>
                       <input type = "number" className="c-phone" id = "c-phone" placeholder="+998990333179" /> 
                       <i class="fa fa-user-o c-icon c-icon-phone1"></i>
                      <i class="fa fa-check c-icon c-icon-phone2"></i>  
                    </div>     
                    <span className="c-error-visible">Ma'lumotlarni to'liq kiriting</span> 
                    <span className="c-success-visible">Ro'yxatdan o'tdingiz</span> 
                    <input className="c-button" id = "c-button" value = "Ro'yxatdan o'tish" />  
                </form>          
            </div>
        </div>   
    )
}

export default CreateAccaunt
