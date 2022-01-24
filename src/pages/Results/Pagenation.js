import React from "react";
import "./Pagenation.css";

function Pagenation({ lastIndex, totalLength, pagenate }) {
  const indexArray = [];
  for (let index = 1; index <= Math.ceil(totalLength / lastIndex); index++) {
    indexArray.push(index);
  }

  return (
    <div className="data-page">
      <div className="page-container">
        {indexArray.map((item, i) => {
          return (
            <button
              key={i}
              className="page-item-btn"
              onClick={() => {
                pagenate(item);
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Pagenation;
