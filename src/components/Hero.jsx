import React from 'react';
import { ArrowRight, Send, Terminal, Sparkles, Cpu, Layers, ShieldCheck, Activity } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - var(--nav-height))',
        display: 'flex',
        alignItems: 'center',
        padding: '60px 0 80px',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.9fr',
            gap: '48px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Introductions & CTAs */}
          <div style={{ zIndex: 3 }} className="hero-text-content">
            {/* Status & Tech Domain Chip */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '7px 16px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(99, 102, 241, 0.08)',
                border: '1px solid rgba(99, 102, 241, 0.25)',
                marginBottom: '22px',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span className="status-dot" />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  color: 'var(--accent-cyan)',
                  letterSpacing: '0.02em',
                }}
              >
                Available for New Opportunities
              </span>
            </div>

            {/* Main Greeting & Name */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.2vw, 4rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.12,
                marginBottom: '14px',
              }}
            >
              Hi, I’m{' '}
              <span className="text-gradient">Maitra Varuna G</span>
            </h1>

            {/* Secondary Heading */}
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 2.8vw, 1.85rem)',
                fontWeight: 600,
                color: '#cbd5e1',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                flexWrap: 'wrap',
              }}
            >
              <span>Information Technology Graduate</span>
            </h2>

            {/* Core Specialization Sub-label */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '24px',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.84rem',
                  color: 'var(--accent-purple)',
                  background: 'rgba(139, 92, 246, 0.1)',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  border: '1px solid rgba(139, 92, 246, 0.22)',
                }}
              >
                Information Technology | Java | Python | Web Technologies
              </span>
            </div>

            {/* Professional Description */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.2vw, 1.12rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                maxWidth: '580px',
                marginBottom: '36px',
              }}
            >
              Detail-oriented Information Technology graduate with professional experience in team
              coordination, product sales operations, customer interaction, and process execution.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              <button
                onClick={() => scrollTo('projects')}
                className="btn btn-primary"
                style={{
                  padding: '14px 28px',
                  fontSize: '1rem',
                }}
              >
                <span>View My Work</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="btn btn-secondary"
                style={{
                  padding: '14px 28px',
                  fontSize: '1rem',
                }}
              >
                <span>Let’s Connect</span>
                <Send size={16} />
              </button>
            </div>

            {/* Quick Metrics / Signals */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, auto)',
                gap: '24px',
                marginTop: '44px',
                paddingTop: '28px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                width: 'fit-content',
              }}
              className="hero-metrics"
            >
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                  B.Tech
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Information Tech
                </div>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.08)', paddingLeft: '24px' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-heading)' }}>
                  5 Months
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Industry Exp.
                </div>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.08)', paddingLeft: '24px' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-purple)', fontFamily: 'var(--font-heading)' }}>
                  7.1 CGPA
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Dr. N.G.P. Tech
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Futuristic Tech Visual */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '440px',
            }}
            className="hero-visual-wrapper"
          >
            {/* Ambient Backlight Sphere */}
            <div
              style={{
                position: 'absolute',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.22) 0%, rgba(56, 189, 248, 0.08) 50%, transparent 70%)',
                filter: 'blur(40px)',
                animation: 'pulseGlow 6s ease-in-out infinite',
              }}
            />

            {/* Central Glass Terminal Card */}
            <div
              className="glass-card"
              style={{
                width: '100%',
                maxWidth: '420px',
                padding: '24px',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                background: 'linear-gradient(145deg, rgba(16, 21, 38, 0.8), rgba(9, 12, 22, 0.9))',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 35px rgba(99, 102, 241, 0.2)',
                position: 'relative',
                zIndex: 2,
              }}
            >
              {/* Window Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '14px',
                  marginBottom: '16px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Terminal size={12} color="var(--accent-cyan)" />
                  <span>maitra_stack.env</span>
                </div>
              </div>

              {/* Code/Terminal Content */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  lineHeight: 1.7,
                  color: '#94a3b8',
                }}
              >
                <div>
                  <span style={{ color: '#818cf8' }}>const</span> candidate = {'{'}
                </div>
                <div style={{ paddingLeft: '16px' }}>
                  name: <span style={{ color: '#38bdf8' }}>"Maitra Varuna G"</span>,
                </div>
                <div style={{ paddingLeft: '16px' }}>
                  focus: <span style={{ color: '#34d399' }}>"Fullstack & ML & IoT"</span>,
                </div>
                <div style={{ paddingLeft: '16px' }}>
                  languages: [<span style={{ color: '#fbbf24' }}>"Java"</span>, <span style={{ color: '#fbbf24' }}>"Python"</span>],
                </div>
                <div style={{ paddingLeft: '16px' }}>
                  web: [<span style={{ color: '#60a5fa' }}>"HTML5"</span>, <span style={{ color: '#60a5fa' }}>"CSS3"</span>],
                </div>
                <div style={{ paddingLeft: '16px' }}>
                  experience: <span style={{ color: '#f43f5e' }}>"Landeed Operations"</span>,
                </div>
                <div style={{ paddingLeft: '16px' }}>
                  status: <span style={{ color: '#10b981' }}>"Ready to Impact"</span>
                </div>
                <div>{'}'};</div>
              </div>

              {/* Mini Status Meter */}
              <div
                style={{
                  marginTop: '18px',
                  paddingTop: '14px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Activity size={13} color="var(--accent-emerald)" />
                  <span>System: Online</span>
                </div>
                <span style={{ color: 'var(--accent-cyan)' }}>Coimbatore, TN</span>
              </div>
            </div>

            {/* Floating Satellite Tech Badge 1 (Top Right) */}
            <div
              className="floating-tech-badge badge-1"
              style={{
                position: 'absolute',
                top: '5%',
                right: '-10px',
                zIndex: 3,
                background: 'rgba(19, 25, 43, 0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                padding: '8px 14px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                animation: 'floatSlow 4.5s ease-in-out infinite',
              }}
            >
              <Cpu size={16} color="var(--accent-cyan)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#e2e8f0', fontWeight: 600 }}>
                Hybrid ML & IoT
              </span>
            </div>

            {/* Floating Satellite Tech Badge 2 (Bottom Left) */}
            <div
              className="floating-tech-badge badge-2"
              style={{
                position: 'absolute',
                bottom: '10%',
                left: '-15px',
                zIndex: 3,
                background: 'rgba(19, 25, 43, 0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                padding: '8px 14px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                animation: 'floatSlow 5.2s ease-in-out infinite reverse',
              }}
            >
              <ShieldCheck size={16} color="var(--accent-purple)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#e2e8f0', fontWeight: 600 }}>
                Cybersecurity & Hacking
              </span>
            </div>

            {/* Floating Badge 3 (Top Left - Java & Python) */}
            <div
              className="floating-tech-badge badge-3"
              style={{
                position: 'absolute',
                top: '-15px',
                left: '20px',
                zIndex: 3,
                background: 'rgba(19, 25, 43, 0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                padding: '6px 12px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                animation: 'floatSlow 6s ease-in-out infinite 1s',
              }}
            >
              <Layers size={14} color="var(--accent-indigo)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#cbd5e1' }}>
                Java · Python
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive adjustments for Hero */}
      <style>{`
        @media (max-width: 991px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .hero-visual-wrapper {
            margin-top: 10px;
          }
          .floating-tech-badge.badge-1 {
            right: 0px !important;
          }
          .floating-tech-badge.badge-2 {
            left: 0px !important;
          }
        }
        @media (max-width: 640px) {
          .hero-metrics {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .hero-metrics div {
            border-left: none !important;
            padding-left: 0 !important;
          }
          .floating-tech-badge {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
