import React from "react";
import Options from "./Options";
import quizQuestions from "../quizQuestions.js";

function Question({ quesId, nextQuestion }) {
  return (
    <>
      <div className="quesBox">
        <p className="id">Question No. {quesId + 1}</p>
        <h3 key={Math.random()}>{quizQuestions[quesId].question} </h3>
        <Options opts={quizQuestions[quesId].options} />
        <button onClick={nextQuestion}>Next</button>
      </div>
    </>
  );
}

export default Question;
