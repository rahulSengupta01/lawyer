import React from 'react';
import '../index.css'; // Adjust if you use a different CSS file
import lawHeroImage from '../assets/lawerhero.jpg'; // Use correct path based on your folder structure

const HeroSection = () => {
  return (
    <section
      style={{
        background: 'linear-gradient(90deg, #eedcbe 0%, #f8f6f0 100%)', // sand-yellow gradient
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',      // Vertically center items
        justifyContent: 'center',  // Horizontally center whole hero area
        padding: '0 5vw',
        fontFamily: 'Inter, Poppins, sans-serif',
      }}
    >
      {/* Inner container to centrally align content and image */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',    // Vertically center these two blocks together
          justifyContent: 'center',// Center within the section
          width: '100%',
          maxWidth: '1200px',      // Optional: keeps design neat on large screens
        }}
      >
        {/* Left Side - Text */}
        <div style={{ maxWidth: '48%' }}>
          <h1
            style={{
              fontSize: '3.8rem',
              marginBottom: '1rem',
              fontWeight: '700',
            }}
          >
            SP One Consulting
          </h1>
          <h2
            style={{
              fontSize: '1.28rem',
              fontWeight: '500',
              marginBottom: '0.8rem',
              color: '#705d3c',
            }}
          >
            Specialists in International Financial Structuring
          </h2>
          <p
            style={{
              marginBottom: '2rem',
              color: '#665b4c',
              lineHeight: '1.6',
              fontSize: '1rem',
            }}
          >
            Providing expert cross-border advisory on trusts, foundations, family business structures, and private wealth planning across the UAE, Middle East, Europe, UK, USA, and leading offshore financial centres.
          </p>
          <a
            href="#contact"
            style={{
              display: 'inline-block',
              background: '#c0a166',
              color: 'white',
              fontWeight: '600',
              padding: '0.85rem 2rem',
              borderRadius: '6px',
              textDecoration: 'none',
              boxShadow: '0 2px 10px #eedcbe59',
            }}
          >
            Request a Consultation
          </a>
        </div>
        {/* Right Side - Image */}
        <div style={{ maxWidth: '44%', marginLeft: '2vw' }}>
          <img
            src={lawHeroImage}
            alt="Professional portrait or financial graphic"
            style={{
              width: '100%',
              maxHeight: '375px',
              objectFit: 'cover',
              borderRadius: '14px',
              boxShadow: '0 4px 24px rgba(192, 161, 102, 0.18)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
