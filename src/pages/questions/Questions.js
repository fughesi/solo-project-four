import React from "react";
import QuestionElement from "../../components/questionElement/QuestionElement";
import "./Questions.css";

export default function Questions() {
  // state variables
  const [questions, setQuestions] = React.useState([]);
  const [error, setError] = React.useState();
  const [loading, setLoading] = React.useState(true);

  // API call
  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, []);

  // loading text
  if (loading) return <h1 id="loading">LOADING...</h1>;

  console.log(questions.results[0].question);

  // make a map of elements from API --- not working!!!
  const questionObject = questions.results.map((i) => {
    return (
      <QuestionElement
        question={i.question}
        correct={i.correct_answer}
        incorrect={i.incorrect_answers}
      />
    );
  });
  console.log(questionObject);

  return (
    <div id="questionsContainer">
      <h1>Why is this not working? </h1>
     {questionObject}
    </div>
  );
}
