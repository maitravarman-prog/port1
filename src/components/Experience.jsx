import React, { useState } from 'react';
import {
  Briefcase,
  Calendar,
  ChevronDown,
  ChevronUp,
  Users,
  TrendingUp,
  CheckCircle2,
  Clock,
  Building2,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('coordinator'); // 'coordinator' | 'sales' | 'both'
  const [isExpanded, setIsExpanded] = useState(true);

  const teamCoordinatorTasks = [
    'Coordinated day-to-day team activities across distributed functional units.',
    'Assigned tasks, set sprint priorities, and systematically tracked progress milestones.',
    'Followed up proactively to ensure timely completion of critical project deliverables.',
    'Organized team schedules, stakeholder syncs, and executive agenda meetings.',
    'Supported daily stand-ups, eliminating operational bottlenecks for engineers and staff.',
    'Maintained comprehensive reports on overall team performance and work execution status.',
    'Supported onboarding and mentorship guidance for incoming team members.',
  ];

  const salesAdvisorTasks = [
    'Advised prospective and enterprise customers on Landeed’s proprietary product offerings.',
    'Thoroughly understood specific customer requirements and pain-points.',
    'Recommended tailored product solutions aligning with client business objectives.',
    'Handled multi-channel customer queries, troubleshooting, and post-consultation follow-ups.',
    'Supported the end-to-end sales cycle from first contact through contract closure.',
    'Clearly articulated complex product features, transparent pricing models, and verification workflows.',
    'Helped establish long-term customer trust and significantly improve qualified conversion rates.',
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Work History</span>
          </div>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Demonstrated capability in operational agility, team leadership, customer-facing solution advisory, and delivery excellence.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Vertical timeline line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '28px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--accent-indigo) 0%, var(--accent-cyan) 60%, transparent 100%)',
              zIndex: 1,
            }}
            className="timeline-line"
          />

          {/* Timeline Item: Landeed */}
          <div
            style={{
              display: 'flex',
              gap: '28px',
              position: 'relative',
              zIndex: 2,
            }}
            className="timeline-item"
          >
            {/* Timeline Node Icon */}
            <div
              style={{
                width: '58px',
                height: '58px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)',
                border: '2px solid var(--accent-cyan)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 0 20px rgba(56, 189, 248, 0.35)',
              }}
              className="timeline-node"
            >
              <Building2 size={24} color="var(--accent-cyan)" />
            </div>

            {/* Experience Card */}
            <div
              className="glass-card"
              style={{
                flex: 1,
                padding: '36px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'rgba(16, 21, 38, 0.75)',
              }}
            >
              {/* Header: Company & Duration */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '16px',
                  marginBottom: '20px',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <h3
                      style={{
                        fontSize: 'clamp(1.4rem, 2.2vw, 1.8rem)',
                        fontWeight: 800,
                        color: '#ffffff',
                      }}
                    >
                      Landeed
                    </h3>
                    <span className="chip chip-cyan" style={{ fontSize: '0.74rem' }}>
                      Full-Time Experience
                    </span>
                  </div>

                  <h4
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: 'var(--accent-cyan)',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    Team Coordinator & Sales Advisor – Product
                  </h4>
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    color: '#cbd5e1',
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <Calendar size={14} color="var(--accent-indigo)" />
                  <span>April 2026 – August 2026</span>
                </div>
              </div>

              {/* Role Switcher Tabs */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '24px',
                  padding: '5px',
                  background: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: '12px',
                  width: 'fit-content',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <button
                  onClick={() => setActiveTab('coordinator')}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease',
                    background: activeTab === 'coordinator' ? 'var(--accent-indigo)' : 'transparent',
                    color: activeTab === 'coordinator' ? '#ffffff' : 'var(--text-secondary)',
                  }}
                >
                  <Users size={15} />
                  <span>Team Coordinator</span>
                </button>

                <button
                  onClick={() => setActiveTab('sales')}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease',
                    background: activeTab === 'sales' ? 'var(--accent-cyan)' : 'transparent',
                    color: activeTab === 'sales' ? '#090d16' : 'var(--text-secondary)',
                  }}
                >
                  <TrendingUp size={15} />
                  <span>Sales Advisor – Product</span>
                </button>

                <button
                  onClick={() => setActiveTab('both')}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    transition: 'all 0.2s ease',
                    background: activeTab === 'both' ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                    color: activeTab === 'both' ? '#ffffff' : 'var(--text-muted)',
                  }}
                >
                  <span>All Responsibilities</span>
                </button>
              </div>

              {/* Expandable Responsibility Lists */}
              {isExpanded && (
                <div style={{ animation: 'fadeIn 0.3s ease' }}>
                  {/* Team Coordinator Breakdown */}
                  {(activeTab === 'coordinator' || activeTab === 'both') && (
                    <div style={{ marginBottom: activeTab === 'both' ? '28px' : '0' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          color: '#818cf8',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          marginBottom: '14px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        <Users size={15} />
                        <span>Team Coordinator Execution</span>
                      </div>

                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr',
                          gap: '11px',
                        }}
                      >
                        {teamCoordinatorTasks.map((task, idx) => (
                          <div
                            key={idx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '12px',
                              fontSize: '0.92rem',
                              lineHeight: 1.6,
                              color: 'var(--text-secondary)',
                            }}
                          >
                            <CheckCircle2
                              size={16}
                              color="var(--accent-indigo)"
                              style={{ flexShrink: 0, marginTop: '3px' }}
                            />
                            <span>{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Sales Advisor Breakdown */}
                  {(activeTab === 'sales' || activeTab === 'both') && (
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          color: 'var(--accent-cyan)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          marginBottom: '14px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        <TrendingUp size={15} />
                        <span>Product Sales Operations & Advisory</span>
                      </div>

                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr',
                          gap: '11px',
                        }}
                      >
                        {salesAdvisorTasks.map((task, idx) => (
                          <div
                            key={idx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '12px',
                              fontSize: '0.92rem',
                              lineHeight: 1.6,
                              color: 'var(--text-secondary)',
                            }}
                          >
                            <CheckCircle2
                              size={16}
                              color="var(--accent-cyan)"
                              style={{ flexShrink: 0, marginTop: '3px' }}
                            />
                            <span>{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Card Footer: Collapse/Expand toggle & Key Outcomes */}
              <div
                style={{
                  marginTop: '26px',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '14px',
                }}
              >
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="chip">Sprint Coordination</span>
                  <span className="chip">Customer Advisory</span>
                  <span className="chip">Pipeline Support</span>
                </div>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--accent-cyan)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  <span>{isExpanded ? 'Collapse View' : 'Expand Full Details'}</span>
                  {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line {
            display: none !important;
          }
          .timeline-item {
            flex-direction: column !important;
            gap: 16px !important;
          }
          .timeline-node {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
