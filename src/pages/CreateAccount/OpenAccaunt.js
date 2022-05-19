import React, {useEffect, useState} from "react";
import "./OpenAccaunt.css"
import {Col, Row} from "react-bootstrap";
import axios from 'axios'
import {url} from "../../components/Utils/Api/Api";
import Stack from '@mui/material/Stack';
import $ from 'jquery'
import {useNavigate} from 'react-router-dom'
import 'antd/dist/antd.css';
import {Snackbar} from "@mui/material";
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const initialValue = {
  fullname: '',
  username: ''
}

function OpenAccaunt() {
  const [list, setList] = useState();
  const [user, setUser] = useState(initialValue);
  const {fullname, username} = user;
  let history = useNavigate();
  const [open, setOpen] = useState(false);
  const [is_user, setIs_user] = useState(null);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const input_change = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
    console.log(user);

    document.getElementById("fullname").style.border = '1px solid #b2b2b2';
    document.getElementById("username").style.border = '1px solid #b2b2b2';
  }


  const data_is_user = () => {
    if(user.fullname.length >= 9 && user.username.length >= 5) {
      axios({
        url: `${url}/users/getbyusername/${user.username}`,
        method: 'GET'
      }).then((response) => setIs_user(response.data.object))
          .catch((error) => handleClick());

    } else {
      if(user.fullname.length < 9) {
        document.getElementById("fullname").style.border = '1px solid red';
      }
      if(user.username.length < 5) {
        document.getElementById("username").style.border = '1px solid red';
      }
    }
  }

  return (
      <div className="accaunt-login" style={{backgroundColor: "rgb(245, 245, 245)"}}>
        <div className="accaunt-container">
          <Row>
            <Col lg={6} md={12} sm={12}>
              <div className="account-item2">
                <div className="login-title">
                  Kirish
                </div>
                <div className="login-body">
                  <form>
                    <div>
                      <label for = "fullname" className="label-class"><span id = "space">*</span>Ism familiyangizni kiriting</label>
                      <input type="text" required value={fullname} id = "fullname" onChange={(e) => input_change(e)} name = "fullname" className="input-class"/>
                    </div>

                    <div>
                      <label for = "username" className="label-class"><span id = "space">*</span>Loginingiz</label>
                      <input type="text" minLength={4} value={username} placeholder="login123" id = "username" onChange={(e) => input_change(e)} name = "username" className="input-class"/>
                    </div>

                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <input type="checkbox" id = "checkbox"/>
                      <label className="label-class-checkbox">Eslab qolish</label>
                    </div>

                    <div>
                      <input type="button" id = "accaunt-submit-o" onClick={() => data_is_user()} name = "button" className="button-o" value="Kirish" />
                    </div>
                  </form>
                </div>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className="account-item1-o">
                <div className="account-image">
                  <img src="https://lms.tuit.uz/assets/images/study.svg" />
                </div>
              </div>
            </Col>
          </Row>

          <Stack spacing={2} sx={{ width: '100%'}}>
            <Snackbar open={open}
                      autoHideDuration={5000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="error"
                     sx={{ width: '100%' }} >
                Ushbu login orqali boshqa foydalanuvchi ro'yxatdan o'tgan boshqa login kiriting.
              </Alert>
            </Snackbar>
          </Stack>

        </div>
      </div>
  );
}

export default OpenAccaunt;
