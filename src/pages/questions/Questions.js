import React from "react";
import questionElement from "../../components/questionElement";
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
  function arrayOfQuestions() {
    const i = questions.results;
    return (i) =>
      i.map((x) => {
        return [<h3>{x.question}</h3>];
      });
  }

  // if (questions) return {
  //   <h1>{questions.results[1].difficulty}</h1>;

  return (
    <div id="questionsContainer">
      <h1>Why is this not working? </h1>
      {questions ? arrayOfQuestions() : loading}
    </div>
  );
}
