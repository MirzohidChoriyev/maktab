import React, {useEffect, useState} from 'react';
import "./MasalaAdd.css"
import $ from "jquery";
import axios from "axios";
import {url} from "../../components/Utils/Api/Api";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Button } from 'antd';
import MuiAlert from "@mui/material/Alert";
import {Snackbar} from "@mui/material";
import Stack from "@mui/material/Stack";
import { Link } from 'react-router-dom';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const initialValue = {
    "masala": "",
    "comment": ""
}

function MasalaAdd(){
    const [json, setJson] = useState(initialValue);
    const {masala, comment} = json;
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    
    const Toggle = () => {
        $(".news-bars").click(() => {
            $(".sidebar").css({ left: "0px" });
        });
    };

    useEffect(() => {
        Toggle();
    }, []);

    const inputChange = (e) => {
        setJson({...json, [e.target.name]: e.target.value});
    }
    console.log(json);

    const saveMasala = () => {
        axios({
            url: `${url}/masala/save`,            
            method: 'POST',
            data: json
        }).then(res => handleClick())
        .catch(err => console.log(err));
    }

    return(
        <div style={{backgroundColor: '#f8f9fc', minHeight: '100vh', height: 'auto'}}>
            <div className="masala-container">
                <div className="news-topbar-container">
                    <div className="news-topbar">
                        <div className="news-bars">
                            <i className="fa fa-bars"></i>
                        </div>
                        <div className="news-title">   
                            <span>Savollaringizni yuboring</span>
                        </div>
                        <div className="news-search">
                            
                        </div>
                    </div>
                </div>

                <div className = "masalar">  
                  
                    <div className="masala-add">   
                        <textarea placeholder='Savolni kiriting' name = "masala" rows={4} id = "masala" className='masala-textarea' onChange = {inputChange} /> 
                    
                        <div className='masala-data-content'>
                           <input name = "comment" id = "comment" className='masala-add-comment' onChange = {inputChange} placeholder="Ma'lumot kiriting" />
                           <Button type='primary' onClick = {() => {saveMasala()}} className='masala-add-button'>Saqlash</Button>
                        </div>
                    </div>
                   
                </div>  
            </div>
            <Sidebar />

        <Stack spacing={2} sx={{ width: '100%'}}>
            <Snackbar open={open}
                      autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success"

                       sx={{ width: '100%' }} >
                    Muvaffaqiyat qo'shildi
                </Alert>
            </Snackbar>
        </Stack>

        <div className='body-to-back'>
            <Link to = "/"><button className='back-button'>Orqaga</button></Link>     
        </div>
        </div>
    )
}
export default MasalaAdd;