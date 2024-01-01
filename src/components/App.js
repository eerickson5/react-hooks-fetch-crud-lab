import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = React.useState([])

  React.useEffect( () => {
    fetch("http://localhost:4000/questions")
    .then( res => res.json())
    .then( data => setQuestions(data))
  }, [])

  function handleAddQuestion(newQues){
    setQuestions([...questions, newQues])
  }

  function handleDeleteQuestion(oldQuesId){
    setQuestions(questions.filter( ques => (ques.id !== oldQuesId)))
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestion} /> : <QuestionList questions={questions} onDeleteQuestion={handleDeleteQuestion}/>}
    </main>
  );
}

export default App;
