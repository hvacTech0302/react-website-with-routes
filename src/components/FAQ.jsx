import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

const FAQ = ({ question, answer }) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);

  return (
    <article className="faq">
      <div>
        <h4>{question}</h4>
        <button
          className="faq-icon"
          onClick={() => setIsAnswerShowing((prev) => !prev)}
        >
          {isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <p className={isAnswerShowing ? "show-answer" : ""}>{answer}</p>
    </article>
  );
};

export default FAQ;
