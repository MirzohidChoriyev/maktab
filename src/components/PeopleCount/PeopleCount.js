import React from 'react'
import "./PeopleCount.css"

function PeopleCount() {
    return (
        <div className="p-count">
            <div className="p-opacity">   

            </div>
            <div className="p-background">  

            </div>
            <div className="p-container">
                 <div className="p-count">
                      <div className="p-count-container">
                           <span className="p-pupils-count p-count-item">6789</span>
                           <span className="p-count-title">Pupils</span>                           
                      </div>    
                      <div className="p-count-container">
                           <span className="p-teachers-count p-count-item">6789</span>
                           <span className="p-count-title">Pupils</span>                           
                      </div>
                      <div className="p-count-container">
                           <span className="p-pupils-count p-count-item">6789</span>
                           <span className="p-count-title">Pupils</span>                           
                      </div>
                      <div className="p-count-container space">
                           <span className="p-pupils-count p-count-item">6789</span>
                           <span className="p-count-title">PUPILS</span>                           
                      </div>  
                 </div>
            </div>
        </div>
    )
}

export default PeopleCount
