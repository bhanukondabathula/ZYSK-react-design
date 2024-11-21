import React, { useState } from "react";
import avatar from '../assets/Avatar group.png'
import "./FAQ.css";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    { question: "Can I change my plan later?", answer: "" },
    { question: "What is your cancellation policy?", answer: "" },
    { question: "Can other info be added to an invoice?", answer: "" },
    { question: "How does billing work?", answer: "" },
    { question: "How do I change my account email?", answer: "" },
  ];

  return (
    <div className="faq-container">
      <h2>Frequently asked questions</h2>
      <p>Everything you need to know about the product and billing.</p>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="icon">{activeIndex === index ? "-" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      <div className="faq-contact">
        <img src={avatar} alt="profile" />
        <h1>Still have questions?</h1>
        <p>
          Can’t find the answer you’re looking for? Please
          chat to our friendly team.
        </p>
        <button className="contact-button">Get in touch</button>
      </div>
      <hr className='hr-line'/>
    </div>
  );
};

export default FAQs;
