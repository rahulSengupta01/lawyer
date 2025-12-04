import React, { useState } from "react";
import "../index.css";

const timelineRoles = [
  {
    label: "London UHNW Family Office:",
    details: [
      "Restructuring of USD 2Billon+ wealth, succession and tax planning, trust /company restructuring, real estate development and litigation management and strategy, charity formation.",
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
      "Strategic legal guidance, capital raising, IP protection, R amd D contracts & negotiations.",
    ],
  },
  {
    label: "Previous Law:",
    details: [
      "Stuart has worked at or provided consultancy services to the following law firms",
      "Al Tamimi & Co, (Dubai), Taylor Wessing(London), Ogier(Jersey), Walkers(London/Cayman), Collas Crill(Jersey), Mourant(Guernsey).",
      "Trained as a barrister at Wilberforce Chambers, 11 Stone Buildings (London) & practised atTrinity Chambers(Newcastle Upon Tyne).",
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
      {/* Background decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "linear-gradient(135deg, rgba(192, 161, 102, 0.05) 0%, rgba(192, 161, 102, 0.1) 100%)",
          zIndex: 0,
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          right: "-50px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background:
            "linear-gradient(135deg, rgba(192, 161, 102, 0.03) 0%, rgba(192, 161, 102, 0.08) 100%)",
          zIndex: 0,
        }}
      ></div>

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

      {/* MAIN TITLE (TOP OF COMPONENT) */}
<div
  style={{
    width: "90%",
    maxWidth: "1400px",
    margin: "0 auto 2.5rem auto",
    position: "relative",
    zIndex: 2,
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


      {/* TWO COLUMNS UNDER THE SAME HEADER */}
      <div
        className="layout-wrapper"
        style={{
          display: "flex",
          width: "90%",
          maxWidth: "1400px",
          margin: "0 auto",
          zIndex: 2,
          alignItems: "flex-start",
          gap: "4rem",
          position: "relative",
        }}
      >
        {/* LEFT COLUMN - Recent Experience */}
        <div
          className="left-content"
          style={{
            flex: "1 1 600px",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            zIndex: 3,
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #fefcf5 100%)",
              borderRadius: "24px",
              padding: "3rem",
              boxShadow: `
                0 20px 60px rgba(192, 161, 102, 0.2),
                0 0 0 1px rgba(255, 255, 255, 0.8)
              `,
              border: "1px solid #f0e6d3",
              position: "relative",
              zIndex: 3,
              overflow: "hidden",
            }}
          >
            {/* Subtle corner accent */}
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "120px",
                height: "120px",
                background:
                  "linear-gradient(135deg, rgba(192, 161, 102, 0.03) 50%, transparent 50%)",
                borderRadius: "24px 0 0 0",
              }}
            ></div>

            {/* LEFT SUBTITLE */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  width: "4px",
                  height: "24px",
                  background: "linear-gradient(to bottom, #c0a166, #d4b85c)",
                  borderRadius: "2px",
                  marginRight: "12px",
                }}
              ></div>
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
                color: "#48413a",
                fontSize: "1.08rem",
                lineHeight: "1.75",
                paddingLeft: "0",
                margin: 0,
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
                      left: "0",
                      top: "12px",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: sand,
                      opacity: 0.7,
                    }}
                  ></div>
                  {exp}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN - Other Career Highlights (timeline) */}
        <div
          className="right-content"
          style={{
            flex: "0 0 500px",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            zIndex: 3,
          }}
        >
          <div
            className="timeline-section"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #fefcf5 100%)",
              borderRadius: "24px",
              padding: "2.5rem",
              boxShadow: `
                0 15px 40px rgba(192, 161, 102, 0.15),
                0 0 0 1px rgba(255, 255, 255, 0.8)
              `,
              border: "1px solid #f0e6d3",
              height: "fit-content",
            }}
          >
            <div style={{ position: "relative", marginBottom: "2.5rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "0.75rem",
                }}
              >
                <div
                  style={{
                    width: "4px",
                    height: "24px",
                    background:
                      "linear-gradient(90deg, #c0a166, #d4b85c)",
                    borderRadius: "2px",
                    marginRight: "12px",
                  }}
                ></div>
                <h3
                  style={{
                    color: sand,
                    fontWeight: 800,
                    fontSize: "1.6rem",
                    margin: 0,
                    textAlign: "left",
                  }}
                >
                  Other Career Highlights
                </h3>
              </div>
              <div
                style={{
                  width: "60px",
                  height: "4px",
                  background: "linear-gradient(90deg, #c0a166, #d4b85c)",
                  borderRadius: "2px",
                  marginTop: "0.5rem",
                }}
              ></div>
            </div>

            <div style={{ position: "relative" }}>
              {/* Timeline line */}
              <div
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "0",
                  bottom: "0",
                  width: "2px",
                  background:
                    "linear-gradient(to bottom, #c0a166, #d4b85c, #e8dfd1)",
                  zIndex: 1,
                }}
              ></div>

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
                        ? "0 12px 40px rgba(192, 161, 102, 0.25)"
                        : "0 6px 25px rgba(192, 161, 102, 0.12)",
                    border:
                      openDropdown === idx
                        ? `2px solid ${sand}`
                        : "2px solid #f0e6d3",
                    overflow: "hidden",
                    transition:
                      "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    position: "relative",
                    zIndex: 2,
                    transform:
                      openDropdown === idx ? "translateX(8px)" : "none",
                  }}
                >
                  {/* Timeline dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: "14px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: openDropdown === idx ? sand : "#e8dfd1",
                      border: `2px solid ${
                        openDropdown === idx ? sand : "#ffffff"
                      }`,
                      zIndex: 3,
                      transition: "all 0.3s ease",
                    }}
                  ></div>

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
                      background: "transparent",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <span style={{ fontSize: "1.1rem", lineHeight: "1.4" }}>
                      {role.label}
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      style={{
                        transform:
                          openDropdown === idx
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition:
                          "0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        color: sand,
                        flexShrink: 0,
                      }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>

                  <div
                    style={{
                      maxHeight: openDropdown === idx ? "300px" : "0",
                      opacity: openDropdown === idx ? 1 : 0,
                      padding:
                        openDropdown === idx
                          ? "0 1.5rem 1.5rem 2.8rem"
                          : "0 1.5rem",
                      overflow: "hidden",
                      transition:
                        "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                  >
                    <ul
                      style={{
                        listStyle: "none",
                        color: "#665b4c",
                        fontSize: "1rem",
                        lineHeight: "1.6",
                        paddingLeft: "0",
                        margin: 0,
                      }}
                    >
                      {role.details.map((detail, i) => (
                        <li
                          key={i}
                          style={{
                            marginBottom: "0.75rem",
                            paddingLeft: "0",
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              left: "-12px",
                              top: "8px",
                              width: "6px",
                              height: "6px",
                              borderRadius: "50%",
                              background: sand,
                              opacity: 0.6,
                            }}
                          ></div>
                          {detail}
                        </li>
                      ))}
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
