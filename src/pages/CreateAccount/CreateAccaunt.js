import { Button, Checkbox, Form, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import "../AccauntLogin/AccauntLogin.css";
import $ from "jquery";

const initialValue = {
  fullname: "",
  select: "O'quvchi",
  number: "+998",
};

function CreateAccaunt() {
  const [user, setUser] = useState(initialValue);
  const { fullname, select, number } = user;
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const fullnameInput = () => {
    if (fullname.length > 11) {
      $("#fullname-icons").css({
        visibility: "visible",
      });
      $("#fullname").css({ border: "1px solid rgb(21, 223, 65)" });
      $("#type").css({ border: "1px solid rgb(21, 223, 65)" });
      $("#fullname-error").css({
        visibility: "hidden",
      });
      setError1("");
    } else {
      $("#fullname-icons").css({ visibility: "hidden" });
      $("#fullname").css({ border: "1px solid rgb(190, 190, 190)" });
      $("#type").css({ border: "1px solid rgb(190, 190, 190)" });
    }
  };
  const numberInput = () => {
    if (number.length === 13) {
      $("#number-icons").css({
        visibility: "visible",
      });
      $("#number").css({ border: "1px solid rgb(21, 223, 65)" });
      $("#number-error").css({
        visibility: "hidden",
      });
      setError2("");
    } else {
      $("#number-icons").css({
        visibility: "hidden",
      });
      $("#number").css({ border: "1px solid rgb(190, 190, 190)" });
    }
  };

  const createAccaunt = () => {
    if (number.length === 13 && fullname.length > 11) {
      $(".div").html("Ro'yxatdan o'tdingiz");
    } else {
      if (!(fullname.length > 11)) {
        $("#fullname").css({ border: "1px solid red" });
        $("#fullname-error").css({
          visibility: "visible",
        });
        setError1("Ism familiyangizni to'liq kiriting.");
      } else {
        $("#fullname").css({ border: "1px solid rgb(21, 223, 65)" });
      }
      if (!(number.length === 13)) {
        $("#number").css({ border: "1px solid red" });
        $("#number-error").css({
          visibility: "visible",
        });
        setError2("Telefon raqamingizni to'liq kiriting.");
      } else {
        $("#number").css({ border: "1px solid rgb(21, 223, 65)" });
      }
    }
  };
  console.log(fullname);
  console.log(select);

  return (
    <div className="accaunt-login">
      <div className="div"></div>
      <div className="accaunt-container">
        <span className="accaunt-title">Ro'yxatdan o'tish</span>
        <form>
          <div className="form-div">
            <label for="fullname">Ism familiyangizni kiriting</label>
            <input
              id="fullname"
              placeholder="Ism familiya"
              onChange={(e) => onValueChange(e)}
              name="fullname"
              onKeyUp={fullnameInput}
            />
            <i className="fa fa-check input-icons" id="fullname-icons"></i>
            <i
              className="fa fa-exclamation input-icons-error"
              id="fullname-error"
            ></i>
          </div>
          <div className="form-div">
            <label for="type">Qaysi toifaga mansubsiz</label>
            <select
              id="type"
              onChange={(e) => onValueChange(e)}
              name="select"
              value={select}
            >
              <option>O'quvchi</option>
              <option>O'qituvchi</option>
              <option>Talaba</option>
            </select>
          </div>

          <div className="form-div">
            <label for="number">Telefon raqam kiriting</label>
            <input
              id="number"
              onChange={(e) => onValueChange(e)}
              name="number"
              value={number}
              onKeyUp={numberInput}
            />
            <i className="fa fa-check input-icons" id="number-icons"></i>
            <i
              className="fa fa-exclamation input-icons-error"
              id="number-error"
            ></i>
          </div>
          <div className="create-error-text">{error1}</div>
          <div className="create-error-text">{error2}</div>
          <input
            id="button"
            type="button"
            value="Ro'yxatdan o'tish"
            onClick={() => createAccaunt()}
          />
        </form>
      </div>
    </div>
  );
}

export default CreateAccaunt;
