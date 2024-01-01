import React from "react";
import QuestionItem from './QuestionItem'

function QuestionList() {

  const [questions, setQuestions] = React.useState([])

  React.useEffect( () => {
    fetch("http://localhost:4000/questions")
    .then( res => res.json())
    .then( data => setQuestions(data))
  }, [])

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{
        questions.map( ques => <QuestionItem question={ques}/>)
        }</ul>
    </section>
  );
}

export default QuestionList;
