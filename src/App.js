import { useState } from "react";
import "./App.css";

const questions = [
  {
    questionText: "What language is spoken in Brazil?",
    answerOptions: [
      { answerText: "Portugues", isCorrect: true },
      { answerText: "English", isCorrect: false },
      { answerText: "French", isCorrect: false },
      { answerText: "German", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which countries have the highest and lowest life expectancy in the world?",
    answerOptions: [
      { answerText: "Australia and Afghanistan", isCorrect: false },
      { answerText: "Japan and sierra", isCorrect: true },
      { answerText: "Italy", isCorrect: false },
      { answerText: "Brasil", isCorrect: false },
    ],
  },
  {
    questionText: "Which company created the iPhone?",
    answerOptions: [
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Apple", isCorrect: true },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "How to learn to program?",
    answerOptions: [
      { answerText: "Practising what you learn", isCorrect: true },
      { answerText: "Watching video", isCorrect: false },
      { answerText: "Reading", isCorrect: false },
      { answerText: "Writing", isCorrect: false },
    ],
  },
];

function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAns, setCorrectAns] = useState(0);
  const [wrongAns, setWrongAns] = useState(0);
  const [points, setPoints] = useState(0)

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setCorrectAns(correctAns + 1);
      setScore(score + 1);
      setPoints(points + 5);
      console.log(correctAns);
    } else {
      setWrongAns(wrongAns + 1);
      setPoints(points - 4);
      console.log(wrongAns);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <>
      <div className="app">
        <div className="headSection">
          <div className="Progress">
            <b>Right Ans</b>
            <span className="totalProg">
              <div className="progBar" style={{ width: `${(correctAns / questions.length) * 100}%`, backgroundColor: 'green' }}></div>
            </span>
          </div>
          <div className="showPoints">
            <b>Points</b>
            <span>{points}</span>
          </div>
          <div className="Progress">
            <b>Wrong Ans</b>
            <span className="totalProg">
              <div className="progBar" style={{ width: `${(wrongAns / questions.length) * 100}%`, backgroundColor: 'red' }}></div>
            </span>
          </div>
        </div>
        {showScore ? (
          <div className="score-section">
            You Scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>

            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <button
                    onClick={() => handleAnswer(answerOption.isCorrect)}
                    key={index}
                  >
                    {answerOption.answerText}
                  </button>
                )
              )}
              <b>Note: Right ans is 5 points and Wrong ans leads to -4 points</b>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
