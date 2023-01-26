import React, { useState } from "react";

const Questions = ({ question, index }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  function extractContent(s) {
    var span = document.createElement('span');
    span.innerHTML = s;
    return span.textContent || span.innerText;
  };


  return (
    <div>
      <p>{`Question No: ${index}`}</p>
      <p dangerouslySetInnerHTML={{ __html: question.title }}></p>
      {question.options.map((option, index) => (
        <p
          key={index}
          style={{
            backgroundColor: showAnswer && option.answer ? "lightgreen" : "white"
          }}
        >
          {`${index + 1}. ${extractContent(option.description)}`}
        </p>
      ))}
      <button
        onClick={() => {
          setShowAnswer(!showAnswer);
        }}
      >
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>
      {
        showAnswer &&
        <div>
          <h3>Explanation:</h3>
          <p dangerouslySetInnerHTML={{ __html: question.explanation }}></p>
        </div>
      }
      <hr></hr>
    </div>
  );
};

export default Questions;
