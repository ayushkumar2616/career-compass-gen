import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Engineering Student",
      location: "Delhi",
      content: "ED-GEN helped me discover my passion for computer science. The psychometric test revealed my logical thinking abilities, and now I'm studying at IIT Delhi!",
      rating: 5,
      avatar: "PS",
      course: "Computer Science Engineering"
    },
    {
      name: "Rajesh Kumar",
      role: "Parent",
      location: "Mumbai",
      content: "As a parent, I was worried about my son's career choice. ED-GEN provided clarity and showed us government college options we never knew existed. Excellent guidance!",
      rating: 5,
      avatar: "RK",
      course: "Career Guidance"
    },
    {
      name: "Anita Patel",
      role: "Commerce Graduate",
      location: "Ahmedabad",
      content: "The career counselling sessions were incredibly insightful. I switched from science to commerce based on ED-GEN's recommendation and couldn't be happier with my CA journey.",
      rating: 5,
      avatar: "AP",
      course: "Chartered Accountancy"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            What Students & Parents{' '}
            <span className="text-gradient">Say About Us</span>
          </h2>
          <p className="section-subtitle">
            Real stories from students and families who found their path with ED-GEN
          </p>
        </div>

        <div className="testimonials-container">
          <div className="testimonial-carousel">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-slide ${index === currentIndex ? 'active' : ''}`}
              >
                <div className="testimonial-card">
                  <div className="quote-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor"/>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor"/>
                    </svg>
                  </div>
                  
                  <blockquote className="testimonial-content">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="testimonial-footer">
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        {testimonial.avatar}
                      </div>
                      <div className="author-info">
                        <h4 className="author-name">{testimonial.name}</h4>
                        <p className="author-role">
                          {testimonial.role} • {testimonial.location}
                        </p>
                        <p className="author-course">{testimonial.course}</p>
                      </div>
                    </div>

                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-controls">
            <button className="carousel-btn prev" onClick={prevSlide}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15,18 9,12 15,6"/>
              </svg>
            </button>

            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>

            <button className="carousel-btn next" onClick={nextSlide}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9,18 15,12 9,6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;