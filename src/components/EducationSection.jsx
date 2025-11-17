import React from 'react';
import '../index.css';

const sand = '#c0a166';
const darkBrown = '#2c2415';
const mediumBrown = '#594e39';
const lightBrown = '#8a7c63';
const background = '#ffffff';

const education = [
  'BEng (Hons), King\'s College London',
  'MSc (Econ), London School of Economics',
  'Common Professional Exam, City University',
  'Bar Vocational Course, Inns of Court School of Law',
  "Called to the Bar, Lincoln's Inn (1994)",
  'STEP Trust & Estate Practitioner (2005)'
];

const EducationSection = () => (
  <section style={{
    background: background,
    padding: '5rem 0',
    fontFamily: 'Inter, Poppins, serif',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* Background decorative elements */}
    <div style={{
      position: 'absolute',
      top: '-100px',
      right: '-100px',
      width: '300px',
      height: '300px',
      background: 'radial-gradient(circle, rgba(192,161,102,0.05) 0%, rgba(192,161,102,0) 70%)',
      borderRadius: '50%',
    }}></div>
    
    <div style={{
      position: 'absolute',
      bottom: '-150px',
      left: '-150px',
      width: '400px',
      height: '400px',
      background: 'radial-gradient(circle, rgba(44,36,21,0.03) 0%, rgba(44,36,21,0) 70%)',
      borderRadius: '50%',
    }}></div>

    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2vw',
      position: 'relative',
      zIndex: 2
    }}>
      <h2 style={{
        textAlign: 'center',
        color: darkBrown,
        fontWeight: 800,
        fontSize: '2.5rem',
        letterSpacing: '-0.5px',
        marginBottom: '1rem',
      }}>
        Education
      </h2>
      
      {/* Accent underline */}
      <div style={{
        width: '80px',
        height: '4px',
        background: 'linear-gradient(90deg, #c0a166, #d4b85c)',
        margin: '0 auto 3rem auto',
        borderRadius: '2px',
      }}></div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2rem',
        justifyContent: 'center',
        alignItems: 'stretch'
      }}>
        {education.map((item, idx) => (
          <div
            key={item}
            style={{
              background: '#ffffff',
              color: darkBrown,
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(44,36,21,0.08)',
              padding: '2.5rem 2rem',
              fontWeight: 600,
              fontSize: '1.1rem',
              textAlign: 'center',
              letterSpacing: '0.01em',
              border: `1px solid #f0f0f0`,
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '140px',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(44,36,21,0.15)';
              e.currentTarget.style.borderColor = sand;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(44,36,21,0.08)';
              e.currentTarget.style.borderColor = '#f0f0f0';
            }}
          >
            {/* Top accent border */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, #c0a166, #d4b85c)',
              borderRadius: '12px 12px 0 0',
            }}></div>
            
            {/* Icon/Number */}
            <div style={{
              width: '50px',
              height: '50px',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.2rem',
              border: `2px solid ${sand}`,
              color: sand,
              fontWeight: 700,
              fontSize: '1.2rem',
              boxShadow: '0 4px 12px rgba(44,36,21,0.1)',
              transition: 'all 0.3s ease',
            }}>
              {idx + 1}
            </div>
            
            <span style={{
              fontSize: '1.15rem',
              fontWeight: 700,
              color: darkBrown,
              lineHeight: '1.5',
              textAlign: 'center',
              position: 'relative',
              zIndex: 2,
            }}>
              {item}
            </span>
            
            {/* Subtle corner accent */}
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, transparent 50%, rgba(192,161,102,0.03) 50%)',
              borderBottomLeftRadius: '12px',
              transition: 'all 0.3s ease',
            }}></div>
          </div>
        ))}
      </div>
      
      {/* Bottom decorative element */}
      <div style={{
        textAlign: 'center',
        marginTop: '3rem',
        color: mediumBrown,
        fontSize: '1rem',
        fontWeight: 500,
        fontStyle: 'italic',
        opacity: 0.8,
      }}>
        Comprehensive Legal Education & Professional Qualifications
      </div>
    </div>
  </section>
);

export default EducationSection;