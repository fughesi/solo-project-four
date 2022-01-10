import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Answers from "./pages/answers/Answers";
import Questions from "./pages/questions/Questions";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/answers" element={<Answers />} />
          <Route exact path="/questions" element={<Questions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
