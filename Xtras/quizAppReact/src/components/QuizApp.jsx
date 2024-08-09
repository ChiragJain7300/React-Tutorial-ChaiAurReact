import React, { useState } from "react";
import Question from "./Question.jsx";

function QuizApp() {
  const [quesNo, setQuesNo] = useState(0);
  const [Answer, setAnswer] = useState("");
  return (
    <>
      <h1>quiz App</h1>
      <Question quesId={quesNo} />
    </>
  );  
}

export default QuizApp;
