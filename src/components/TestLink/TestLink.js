import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";

function TestLink() {
  return (
    <div className="test-link">
      <div className="test-link-content">
        <div className="teacher-title-text">
          <span>BILIMINGIZNI SINAB KO'RING</span>
          <span className="teacher-title-line">
            <hr />
          </span>
        </div>
        <div className="test-link-body">
          <div className="test-link-text">
            <span className="test-link1 link-space" id="test-link1">
              Maktab o'quvchilari uchun testlar
              <i class="fa fa-list-ol" id="list-icon" aria-hidden="true"></i>
            </span>
            <span className="test-link1" id="test-link2">
              Abituriyentlar uchun testlar
              <i class="fa fa-list-ol" id="list-icon" aria-hidden="true"></i>
            </span>
            <span className="test-link1" id="test-link3">
              O'qituvchilar uchun testlar
              <i class="fa fa-list-ol" id="list-icon" aria-hidden="true"></i>
            </span>
            <Link to="/hardtest">
              <span className="test-link1" id="test-link4">
                Qiyin darajadagi mantiqiy savollar
                <i class="fa fa-list-ol" id="list-icon" aria-hidden="true"></i>
              </span>
            </Link>
          </div>
          <div className="test-link-image">
            <img src="https://quizizz.com/media/resource/gs/quizizz-media/quizzes/097eb1d7-83b6-4194-b8ac-59b8cdf08cec" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestLink;
