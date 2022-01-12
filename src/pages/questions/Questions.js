import React from "react";
import QuestionElement from "../../components/questionElement/QuestionElement";
import "./Questions.css";
import { nanoid } from "nanoid";

export default function Questions() {
  // state variables
  const [questions, setQuestions] = React.useState([]);
  const [isSelected, setIsSelected] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState();

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

  // make a map of elements from API
  const questionObject = questions.results.map((i) => {
    return (
      <QuestionElement
        key={nanoid()}
        id={nanoid()}
        select={userSelect}
        isSelected={isSelected}
        question={i.question}
        correct={i.correct_answer}
        incorrect={i.incorrect_answers}
        type={i.type}
      />
    );
  });

  // function ans() {
  //   const queArray = []
  //   const nums = questions.results.length
  //   for (let i = 0; i < nums; i++) {

  //     queArray.push(questions.results[i].incorrect_answers)

  //   }
  //   return queArray
  // }

  // console.log(ans())

  // selects the answer the user picks
  function userSelect(id) {
    // setIsSelected(prev => {
        
        setIsSelected((i) => id.target.id ? !i : i);


      
    // })

    // console.log(id);
    console.log(id.target);
    console.log(id.target.id);
  }

  return (
    <div id="questionsContainer">
      <h1>Take the quiz!</h1>
      {questionObject}
      <button>check answers</button>
    </div>
  );
}
