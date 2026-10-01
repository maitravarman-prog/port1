import React from 'react';
import {
  ShieldCheck,
  Terminal,
  Network,
  Lock,
  CheckCircle2,
  Cpu,
  Binary,
  Radio,
  ExternalLink
} from 'lucide-react';

export default function Internship() {
  const learnings = [
    'Learned fundamentals of computer networking, packet routing, and subnet architectures.',
    'Studied network protocols (TCP/IP, UDP, HTTP/S, DNS) and vulnerable port configurations.',
    'Learned network scanning concepts used in professional security assessments.',
    'Studied real-world cyber threats including phishing attack vectors, malware delivery, and keyloggers.',
    'Learned threat prevention mechanisms and multi-layered mitigation techniques.',
    'Developed an understanding of ethical hacking principles and defensive posture.',
    'Learned the critical importance of human security awareness in enterprise organizations.',
  ];

  return (
    <section id="internship" className="section" style={{ paddingTop: '40px' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <ShieldCheck size={14} />
            <span>Industrial Internship</span>
          </div>
          <h2 className="section-title">Internship Experience</h2>
          <p className="section-subtitle">
            Specialized cybersecurity training covering ethical network analysis, vulnerability assessment, and threat mitigation.
          </p>
        </div>

        {/* Highlight Internship Card */}
        <div
          className="glass-card"
          style={{
            maxWidth: '1050px',
            margin: '0 auto',
            padding: '40px',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            background: 'linear-gradient(145deg, rgba(14, 19, 36, 0.8), rgba(9, 13, 24, 0.9))',
            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.6), 0 0 35px rgba(56, 189, 248, 0.08)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: '40px',
              alignItems: 'center',
            }}
            className="internship-grid"
          >
            {/* Left Column: Internship Info & Key Learnings */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '16px',
                  flexWrap: 'wrap',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--accent-cyan)',
                    background: 'rgba(56, 189, 248, 0.1)',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                  }}
                >
                  Hackup Technologies
                </span>
                <span className="chip chip-purple" style={{ fontSize: '0.76rem' }}>
                  Industrial Immersion
                </span>
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1.4rem, 2.4vw, 1.85rem)',
                  fontWeight: 800,
                  marginBottom: '10px',
                  color: '#ffffff',
                }}
              >
                Ethical Hacking & Cyber Security Intern
              </h3>

              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '24px',
                }}
              >
                Focused on defensive security paradigms, network reconnaissance, and safeguarding IT infrastructure against real-world vulnerabilities.
              </p>

              {/* Bulleted Learnings */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '12px',
                }}
              >
                {learnings.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      fontSize: '0.9rem',
                      lineHeight: 1.55,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <CheckCircle2
                      size={16}
                      color="var(--accent-cyan)"
                      style={{ flexShrink: 0, marginTop: '3px' }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Skill Tags */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: '28px',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  flexWrap: 'wrap',
                }}
              >
                <span className="chip">Network Scanning</span>
                <span className="chip">Port Analysis</span>
                <span className="chip">Phishing Defense</span>
                <span className="chip">Keylogger Mitigation</span>
                <span className="chip">Enterprise Security</span>
              </div>
            </div>

            {/* Right Column: Cybersecurity-themed Visual Terminal & Node Monitor */}
            <div
              style={{
                position: 'relative',
                background: 'rgba(8, 11, 20, 0.9)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: 'inset 0 0 30px rgba(56, 189, 248, 0.05), 0 10px 30px rgba(0, 0, 0, 0.5)',
                overflow: 'hidden',
              }}
            >
              {/* Scanline overlay effect */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)',
                  backgroundSize: '100% 4px',
                  pointerEvents: 'none',
                  opacity: 0.6,
                }}
              />

              {/* Terminal Title */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '12px',
                  marginBottom: '16px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={16} color="var(--accent-cyan)" />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--text-primary)',
                      fontWeight: 600,
                    }}
                  >
                    SEC_DEFENSE_PROBE
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#10b981' }}>
                    MONITORING
                  </span>
                </div>
              </div>

              {/* Simulated Security Log Output */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  lineHeight: 1.8,
                  color: '#94a3b8',
                }}
              >
                <div style={{ color: '#64748b' }}>// Network Reconnaissance Assessment</div>
                <div>
                  <span style={{ color: 'var(--accent-cyan)' }}>$</span> nmap -sV -sC target_subnet/24
                </div>
                <div style={{ color: '#34d399' }}>[✓] Open ports verified: 80, 443, 22</div>
                <div style={{ color: '#38bdf8' }}>[i] Protocols parsed: TCP, UDP, SSL/TLS</div>
                <div style={{ margin: '8px 0', borderTop: '1px dashed rgba(255,255,255,0.08)' }} />
                <div style={{ color: '#64748b' }}>// Threat Vectors Audited</div>
                <div style={{ color: '#fbbf24' }}>[!] Vector: Keylogger Injection Hook — Neutralized</div>
                <div style={{ color: '#fbbf24' }}>[!] Vector: Phishing Payload Domain — Filtered</div>
                <div style={{ color: '#818cf8' }}>[+] Mitigation: Strict Endpoint Protocol Applied</div>
              </div>

              {/* Shield Status Indicator Badge */}
              <div
                style={{
                  marginTop: '20px',
                  padding: '12px 14px',
                  background: 'rgba(56, 189, 248, 0.08)',
                  borderRadius: '10px',
                  border: '1px solid rgba(56, 189, 248, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Lock size={16} color="var(--accent-cyan)" />
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 600 }}>
                    Security Posture
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--accent-cyan)',
                  }}
                >
                  Validated
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .internship-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
