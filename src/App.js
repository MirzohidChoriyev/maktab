import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import QuestionGet from "./pages/QuestionGet/QuestionGet";
import AccauntLogin from "./pages/AccauntLogin/AccauntLogin";
import CreateAccaunt from "./pages/CreateAccount/CreateAccaunt";
import Home from "./pages/Home/Home";
import ListLearn from "./pages/ListLearn/ListLearn";
import NewsList from "./pages/NewsList/NewsList";
import ListBook from "./pages/ListBook/ListBook";
import Tests from "./pages/Tests/Tests";
import TestsClass from "./pages/TestsClass/TestsClass";
import QuizTest from "./pages/QuizTest/QuizTest";
import HardTest from "./pages/HardTests/HardTest";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createaccount" element={<CreateAccaunt />} />
          <Route path="/accauntlogin" element={<AccauntLogin />} />
          <Route path="/questionget" element={<QuestionGet />} />
          <Route path="/bookdownload" element={<ListBook />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/classes" element={<TestsClass />} />
          <Route path="/class/:id" element={<Tests />} />
          <Route path="/tests/:id/:id/:id" element={<QuizTest />} />
          <Route path="/hardtest" element={<HardTest />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
