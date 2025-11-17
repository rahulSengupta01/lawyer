import React, { useState } from 'react';
import '../index.css';
import experienceImg from '../assets/lawyer.jpg';

const timelineRoles = [
  {
    label: 'Graphene Star Ltd (UK)',
    details: [
      'Strategic legal guidance, capital raising, IP protection, R&D contracts & negotiations.'
    ]
  },
  {
    label: 'London UHNW Family Office',
    details: [
      'Restructuring of USD 2B+ wealth, litigation strategy, real estate development & charity formation.'
    ]
  },
  {
    label: 'New York/Monaco UHNW Family Office',
    details: [
      'Management of USD 150M+ trust structures, cross-border contentious & non-contentious matters.'
    ]
  },
  {
    label: 'Law Firms Associated With',
    details: [
      'Al Tamimi & Co, Taylor Wessing, Ogier, Walkers, Collas Crill, Mourant.',
      'Trained as a barrister at Wilberforce Chambers, 11 Stone Buildings & practised at Trinity Chambers.'
    ]
  }
];

const recentExperience = [
  'Advising multiple HNW families on trusts, foundations & protection structures.',
  'Wealth restructuring for a major Middle Eastern family with multi-jurisdictional tax/litigation issues.',
  'Structuring for a globally prominent individual with complex tax and political considerations.',
  'Advising UAE real estate leader on JV structuring for Dubai property development.',
  'Advisory to UAE Federal Government on Trusts Law and Family Business Law.',
  'Governance advisory for Saudi G20 ecological foundation.',
  'Legislative advisory to ADGM Registration Authority.'
];

const sand = '#c0a166';

