// src/pages/QuizPage.jsx
import React, { useState } from "react";
import ProgressSegments from "../components/ProgressSegments";
import QuestionCard from "../components/QuestionCard";
import NavArrows from "../components/NavArrows";
import ResultPage from "./ResultPage";


const QUESTIONS = [
  { text: "What sound does a cat make?", options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"] },
  { text: "What would you probably find in your fridge?", options: ["Shoes", "Ice Cream", "Books"] },
  { text: "What color are bananas?", options: ["Blue", "Yellow", "Red"] },
  { text: "How many stars are in the sky?", options: ["Two", "Infinite", "One Hundred"] }
];

export default function QuizPage() {
  const total = QUESTIONS.length;
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(total).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  function onSelect(choice) {
    setAnswers(prev => {
      const copy = [...prev];
      copy[current] = choice;
      return copy;
    });
  }

  function goPrev() { setCurrent(c => Math.max(0, c - 1)); }
  function goNext() { setCurrent(c => Math.min(total - 1, c + 1)); }
  function jumpTo(i) { setCurrent(i); }

  function onSubmit() {
    const correct = QUESTIONS.reduce((acc, q, i) => acc + (answers[i] === 1 ? 1 : 0), 0);
    const pct = Math.round((correct / total) * 100);
    setScore(pct);
    setSubmitted(true);
  }

  function restart() {
    setAnswers(Array(total).fill(null));
    setCurrent(0);
    setSubmitted(false);
    setScore(0);
  }

  if (submitted) {
  return (
    // optional full-screen wrapper to preserve page background & centering
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(135deg,#BECFEE_0%,#71C6E2_35%,#D9F4FA_70%,#BECFEE_100%)]">
      <ResultPage score={score} onRestart={restart} />
    </div>
  );
}


  // Normal quiz UI
  return (
    <>
      <div className="min-h-screen flex items-start justify-center bg-[linear-gradient(135deg,#BECFEE_0%,#71C6E2_35%,#D9F4FA_70%,#BECFEE_100%)]">
        <div className="frame-main mx-auto mt-[80px] mb-[80px]">
          <div className="inner-rect mx-auto">
            <div className="max-w-[1100px] mx-auto">
              {/* Title */}
              <header className="text-center mt-[20px]">
                <h1 className="quiz-title font-serif italic" style={{ fontFamily: '"DM Serif Display", serif, "Borel-Regular"' }}>
                  <span className="font-bold">Test Your Knowledge</span>
                </h1>
                <div className="mt-[18px] flex justify-center">
                  <div className="frame-10 bg-white rounded-[8px] px-[31px] py-[10px] text-sm text-slate-600 shadow-sm">
                    Answer all questions to see your results
                  </div>
                </div>
              </header>

              {/* Progress */}
              <div className="mt-[28px]">
                <ProgressSegments total={total} current={current} answered={answers} onJump={jumpTo} />
              </div>

              {/* Question + options */}
              <div className="mt-[28px] mb-[24px]">
                <QuestionCard
                  question={QUESTIONS[current]}
                  index={current}
                  total={total}
                  selected={answers[current]}
                  onSelect={onSelect}
                />
              </div>

              {/* Controls */}
              <div className="flex items-center justify-end gap-[10px] mt-[24px]">
                <div className="text-sm text-slate-500 mr-4">{answers.filter(a => a !== null).length} / {total} answered</div>
                <div>
                  {current === total - 1 ? (
                    <button onClick={onSubmit} className="px-5 py-3 rounded-[10px] bg-[#0f766e] text-white">Submit</button>
                  ) : (
                    <div className="flex items-center gap-[10px]">
                      <NavArrows
                        onPrev={goPrev}
                        onNext={goNext}
                        prevDisabled={current === 0}
                        nextDisabled={false}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
