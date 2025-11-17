import React from 'react';
import '../index.css';
import lawAboutImage from '../assets/lawerabout.jpg';

const expertiseList = [
  'Private wealth & international structuring',
  'Trusts, foundations & corporate structures',
  'Multi-jurisdictional tax planning',
  'Family succession strategies',
  'Real estate & commercial structuring',
  'Litigation oversight',
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

  return (
    <section
      style={{
        background: '#fff',
        padding: isMobile ? '2rem 4vw' : '4rem 5vw',
        borderTop: '4px solid #eedcbe',
        fontFamily: 'Inter, Poppins, sans-serif',
        minHeight: '480px',
        marginBottom: '2rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'flex-start',
          justifyContent: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          gap: isMobile ? '1.7rem' : '3vw',
        }}
      >
        {/* Left - Profile narrative */}
        <div style={{
          flex: isMobile ? undefined : '1 1 52%',
          minWidth: '240px',
          marginRight: isMobile ? '0' : '2vw',
          width: isMobile ? '100%' : undefined,
          textAlign: isMobile ? 'center' : 'left'
        }}>
          <h2 style={{
            fontSize: isMobile ? '1.28rem' : '2.1rem',
            fontWeight: '700',
            marginBottom: isMobile ? '1.1rem' : '1.25rem',
            color: '#c0a166',
          }}>
            About SP One Consulting
          </h2>
          <p style={{
            fontSize: isMobile ? '1rem' : '1.08rem',
            color: '#5a5244',
            lineHeight: '1.7',
            marginBottom: isMobile ? '1.4rem' : '2rem',
          }}>
            Stuart has nearly 30 years of international legal and consulting experience, gained at the English Bar, global law firms, and senior in-house counsel roles.<br /><br />
            Now based in the UAE, he advises high-net-worth individuals, family businesses, and private offices on private wealth structuring, succession planning, and cross-border financial architecture.
          </p>
          <img
            src={lawAboutImage}
            alt="About SP One Consulting Portrait"
            style={{
              width: isMobile ? '135px' : '160px',
              height: isMobile ? '135px' : '160px',
              objectFit: 'cover',
              borderRadius: '50%',
              border: '3px solid #eedcbe',
              boxShadow: '0 2px 10px rgba(224, 202, 158, 0.09)',
              marginBottom: isMobile ? '1.1rem' : '1.5rem',
            }}
          />
        </div>
        {/* Right - Expertise bullets */}
        <div style={{
          flex: isMobile ? undefined : '1 1 39%',
          background: '#fffbea',
          borderRadius: '14px',
          padding: isMobile ? '1.1rem 1rem' : '2rem 1.5rem',
          boxShadow: '0 2px 18px #eedcbe19',
          minWidth: '180px',
          width: isMobile ? '100%' : undefined
        }}>
          <h3 style={{
            fontSize: isMobile ? '1rem' : '1.22rem',
            color: '#ad944a',
            fontWeight: '600',
            marginBottom: isMobile ? '0.8rem' : '1.1rem',
            textAlign: isMobile ? 'center' : 'left'
          }}>
            Key Expertise
          </h3>
          <ul style={{
            color: '#6d5e43',
            fontSize: isMobile ? '0.95rem' : '1.06rem',
            listStyle: 'disc inside',
            lineHeight: isMobile ? '1.75' : '2',
            paddingLeft: '0'
          }}>
            {expertiseList.map((item, idx) => (
              <li key={idx} style={{ marginBottom: isMobile ? '0.15rem' : '0.3rem' }}>
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
