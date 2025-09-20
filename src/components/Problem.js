import React from 'react';
import './Problem.css';

const Problem = () => {
  const problems = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
          <path d="M12 17h.01"/>
        </svg>
      ),
      title: 'Confusion After 10th/12th',
      description: 'Students struggle to choose the right stream without proper guidance'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      ),
      title: 'Lack of Government College Awareness',
      description: 'Missing out on quality education opportunities due to information gaps'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
        </svg>
      ),
      title: 'Migration to Private Colleges',
      description: 'Students choose expensive private institutions due to lack of awareness about government options'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
      title: 'Limited Career Counseling',
      description: 'Inadequate professional guidance for making informed decisions'
    }
  ];

  return (
    <section className="problem section" id="problems">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">The Education Challenge</h2>
          <p className="section-subtitle">
            Millions of students face uncertainty in their educational journey. 
            ED-GEN addresses these critical challenges head-on.
          </p>
        </div>

        <div className="problems-grid">
          {problems.map((problem, index) => (
            <div key={index} className="problem-card animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="problem-icon">
                {problem.icon}
              </div>
              <h3 className="problem-title">{problem.title}</h3>
              <p className="problem-description">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;