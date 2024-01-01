import React from "react";

function QuestionItem({ question, onDeleteQuestion, onChangeQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteClick(){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then( res => res.json())
    .then( (data) => onDeleteQuestion(id))
  }

  function handleSelectChanged(e){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'PATCH',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...question,
        "correctIndex": e.target.value
      })
    })
    .then( res => res.json() )
    .then( data => console.log(data) )
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleSelectChanged}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
