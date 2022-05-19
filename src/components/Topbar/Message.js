import { Button } from '@material-ui/core';
import { Modal } from 'antd'
import SendIcon from '@mui/icons-material/Send';
import React, { useState } from 'react'
import axios from 'axios'
import { url } from '../Utils/Api/Api';
import MuiAlert from "@mui/material/Alert";
import {Snackbar} from "@mui/material";
import Stack from "@mui/material/Stack";


const initialValue = {
  "message": ""
}

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Message({setVisible, visible}) {
  const [json, setJson] = useState(initialValue);
  const {message} = json;

  const data_save_message = () => {
    axios({
      url: `${url}/message/save`,
      method: 'POST',
      data: json
    }).then((res) => handleClick())
    .catch(err => handleClickError());  

    setVisible(false);      
  }

  const [open, setOpen] = useState(false);
  const [error_open, setErrorOpen] = useState(false);

  const handleClick = () => {
      setOpen(true);
  };

  const handleClickError = () => {
    setErrorOpen(true);
};

  const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
          return;
      }
      setOpen(false);
  };

  const handleCloseError = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }
    setErrorOpen(false);
};


  const inputChange = (e) => {
    setJson({...json, [e.target.name]: e.target.value});
    console.log(json);
  }
    
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  const showModal = () => {  
    setVisible(true);            
  };


  const handleCancel = () => {
    console.log('Clicked cancel button');  
    setVisible(false);  
  };          
        
  return (
    <div>
        <div className='message-container'>
        <Modal
        title="Xabar jo'nating"
        visible={visible}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={false}
      >
        
        <div className='message'>
            <textarea onChange={(e) => {inputChange(e)}} value = {message} placeholder='Xabar matni' name = "message" id = "message" className='message-textarea' />
        </div>

        <div className='message-footer'>

        <Button variant="contained" onClick={() => data_save_message()} size="small"  color="primary" >
            Jo'natish
        </Button>

        </div>

      </Modal>
        </div>

        <Stack spacing={2} sx={{ width: '100%'}}>
            <Snackbar open={open}
                      autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success"

                       sx={{ width: '100%' }} >
                    Xabar yuborildi...
                </Alert>
            </Snackbar>
        </Stack>

        <Stack spacing={2} sx={{ width: '100%'}}>
            <Snackbar open={error_open}
                      autoHideDuration={5000} onClose={handleCloseError}>
                <Alert onClose={handleCloseError} severity="error"

                       sx={{ width: '100%' }} >
                    Yuborishda xatolik mavjud...
                </Alert>
            </Snackbar>
        </Stack>

    </div>
  )
}

export default Message