import Question from "./Question";
const questions = [
  {
    question: "How does your platform improve administrative efficiency?",
    answer:
      "Our platform streamlines administrative tasks such as scheduling, attendance tracking, grade management, and communication. By automating these processes, schools can save time and reduce personnel costs, allowing staff and teachers to focus more on student support and education.",
  },
  {
    question:
      "What tools does your platform offer to enhance student learning?",
    answer: "Sample answer",
  },
  {
    question: "Is your platform suitable for self-directed learning?",
    answer: "Sample answer",
  },
  {
    question:
      "How do you ensure the platform remains up-to-date and user needs?",
    answer: "Sample answer",
  },
  {
    question: "How does your platform support teachers in student performance?",
    answer: "Sample answer",
  },
];

function FAQs() {
 

  return questions.map((q, index) => {
    return (
        <Question key={index} question={q.question} answer={q.answer} />
    );
  });
}

export default FAQs;
