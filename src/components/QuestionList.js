import  { useEffect, useState } from "react";
// import QuestionItem from "./QuestionItem";

function QuestionList(list) {
const [questions, setQuestions] = useState ([])
  useEffect ( () => {
    fetch ('http://localhost:4000/questions')
  .then ((r) => r.json())
  .then ((data) => setQuestions(data))
  }, [])

return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
       {questions.map((question) => 
        <li key={question.id}>{question.prompt}</li>)} 
        
      </ul>
    </section>
  );
}

export default QuestionList;
