import React from 'react';
import '../index.css';
import workImg from '../assets/work.jpg';

const sand = '#c0a166';
const background = '#fefcf7';
const textDark = '#2c2415';
const textLight = '#695a3c';
const processPhases = [
  'Initial Discussion',
  'Scoping & Strategy',
  'Documentation & Implementation',
  'Ongoing Support'
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

const HowIWorkSection = () => {
  const width = useWindowWidth();
  const isMobile = width < 700;

  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #fefcf7 0%, #fcf9ef 50%, #faf6e9 100%)',
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
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        padding: '0 2vw',
        position: 'relative',
        zIndex: 2,
        gap: isMobile ? '2.5rem' : '4rem'
      }}>
        {/* Left Side: Image */}
        <div style={{
          flex: '0 0 320px',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: isMobile ? '2rem' : '0',
          width: isMobile ? '100%' : 'auto'
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '280px'
          }}>
            <img
              src={workImg}
              alt="Work process"
              style={{
                width: '100%',
                height: '280px',
                objectFit: 'cover',
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(44,36,21,0.12)',
                border: '1px solid #f0f0f0'
              }}
            />
            <div style={{
              position: 'absolute',
              top: '-10px',
              left: '-10px',
              right: '10px',
              bottom: '10px',
              border: `2px solid ${sand}`,
              borderRadius: '20px',
              zIndex: -1,
              opacity: 0.3
            }}></div>
          </div>
        </div>

        {/* Right Side: Text and Process */}
        <div style={{
          flex: '1 1 600px',
          display: 'flex',
          flexDirection: 'column',
          textAlign: isMobile ? 'center' : 'left',
          alignItems: isMobile ? 'center' : 'flex-start',
          width: isMobile ? '100%' : 'auto'
        }}>
          <h2 style={{
            color: textDark,
            fontWeight: 800,
            fontSize: isMobile ? '1.9rem' : '2.5rem',
            letterSpacing: '-0.5px',
            marginBottom: '1.5rem',
            lineHeight: '1.2',
            position: 'relative',
            width: '100%'
          }}>
            How I Work &mdash; Approach
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

<blockquote style={{
  borderLeft: isMobile ? 'none' : `4px solid ${sand}`,
  borderTop: isMobile ? `4px solid ${sand}` : 'none',
  background: '#ffffff',
  fontSize: isMobile ? '1rem' : '1.15rem',
  color: textDark,
  lineHeight: '1.7',
  fontStyle: 'italic',
  padding: isMobile ? '1.2rem 1rem 1.2rem 1.3rem' : '2rem 2rem 2rem 1.8rem',
  marginBottom: '2.5rem',
  marginTop: 0,

  // ⭐️ NEW FIX: shift left slightly on desktop only
  marginLeft: isMobile ? '0' : '-1rem',

  width: '100%',
  boxShadow: '0 4px 20px rgba(44,36,21,0.08)',
  borderRadius: '12px',
  border: '1px solid #f5f2eb',
  position: 'relative'
}}>

            "I provide clear, pragmatic, confidential, internationally informed advice focused on commerciality and efficient execution."
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              fontSize: '3rem',
              color: sand,
              opacity: 0.1,
              fontFamily: 'serif'
            }}>"</div>
          </blockquote>

          <div style={{
            width: '100%',
            marginTop: '1rem'
          }}>
            <h3 style={{
              color: textDark,
              fontWeight: 700,
              fontSize: isMobile ? '1.2rem' : '1.4rem',
              marginBottom: '2rem',
              position: 'relative',
              display: 'inline-block'
            }}>
              Engagement Process
              <span style={{
                position: 'absolute',
                bottom: '-6px',
                left: isMobile ? '50%' : '0',
                transform: isMobile ? 'translateX(-50%)' : 'none',
                width: '40px',
                height: '2px',
                background: 'linear-gradient(90deg, #c0a166, #d4b85c)',
                borderRadius: '1px'
              }}></span>
            </h3>

            {/* Horizontal Process Flow */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'flex-start',
              margin: '0 auto',
              width: '100%',
              padding: '1rem 0'
            }}>
              {processPhases.map((phase, idx) => (
                <React.Fragment key={phase}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flex: '1 0 130px',
                    position: 'relative',
                    marginBottom: isMobile ? '1rem' : '0'
                  }}>
                    <div style={{
                      background: 'linear-gradient(135deg, #c0a166, #d4b85c)',
                      color: '#ffffff',
                      borderRadius: '50%',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '1.2rem',
                      marginBottom: '1rem',
                      boxShadow: '0 4px 16px rgba(192,161,102,0.3)',
                      border: '3px solid #ffffff',
                      position: 'relative',
                      zIndex: 2
                    }}>
                      {idx + 1}
                    </div>

                    <span style={{
                      color: textDark,
                      fontWeight: 600,
                      fontSize: '1rem',
                      textAlign: 'center',
                      lineHeight: '1.4',
                      padding: '0 0.5rem'
                    }}>
                      {phase}
                    </span>
                  </div>

                  {idx < processPhases.length - 1 && (
                    <div style={{
                      flex: 1,
                      minWidth: '40px',
                      height: '2px',
                      background: 'linear-gradient(90deg, #c0a166, #d4b85c)',
                      marginTop: '25px',
                      position: 'relative',
                      opacity: 0.3
                    }}>
                      <div style={{
                        position: 'absolute',
                        right: '-4px',
                        top: '-3px',
                        width: '0',
                        height: '0',
                        borderTop: '4px solid transparent',
                        borderBottom: '4px solid transparent',
                        borderLeft: `6px solid ${sand}`
                      }}></div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div style={{
            marginTop: '2rem',
            padding: '1.5rem',
            background: '#ffffff',
            borderRadius: '12px',
            border: '1px solid #f0ece3',
            width: '100%',
            boxShadow: '0 4px 20px rgba(44,36,21,0.05)'
          }}>
            <p style={{
              color: textLight,
              fontSize: '1rem',
              lineHeight: '1.6',
              margin: 0,
              textAlign: 'center',
              fontWeight: 500
            }}>
              Each phase is tailored to your specific needs with clear communication and measurable outcomes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIWorkSection;