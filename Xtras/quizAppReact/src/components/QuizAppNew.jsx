import React, { useState } from "react";
import "../App.css";
import quizQuestions from "../quizQuestions";
export const QuizAppNew = () => {
  const [questionNo, setQuestionNo] = useState(0);
  const [quizCompeted, setQuizCompeted] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const nextQuestion = () => {
    if (selectedOption === quizQuestions[questionNo].correct_answer)
      setScore(score + 1);
    if (questionNo === quizQuestions.length - 1) {
      alert(score);
      setQuizCompeted(true);
    } else {
      setQuestionNo(questionNo + 1);
    }
  };
  return (
    <>
      <h1>Quiz App</h1>
      <div className="quizCont">
        <h2>Question {quizQuestions[questionNo].id}</h2>
        <p className="quesText">{quizQuestions[questionNo].question}</p>
        {quizQuestions[questionNo].options.map((opt) => (
          <div className="optsCont">
            <input
              type="radio"
              onChange={(e) => setSelectedOption(e.target.value)}
              name="selectedOption"
              key={opt}
              value={opt}
            />
            <label htmlFor={opt}>{opt}</label>
          </div>
        ))}
        <button onClick={nextQuestion}>
          {quizCompeted ? "Finish" : "Next"}
        </button>
      </div>
    </>
  );
};
