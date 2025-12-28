import React, { useState } from "react";
import "../index.css";

const timelineRoles = [
  {
    label: "London UHNW Family Office:",
    details: [
      "Restructuring of USD 2Billion+ wealth, succession and tax planning, trust /company restructuring, real estate development , litigation management and strategy, charity formation.",
    ],
  },
  {
    label: "New York/Monaco HNW Family Office:",
    details: [
      "Management of USD 200Million+ trust structures, international tax management, cross-border contentious & non-contentious matters.",
    ],
  },
  {
    label: "Graphene Star Ltd (UK):",
    details: [
      "Strategic legal guidance, capital raising, IP protection, R&D contracts & negotiations.",
    ],
  },
  {
    label: "Previous Law Firms/Chambers:",
    details: [
      "Stuart has worked at or provided consultancy services to the following law firms:",
      [
        "Al Tamimi & Co, (Dubai), Taylor Wessing(London), Ogier(Jersey), Walkers(London/Cayman), Collas Crill(Jersey), Mourant(Guernsey).",
        "Trained as a barrister at Wilberforce Chambers, 11 Stone Buildings (London) and Practised at Trinity Chambers (Newcastle Upon Tyne)",
      ],
    ],
  },
];

const recentExperience = [
  "Advising multiple HNW families with international asset portfolios on trusts, foundations & asset protection structures.",
  "Wealth restructuring for a major Middle Eastern family with multi-jurisdictional tax/litigation issues.",
  "Structuring for a globally prominent individual with complex tax and political considerations.",
  "Advising UAE real estate leader on JV structuring for Dubai property development.",
  "Advising UAE Federal Government on Trusts Law and Family Business Law.",
  "Advising to major UAE family on restructuring of UK property portfolio.",
  "Governance advice for Saudi G20 ecological foundation.",
  "Legislative advice to ADGM Registration Authority.",
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
        background: "linear-gradient(135deg, #fcf9ef 0%, #f8f4e8 100%)",
        padding: "5rem 0",
        fontFamily: "Inter, Poppins, serif",
        overflow: "hidden",
      }}
    >
      <style>
        {`
          @media (max-width: 768px) {
            .layout-wrapper {
              flex-direction: column;
              gap: 2rem !important;
            }
            .left-content, .right-content {
              width: 100% !important;
              padding: 0 !important;
            }
          }
          @media (max-width: 480px) {
            .experience-main-title {
              font-size: 1.9rem !important;
            }
          }
        `}
      </style>

      {/* MAIN TITLE */}
      <div
        style={{
          width: "90%",
          maxWidth: "1400px",
          margin: "0 auto 2.5rem auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2
          className="experience-main-title"
          style={{
            color: sand,
            fontWeight: 800,
            fontSize: "2.6rem",
            margin: 0,
            letterSpacing: "-0.5px",
            lineHeight: "1.2",
            textAlign: "center",
          }}
        >
          Experience &amp; Credentials
        </h2>
      </div>

      {/* TWO COLUMNS */}
      <div
        className="layout-wrapper"
        style={{
          display: "flex",
          width: "90%",
          maxWidth: "1400px",
          margin: "0 auto",
          gap: "4rem",
        }}
      >
        {/* LEFT COLUMN */}
        <div className="left-content" style={{ flex: "1 1 600px" }}>
          <div
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #fefcf5 100%)",
              borderRadius: "24px",
              padding: "3rem",
              boxShadow:
                "0 20px 60px rgba(192, 161, 102, 0.2), 0 0 0 1px rgba(255,255,255,0.8)",
              border: "1px solid #f0e6d3",
            }}
          >
            {/* LEFT HEADER */}
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
<h3
  style={{
    color: sand,
    fontWeight: 700,
    fontSize: "1.4rem",
    margin: 0,
  }}
>
  Recent Experience
</h3>

            </div>

            <ul
              style={{
                listStyle: "none",
                paddingLeft: 0,
                margin: 0,
                color: "#48413a",
                fontSize: "1.08rem",
                lineHeight: "1.75",
              }}
            >
              {recentExperience.map((exp, idx) => (
                <li
                  key={idx}
                  style={{
                    marginBottom: "1rem",
                    paddingLeft: "1.5rem",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "12px",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: sand,
                      opacity: 0.7,
                    }}
                  />
                  {exp}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="right-content" style={{ flex: "0 0 500px" }}>
          <div
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #fefcf5 100%)",
              borderRadius: "24px",
              padding: "2.5rem",
              boxShadow:
                "0 15px 40px rgba(192,161,102,0.15), 0 0 0 1px rgba(255,255,255,0.8)",
              border: "1px solid #f0e6d3",
            }}
          >
            {/* RIGHT HEADER */}
            <div style={{ marginBottom: "2.2rem" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
<h3
  style={{
    color: sand,
    fontWeight: 800,
    fontSize: "1.6rem",
    margin: 0,
  }}
>
  Other Career Highlights
</h3>

              </div>
            </div>

            <div style={{ position: "relative" }}>
              {timelineRoles.map((role, idx) => (
                <div
                  key={role.label}
                  style={{
                    marginBottom: "1.5rem",
                    borderRadius: "16px",
                    background:
                      openDropdown === idx
                        ? "linear-gradient(135deg, #fffbf0 0%, #fef7e5 100%)"
                        : "#ffffff",
                    boxShadow:
                      openDropdown === idx
                        ? "0 12px 40px rgba(192,161,102,0.25)"
                        : "0 6px 25px rgba(192,161,102,0.12)",
                    border:
                      openDropdown === idx
                        ? `2px solid ${sand}`
                        : "2px solid #f0e6d3",
                    transition: "all 0.3s ease",
                  }}
                >
                  {/* Dropdown Header */}
                  <div
                    onClick={() => toggleDropdown(idx)}
                    style={{
                      padding: "1.5rem 1.5rem 1.5rem 2.8rem",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      color: openDropdown === idx ? sand : "#554c3f",
                      fontWeight: openDropdown === idx ? 700 : 600,
                    }}
                  >
                    <span style={{ fontSize: "1.1rem" }}>{role.label}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      style={{
                        transform: openDropdown === idx ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "0.4s ease",
                        color: sand,
                      }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>

                  {/* Dropdown Content */}
                  <div
                    style={{
                      maxHeight: openDropdown === idx ? "500px" : "0",
                      opacity: openDropdown === idx ? 1 : 0,
                      padding:
                        openDropdown === idx ? "0 1.5rem 1.5rem 2.8rem" : "0 1.5rem",
                      overflow: "hidden",
                      transition: "all 0.4s ease",
                    }}
                  >
                    <ul
                      style={{
                        listStyle: "none",
                        paddingLeft: 0,
                        margin: 0,
                        color: "#665b4c",
                        fontSize: "1rem",
                        lineHeight: "1.6",
                      }}
                    >
                      {role.details.map((detail, i) => {
                        if (Array.isArray(detail)) {
                          return (
                            <ul
                              key={i}
                              style={{
                                listStyle: "disc",
                                paddingLeft: "1.5rem",
                                marginTop: "0.5rem",
                              }}
                            >
                              {detail.map((sub, j) => (
                                <li key={j} style={{ marginBottom: "0.5rem" }}>
                                  {sub}
                                </li>
                              ))}
                            </ul>
                          );
                        }

                        return (
                          <li key={i} style={{ marginBottom: "0.75rem" }}>
                            {detail}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
