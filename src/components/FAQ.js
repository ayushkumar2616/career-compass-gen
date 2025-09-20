import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How accurate is the psychometric assessment?",
      answer: "Our assessment is scientifically validated with 92% accuracy rate, developed by career psychologists and tested on thousands of students."
    },
    {
      question: "Is ED-GEN suitable for both 10th and 12th pass students?",
      answer: "Yes! We provide guidance for students after 10th grade (stream selection) and 12th grade (college and career selection)."
    },
    {
      question: "Do you only focus on government colleges?",
      answer: "While we emphasize affordable government options, our database includes both government and private institutions to give you complete choices."
    },
    {
      question: "How long does the complete assessment take?",
      answer: "The full psychometric assessment takes 45-60 minutes. You'll receive your personalized report within 24 hours."
    },
    {
      question: "Is counselling available in regional languages?",
      answer: "Yes, we offer counselling in Hindi, English, and major regional languages including Tamil, Telugu, Bengali, and Marathi."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Get answers to common questions about ED-GEN's services and approach
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion-item">
              <div 
                className="accordion-header"
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>
                <span className={`accordion-icon ${openIndex === index ? 'open' : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6,9 12,15 18,9"/>
                  </svg>
                </span>
              </div>
              <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;