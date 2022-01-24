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
import QuizEnd from "./pages/QuizTest/QuizTestContainer/QuizEnd";
import Results from "./pages/Results/Results";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/createaccount" exact element={<CreateAccaunt />} />
          <Route path="/accauntlogin" exact element={<AccauntLogin />} />
          <Route path="/questionget" exact element={<QuestionGet />} />
          <Route path="/bookdownload" exact element={<ListBook />} />
          <Route path="/news" exact element={<NewsList />} />
          <Route path="/classes" exact element={<TestsClass />} />
          <Route path="/class/:id" exact element={<Tests />} />
          <Route path="/hardtest" exact element={<HardTest />} />
          <Route path="/results" exact element={<Results />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
