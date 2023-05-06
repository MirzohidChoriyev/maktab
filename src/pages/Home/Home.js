import React, {useEffect} from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import PeopleCount from "../../components/PeopleCount/PeopleCount";
import BottomBar from "../../components/BottomBar/BottomBar";
import SiteBottom from "../../components/SiteBottom/SiteBottom";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Topbar from "../../components/Topbar/Topbar";
import MuiAlert from "@mui/material/Alert";
import {Snackbar} from "@mui/material";
import Stack from "@mui/material/Stack";
import {Navigate} from 'react-router-dom'
   
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Home({save, setSave}) {
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
  
    useEffect(() => {
        if(save === "saved"){
            handleClick();
        }
        setSave("");
    }, []);
      
  return (
    <div>
{
    localStorage.getItem('token') !== null ? <Navigate to = "/login" /> :  
        
<div className="home">
        <Topbar />
        <Header />
        <Sidebar />
        <BottomBar />
        <SiteBottom />

        <Stack spacing={2} sx={{ width: '100%'}}>
            <Snackbar open={open}
                      autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success"

                       sx={{ width: '100%' }} >
                    Ro'yxatdan o'tildi
                </Alert>
            </Snackbar>
        </Stack>
    </div>
}
    </div>
  );
}

export default Home;
