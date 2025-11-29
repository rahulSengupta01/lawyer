import React from 'react';
import '../index.css'; // Optional
import lawHeroImage from '../assets/lawerhero.jpg';

const useWindowWidth = () => {
  // Hook for reactivity on resize
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
};

const HeroSection = () => {
  const width = useWindowWidth();
  const isMobile = width < 700;

  return (
    <section
      style={{
        background: 'linear-gradient(90deg, #eedcbe 0%, #f8f6f0 100%)',
        minHeight: isMobile ? 'auto' : '500px',
        display: 'flex',
        alignItems: isMobile ? undefined : 'center',
        justifyContent: 'center',
        padding: isMobile ? '2rem 5vw 2.5rem 5vw' : '0 5vw',
        flexDirection: isMobile ? 'column' : 'row',
        fontFamily: 'Inter, Poppins, serif'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column-reverse' : 'row',
          alignItems: isMobile ? 'center' : 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1200px'
        }}
      >
        {/* Left Side - Text */}
        <div
          style={{
            maxWidth: isMobile ? '100%' : '48%',
            width: isMobile ? '100%' : undefined,
            textAlign: isMobile ? 'center' : 'left',
            marginTop: isMobile ? '2rem' : 0
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? '2.2rem' : '3.8rem',
              marginBottom: isMobile ? '0.7rem' : '1rem',
              fontWeight: '800',
              color: '#2c2415',
              lineHeight: '1.1',
              letterSpacing: '-0.5px'
            }}
          >
            SP One Consulting
          </h1>
          <h2
            style={{
              fontSize: isMobile ? '1.09rem' : '1.28rem',
              fontWeight: '600',
              marginBottom: isMobile ? '0.6rem' : '0.8rem',
              color: '#695a3c'
            }}
          >
            Specialists in International Financial Structuring
          </h2>
          <p
            style={{
              marginBottom: isMobile ? '1.3rem' : '2rem',
              color: '#665b4c',
              lineHeight: '1.6',
              fontSize: isMobile ? '0.95rem' : '1rem',
              fontWeight: '500'
            }}
          >
            Providing expert cross-border advisory services on trusts, foundations, family business
structures, and private wealth planning across the Middle East, (including UAE),
Europe, (including UK), USA, and leading offshore financial centres (such as Jersey and the
Cayman Islands).
          </p>
          <a
            href="#contact"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #c0a166, #d4b85c)',
              color: 'white',
              fontWeight: '600',
              padding: isMobile ? '0.7rem 1.4rem' : '0.85rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(192, 161, 102, 0.3)',
              fontSize: isMobile ? '1rem' : '1.08rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(192, 161, 102, 0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 16px rgba(192, 161, 102, 0.3)';
            }}
          >
            Request a Consultation
          </a>
        </div>
        {/* Right Side - Image */}
        <div
          style={{
            maxWidth: isMobile ? '100%' : '44%',
            width: isMobile ? '100%' : undefined,
            marginLeft: isMobile ? '0' : '2vw',
            textAlign: 'center'
          }}
        >
          <img
            src={lawHeroImage}
            alt="Professional portrait or financial graphic"
            style={{
              width: isMobile ? '92vw' : '100%',
              maxHeight: isMobile ? 'auto' : '375px',
              objectFit: isMobile ? 'contain' : 'cover',
              objectPosition: 'top center',
              borderRadius: '14px',
              boxShadow: '0 8px 32px rgba(44, 36, 21, 0.15)',
              border: '1px solid #f0ece3'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;