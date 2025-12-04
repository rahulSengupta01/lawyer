import React from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const useWindowWidth = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
};

const ContactSection = () => {
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
        left: isMobile ? '-30px' : '-50px',
        width: isMobile ? '120px' : '200px',
        height: isMobile ? '120px' : '200px',
        background: 'radial-gradient(circle, rgba(192,161,102,0.05) 0%, rgba(192,161,102,0) 70%)',
        borderRadius: '50%'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: isMobile ? '-70px' : '-100px',
        right: isMobile ? '-70px' : '-100px',
        width: isMobile ? '180px' : '300px',
        height: isMobile ? '180px' : '300px',
        background: 'radial-gradient(circle, rgba(44,36,21,0.03) 0%, rgba(44,36,21,0) 70%)',
        borderRadius: '50%'
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2vw',
        position: 'relative',
        zIndex: 2
      }}>
        <h2 style={{
          color: textDark,
          fontWeight: 800,
          fontSize: isMobile ? '1.9rem' : '2.5rem',
          letterSpacing: '-0.5px',
          marginBottom: '3rem',
          lineHeight: '1.2',
          position: 'relative',
          textAlign: 'center',
          width: '100%'
        }}>
          CONTACT SECTION
          <span style={{
            position: 'absolute',
            bottom: '-8px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #c0a166, #d4b85c)',
            borderRadius: '2px'
          }}></span>
        </h2>

        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          backgroundColor: '#fefcf7',
          padding: isMobile ? '2rem 1.5rem' : '3rem',
          borderRadius: '20px',
          boxShadow: '0 8px 32px rgba(44,36,21,0.12)',
          border: '1px solid #f5f2eb',
          position: 'relative'
        }}>
          {/* Decorative quote mark */}
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            fontSize: '4rem',
            color: sand,
            opacity: 0.1,
            fontFamily: 'serif',
            lineHeight: 1
          }}>"</div>

          <h3 style={{
            color: textDark,
            fontWeight: 700,
            fontSize: isMobile ? '1.4rem' : '1.6rem',
            marginBottom: '1.5rem',
            position: 'relative',
            display: 'inline-block'
          }}>
            Get in Touch:
            <span style={{
              position: 'absolute',
              bottom: '-6px',
              left: 0,
              width: '40px',
              height: '2px',
              background: 'linear-gradient(90deg, #c0a166, #d4b85c)',
              borderRadius: '1px'
            }}></span>
          </h3>
          
          <p style={{
            color: textLight,
            fontSize: isMobile ? '1rem' : '1.1rem',
            lineHeight: '1.7',
            marginBottom: '2.5rem',
            fontWeight: 500
          }}>
            To discuss international structuring or private wealth matters, please contact:
          </p>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.8rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.2rem',
              padding: '1rem 0',
              borderBottom: '1px solid #f0ece3'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #c0a166, #d4b85c)',
                color: '#ffffff',
                borderRadius: '12px',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                boxShadow: '0 4px 16px rgba(192,161,102,0.3)',
                flexShrink: 0
              }}>
                <FaEnvelope />
              </div>
              <span style={{
                color: textDark,
                fontSize: isMobile ? '1rem' : '1.1rem',
                fontWeight: 600
              }}>
                Email: stuart@sponeconsulting.com
              </span>
            </div>
            
{/* Phone Row */}
{/* Phone/Whatsapp Row */}
<div style={{
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
  padding: '1rem 0',
  borderBottom: '1px solid #f0ece3'
}}>
  <div style={{
    background: 'linear-gradient(135deg, #c0a166, #d4b85c)',
    color: '#ffffff',
    borderRadius: '12px',
    width: '70px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    fontSize: '1.2rem',
    boxShadow: '0 4px 16px rgba(192,161,102,0.3)',
    flexShrink: 0
  }}>
    <FaPhone />
    <FaWhatsapp />
  </div>
  <span style={{
    color: textDark,
    fontSize: isMobile ? '1rem' : '1.1rem',
    fontWeight: 600
  }}>
    Phone/Whatsapp: +971 55177 9203
  </span>
</div>

            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.2rem',
              padding: '1rem 0'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #c0a166, #d4b85c)',
                color: '#ffffff',
                borderRadius: '12px',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                boxShadow: '0 4px 16px rgba(192,161,102,0.3)',
                flexShrink: 0
              }}>
                <FaMapMarkerAlt />
              </div>
              <span style={{
                color: textDark,
                fontSize: isMobile ? '1rem' : '1.1rem',
                fontWeight: 600
              }}>
                Location: UAE (GMT +4)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;