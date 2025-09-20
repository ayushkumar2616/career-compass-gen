import React, { useState } from 'react';
import './InteractiveDemo.css';

const InteractiveDemo = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const quizQuestions = [
    {
      question: "What type of activities do you enjoy most?",
      options: [
        "Solving mathematical problems",
        "Creating art or designs",
        "Helping others with their problems",
        "Working with computers and technology"
      ]
    },
    {
      question: "Which subject interests you the most?",
      options: [
        "Physics and Mathematics",
        "Literature and Languages",
        "Biology and Chemistry",
        "History and Social Studies"
      ]
    },
    {
      question: "What's your preferred work environment?",
      options: [
        "Laboratory or research facility",
        "Office with team collaboration",
        "Outdoor fieldwork",
        "Creative studio or workshop"
      ]
    }
  ];

  const careerPaths = {
    "Engineering": [
      "Software Engineer",
      "Mechanical Engineer",
      "Civil Engineer",
      "Electronics Engineer",
      "Data Scientist"
    ],
    "Medical": [
      "Doctor (MBBS)",
      "Dentist",
      "Pharmacist",
      "Physiotherapist",
      "Medical Researcher"
    ],
    "Commerce": [
      "Chartered Accountant",
      "Investment Banker",
      "Financial Analyst",
      "Business Analyst",
      "Entrepreneur"
    ],
    "Arts": [
      "Journalist",
      "Graphic Designer",
      "Psychologist",
      "Lawyer",
      "Content Writer"
    ]
  };

  const handleAnswerSelect = (answerIndex) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const getRecommendation = () => {
    // Simple logic based on answers
    const totalScore = answers.reduce((sum, answer) => sum + answer, 0);
    if (totalScore <= 3) return "Engineering";
    if (totalScore <= 6) return "Medical";
    if (totalScore <= 9) return "Commerce";
    return "Arts";
  };

  return (
    <section className="interactive-demo section" id="demo">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Try Our Assessment</h2>
          <p className="section-subtitle">
            Get a taste of our personalized career guidance with this mini assessment
          </p>
        </div>

        <div className="demo-content">
          <div className="quiz-section">
            <div className="card">
              <h3 className="card-title">Mini Psychometric Quiz</h3>
              
              {!showResult ? (
                <div className="quiz-container">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%`}}
                    ></div>
                  </div>
                  
                  <div className="question-container">
                    <h4 className="question">
                      {quizQuestions[currentQuestion].question}
                    </h4>
                    
                    <div className="options">
                      {quizQuestions[currentQuestion].options.map((option, index) => (
                        <button
                          key={index}
                          className="option-btn"
                          onClick={() => handleAnswerSelect(index)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="result-container">
                  <div className="result-icon">🎯</div>
                  <h4 className="result-title">Your Recommended Stream</h4>
                  <div className="result-stream">{getRecommendation()}</div>
                  <p className="result-description">
                    Based on your responses, this stream aligns well with your interests and aptitude.
                  </p>
                  <button className="btn btn-secondary" onClick={resetQuiz}>
                    Retake Quiz
                  </button>
                  <button className="btn btn-primary">
                    Get Full Assessment
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="career-explorer">
            <div className="card">
              <h3 className="card-title">Course → Career Explorer</h3>
              <p className="card-subtitle">
                Select a course to see potential career paths
              </p>
              
              <div className="course-buttons">
                {Object.keys(careerPaths).map((course) => (
                  <button
                    key={course}
                    className={`course-btn ${selectedCourse === course ? 'active' : ''}`}
                    onClick={() => setSelectedCourse(selectedCourse === course ? null : course)}
                  >
                    {course}
                  </button>
                ))}
              </div>

              {selectedCourse && (
                <div className="career-list">
                  <h4 className="career-list-title">Career Opportunities in {selectedCourse}</h4>
                  <ul className="careers">
                    {careerPaths[selectedCourse].map((career, index) => (
                      <li key={index} className="career-item animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                        <span className="career-icon">💼</span>
                        {career}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;