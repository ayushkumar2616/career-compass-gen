import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4"/>
          <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h18z"/>
          <path d="M3 12v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
        </svg>
      ),
      title: 'Psychometric Assessment',
      description: 'Advanced AI-powered assessment to identify your strengths, interests, and personality traits',
      gradient: 'linear-gradient(135deg, #0B63A9, #0BB3A9)'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="8.5" cy="7" r="4"/>
          <path d="M20 8v6M23 11l-3 3-3-3"/>
        </svg>
      ),
      title: 'Personalized Counselling',
      description: 'One-on-one sessions with certified career counselors tailored to your unique profile',
      gradient: 'linear-gradient(135deg, #0BB3A9, #26C6DA)'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      title: 'Course → Career Mapping',
      description: 'Comprehensive mapping showing career paths for different courses and streams',
      gradient: 'linear-gradient(135deg, #FFC857, #FFB347)'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      title: 'Nearby Govt Colleges Directory',
      description: 'Curated database of government colleges with admission criteria and placement records',
      gradient: 'linear-gradient(135deg, #5C6BC0, #7986CB)'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12,6 12,12 16,14"/>
        </svg>
      ),
      title: 'Scholarships & Timeline Tracker',
      description: 'Track scholarship deadlines and application timelines for your target institutions',
      gradient: 'linear-gradient(135deg, #26C6DA, #4FC3F7)'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12.8 5.8c1.6 0 3.2.7 3.2 2.2s-1.6 2.2-3.2 2.2c-1.6 0-3.2-.7-3.2-2.2s1.6-2.2 3.2-2.2"/>
          <path d="M21 12h-7l-2-2-2 2H3"/>
          <path d="M5 3v4"/>
          <path d="M19 3v4"/>
          <path d="M9 21v-4"/>
          <path d="M15 21v-4"/>
        </svg>
      ),
      title: 'Multilingual Support',
      description: 'Available in multiple regional languages to break language barriers in education',
      gradient: 'linear-gradient(135deg, #AB47BC, #CE93D8)'
    }
  ];

  return (
    <section className="features section" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Powerful Features for Your Success</h2>
          <p className="section-subtitle">
            Comprehensive tools and resources designed to guide you towards the perfect career choice
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card animate-fade-in" 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div 
                className="feature-icon"
                style={{background: feature.gradient}}
              >
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;