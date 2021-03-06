import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, useHistory } from "react-router-dom";
import QuestionGet from "./pages/QuestionGet/QuestionGet";
import AccauntLogin from "./pages/AccauntLogin/AccauntLogin";
import OpenAccaunt from "./pages/CreateAccount/OpenAccaunt";
import Home from "./pages/Home/Home";
import NewsList from "./pages/NewsList/NewsList";
import ListBook from "./pages/ListBook/ListBook";
import Tests from "./pages/Tests/Tests";
import TestsClass from "./pages/TestsClass/TestsClass";
import HardTest from "./pages/HardTests/HardTest";
import Results from "./pages/Results/Results";
import AdminHome from "./pages/AdminPanel/AdminHome/AdminHome";
import Sidebar from "./pages/AdminPanel/AdminHome/Sidebar";
import $ from "jquery";
import Navbar from "./pages/AdminPanel/Navbar/Navbar";
import Allusers from "./pages/AdminPanel/AllUsers/Allusers";
import AdminStatistics from "./pages/AdminPanel/AdminStatistics/AdminStatistics";
import ScienceAdd from "./pages/AdminPanel/ScienceAdd/ScienceAdd";
import ClassAddContent from "./pages/AdminPanel/ClassAddContent/ClassAddContent";
import TestAddContainer from "./pages/AdminPanel/TestAddContainer/TestAddContainer";
import MasalaContainer from "./pages/MasalaContainer/MasalaContainer";
import MasalaAdd from "./pages/MasalaContainer/MasalaAdd";
import AllMasala from "./pages/AllMasala/AllMasala";
import Notification from "./components/Topbar/Notification";

function App() {
  const [direction, setDirection] = useState("");
  const [eni, setEni] = useState("300px");
  const [save, setSave] = useState("");

  const directionFunc = () => {
    setDirection("site");
  };

  const setWeight = () => {
    let a = document.querySelector(".app-admin1").style.width;
    if (a === "70px") {
      $(".app-admin1").css({ width: "300px" });
      $(".app-admin2").css({ "padding-left": "300px" });
      $(".app-navbar-ad").css({ left: "300px" });
      setEni("300px");
    } else {
      $(".app-admin1").css({ width: "70px" });
      $(".app-admin2").css({ "padding-left": "70px" });
      $(".app-navbar-ad").css({ left: "70px" });
      setEni("70px");
    }
  };

  useEffect(() => {
    directionFunc();
  }, []);

  return (
    <div>
      {direction === "site" ? (
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" exact element={<Home save={save} setSave={setSave} />} />
              <Route path="/openaccount" exact element={<OpenAccaunt />} />
              <Route path="/accountlogin" exact element={<AccauntLogin save={save} setSave={setSave} />} />
              <Route path="/questionget" exact element={<QuestionGet />} />
              <Route path="/bookdownload" exact element={<ListBook />} />
              <Route path="/news" exact element={<NewsList />} />
              <Route path="/classes" exact element={<TestsClass />} />
              <Route path="/class/:id" exact element={<Tests />} />
              <Route path="/hardtest" exact element={<HardTest />} />
              <Route path="/results" exact element={<Results />} />
              <Route path="/masalar" exact element={<MasalaContainer />} />
              <Route path="/addmasala" exact element={<MasalaAdd />} />
              <Route path="/allmasala" exact element={<AllMasala />} />  
              <Route path = "/notification" exact element={<Notification />} />
            </Routes>
          </Router>   
        </div>   
      ) : (
        <div className="AppAdminPanel">
          <Router>
            <div className="app-admin-container">
              <div className="app-admin1">
                <Sidebar eni={eni} />
              </div>

              <div className="app-admin2">
                <div className="app-navbar-ad">
                  <Navbar setWeight={setWeight} setDirection={setDirection} />
                </div>
                <div className="app-admin-routes">
                  <Routes>
                    <Route
                      path="/"
                      exact
                      element={<AdminHome setWeight={setWeight} />}
                    />   
                    <Route path="/allusers" exact element={<Allusers />} />
                    <Route
                      path="/statistics"
                      exact
                      element={<AdminStatistics />}
                    />
                    <Route
                      path="/classadd"
                      exact
                      element={<ClassAddContent />}
                    />
                    <Route path="/scienceadd" exact element={<ScienceAdd />} />
                    <Route path="/quizadd" exact element={<TestAddContainer />} />
                  </Routes>
                </div>
              </div>
            </div>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
