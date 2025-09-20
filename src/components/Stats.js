import React, { useState, useEffect, useRef } from 'react';
import './Stats.css';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    {
      number: 92,
      suffix: '%',
      label: 'Students found the right fit',
      description: 'Success rate in career matching'
    },
    {
      number: 3000,
      suffix: '+',
      label: 'Colleges mapped',
      description: 'Comprehensive database'
    },
    {
      number: 12,
      suffix: '%',
      label: 'Higher govt. college enrollment',
      description: 'Increase in government admissions'
    },
    {
      number: 50000,
      suffix: '+',
      label: 'Students guided',
      description: 'Total beneficiaries'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section className="stats section" id="stats">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Impact in Numbers</h2>
          <p className="section-subtitle">
            Real results from students and families who chose ED-GEN for their educational journey
          </p>
        </div>

        <div className="stats-grid" ref={statsRef}>
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              stat={stat}
              isVisible={isVisible}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCounter = ({ stat, isVisible, delay }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isVisible && !hasStarted) {
      setHasStarted(true);
      const timer = setTimeout(() => {
        const duration = 2000;
        const steps = 60;
        const increment = stat.number / steps;
        const stepDuration = duration / steps;

        let currentCount = 0;
        const counter = setInterval(() => {
          currentCount += increment;
          if (currentCount >= stat.number) {
            setCount(stat.number);
            clearInterval(counter);
          } else {
            setCount(Math.floor(currentCount));
          }
        }, stepDuration);

        return () => clearInterval(counter);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, hasStarted, stat.number, delay]);

  return (
    <div className="stat-item animate-fade-in" style={{animationDelay: `${delay}ms`}}>
      <div className="stat-icon">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      </div>
      <div className="stat-number">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <h4 className="stat-label">{stat.label}</h4>
      <p className="stat-description">{stat.description}</p>
    </div>
  );
};

export default Stats;