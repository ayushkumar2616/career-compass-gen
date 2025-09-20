import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    console.log('Search:', { searchTerm, location });
    alert(`Searching for "${searchTerm}" in ${location || 'all locations'}`);
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title animate-fade-in">
              Your Future, Your Choice — with{' '}
              <span className="text-gradient">ED-GEN</span>
            </h1>
            
            <p className="hero-subtitle animate-fade-in">
              Personalized career & education advisor helping students choose the right stream, degree, and career path.
            </p>

            <div className="hero-buttons animate-fade-in">
              <button className="btn btn-primary">Take Free Quiz</button>
              <button className="btn btn-secondary">For Parents & Schools</button>
            </div>

            <div className="institution-finder animate-fade-in">
              <h3 className="finder-title">Institution Finder</h3>
              <div className="search-bar">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search colleges, courses…"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <input
                  type="text"
                  className="search-input"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <button className="btn btn-accent" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-image">
              <div className="floating-stat stat-1">
                <div className="stat-number">92%</div>
                <div className="stat-label">Success Rate</div>
              </div>
              <div className="floating-stat stat-2">
                <div className="stat-number">3000+</div>
                <div className="stat-label">Colleges</div>
              </div>
              <div className="image-placeholder">
                <svg width="400" height="300" viewBox="0 0 400 300" fill="none">
                  <rect width="400" height="300" rx="20" fill="url(#gradient1)"/>
                  <circle cx="120" cy="100" r="40" fill="rgba(255,255,255,0.2)"/>
                  <circle cx="280" cy="180" r="30" fill="rgba(255,255,255,0.15)"/>
                  <rect x="50" y="200" width="300" height="60" rx="30" fill="rgba(255,255,255,0.1)"/>
                  <text x="200" y="150" textAnchor="middle" fill="white" fontSize="24" fontWeight="600">
                    ED-GEN
                  </text>
                  <text x="200" y="175" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="14">
                    Education for Generations
                  </text>
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0B63A9"/>
                      <stop offset="100%" stopColor="#0BB3A9"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;