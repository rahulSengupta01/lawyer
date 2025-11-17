import React, { useState } from 'react';
import '../index.css';

import trustImg from '../assets/trust.jpg';
import internationalImg from '../assets/international.jpg';
import taxationImg from '../assets/taxation.jpg';
import FamilyFinancialImg from '../assets/FamilyFinancial.jpg';
import LitigationManagementImg from '../assets/LitigationManagement.jpg';
import RealEstateImg from '../assets/RealEstate.jpg';
import GovernanceImg from '../assets/Governance.jpg';

const services = [
  {
    title: "Trusts, Foundations & Companies",
    img: trustImg,
    description: "Advising on and establishing structures for succession, asset protection & tax efficiency."
  },
  {
    title: "International Law & Cross-Border Structuring",
    img: internationalImg,
    description: "Guidance on UAE (DIFC/ADGM), Jersey, Guernsey, Cayman Islands, BVI, Singapore, UK & US laws."
  },
  {
    title: "Taxation & Multi-Jurisdictional Planning",
    img: taxationImg,
    description: "Strategies for tax mitigation across several jurisdictions."
  },
  {
    title: "Family Financial & Succession Planning",
    img: FamilyFinancialImg,
    description: "Designing long-term structures, charters & governance frameworks."
  },
  {
    title: "Litigation Management & Oversight",
    img: LitigationManagementImg,
    description: "Ensuring dispute matters are efficiently and strategically managed."
  },
  {
    title: "Real Estate & Commercial Structuring",
    img: RealEstateImg,
    description: "Supporting acquisitions, development projects & corporate transactions."
  },
  {
    title: "Directorship & Governance",
    img: GovernanceImg,
    description: "Serving as NED/SEO, foundation council member, guardian & fiduciary roles."
  }
];

const ServiceCard = ({ service }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="service-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0',
        background: 'none',
        boxShadow: 'none',
        marginBottom: '2.2rem',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '380px',
          height: '240px',
          overflow: 'hidden',
          borderRadius: '20px',
          cursor: 'pointer',
          marginBottom: '1.5rem',
          boxShadow: hover
            ? '0 12px 32px rgba(173, 148, 74, 0.25)'
            : '0 6px 20px rgba(173, 148, 74, 0.12)',
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transform: hover ? 'translateY(-8px)' : 'translateY(0)',
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={service.img}
          alt={service.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: hover ? 'scale(1.08)' : 'scale(1)',
            transition: 'transform 0.5s cubic-bezier(0.33, 1, 0.68, 1)',
            filter: hover ? 'brightness(0.85) contrast(1.1)' : 'brightness(1) contrast(1)'
          }}
        />
        
        {/* Enhanced gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(10,14,25,0) 0%, rgba(18,22,40,0.85) 100%)',
            zIndex: 1,
            opacity: hover ? 0.95 : 0.85,
            transition: 'opacity 0.4s ease',
          }}
        ></div>
        
        {/* Accent border effect */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '20px',
            border: hover ? '2px solid rgba(173, 148, 74, 0.4)' : '2px solid transparent',
            zIndex: 2,
            transition: 'border-color 0.3s ease',
          }}
        ></div>

        <div
          style={{
            position: 'absolute',
            left: '24px',
            bottom: '24px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            flexDirection: 'column',
            background: 'none',
            width: '85%',
            zIndex: 2,
          }}
        >
          <span
            style={{
              color: '#fff',
              fontSize: '1.4rem',
              fontWeight: '700',
              textAlign: 'left',
              position: 'relative',
              letterSpacing: '0.5px',
              marginBottom: '12px',
              textShadow: '0 2px 12px rgba(0,0,0,0.3)',
              lineHeight: '1.3',
            }}
          >
            {service.title}
            <span
              style={{
                display: 'block',
                width: hover ? '60px' : '0px',
                height: '3px',
                background: 'linear-gradient(90deg, #ad944a, #d4b85c)',
                margin: '12px 0 0 0',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                borderRadius: '2px',
                opacity: hover ? '1' : '0.8',
              }}
            ></span>
          </span>
        </div>

        {/* Hover icon indicator */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            background: 'rgba(173, 148, 74, 0.9)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            opacity: hover ? 1 : 0,
            transform: hover ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-45deg)',
            transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
      
      <div
        style={{
          fontSize: '1.1rem',
          color: '#665b4c',
          textAlign: 'center',
          lineHeight: '1.7',
          padding: '0 10px',
          maxWidth: '360px',
          fontWeight: '400',
          transition: 'all 0.3s ease',
          opacity: hover ? 1 : 0.9,
          transform: hover ? 'translateY(-2px)' : 'translateY(0)',
        }}
      >
        {service.description}
      </div>
    </div>
  );
};

const ServiceSection = () => (
  <section
    style={{
      background: 'linear-gradient(135deg, #f7ecd3 0%, #fcf9ef 50%, #f5e8c8 100%)',
      padding: '5rem 5vw',
      fontFamily: 'Inter, Poppins, sans-serif',
      marginBottom: '3rem',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Background decorative elements */}
    <div
      style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(173,148,74,0.08) 0%, rgba(173,148,74,0) 70%)',
        borderRadius: '50%',
      }}
    ></div>
    <div
      style={{
        position: 'absolute',
        bottom: '-150px',
        left: '-150px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(173,148,74,0.05) 0%, rgba(173,148,74,0) 70%)',
        borderRadius: '50%',
      }}
    ></div>

    <div style={{ position: 'relative', zIndex: 1 }}>
      <h2
        style={{
          fontSize: '2.5rem',
          marginBottom: '1rem',
          fontWeight: '800',
          color: '#ad944a',
          textAlign: 'center',
          letterSpacing: '-0.5px',
          textShadow: '0 2px 4px rgba(0,0,0,0.05)',
        }}
      >
        What I Do — Services
      </h2>
      
      <div
        style={{
          width: '80px',
          height: '4px',
          background: 'linear-gradient(90deg, #ad944a, #d4b85c)',
          margin: '0 auto 3rem auto',
          borderRadius: '2px',
          boxShadow: '0 2px 8px rgba(173, 148, 74, 0.2)',
        }}
      ></div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2.5rem',
          maxWidth: '1300px',
          margin: '0 auto',
        }}
      >
        {services.map((service, idx) => (
          <ServiceCard service={service} key={service.title} />
        ))}
      </div>
    </div>
  </section>
);

export default ServiceSection;