import React from "react";
import Option from "./Options";

export default function QuestionCard({ question, index, selected, onSelect }) {
  return (
    <section className="question-card p-6 rounded-lg border bg-white">
      <div className="text-center">
        <div className="text-sm text-slate-500 mb-2">{index + 1}. {question.text}</div>
      </div>

      <div className="mt-6 space-y-4">
        {question.options.map((opt, i) => (
          <Option
            key={i}
            id={`q${index}-opt-${String.fromCharCode(65 + i)}`}
            text={opt}
            checked={selected === i}
            onSelect={() => onSelect(i)}
          />
        ))}
      </div>
    </section>
  );
}
