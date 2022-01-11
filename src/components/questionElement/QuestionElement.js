import React from "react";

export default function QuestionElement(props) {
  return (
    <div id="qElContainer">
      <h3> {props.question}</h3>
      <ul id="buttonContainer">
        <li>{props.correct}</li>
        <li>{props.incorrect[0]}</li>
        <li>{props.incorrect[1]}</li>
        <li>{props.incorrect[2]}</li>
      </ul>
    </div>
  );
}
