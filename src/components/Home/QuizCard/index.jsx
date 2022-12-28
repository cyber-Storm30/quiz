import React from "react";
import "./styles.css";
import { useSpeechSynthesis } from "react-speech-kit";

const QuizCard = () => {
  const { speak } = useSpeechSynthesis();
  const arr = ["Reading 1", "Reading 2"];

  const handleReading = () => {
    speak({ text: "The options are" });
    arr.map((data) => {
      speak({ text: `${data}` });
    });
  };

  return (
    <div className="cardContainer">
      <div className="cardLeft">
        <p className="questionHeading">
          Question 1<span className="questionSubheading">/4</span>
        </p>
        <p className="questionText">What is your name?</p>
        <button className="readButton" onClick={handleReading}>
          Read Options
        </button>
      </div>
      <div className="cardRight">
        <div className="answer">
          <p className="questionText">My name is ranajit mukherjee</p>
        </div>
        <div className="answer">
          <p className="questionText">My name is ranajit mukherjee</p>
        </div>
        <div className="answer">
          <p className="questionText">My name is ranajit mukherjee</p>
        </div>
        <div className="answer">
          <p className="questionText">My name is ranajit mukherjee</p>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
