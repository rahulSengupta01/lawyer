import React, { useState } from 'react';
import '../index.css';
import barLogo from '../assets/bar.png';
import stepLogo from '../assets/step.png';

const sand = '#c0a166';
const darkBrown = '#2c2415';
const mediumBrown = '#594e39';

const sortedEducation = [
  {
    degree: 'BEng (Hons)',
    institution: "King's College London",
    year: ''
  },
  {
    degree: 'MSc (Econ)',
    institution: 'London School of Economics',
    year: ''
  },
  {
    degree: 'Common Professional Exam',
    institution: 'City University',
    year: ''
  },
  {
    degree: 'Bar Vocational Course',
    institution: 'Inns of Court School of Law',
    year: ''
  },
  {
    degree: 'Called to the Bar',
    institution: "Lincoln's Inn",
    year: '1994',
    logo: barLogo
  },
  {
    degree: 'STEP Trust & Estate Practitioner',
    institution: 'STEP',
    year: '2005',
    logo: stepLogo
  }
];

const EducationSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section style={{
      background: '#ffffff',
      padding: '4rem 0',
      fontFamily: 'Inter, Poppins, serif',
      width: '100%',
      position: 'relative',
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 1.5rem',
      }}>
        {/* Header Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'rgba(192, 161, 102, 0.1)',
            padding: '0.5rem 1.5rem',
            borderRadius: '50px',
            marginBottom: '1.2rem',
            border: `1px solid rgba(192, 161, 102, 0.2)`,
          }}>
            <span style={{
              color: sand,
              fontWeight: 600,
              fontSize: '0.85rem',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
            }}>
              Academic Excellence
            </span>
          </div>
          
          <h2 style={{
            color: darkBrown,
            fontWeight: 800,
            fontSize: '2.5rem',
            marginBottom: '1rem',
            letterSpacing: '-0.8px',
            lineHeight: '1.1',
          }}>
            Education & Qualifications
          </h2>
          
          <div style={{
            width: '60px',
            height: '3px',
            background: `linear-gradient(90deg, ${sand}, #d4b85c)`,
            margin: '0 auto 1rem auto',
            borderRadius: '2px',
          }}></div>
          
          <p style={{
            color: mediumBrown,
            fontSize: '1.1rem',
            fontWeight: 500,
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: '1.6',
            opacity: 0.9,
          }}>
            Professional qualifications and academic achievements
          </p>
        </div>

        {/* Education List - Compact */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.8rem',
          maxWidth: '750px',
          margin: '0 auto',
        }}>
          {sortedEducation.map((edu, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '1.2rem 1.6rem',
                background: hoveredItem === idx 
                  ? 'linear-gradient(135deg, #fefcf5 0%, #fcf9ef 100%)'
                  : 'rgba(252, 249, 239, 0.6)',
                borderRadius: '16px',
                border: `1px solid ${hoveredItem === idx ? sand : 'rgba(192, 161, 102, 0.1)'}`,
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                cursor: 'pointer',
                position: 'relative',
                boxShadow: hoveredItem === idx 
                  ? '0 8px 25px rgba(192, 161, 102, 0.15)'
                  : '0 2px 10px rgba(0, 0, 0, 0.03)',
                transform: hoveredItem === idx ? 'translateY(-1px)' : 'none',
              }}
              onMouseEnter={() => setHoveredItem(idx)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Compact Timeline index */}
              <div style={{
                width: '36px',
                height: '36px',
                background: hoveredItem === idx 
                  ? `linear-gradient(135deg, ${sand}, #d4b85c)`
                  : 'rgba(192, 161, 102, 0.8)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.95rem',
                marginRight: '1.2rem',
                flexShrink: 0,
                transition: 'all 0.3s ease',
                boxShadow: '0 3px 10px rgba(192, 161, 102, 0.25)',
              }}>
                {idx + 1}
              </div>
              
              {/* Education Content */}
              <div style={{
                flex: 1,
                minWidth: 0,
              }}>
                <div style={{
                  color: darkBrown,
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  marginBottom: '0.2rem',
                  lineHeight: '1.3',
                }}>
                  {edu.degree}
                </div>
                <div style={{
                  color: mediumBrown,
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  opacity: 0.85,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}>
                  <span style={{ fontSize: '1rem' }}>🎓</span>
                  {edu.institution}
                </div>
              </div>
              
              {/* Logo or Year Badge - LARGER LOGOS */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {edu.logo ? (
                  // Show logo for Bar Council and STEP - 44px size
                  <img
                    src={edu.logo}
                    alt={edu.degree}
                    style={{
                      width: '44px',
                      height: '44px',
                      objectFit: 'contain',
                      borderRadius: '8px',
                      boxShadow: '0 3px 12px rgba(192, 161, 102, 0.25)',
                      transition: 'all 0.3s ease',
                      filter: hoveredItem === idx ? 'brightness(1.1) saturate(1.1)' : 'brightness(1)',
                    }}
                  />
                ) : edu.year ? (
                  // Show year badge for other items with years
                  <div style={{
                    color: sand,
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    background: 'rgba(192,161,102,0.1)',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '6px',
                    border: `1px solid rgba(192, 161, 102, 0.2)`,
                    flexShrink: 0,
                  }}>
                    {edu.year}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* Footer - Compact */}
        <div style={{
          textAlign: 'center',
          marginTop: '2.5rem',
          padding: '1.5rem',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.6rem',
            maxWidth: '450px',
            margin: '0 auto',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
            }}>
              <div style={{
                width: '5px',
                height: '5px',
                background: sand,
                borderRadius: '50%',
              }}></div>
              <span style={{
                color: darkBrown,
                fontWeight: 600,
                fontSize: '0.95rem',
              }}>
                Continuous Professional Development
              </span>
            </div>
            <p style={{
              color: mediumBrown,
              fontSize: '0.9rem',
              margin: 0,
              opacity: 0.8,
              lineHeight: '1.5',
              textAlign: 'center',
            }}>
              Maintaining excellence through ongoing education and professional growth
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
