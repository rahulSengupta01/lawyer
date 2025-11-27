import React, { useState } from 'react';
import '../index.css';

const sand = '#c0a166';
const darkBrown = '#2c2415';
const mediumBrown = '#594e39';

// Sort education by year (latest first)
const sortedEducation = [
  {
    degree: 'STEP Trust & Estate Practitioner',
    institution: 'Society of Trust and Estate Practitioners',
    year: '2005',
    endYear: 2005
  },
  {
    degree: 'Bar Vocational Course',
    institution: 'Inns of Court School of Law',
    year: '1995-1996',
    endYear: 1996
  },
  {
    degree: 'Common Professional Exam',
    institution: 'City University',
    year: '1994-1995',
    endYear: 1995
  },
  {
    degree: 'Called to the Bar',
    institution: 'Lincoln\'s Inn',
    year: '1994',
    endYear: 1994
  },
  {
    degree: 'MSc (Econ)',
    institution: 'London School of Economics',
    year: '1993-1994',
    endYear: 1994
  },
  {
    degree: 'BEng (Hons)',
    institution: 'King\'s College London',
    year: '1990-1993',
    endYear: 1993
  }
].sort((a, b) => b.endYear - a.endYear);

const EducationSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section style={{
      background: '#ffffff',
      padding: '5rem 0',
      fontFamily: 'Inter, Poppins, sans-serif',
      width: '100%',
      position: 'relative',
    }}>
      
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 2rem',
      }}>
        
        {/* Header Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem',
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'rgba(192, 161, 102, 0.1)',
            padding: '0.6rem 1.8rem',
            borderRadius: '50px',
            marginBottom: '1.5rem',
            border: `1px solid rgba(192, 161, 102, 0.2)`,
          }}>
            <span style={{
              color: sand,
              fontWeight: 600,
              fontSize: '0.9rem',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
            }}>
              Academic Excellence
            </span>
          </div>
          
          <h2 style={{
            color: darkBrown,
            fontWeight: 800,
            fontSize: '3rem',
            marginBottom: '1.2rem',
            letterSpacing: '-1px',
            lineHeight: '1.1',
          }}>
            Education & Qualifications
          </h2>
          
          <div style={{
            width: '80px',
            height: '4px',
            background: `linear-gradient(90deg, ${sand}, #d4b85c)`,
            margin: '0 auto 1.5rem auto',
            borderRadius: '2px',
          }}></div>
          
          <p style={{
            color: mediumBrown,
            fontSize: '1.2rem',
            fontWeight: 400,
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            opacity: 0.9,
          }}>
            Professional qualifications and academic achievements in chronological order
          </p>
        </div>

        {/* Education List - Latest First */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          maxWidth: '850px',
          margin: '0 auto',
        }}>
          {sortedEducation.map((edu, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '1.8rem 2.2rem',
                background: hoveredItem === idx 
                  ? 'linear-gradient(135deg, #fefcf5 0%, #fcf9ef 100%)'
                  : '#fcf9ef',
                borderRadius: '12px',
                border: `2px solid ${hoveredItem === idx ? sand : '#e8dfd1'}`,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                boxShadow: hoveredItem === idx 
                  ? '0 10px 30px rgba(192, 161, 102, 0.15)'
                  : '0 2px 8px rgba(0, 0, 0, 0.04)',
                transform: hoveredItem === idx ? 'translateY(-2px)' : 'none',
              }}
              onMouseEnter={() => setHoveredItem(idx)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Timeline Indicator */}
              <div style={{
                width: '44px',
                height: '44px',
                background: hoveredItem === idx 
                  ? `linear-gradient(135deg, ${sand}, #d4b85c)`
                  : sand,
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '1.1rem',
                marginRight: '1.8rem',
                flexShrink: 0,
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(192, 161, 102, 0.3)',
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
                <div style={{ flex: 1 }}>
                  <div style={{
                    color: darkBrown,
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    marginBottom: '0.3rem',
                    transition: 'all 0.3s ease',
                  }}>
                    {edu.degree}
                  </div>
                  <div style={{
                    color: mediumBrown,
                    fontWeight: 500,
                    fontSize: '1rem',
                    opacity: 0.9,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}>
                    <span style={{ fontSize: '1.1rem' }}>🎓</span>
                    {edu.institution}
                  </div>
                </div>
                
                {/* Year Badge */}
                <div style={{
                  color: sand,
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  background: 'rgba(192,161,102,0.1)',
                  padding: '0.6rem 1rem',
                  borderRadius: '8px',
                  marginLeft: '1.5rem',
                  flexShrink: 0,
                  transition: 'all 0.3s ease',
                  border: `1px solid rgba(192, 161, 102, 0.2)`,
                  transform: hoveredItem === idx ? 'scale(1.05)' : 'scale(1)',
                }}>
                  {edu.year}
                </div>
              </div>

              {/* Hover Accent */}
              <div style={{
                position: 'absolute',
                right: '1.5rem',
                top: '50%',
                transform: hoveredItem === idx ? 'translateY(-50%)' : 'translateY(-50%) scale(0)',
                opacity: hoveredItem === idx ? 1 : 0,
                transition: 'all 0.3s ease',
                color: sand,
                fontSize: '1.2rem',
              }}>
                →
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer */}
        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
          padding: '2rem',
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.8rem',
            marginBottom: '0.8rem',
          }}>
            <div style={{
              width: '6px',
              height: '6px',
              background: sand,
              borderRadius: '50%',
            }}></div>
            <span style={{
              color: darkBrown,
              fontWeight: 600,
              fontSize: '1rem',
            }}>
              Continuous Professional Development
            </span>
          </div>
          <p style={{
            color: mediumBrown,
            fontSize: '0.95rem',
            margin: 0,
            opacity: 0.8,
            maxWidth: '500px',
            lineHeight: '1.5',
          }}>
            Maintaining excellence through ongoing education and professional growth
          </p>
        </div>
      </div>

      <style>
        {`
        @media (max-width: 768px) {
          .education-container {
            padding: 0 1rem;
          }
          
          h2 {
            font-size: 2.2rem !important;
          }
          
          .education-item {
            padding: 1.3rem 1.5rem !important;
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .education-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
            width: 100%;
          }
          
          .year-badge {
            align-self: flex-start;
            margin-left: 0 !important;
          }
          
          .timeline-indicator {
            margin-right: 0 !important;
            align-self: flex-start;
          }
        }

        @media (max-width: 480px) {
          h2 {
            font-size: 1.8rem !important;
          }
          
          .education-item {
            padding: 1.2rem !important;
          }
          
          .timeline-indicator {
            width: 36px !important;
            height: 36px !important;
            font-size: 0.9rem !important;
          }
        }
        `}
      </style>
    </section>
  );
};

export default EducationSection;