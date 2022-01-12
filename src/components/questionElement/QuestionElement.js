import React from "react";
import "./QuestionElement.css";
// import { nanoid } from "nanoid";

export default function QuestionElement(props) {

const styles = {backgroundColor: props.isSelected ? "blue" : "green"}



  return (
    <div id="qElContainer">
      <h3> {props.question}</h3>
      <ul id="answerContainer">
        {props.type === "multiple" && (
          <li
            onClick={props.select}
            className={props.isSelected ? "select" : ""}
            key={props.key}
            id={props.id}
            style={styles}
          >
            {props.incorrect[1]}
          </li>
        )}
        <li
          onClick={props.select}
          className={props.isSelected ? "select" : ""}
          key={props.key}
          id={props.id}
          style={styles}
        >
          {props.correct}
        </li>
        <li
          onClick={props.select}
          className={props.isSelected ? "select" : ""}
          key={props.key}
          id={props.id}
          style={styles}
        >
          {props.incorrect[0]}
        </li>
        {props.type === "multiple" && (
          <li
          onClick={props.select}
            className={props.isSelected ? "select" : ""}
            key={props.key}
            id={props.id}
            style={styles}
          >
            {props.incorrect[2]}
          </li>
        )}
      </ul>
      <hr />
    </div>
  );
}
