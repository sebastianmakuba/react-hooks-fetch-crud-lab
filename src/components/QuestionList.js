import React from "react";
import { useEffect, useState } from "react";
function QuestionList(list) {
const [questions, setQuestions] = useState ([])
  useEffect ( () => {
    fetch ('http://localhost:4000/questions')
  .then ((r) => r.json())
  .then ((questions) => setQuestions(questions))
  }, [])

  list = questions.map((question) => {
    return <li key={question.id}>{question.prompt}</li>
  })
 

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{list}
      </ul>
    </section>
  );
}

export default QuestionList;
