import React from 'react';

const useWindowWidth = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
};

const Footer = () => {
  const width = useWindowWidth();
  const isMobile = width < 700;

  const sand = '#c0a166';
  const background = '#ffffff';
  const textDark = '#2c2415';
  const textLight = '#695a3c';

  return (
    <footer
      style={{
        background: '#fefcf7',
        padding: isMobile ? '2rem 1.5rem' : '2.5rem 2rem',
        fontFamily: 'Inter, Poppins, serif',
        width: '100%',
        position: 'relative',
        borderTop: `1px solid #f0ece3`,
        overflow: 'hidden'
      }}
    >
      {/* Background decorations */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        left: '-50px',
        width: '150px',
        height: '150px',
        background: 'radial-gradient(circle, rgba(192,161,102,0.03) 0%, rgba(192,161,102,0) 70%)',
        borderRadius: '50%',
        opacity: 0.6
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '-30px',
        right: '-30px',
        width: '100px',
        height: '100px',
        background: 'radial-gradient(circle, rgba(44,36,21,0.02) 0%, rgba(44,36,21,0) 70%)',
        borderRadius: '50%',
        opacity: 0.4
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: isMobile ? '1rem' : '2rem',
        position: 'relative',
        zIndex: 2,
        textAlign: isMobile ? 'center' : 'left'
      }}>
        {/* Left side - Copyright */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: isMobile ? 'center' : 'flex-start'
        }}>
          <div style={{
            color: textDark,
            fontWeight: 700,
            fontSize: isMobile ? '1.1rem' : '1.2rem',
            marginBottom: '0.3rem'
          }}>
            SP One Consulting © 2025
          </div>
          <div style={{
            color: textLight,
            fontWeight: 500,
            fontSize: isMobile ? '0.9rem' : '1rem',
            opacity: 0.9
          }}>
            Independent consulting practice of Stuart [Surname]
          </div>
        </div>

        {/* Right side - Location */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: isMobile ? 'center' : 'flex-end'
        }}>
          <div style={{
            color: textDark,
            fontWeight: 600,
            fontSize: isMobile ? '0.95rem' : '1rem',
            marginBottom: '0.3rem'
          }}>
            Based in the UAE
          </div>
          <div style={{
            color: sand,
            fontWeight: 500,
            fontSize: isMobile ? '0.85rem' : '0.9rem',
            fontStyle: 'italic'
          }}>
            — advising internationally
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '3px',
        background: `linear-gradient(90deg, ${sand}, #d4b85c)`,
        opacity: 0.3
      }} />
    </footer>
  );
};

export default Footer;