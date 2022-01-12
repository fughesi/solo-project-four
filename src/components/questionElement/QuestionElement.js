import React from "react";
import "./QuestionElement.css";

export default function QuestionElement(props) {
  return (
    <div id="qElContainer">
      <h3> {props.question}</h3>
      <ul id="answerContainer">
        {props.type === "multiple" && (
          <li
            onClick={props.select}
            className={props.isSelected ? "select" : ""}
          >
            {props.incorrect[1]}
          </li>
        )}
        <li onClick={props.select} className={props.isSelected ? "select" : ""}>
          {props.correct}
        </li>
        <li onClick={props.select} className={props.isSelected ? "select" : ""}>
          {props.incorrect[0]}
        </li>
        {props.type === "multiple" && (
          <li
            onClick={props.select}
            className={props.isSelected ? "select" : ""}
          >
            {props.incorrect[2]}
          </li>
        )}
      </ul>
      <hr />
    </div>
  );
}
