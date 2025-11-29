import React from 'react';
import '../index.css';
import lawAboutImage from '../assets/lawerabout.jpg';

const expertiseList = [
  'Private wealth & international structuring',
  'Trusts, foundations & corporate structures',
  'Multi-jurisdictional tax planning',
  'Family succession strategies',
  'Real estate & commercial structuring',
  'Related litigation oversight',
  'Governance & directorship roles',
];

const useWindowWidth = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
};

const AboutSection = () => {
  const width = useWindowWidth();
  const isMobile = width < 700;

  const sand = '#c0a166';
  const background = '#ffffff';
  const textDark = '#2c2415';
  const textLight = '#695a3c';

  return (
    <section
      style={{
        background,
        padding: isMobile ? '3rem 1.5rem' : '5rem 0',
        fontFamily: 'Inter, Poppins, serif',
        width: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decorations */}
      <div style={{
        position: 'absolute',
        top: isMobile ? '-30px' : '-50px',
        right: isMobile ? '-30px' : '-50px',
        width: isMobile ? '120px' : '200px',
        height: isMobile ? '120px' : '200px',
        background: 'radial-gradient(circle, rgba(192,161,102,0.05) 0%, rgba(192,161,102,0) 70%)',
        borderRadius: '50%'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: isMobile ? '-70px' : '-100px',
        left: isMobile ? '-70px' : '-100px',
        width: isMobile ? '180px' : '300px',
        height: isMobile ? '180px' : '300px',
        background: 'radial-gradient(circle, rgba(44,36,21,0.03) 0%, rgba(44,36,21,0) 70%)',
        borderRadius: '50%'
      }} />

      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'center' : 'flex-start',
          justifyContent: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2vw',
          gap: isMobile ? '2.5rem' : '4rem',
          position: 'relative',
          zIndex: 2
        }}
      >
        {/* Left - Profile narrative */}
        <div style={{
          flex: '1 1 55%',
          textAlign: isMobile ? 'center' : 'left',
          display: 'flex',
          flexDirection: 'column',
          alignItems: isMobile ? 'center' : 'flex-start'
        }}>
          <h2 style={{
            fontSize: isMobile ? '1.9rem' : '2.5rem',
            fontWeight: '800',
            marginBottom: isMobile ? '1.5rem' : '2rem',
            color: textDark,
            lineHeight: '1.2',
            position: 'relative',
            width: '100%'
          }}>
            About SP One Consulting
            <span style={{
              position: 'absolute',
              bottom: '-8px',
              left: isMobile ? '50%' : '0',
              transform: isMobile ? 'translateX(-50%)' : 'none',
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, #c0a166, #d4b85c)',
              borderRadius: '2px'
            }}></span>
          </h2>
          
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            gap: isMobile ? '1.5rem' : '2rem',
            width: '100%'
          }}>
            <img
              src={lawAboutImage}
              alt="About SP One Consulting Portrait"
              style={{
                width: isMobile ? '140px' : '180px',
                height: isMobile ? '140px' : '180px',
                objectFit: 'cover',
                borderRadius: '50%',
                border: `4px solid ${sand}`,
                boxShadow: '0 8px 32px rgba(192, 161, 102, 0.2)',
                flexShrink: 0
              }}
            />
            
            <div>
              <p style={{
                fontSize: isMobile ? '1rem' : '1.1rem',
                color: textLight,
                lineHeight: '1.7',
                marginBottom: isMobile ? '1rem' : '1.5rem',
                fontWeight: '500',
                textAlign: isMobile ? 'center' : 'left'
              }}>
                Stuart has nearly 30 years of international legal and consulting experience, gained at the
                English Bar, global law firms, and senior in-house counsel roles.
              </p>
              <p style={{
                fontSize: isMobile ? '1rem' : '1.1rem',
                color: textLight,
                lineHeight: '1.7',
                fontWeight: '500',
                textAlign: isMobile ? 'center' : 'left'
              }}>
                Currently based in the UAE, he advises high-net-worth individuals, family businesses, and family offices on
                private wealth structuring, succession planning, asset protection and cross-border financial
                architecture.
              </p>
            </div>
          </div>
        </div>

        {/* Right - Expertise bullets */}
        <div style={{
          flex: '1 1 45%',
          background: '#fefcf7',
          borderRadius: '20px',
          padding: isMobile ? '2rem 1.5rem' : '2.5rem 2rem',
          boxShadow: '0 8px 32px rgba(44, 36, 21, 0.12)',
          border: '1px solid #f5f2eb',
          position: 'relative'
        }}>
          {/* Decorative quote mark */}
          <div style={{
            position: 'absolute',
            top: '15px',
            right: '20px',
            fontSize: '3rem',
            color: sand,
            opacity: 0.1,
            fontFamily: 'serif',
            lineHeight: 1
          }}>"</div>

          <h3 style={{
            fontSize: isMobile ? '1.4rem' : '1.6rem',
            color: textDark,
            fontWeight: '700',
            marginBottom: isMobile ? '1.5rem' : '2rem',
            textAlign: 'center',
            position: 'relative'
          }}>
            Key Expertise
            <span style={{
              position: 'absolute',
              bottom: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '40px',
              height: '2px',
              background: 'linear-gradient(90deg, #c0a166, #d4b85c)',
              borderRadius: '1px'
            }}></span>
          </h3>
          
          <ul style={{
            color: textLight,
            fontSize: isMobile ? '1rem' : '1.1rem',
            listStyle: 'none',
            lineHeight: '1.8',
            paddingLeft: '0',
            margin: 0
          }}>
            {expertiseList.map((item, idx) => (
              <li key={idx} style={{ 
                marginBottom: isMobile ? '0.8rem' : '1rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #c0a166, #d4b85c)',
                  color: '#ffffff',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '0.8rem',
                  flexShrink: 0,
                  marginTop: '2px'
                }}>
                  ✓
                </div>
                <span style={{ fontWeight: '500' }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;