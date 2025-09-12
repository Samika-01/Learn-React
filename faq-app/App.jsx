import { useState } from "react";

const App = () => {
  const faqs = [
    {
      question : "What is React?",
      answer : "React is a front-end JavaScript library."
    },
    {
      question : "How does React Work?",
      answer : "React creates a VIRTUAL DOM in memory."
    },
    {
      question : "What is JSX?",
      answer : "JSX allows us to write HTML in React."
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const show = (index) => {
    setOpenIndex(index === openIndex ? null : index);

  };
  return(
    <div>
      <ul>
        {faqs.map((faq, index) => (
          <li onClick={() => show(index)} key={index}>{faq.question}
          {index === openIndex && <p>{faq.answer}</p>}
          </li>
        ))}
      </ul>
    </div>

  );
}

export default App;