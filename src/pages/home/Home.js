import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div id="homeContainer">
      <div id="topBlob"></div>
      <div id="text">
        <h1>Quizzical</h1>
        <p>click on the button below to get started!</p>
        <button>Start Quiz</button>
      </div>
      <div id="bottomBlob"></div>
    </div>
  );
}
