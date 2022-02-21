import React, { useState } from "react";
import "./TestAdd.css";

const TestAdd = () => {
  const [enter, setEnter] = useState("text");
  return (
    <div className="test-add">
      <div className="test-add-container">
        <div className="test-add-question">
          <div>
            <span>
              <i className="fa fa-image"></i>
            </span>
            <span>
              <i className="fa fa-image"></i>
            </span>
            <span>
              <i className="fa fa-file"></i>
            </span>
          </div>
          <div>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestAdd;

//Mirzohid.55buxoro
