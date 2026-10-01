import React from 'react';
import { GraduationCap, Calendar, Award, MapPin, School, BookOpen } from 'lucide-react';

export default function Education() {
  const educationHistory = [
    {
      degree: 'B.Tech Information Technology',
      institution: 'Dr. N.G.P. Institute of Technology',
      location: 'Coimbatore, Tamil Nadu',
      period: '2022 – 2026',
      grade: 'CGPA: 7.1',
      badge: 'Undergraduate Degree',
      accent: 'var(--accent-indigo)',
      icon: GraduationCap,
      details: 'Comprehensive study of Information Technology, Data Structures, Algorithms, Software Engineering, Web Development, Machine Learning, and Embedded IoT systems.',
      isCurrent: true,
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Sri Vidhya Mandir Matriculation Higher Secondary School',
      location: 'Dharmapuri, Tamil Nadu',
      period: '2022',
      grade: 'Percentage: 66.3%',
      badge: 'Senior Secondary (12th)',
      accent: 'var(--accent-cyan)',
      icon: School,
      details: 'Focused on foundational Mathematics, Physics, Chemistry, and Computer Science preparatory coursework.',
      isCurrent: false,
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'Sri Vidhya Mandir Matriculation Higher Secondary School',
      location: 'Dharmapuri, Tamil Nadu',
      period: '2020',
      grade: 'Percentage: 84.4%',
      badge: 'Secondary (10th)',
      accent: 'var(--accent-purple)',
      icon: BookOpen,
      details: 'Strong scholastic achievement with foundational science, analytical arithmetic, and linguistic skills.',
      isCurrent: false,
    },
  ];

  return (
    <section id="education" className="section" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(13, 17, 29, 0.4) 100%)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Formal scholastic journey and engineering degree progression in Information Technology.
          </p>
        </div>

        {/* Education Timeline */}
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Vertical line connecting entries */}
          <div
            style={{
              position: 'absolute',
              top: '24px',
              bottom: '24px',
              left: '27px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--accent-indigo) 0%, var(--accent-cyan) 50%, var(--accent-purple) 100%)',
              zIndex: 1,
            }}
            className="edu-timeline-line"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {educationHistory.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    gap: '26px',
                    position: 'relative',
                    zIndex: 2,
                  }}
                  className="edu-item"
                >
                  {/* Timeline Node Icon */}
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, #131728 0%, #0a0d18 100%)',
                      border: `2px solid ${item.accent}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: `0 0 20px ${item.accent}33`,
                    }}
                    className="edu-node"
                  >
                    <ItemIcon size={24} color={item.accent} />
                  </div>

                  {/* Content Card */}
                  <div
                    className="glass-card"
                    style={{
                      flex: 1,
                      padding: '30px',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '12px',
                        marginBottom: '14px',
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.74rem',
                              color: item.accent,
                              background: `${item.accent}15`,
                              padding: '3px 10px',
                              borderRadius: 'var(--radius-full)',
                              border: `1px solid ${item.accent}30`,
                              fontWeight: 600,
                            }}
                          >
                            {item.badge}
                          </span>
                          {item.isCurrent && (
                            <span className="chip chip-emerald" style={{ fontSize: '0.72rem' }}>
                              Completed 2026
                            </span>
                          )}
                        </div>

                        <h3
                          style={{
                            fontSize: 'clamp(1.25rem, 2vw, 1.55rem)',
                            fontWeight: 700,
                            color: '#ffffff',
                          }}
                        >
                          {item.degree}
                        </h3>
                      </div>

                      {/* Period Badge */}
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.82rem',
                          color: '#cbd5e1',
                          background: 'rgba(255, 255, 255, 0.05)',
                          padding: '5px 12px',
                          borderRadius: '8px',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                        }}
                      >
                        <Calendar size={13} color="var(--accent-cyan)" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '8px',
                        marginBottom: '16px',
                      }}
                    >
                      <div style={{ fontSize: '0.96rem', fontWeight: 600, color: 'var(--accent-cyan)' }}>
                        {item.institution}
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.8rem',
                          color: 'var(--text-muted)',
                        }}
                      >
                        <MapPin size={13} />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        marginBottom: '18px',
                      }}
                    >
                      {item.details}
                    </p>

                    {/* Grade Metric Highlight */}
                    <div
                      style={{
                        paddingTop: '14px',
                        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        gap: '12px',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.82rem',
                          color: 'var(--text-muted)',
                        }}
                      >
                        Academic Standing:
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.95rem',
                          fontWeight: 700,
                          color: '#ffffff',
                          background: 'rgba(255, 255, 255, 0.06)',
                          padding: '4px 12px',
                          borderRadius: '6px',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                      >
                        {item.grade}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .edu-timeline-line {
            display: none !important;
          }
          .edu-item {
            flex-direction: column !important;
            gap: 12px !important;
          }
          .edu-node {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
