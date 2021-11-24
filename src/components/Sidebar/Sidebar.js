import React, { useEffect } from 'react'
import "./Sidebar.css"
import $ from 'jquery'

function Sidebar() {

   const barsHide=()=>{
      $('.sidebar-nav-icon1').click(()=>{
         $('.sidebar').css({'left': '-275px'})
      })

      $('.sidebar-click-item2').click(()=>{
         $('.sidebar-container1').hide();
         $('.sidebar-container2').show();
      })

      $('.sidebar-click-item1').click(()=>{
         $('.sidebar-container2').hide();
         $('.sidebar-container1').show();
      })

      let itemBtn = document.querySelectorAll('.sidebar-item-span');
      itemBtn.forEach(item=>{
         item.addEventListener('click', ()=>{
            $('.sidebar-click .activeclick').removeClass('activeclick');
            item.classList.add('activeclick');
         })
      })

      $('.message-textarea').keyup(()=>{
         var len = $('.message-textarea').val().length;
         if(len >= 1){
            $('.message-send').show();
         } else {
            $('.message-send').hide();  
         }   
      })

      $(window).scroll(()=>{
         $('.sidebar').css({'left': '-275px'});
      })  
   }



useEffect(()=>{
    barsHide();
},[])
    return (         
        <div className='sidebar'>
            <div className='sidebar-container'>
               
              <div className="sidebar-nav">            
                    <span className="sidebar-nav-icon1">
                        <i class="fa fa-close"></i>
                    </span> 
                    <span className="sidebar-nav-text">Elementlar</span>
                    <span className="sidebar-nav-icon2">
                    <i class="fa fa-th"></i>
                    </span>   
              </div>   
              <div className = "sidebar-click">
                  <span className="sidebar-click-item1 sidebar-item-span activeclick">Sahifalar</span>
                  <span className="sidebar-click-item2 sidebar-item-span">Sozlamalar</span>    
              </div>    

                <div className="sidebar-container1">    
                  
                <div className="sidebar-search">
                    <i class="fa fa-search"></i><input type = "search" placeholder="Menyularni qidiring" className="sidebar-input" />
                </div>   
                <div className="sidebar-select"> 
                    <select className="sidebar-select-item">
                        <option>Item13333</option>
                        <option>Item1</option>
                        <option>Item1</option>
                        <option>Item1</option>
                    </select>
                </div>
                <div className="sidebar-elements">
                     <span className="sidebar-element-item">
                        <i class='fa fa-bars'></i>
                        <span>Text Editor</span>    
                     </span>    
                     <span className="sidebar-element-item">
                        <i class='fa fa-bars'></i>
                        <span>Text Editor</span>    
                     </span>    
                </div>      
                <div className="sidebar-elements">
                     <span className="sidebar-element-item">
                        <i class='fa fa-bars'></i>
                        <span>Text Editor</span>    
                     </span>  
                     <span className="sidebar-element-item">
                        <i class='fa fa-bars'></i>
                        <span>Text Editor</span>    
                     </span>    
                </div>      
                <div className="sidebar-elements">
                     <span className="sidebar-element-item">
                        <i class='fa fa-bars'></i>
                        <span>Text Editor</span>       
                     </span>    
                     <span className="sidebar-element-item">
                        <i class='fa fa-bars'></i>
                        <span>Text Editor</span>    
                     </span>    
                </div>      
                <div className="sidebar-elements">
                     <span className="sidebar-element-item">
                        <i class='fa fa-bars'></i>
                        <span>Text Editor</span>    
                     </span>  
                     <span className="sidebar-element-item">
                        <i class='fa fa-bars'></i>
                        <span>Text Editor</span>    
                     </span>    
                </div> 

                <div className="sidebar-elements">
                     <span className="sidebar-element-item">
                        <i class='fa fa-bars'></i>
                        <span>Text Editor</span>    
                     </span>  
                     <span className="sidebar-element-item">
                        <i class='fa fa-bars'></i>
                        <span>Text Editor</span>    
                     </span>      
                </div>     
                </div>  



                <div className="sidebar-container2">
                     <div className="sidebar-light">
                        <span className="sidebar-light-title">Qorong'u yorug' rejim</span>
                        <span className="sidebar-light-icon">
                           <div class="form-check form-switch">
                              <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                           </div>
                        </span>   
                     </div>

                     <div className="sidebar-message">
                        <div className="message-div">
                            <span className="message-title">Xabar matni</span>
                            <span className="message-send">Jo'natish</span>
                        </div>
                        <textarea className="message-textarea" placeholder="Xabar matni" />
                     </div>
                </div>

            </div>
        </div>      
    )
}

export default Sidebar    
