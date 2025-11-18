import React from 'react';
import '../index.css';

const sand = '#c0a166';
const darkBrown = '#2c2415';
const mediumBrown = '#594e39';

const education = [
  {
    degree: 'BEng (Hons)',
    institution: 'King\'s College London',
    year: '1990-1993'
  },
  {
    degree: 'MSc (Econ)',
    institution: 'London School of Economics',
    year: '1993-1994'
  },
  {
    degree: 'Common Professional Exam',
    institution: 'City University',
    year: '1994-1995'
  },
  {
    degree: 'Bar Vocational Course',
    institution: 'Inns of Court School of Law',
    year: '1995-1996'
  },
  {
    degree: 'Called to the Bar',
    institution: 'Lincoln\'s Inn',
    year: '1994'
  },
  {
    degree: 'STEP Trust & Estate Practitioner',
    institution: 'Society of Trust and Estate Practitioners',
    year: '2005'
  }
];

const EducationSection = () => (
  <section style={{
    background: '#ffffff',
    padding: '4rem 0',
    fontFamily: 'Inter, Poppins, sans-serif',
    width: '100%',
    position: 'relative',
  }}>
    
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '0 2rem',
    }}>
      
      {/* Header Section */}
      <div style={{
        textAlign: 'center',
        marginBottom: '3rem',
      }}>
        <h2 style={{
          color: darkBrown,
          fontWeight: 700,
          fontSize: '2.2rem',
          marginBottom: '0.8rem',
          letterSpacing: '-0.5px',
        }}>
          Education & Qualifications
        </h2>
        
        <div style={{
          width: '60px',
          height: '3px',
          background: sand,
          margin: '0 auto 1rem auto',
          borderRadius: '2px',
        }}></div>
        
        <p style={{
          color: mediumBrown,
          fontSize: '1.1rem',
          fontWeight: 400,
          maxWidth: '500px',
          margin: '0 auto',
          lineHeight: '1.5',
          opacity: 0.8,
        }}>
          Academic background and professional qualifications
        </p>
      </div>
      
      {/* Education List - Compact Design */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
        maxWidth: '700px',
        margin: '0 auto',
      }}>
        {education.map((edu, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '1.2rem 1.5rem',
              background: '#fcf9ef',
              borderRadius: '10px',
              border: `1px solid #e8dfd1`,
              transition: 'all 0.2s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#fffbf0';
              e.currentTarget.style.borderColor = sand;
              e.currentTarget.style.transform = 'translateX(5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#fcf9ef';
              e.currentTarget.style.borderColor = '#e8dfd1';
              e.currentTarget.style.transform = 'translateX(0)';
            }}
          >
            {/* Number Indicator */}
            <div style={{
              width: '32px',
              height: '32px',
              background: sand,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '0.9rem',
              marginRight: '1.2rem',
              flexShrink: 0,
            }}>
              {idx + 1}
            </div>
            
            {/* Education Content */}
            <div style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <div style={{
                  color: darkBrown,
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  marginBottom: '0.2rem',
                }}>
                  {edu.degree}
                </div>
                <div style={{
                  color: mediumBrown,
                  fontWeight: 400,
                  fontSize: '0.95rem',
                  opacity: 0.8,
                }}>
                  {edu.institution}
                </div>
              </div>
              
              {/* Year */}
              <div style={{
                color: sand,
                fontWeight: 600,
                fontSize: '0.9rem',
                background: 'rgba(192,161,102,0.1)',
                padding: '0.4rem 0.8rem',
                borderRadius: '12px',
                marginLeft: '1rem',
                flexShrink: 0,
              }}>
                {edu.year}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Compact Footer */}
      <div style={{
        textAlign: 'center',
        marginTop: '2.5rem',
        padding: '1.5rem',
      }}>
        <p style={{
          color: mediumBrown,
          fontSize: '0.95rem',
          fontWeight: 500,
          margin: 0,
          fontStyle: 'italic',
          opacity: 0.7,
        }}>
          Continuous professional development
        </p>
      </div>
    </div>
  </section>
);

export default EducationSection;