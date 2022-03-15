import React, { useEffect } from "react";
import "./Sidebar.css";
import $ from "jquery";
import { Link } from "react-router-dom";

function Sidebar() {
  const barsHide = () => {
    $(".sidebar-nav-icon1").click(() => {
      $(".sidebar").css({ left: "-275px" });
    });

    $(".sidebar-click-item2").click(() => {
      $(".sidebar-container1").hide();
      $(".sidebar-container2").show();
    });

    $(".sidebar-click-item1").click(() => {
      $(".sidebar-container2").hide();
      $(".sidebar-container1").show();
    });

    let itemBtn = document.querySelectorAll(".sidebar-item-span");
    itemBtn.forEach((item) => {
      item.addEventListener("click", () => {
        $(".sidebar-click .activeclick").removeClass("activeclick");
        item.classList.add("activeclick");
      });
    });

    $(".message-textarea").keyup(() => {
      var len = $(".message-textarea").val().length;
      if (len >= 1) {
        $(".message-send").show();
      } else {
        $(".message-send").hide();
      }
    });
  };

  useEffect(() => {
    barsHide();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-nav">
          <span className="sidebar-nav-icon1">
            <i class="fa fa-close"></i>
          </span>
          <span className="sidebar-nav-text">Elementlar</span>
          <span className="sidebar-nav-icon2">
            <i class="fa fa-th"></i>
          </span>
        </div>
        <div className="sidebar-click">
          <span className="sidebar-click-item1 sidebar-item-span activeclick">
            Sahifalar
          </span>
          <span className="sidebar-click-item2 sidebar-item-span">
            Sozlamalar
          </span>
        </div>

        <div className="sidebar-container1">
          <div className="sidebar-search">
            <i class="fa fa-search"></i>
            <input
              type="search"
              placeholder="Menyularni qidiring"
              className="sidebar-input"
            />
          </div>
          <div className="sidebar-select">
            <select className="sidebar-select-item">
              <option>Barcha sahifalar</option>
              <option>Ro'yxatdan o'tish</option>
              <option>Hisobingizga kirish</option>
              <option>Testlar</option>
              <option>Darsliklar</option>
              <option>Test natijalari</option>
              <option>Yangiliklar</option>
              <option>Online darslar</option>
              <option>Faol o'quvchilar</option>
              <option>Faol o'qituvchilar</option>
              <option>Maktab yutuqlari</option>
              <option>Maktab xodimlari</option>
              <option>Maktab hujjatlari</option>
            </select>
          </div>
          <div className="sidebar-elements">
            <span className="sidebar-element-item">
              <i class="fa fa-user-plus"></i>
              <span>Ro'yxatdan o'tish</span>
            </span>
            <span className="sidebar-element-item">
              <i class="fa fa-user"></i>
              <span>Hisobingizga kirish</span>
            </span>
          </div>
          <div className="sidebar-elements">
            <span className="sidebar-element-item">
              <i class="fa fa-question-circle"></i>
              <span>Testlar</span>
            </span>
            <span className="sidebar-element-item">
              <i class="fa fa-book"></i>
              <span>Darsliklar</span>
            </span>
          </div>
          <div className="sidebar-elements">
            <span className="sidebar-element-item">
              <i class="fa fa-list-ol"></i>
              <span>Test natijalar</span>
            </span>
            <span className="sidebar-element-item">
              <i class="fa fa-newspaper-o"></i>
              <span>Yangiliklar</span>
            </span>
          </div>
          <div className="sidebar-elements">
            <span className="sidebar-element-item">
              <i class="fa fa-file-video-o"></i>
              <span>Online darslar</span>
            </span>
            <span className="sidebar-element-item">
              <i class="fa fa-users"></i>
              <span>Faol o'quvchilar</span>
            </span>
          </div>

          <div className="sidebar-elements">
            <span className="sidebar-element-item">
              <i class="fa fa-users"></i>
              <span>Faol o'qituvchilar</span>
            </span>
            <span className="sidebar-element-item">
              <i class="fa fa-trophy"></i>
              <span>Maktab yutuqlari</span>
            </span>
          </div>

          <div className="sidebar-elements">
            <span className="sidebar-element-item">
              <i class="fa fa-users"></i>
              <span>Maktab xodimlari</span>
            </span>
            <span className="sidebar-element-item">
              <i class="fa fa-list"></i>
              <span>Maktab hujjatlari</span>
            </span>
          </div>
        </div>

        <div className="sidebar-container2">
          <div className="sidebar-light">
            <span className="sidebar-light-title">Qorong'u yorug' rejim</span>
            <span className="sidebar-light-icon">
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                />
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
  );
}

export default Sidebar;
