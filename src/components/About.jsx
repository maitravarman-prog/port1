import React from 'react';
import { User, GraduationCap, Briefcase, MapPin, Languages, CheckCircle2, Sparkles } from 'lucide-react';

export default function About() {
  const infoCards = [
    {
      icon: GraduationCap,
      label: 'Education',
      value: 'B.Tech Information Technology',
      sub: 'Dr. N.G.P. Institute of Tech, 2022–2026',
      accent: 'var(--accent-indigo)',
      bgGlow: 'rgba(99, 102, 241, 0.1)',
    },
    {
      icon: Briefcase,
      label: 'Experience',
      value: '5 Months Professional Exp.',
      sub: 'Team Coordination & Sales Operations',
      accent: 'var(--accent-cyan)',
      bgGlow: 'rgba(56, 189, 248, 0.1)',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Coimbatore, Tamil Nadu',
      sub: 'Open to Relocation & Hybrid Work',
      accent: 'var(--accent-purple)',
      bgGlow: 'rgba(139, 92, 246, 0.1)',
    },
    {
      icon: Languages,
      label: 'Languages',
      value: 'English & Tamil',
      sub: 'Professional & Native Proficiency',
      accent: 'var(--accent-emerald)',
      bgGlow: 'rgba(16, 185, 129, 0.1)',
    },
  ];

  const highlights = [
    'Cross-functional Team Coordination & Sprint Delivery',
    'Customer-facing Technical & Product Solution Advisory',
    'Hands-on Machine Learning & IoT Embedded Systems',
    'Cybersecurity Principles, Threat Mitigation & Scanning',
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <User size={14} />
            <span>Profile Overview</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Bridging technical engineering competence with real-world operational execution and cross-functional leadership.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.95fr',
            gap: '40px',
            alignItems: 'stretch',
          }}
          className="about-grid"
        >
          {/* Left Column: Narrative Card */}
          <div
            className="glass-card"
            style={{
              padding: '38px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '18px',
                  color: 'var(--accent-cyan)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                }}
              >
                <Sparkles size={16} />
                <span>PROFESSIONAL SUMMARY</span>
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1.35rem, 2vw, 1.7rem)',
                  marginBottom: '20px',
                  lineHeight: 1.35,
                }}
              >
                Driving Technological Solutions with Process Execution & Collaborative Leadership
              </h3>

              <p
                style={{
                  fontSize: '1.02rem',
                  lineHeight: 1.8,
                  color: 'var(--text-secondary)',
                  marginBottom: '28px',
                }}
              >
                “Detail-oriented Information Technology graduate with a strong interest in technology,
                problem solving, teamwork, and process execution. I have experience working in team
                coordination and product sales operations, along with technical exposure to Java, Python,
                HTML, CSS, cybersecurity, machine learning, and IoT.”
              </p>

              {/* Key Bullet Highlights */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '12px',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      fontSize: '0.92rem',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                marginTop: '32px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                flexWrap: 'wrap',
              }}
            >
              <span className="chip chip-cyan">Adaptive Mindset</span>
              <span className="chip chip-purple">Agile Workflows</span>
              <span className="chip">Client Relationship Focus</span>
            </div>
          </div>

          {/* Right Column: 4 Information Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
            }}
            className="info-cards-grid"
          >
            {infoCards.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '28px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        background: card.bgGlow,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '18px',
                        border: `1px solid ${card.accent}33`,
                      }}
                    >
                      <IconComponent size={22} color={card.accent} />
                    </div>

                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        textTransform: 'uppercase',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.06em',
                        marginBottom: '6px',
                      }}
                    >
                      {card.label}
                    </div>

                    <div
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '8px',
                        lineHeight: 1.3,
                      }}
                    >
                      {card.value}
                    </div>
                  </div>

                  <div
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {card.sub}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .info-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
