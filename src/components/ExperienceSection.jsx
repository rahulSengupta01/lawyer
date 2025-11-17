import React, { useState } from "react";
import "../index.css";
import experienceImg from "../assets/lawyer.jpg";

const timelineRoles = [
  {
    label: "Graphene Star Ltd (UK)",
    details: [
      "Strategic legal guidance, capital raising, IP protection, R&D contracts & negotiations.",
    ],
  },
  {
    label: "London UHNW Family Office",
    details: [
      "Restructuring of USD 2B+ wealth, litigation strategy, real estate development & charity formation.",
    ],
  },
  {
    label: "New York/Monaco UHNW Family Office",
    details: [
      "Management of USD 150M+ trust structures, cross-border contentious & non-contentious matters.",
    ],
  },
  {
    label: "Law Firms Associated With",
    details: [
      "Al Tamimi & Co, Taylor Wessing, Ogier, Walkers, Collas Crill, Mourant.",
      "Trained as a barrister at Wilberforce Chambers, 11 Stone Buildings & practised at Trinity Chambers.",
    ],
  },
];

const recentExperience = [
  "Advising multiple HNW families on trusts, foundations & protection structures.",
  "Wealth restructuring for a major Middle Eastern family with multi-jurisdictional tax/litigation issues.",
  "Structuring for a globally prominent individual with complex tax and political considerations.",
  "Advising UAE real estate leader on JV structuring for Dubai property development.",
  "Advisory to UAE Federal Government on Trusts Law and Family Business Law.",
  "Governance advisory for Saudi G20 ecological foundation.",
  "Legislative advisory to ADGM Registration Authority.",
];

const sand = "#c0a166";

const ExperienceSection = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        background: "#fcf9ef",
        padding: "4rem 0",
        fontFamily: "Inter, Poppins, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Mobile background image */}
      <div
        style={{
          display: "none",
        }}
        className="mobile-bg"
      ></div>

      <style>
        {`
        @media (max-width: 768px) {
          .layout-wrapper {
            flex-direction: column;
            gap: 2rem !important;
          }
          .left-col, .right-col {
            flex: 1 1 auto !important;
            width: 100% !important;
            padding: 0 !important;
          }
          .center-col {
            width: 100% !important;
            max-width: 100% !important;
            padding: 2rem 1.5rem !important;
          }
          .mobile-bg {
            display: block;
            width: 100%;
            height: 250px;
            background: url(${experienceImg}) center/cover no-repeat;
            border-radius: 16px;
            margin-bottom: 2rem;
          }
          .desktop-bg {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          .center-col h2 {
            font-size: 1.9rem !important;
          }
        }
      `}
      </style>

      {/* Desktop right-side background image */}
      <div
        className="desktop-bg"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "45%",
          background: `linear-gradient(135deg, rgba(192, 161, 102, 0.15) 0%, rgba(192, 161, 102, 0.05) 100%), url(${experienceImg}) center/cover no-repeat`,
          opacity: 0.85,
          borderTopLeftRadius: "30px",
          borderBottomLeftRadius: "30px",
        }}
      ></div>

      {/* Section Content */}
      <div
        className="layout-wrapper"
        style={{
          display: "flex",
          width: "90%",
          maxWidth: "1400px",
          margin: "0 auto",
          zIndex: 2,
          alignItems: "flex-start",
          gap: "3rem",
          position: "relative",
        }}
      >
        {/* LEFT COLUMN */}
        <div
          className="left-col"
          style={{
            flex: "0 0 380px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3
            style={{
              color: sand,
              fontWeight: 800,
              fontSize: "1.5rem",
              marginBottom: "2.5rem",
              textAlign: "left",
              position: "relative",
            }}
          >
            Career Timeline
          </h3>

          {timelineRoles.map((role, idx) => (
            <div
              key={role.label}
              style={{
                marginBottom: "1rem",
                borderRadius: "12px",
                background:
                  openDropdown === idx
                    ? "linear-gradient(135deg, #fffbf0 0%, #fef7e5 100%)"
                    : "#fff",
                boxShadow:
                  openDropdown === idx
                    ? "0 8px 32px rgba(192, 161, 102, 0.2)"
                    : "0 4px 20px rgba(192, 161, 102, 0.08)",
                border:
                  openDropdown === idx
                    ? `2px solid ${sand}`
                    : "2px solid #e8dfd1",
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
            >
              <div
                onClick={() => toggleDropdown(idx)}
                style={{
                  padding: "1.5rem",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: openDropdown === idx ? sand : "#554c3f",
                }}
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
                    transform:
                      openDropdown === idx
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    transition: "0.3s",
                    color: sand,
                  }}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>

              <div
                style={{
                  maxHeight: openDropdown === idx ? "200px" : "0",
                  opacity: openDropdown === idx ? 1 : 0,
                  padding: openDropdown === idx
                    ? "0 1.5rem 1.5rem"
                    : "0 1.5rem",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
              >
                <ul
                  style={{
                    color: "#665b4c",
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    paddingLeft: "20px",
                  }}
                >
                  {role.details.map((detail, i) => (
                    <li key={i} style={{ marginBottom: "0.5rem" }}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CENTER COLUMN */}
        <div
          className="center-col"
          style={{
            flex: "1 1 500px",
            background: "linear-gradient(135deg, #fff 0%, #fefcf5 100%)",
            borderRadius: "24px",
            padding: "3rem",
            boxShadow: "0 12px 50px rgba(192, 161, 102, 0.15)",
            border: "1px solid #f0e6d3",
            maxWidth: "580px",
            position: "relative",
          }}
        >
          <h2
            style={{
              color: sand,
              fontWeight: 800,
              fontSize: "2.4rem",
              marginBottom: "1rem",
            }}
          >
            Experience & Credentials
          </h2>

          {/* RECENT EXPERIENCE */}
          <div>
            <h4
              style={{
                color: sand,
                fontWeight: 700,
                fontSize: "1.3rem",
                marginBottom: "1rem",
              }}
            >
              Recent Experience
            </h4>
            <ul
              style={{
                color: "#48413a",
                fontSize: "1.05rem",
                lineHeight: "1.8",
                paddingLeft: "24px",
              }}
            >
              {recentExperience.map((exp, idx) => (
                <li key={idx} style={{ marginBottom: "0.8rem" }}>
                  {exp}
                </li>
              ))}
            </ul>
          </div>

          {/* PROFESSIONAL EXPERTISE */}
          <div>
            <h4
              style={{
                color: sand,
                fontWeight: 700,
                fontSize: "1.3rem",
                marginBottom: "1rem",
              }}
            >
              Professional Expertise
            </h4>
            <p
              style={{
                color: "#665b4c",
                fontSize: "1.05rem",
                lineHeight: "1.75",
              }}
            >
              Click on the career timeline items to explore detailed experience
              and accomplishments from each professional role.
            </p>
          </div>
        </div>

        {/* RIGHT SPACER (DESKTOP ONLY) */}
        <div
          className="right-col"
          style={{
            flex: "0 0 380px",
          }}
        ></div>
      </div>
    </section>
  );
};

export default ExperienceSection;
