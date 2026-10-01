import React from 'react';
import { Trophy, Award, FileText, Users, Sparkles, Medal } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      badge: '1st Prize Winner',
      title: 'Reverse Engineering',
      event: 'YI-YUVA Club Competition',
      year: 'Award of Excellence',
      icon: Trophy,
      accent: 'var(--accent-amber)',
      glow: 'rgba(245, 158, 11, 0.25)',
      description: 'Awarded First Prize in technical reverse engineering competition, analyzing binaries, logic flows, and hardware/software breakdown under timed competitive conditions.',
    },
    {
      badge: 'Paper Presentation',
      title: 'Anti-key logger',
      event: 'Karpagam College of Engineering, Coimbatore',
      year: '2023',
      icon: Medal,
      accent: 'var(--accent-cyan)',
      glow: 'rgba(56, 189, 248, 0.25)',
      description: 'Authored and presented technical research paper on anti-keylogger defense mechanisms, keyboard hook detection, and memory isolation at national symposium level.',
    },
    {
      badge: 'Paper Presentation',
      title: 'Anthropomorphism',
      event: 'Bannari Amman Institute of Technology, Sathyamangalam',
      year: '2023',
      icon: Award,
      accent: 'var(--accent-purple)',
      glow: 'rgba(139, 92, 246, 0.25)',
      description: 'Delivered technical paper presentation exploring human-like cognitive models in computational systems, AI interfaces, and psychological factors in interaction design.',
    },
    {
      badge: 'Active Collegiate Member',
      title: 'Hackathon Club',
      event: 'Member — Hackathon Club',
      year: 'Active Membership',
      icon: Users,
      accent: 'var(--accent-emerald)',
      glow: 'rgba(16, 185, 129, 0.25)',
      description: 'Active participant in collegiate hackathons, collaborating in high-tempo prototype development, system architecture sprints, and technical problem solving.',
    },
  ];

  return (
    <section id="achievements" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Trophy size={14} />
            <span>Honors & Recognitions</span>
          </div>
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">
            Competitive honors, research paper presentations at accredited engineering institutions, and active technical club membership.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '24px',
          }}
          className="achievements-grid"
        >
          {achievements.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '18px',
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: `${item.accent}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `1px solid ${item.accent}33`,
                        boxShadow: `0 0 16px ${item.glow}`,
                      }}
                    >
                      <IconComp size={24} color={item.accent} />
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        color: item.accent,
                        background: `${item.accent}15`,
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-full)',
                        border: `1px solid ${item.accent}33`,
                        fontWeight: 600,
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '8px',
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: 'var(--accent-cyan)',
                      marginBottom: '14px',
                      lineHeight: 1.4,
                    }}
                  >
                    {item.event}
                  </div>

                  <p
                    style={{
                      fontSize: '0.86rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '20px',
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: '14px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.76rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  <span>Verification</span>
                  <span style={{ color: '#cbd5e1' }}>{item.year}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
