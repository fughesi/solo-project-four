import React from "react";
import "./Questions.css";

export default function Questions() {
  const [questions, setQuestions] = React.useState();

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  }, []);

  console.log(questions);

  function questionsMap() {
    return questions.map((i) => {
      return {
        question: i,
        answer: i,
      };
    });
  }

  return (
    <div id="questionsContainer">
      {questionsMap}
      <h1>Sign Up {questionsMap} wwdwdwdwd</h1>
    </div>
  );
}
