import React, { useState } from 'react';
import './Counselling.css';

const Counselling = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Career Buddy. How can I help you today?", sender: 'bot' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessages = [...messages, { text: inputMessage, sender: 'user' }];
      setMessages(newMessages);
      setInputMessage('');
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = getBotResponse(inputMessage);
        setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
      }, 1000);
    }
  };

  const getBotResponse = (message) => {
    const responses = [
      "That's a great question! For detailed guidance, I recommend booking a session with our counselors.",
      "I can help you with basic information. For personalized advice, let's schedule a consultation!",
      "Based on what you're saying, it sounds like you'd benefit from our psychometric assessment.",
      "Our counselors can provide much more detailed guidance on this topic. Would you like to book a session?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <section className="counselling section" id="counselling">
      <div className="container">
        <div className="counselling-content">
          <div className="counselling-info">
            <h2 className="section-title">Expert Career Counselling</h2>
            <p className="section-subtitle">
              Get personalized guidance from certified career counselors who understand the Indian education system
            </p>
            
            <div className="counselling-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div>
                  <h4>Certified Counselors</h4>
                  <p>Expert guidance from qualified professionals</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <div>
                  <h4>Online Sessions</h4>
                  <p>Convenient video consultations from home</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
                <div>
                  <h4>Flexible Timing</h4>
                  <p>Book sessions at your convenience</p>
                </div>
              </div>
            </div>

            <button className="btn btn-primary btn-large">
              Book a Counsellor Session
            </button>
          </div>

          <div className="counselling-visual">
            <div className="counselor-card">
              <div className="counselor-image">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                  <circle cx="60" cy="60" r="60" fill="url(#counselorGradient)"/>
                  <circle cx="60" cy="45" r="20" fill="rgba(255,255,255,0.3)"/>
                  <path d="M30 90 Q60 75 90 90" stroke="rgba(255,255,255,0.3)" strokeWidth="3" fill="none"/>
                  <defs>
                    <linearGradient id="counselorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0B63A9"/>
                      <stop offset="100%" stopColor="#0BB3A9"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h4>Dr. Priya Sharma</h4>
              <p>Senior Career Counselor</p>
              <div className="rating">
                ⭐⭐⭐⭐⭐ <span>4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chatbot */}
      <div className={`chatbot ${isChatOpen ? 'open' : ''}`}>
        <div className="chatbot-header" onClick={() => setIsChatOpen(!isChatOpen)}>
          <div className="chatbot-avatar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <span>Career Buddy</span>
          {isChatOpen && (
            <button className="close-chat">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          )}
        </div>

        {isChatOpen && (
          <div className="chatbot-body">
            <div className="messages">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                  {message.text}
                </div>
              ))}
            </div>
            
            <div className="chat-input">
              <input
                type="text"
                placeholder="Ask me anything..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button onClick={handleSendMessage}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22,2 15,22 11,13 2,9 22,2"/>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Counselling;