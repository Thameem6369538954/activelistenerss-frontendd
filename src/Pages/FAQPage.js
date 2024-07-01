import React, { useState } from "react";
import "../Css/FAQ.css";
import { GrAdd } from "react-icons/gr";

const FAQPage = () => {
  const faqData = [
    {
      question: "What We Do:",
      answer:
        "Offer comprehensive listening services and workshops designed to reduce screen time and enhance interpersonal connections.",
    },
    {
      question: "Who We Do It For:",
      answer:
        "Children, teenagers, and families struggling with excessive use of gadgets and mobile devices.",
    },
    {
      question: "What They Get:",
      answer:
        "Participants gain improved communication skills, enhanced family bonds, and a healthier, more balanced lifestyle.",
    },
    
    // Add more FAQ entries as needed
  ];

  // State to manage which answer is currently open
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle the answer visibility
  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the answer if it's already open
    } else {
      setOpenIndex(index); // Open the answer
    }
  };

  return (
    <div className="faq-page">
      <h1>FAQ For Active Listeners</h1>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-header" onClick={() => toggleAnswer(index)}>
              <h2 className="faq-question">{faq.question}</h2>
              <GrAdd onClick={() => toggleAnswer(index)} />
            </div>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
