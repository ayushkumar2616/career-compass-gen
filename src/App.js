import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import InteractiveDemo from './components/InteractiveDemo';
import HowItWorks from './components/HowItWorks';
import Counselling from './components/Counselling';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import './styles/globals.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Problem />
      <Features />
      <InteractiveDemo />
      <HowItWorks />
      <Counselling />
      <Stats />
      <Testimonials />
      <FAQ />
      
      {/* Final CTA */}
      <section className="final-cta section" style={{background: 'var(--gradient-primary)', color: 'white', textAlign: 'center'}}>
        <div className="container">
          <h2 style={{marginBottom: '1rem', fontSize: '2.5rem'}}>Start Your Free Quiz Today</h2>
          <button className="btn btn-accent" style={{fontSize: '1.2rem', padding: '1rem 2rem'}}>
            Take Quiz Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{background: 'var(--surface)', padding: '3rem 0', borderTop: '1px solid var(--border)'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem'}}>
            <div>
              <h4 style={{marginBottom: '1rem', color: 'var(--text-primary)'}}>ED-GEN</h4>
              <p style={{color: 'var(--text-secondary)'}}>Education for Generations</p>
            </div>
            <div>
              <h5 style={{marginBottom: '1rem', color: 'var(--text-primary)'}}>Quick Links</h5>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                <a href="#about" style={{color: 'var(--text-secondary)', textDecoration: 'none'}}>About</a>
                <a href="#features" style={{color: 'var(--text-secondary)', textDecoration: 'none'}}>Features</a>
                <a href="#how-it-works" style={{color: 'var(--text-secondary)', textDecoration: 'none'}}>How it Works</a>
              </div>
            </div>
            <div>
              <h5 style={{marginBottom: '1rem', color: 'var(--text-primary)'}}>Support</h5>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                <a href="#faq" style={{color: 'var(--text-secondary)', textDecoration: 'none'}}>FAQ</a>
                <a href="#contact" style={{color: 'var(--text-secondary)', textDecoration: 'none'}}>Contact</a>
                <a href="#privacy" style={{color: 'var(--text-secondary)', textDecoration: 'none'}}>Privacy</a>
              </div>
            </div>
          </div>
          <div style={{textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid var(--border)', color: 'var(--text-secondary)'}}>
            <p>&copy; 2024 ED-GEN. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile CTA */}
      <div className="mobile-cta">
        <button className="btn btn-primary" style={{width: '100%'}}>
          Take Free Quiz
        </button>
      </div>
    </div>
  );
}

export default App;