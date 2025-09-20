import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4"/>
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/>
        </svg>
      ),
      title: 'Take Quiz',
      description: 'Complete our comprehensive psychometric assessment to understand your strengths, interests, and personality traits.',
      color: '#0B63A9'
    },
    {
      number: 2,
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14,2 14,8 20,8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10,9 9,9 8,9"/>
        </svg>
      ),
      title: 'Get Personalized Plan',
      description: 'Receive a detailed roadmap with recommended streams, colleges, and career paths tailored specifically for you.',
      color: '#0BB3A9'
    },
    {
      number: 3,
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22,4 12,14.01 9,11.01"/>
        </svg>
      ),
      title: 'Apply & Track Progress',
      description: 'Use our timeline tracker to manage applications, deadlines, and monitor your progress towards your goals.',
      color: '#FFC857'
    }
  ];

  return (
    <section className="how-it-works section" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How ED-GEN Works</h2>
          <p className="section-subtitle">
            Your journey to the perfect career choice in just three simple steps
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-item animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="step-content">
                <div 
                  className="step-icon"
                  style={{background: `linear-gradient(135deg, ${step.color}, ${step.color}88)`}}
                >
                  {step.icon}
                </div>
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <svg width="100" height="2" viewBox="0 0 100 2">
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={step.color} />
                        <stop offset="100%" stopColor={steps[index + 1].color} />
                      </linearGradient>
                    </defs>
                    <line x1="0" y1="1" x2="100" y2="1" stroke={`url(#gradient-${index})`} strokeWidth="2" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="cta-section">
          <button className="btn btn-primary btn-large">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;