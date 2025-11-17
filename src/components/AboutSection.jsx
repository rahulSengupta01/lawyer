import React from 'react';
import '../index.css';
import lawAboutImage from '../assets/lawerabout.jpg'; // Ensure the image is present

const expertiseList = [
  'Private wealth & international structuring',
  'Trusts, foundations & corporate structures',
  'Multi-jurisdictional tax planning',
  'Family succession strategies',
  'Real estate & commercial structuring',
  'Litigation oversight',
  'Governance & directorship roles',
];

const AboutSection = () => {
  return (
    <section
      style={{
        background: '#fff',
        padding: '4rem 5vw',
        borderTop: '4px solid #eedcbe', // sand-yellow accent line at the top
        fontFamily: 'Inter, Poppins, sans-serif',
        minHeight: '480px',
        marginBottom: '2rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          gap: '3vw',
        }}
      >
        {/* Left - Profile narrative */}
        <div style={{ flex: '1 1 52%', minWidth: '320px', marginRight: '2vw' }}>
          <h2 style={{ fontSize: '2.1rem', fontWeight: '700', marginBottom: '1.25rem', color: '#c0a166' }}>
            About SP One Consulting
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#5a5244', lineHeight: '1.7', marginBottom: '2rem' }}>
            Stuart has nearly 30 years of international legal and consulting experience, gained at the English Bar, global law firms, and senior in-house counsel roles.<br /><br />
            Now based in the UAE, he advises high-net-worth individuals, family businesses, and private offices on private wealth structuring, succession planning, and cross-border financial architecture.
          </p>
          {/* Photo style: Smaller, rounded, optional border */}
          <img
            src={lawAboutImage}
            alt="About SP One Consulting Portrait"
            style={{
              width: '160px',
              height: '160px',
              objectFit: 'cover',
              borderRadius: '50%',
              border: '3px solid #eedcbe',
              boxShadow: '0 2px 10px rgba(224, 202, 158, 0.09)',
              marginBottom: '1.5rem',
            }}
          />
        </div>
        {/* Right - Expertise bullets */}
        <div style={{
          flex: '1 1 39%',
          background: '#fffbea',
          borderRadius: '14px',
          padding: '2rem 1.5rem',
          boxShadow: '0 2px 18px #eedcbe19',
          minWidth: '260px',
        }}>
          <h3 style={{ fontSize: '1.22rem', color: '#ad944a', fontWeight: '600', marginBottom: '1.1rem' }}>
            Key Expertise
          </h3>
          <ul style={{ color: '#6d5e43', fontSize: '1.06rem', listStyle: 'disc inside', lineHeight: '2', paddingLeft: '0' }}>
            {expertiseList.map((item, idx) => (
              <li key={idx} style={{ marginBottom: '0.3rem' }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