const ExperienceSection = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '700px',
        background: '#fcf9ef',
        padding: '4rem 0',
        fontFamily: 'Inter, Poppins, sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Enhanced Right Side Image Background */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '45%',
          background: `linear-gradient(135deg, rgba(192, 161, 102, 0.15) 0%, rgba(192, 161, 102, 0.05) 100%), url(${experienceImg}) center/cover no-repeat`,
          zIndex: 1,
          opacity: 0.85,
          borderTopLeftRadius: '30px',
          borderBottomLeftRadius: '30px',
          boxShadow: 'inset 8px 0 32px rgba(192, 161, 102, 0.1)',
        }}
      ></div>

      {/* Section Content */}
      <div
        style={{
          display: 'flex',
          width: '90%',
          maxWidth: '1400px',
          margin: '0 auto',
          zIndex: 2,
          height: '100%',
          alignItems: 'flex-start',
          gap: '3rem',
        }}
      >
        {/* Left Column: Dropdown Timeline Roles */}
        <div
          style={{
            flex: '0 0 380px',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            padding: '2rem 0',
          }}
        >
          <h3 style={{
            color: sand,
            fontWeight: 800,
            fontSize: '1.5rem',
            marginBottom: '2.5rem',
            textAlign: 'left',
            letterSpacing: '-0.5px',
            position: 'relative',
          }}>
            Career Timeline
            <span
              style={{
                position: 'absolute',
                bottom: '-10px',
                left: 0,
                width: '50px',
                height: '3px',
                background: 'linear-gradient(90deg, #c0a166, #d4b85c)',
                borderRadius: '2px',
              }}
            ></span>
          </h3>
          
          {timelineRoles.map((role, idx) => (
            <div
              key={role.label}
              style={{
                marginBottom: '1rem',
                width: '100%',
                borderRadius: '12px',
                background: openDropdown === idx 
                  ? 'linear-gradient(135deg, #fffbf0 0%, #fef7e5 100%)' 
                  : '#fff',
                boxShadow: openDropdown === idx 
                  ? '0 8px 32px rgba(192, 161, 102, 0.2)' 
                  : '0 4px 20px rgba(192, 161, 102, 0.08)',
                border: openDropdown === idx 
                  ? `2px solid ${sand}` 
                  : '2px solid #e8dfd1',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              {/* Dropdown Header */}
              <div
                style={{
                  padding: '1.5rem 1.5rem',
                  color: openDropdown === idx ? sand : '#554c3f',
                  fontWeight: openDropdown === idx ? 700 : 600,
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'transparent',
                  transition: 'all 0.3s ease',
                }}
                onClick={() => toggleDropdown(idx)}
              >
                <span>{role.label}</span>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3"
                  style={{
                    transform: openDropdown === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    color: sand,
                  }}
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </div>

              {/* Dropdown Content */}
              <div
                style={{
                  maxHeight: openDropdown === idx ? '200px' : '0',
                  opacity: openDropdown === idx ? 1 : 0,
                  padding: openDropdown === idx ? '0 1.5rem 1.5rem 1.5rem' : '0 1.5rem',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              >
                <ul
                  style={{
                    color: '#665b4c',
                    fontWeight: 500,
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    paddingLeft: '18px',
                    listStyleType: 'disc',
                    margin: 0,
                  }}
                >
                  {role.details.map((detail, index) => (
                    <li key={index} style={{ marginBottom: '0.5rem' }}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Center Column: Main Content Panel */}
        <div
          style={{
            flex: '1 1 500px',
            background: 'linear-gradient(135deg, #fff 0%, #fefcf5 100%)',
            borderRadius: '24px',
            boxShadow: '0 12px 50px rgba(192, 161, 102, 0.15)',
            padding: '3rem 3rem',
            minHeight: '520px',
            maxWidth: '580px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            border: '1px solid #f0e6d3',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative corner accent */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, transparent 50%, rgba(192, 161, 102, 0.05) 50%)',
              borderBottomLeftRadius: '24px',
            }}
          ></div>

          <h2 style={{
            color: sand,
            fontWeight: 800,
            fontSize: '2.4rem',
            marginBottom: '1.5rem',
            letterSpacing: '-0.5px',
            lineHeight: '1.2',
            position: 'relative',
          }}>
            Experience & Credentials
            <span
              style={{
                position: 'absolute',
                bottom: '-8px',
                left: 0,
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, #c0a166, #d4b85c)',
                borderRadius: '2px',
              }}
            ></span>
          </h2>
          
          {/* Recent Experience */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h4 style={{
              color: sand,
              fontWeight: 700,
              fontSize: '1.3rem',
              marginBottom: '1.2rem',
              position: 'relative',
              display: 'inline-block',
            }}>
              Recent Experience
              <span
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  width: '30px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #c0a166, #d4b85c)',
                  borderRadius: '1px',
                }}
              ></span>
            </h4>
            <ul style={{
              margin: 0,
              color: '#48413a',
              fontSize: '1.05rem',
              lineHeight: '1.8',
              paddingLeft: '24px',
              listStyleType: 'disc'
            }}>
              {recentExperience.map((exp, idx) => (
                <li key={idx} style={{ 
                  marginBottom: '0.8rem',
                  paddingLeft: '0.5rem',
                }}>{exp}</li>
              ))}
            </ul>
          </div>

          {/* Static Content Area */}
          <div>
            <h4 style={{
              color: sand,
              fontWeight: 700,
              fontSize: '1.3rem',
              marginBottom: '1.2rem',
              position: 'relative',
              display: 'inline-block',
            }}>
              Professional Expertise
              <span
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  width: '35px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #c0a166, #d4b85c)',
                  borderRadius: '1px',
                }}
              ></span>
            </h4>
            <p style={{
              color: '#665b4c',
              fontWeight: 500,
              fontSize: '1.05rem',
              lineHeight: '1.75',
              margin: 0,
            }}>
              Click on the career timeline items to explore detailed experience and accomplishments 
              from each professional role. Each dropdown reveals specific expertise and achievements.
            </p>
          </div>
        </div>

        {/* Right Column Spacer */}
        <div
          style={{
            flex: '0 0 380px',
            height: '100%',
          }}
        ></div>
      </div>
    </section>
  );
};

export default ExperienceSection;