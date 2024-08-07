"use client";
import { Add, Minus } from "iconsax-react";
import { useState } from "react";

type QeustionProps ={
    answer: string,
    question: string
}

function Question(props: QeustionProps) {
  const [active, setActive] = useState(false);
  return (
    <div className={`question ${active ? "question-active" : ""}`}>
      <h3 onClick={() => setActive(!active)} className="flex w-full justify-between">
        {props.question}
        <span className="btn cursor-pointer">
          {active ? <Minus /> : <Add />}
        </span>
      </h3>

      <p>{props.answer}</p>
    </div>
  );
}

export default Question;
