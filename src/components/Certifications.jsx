import React from 'react';
import { Award, Presentation, BookOpen, CheckCircle, Sparkles, Building, Calendar } from 'lucide-react';

export default function Certifications() {
  const items = [
    {
      type: 'Technical Certification',
      title: 'NPTEL-certified Java Course',
      organization: 'National Programme on Technology Enhanced Learning (NPTEL)',
      badge: 'Certified',
      accent: 'var(--accent-indigo)',
      icon: Award,
      description: 'Comprehensive certification in Core Java concepts, Object-Oriented paradigms, exception handling, data structures, and multithreading.',
      highlight: 'National Examination Credential',
    },
    {
      type: 'International Conference Paper',
      title: 'Presented: “Real-Time Implementation of Facial Recognition”',
      organization: 'Multidisciplinary Perspectives Towards Sustainable Living — 2024',
      badge: 'Research Paper',
      accent: 'var(--accent-cyan)',
      icon: Presentation,
      description: 'Presented practical research paper examining computer vision algorithms, real-time facial feature extraction, and deployment considerations for automated security authentication.',
      highlight: 'International Conference (2024)',
    },
    {
      type: 'Technical Symposium',
      title: 'Technical Symposium Participation',
      organization: 'Madras Institute of Technology (MIT), Madras',
      badge: 'Academic Immersion',
      accent: 'var(--accent-purple)',
      icon: BookOpen,
      description: 'Attended advanced technical symposium engaging with leading researchers and students on emerging computing frontiers and engineering innovations.',
      highlight: 'MIT Campus, Madras',
    },
  ];

  return (
    <section id="certifications" className="section" style={{ background: 'linear-gradient(180deg, rgba(13, 17, 29, 0.4) 0%, transparent 100%)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Credentials & Research</span>
          </div>
          <h2 className="section-title">Certifications & Exposure</h2>
          <p className="section-subtitle">
            Formal technical certifications, published research presentation, and premier institute symposium participation.
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
            gap: '24px',
          }}
        >
          {items.map((item, idx) => {
            const ItemIcon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div>
                  {/* Top Type Pill & Icon */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '20px',
                    }}
                  >
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        background: `${item.accent}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `1px solid ${item.accent}33`,
                      }}
                    >
                      <ItemIcon size={22} color={item.accent} />
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        color: item.accent,
                        background: `${item.accent}12`,
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-full)',
                        border: `1px solid ${item.accent}33`,
                        fontWeight: 600,
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.05em',
                      marginBottom: '6px',
                    }}
                  >
                    {item.type}
                  </div>

                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      lineHeight: 1.35,
                      marginBottom: '10px',
                    }}
                  >
                    {item.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--accent-cyan)',
                      marginBottom: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <Building size={14} style={{ flexShrink: 0 }} />
                    <span>{item.organization}</span>
                  </div>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '24px',
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: '#cbd5e1',
                    }}
                  >
                    {item.highlight}
                  </span>
                  <CheckCircle size={15} color="var(--accent-emerald)" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
