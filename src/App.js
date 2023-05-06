import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, useHistory } from "react-router-dom";
import AccauntLogin from "./pages/AccauntLogin/AccauntLogin";
import OpenAccaunt from "./pages/CreateAccount/OpenAccaunt";
import Home from "./pages/Home/Home";   
import MasalaContainer from "./pages/MasalaContainer/MasalaContainer";
import MasalaAdd from "./pages/MasalaContainer/MasalaAdd";
import AllMasala from "./pages/AllMasala/AllMasala";
import Notification from "./components/Topbar/Notification";       

function App() {
  const [save, setSave] = useState("");  
        
  return (
    <div>
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" exact element={<Home save={save} setSave={setSave} />} />
              <Route path="/login" exact element={<OpenAccaunt />} />
              <Route path="/createaccount" exact element={<AccauntLogin save={save} setSave={setSave} />} />
              <Route path="/masalar" exact element={<MasalaContainer />} />
              <Route path="/addmasala" exact element={<MasalaAdd />} />
              <Route path="/allmasala" exact element={<AllMasala />} />  
              <Route path = "/notification" exact element={<Notification />} />
            </Routes>
          </Router>   
        </div>   
    </div>
  );
}

export default App;
