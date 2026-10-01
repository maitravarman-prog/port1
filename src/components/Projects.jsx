import React, { useState } from 'react';
import {
  FolderGit2,
  Calendar,
  Layers,
  ArrowRight,
  ShieldAlert,
  Cpu,
  Sparkles,
  Activity,
  Radio,
  ExternalLink
} from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'upi-sentinel',
      num: 'PROJECT 01',
      title: 'UPI Sentinel',
      subtitle: 'Anomaly-Aware Fraud Detection Using Hybrid Machine Learning Models',
      year: '2026',
      category: 'Machine Learning | Fraud Detection | Data Analysis',
      accent: 'var(--accent-cyan)',
      glow: 'rgba(56, 189, 248, 0.25)',
      description:
        'Developed a fraud detection system for UPI transactions using hybrid machine learning models to identify anomalous transaction patterns.',
      details: [
        'Prepared and systematically analyzed high-volume UPI transaction datasets.',
        'Extracted temporal, velocity, and deviation transaction patterns across user profiles.',
        'Engineered hybrid ML models combining anomaly-scoring heuristics with classification estimators.',
        'Trained and validated models to accurately distinguish genuine transactions from suspicious threats in near real-time.',
      ],
      technologies: ['Python', 'Machine Learning', 'Hybrid Models', 'Anomaly Detection', 'Data Analysis', 'Feature Engineering'],
      visualType: 'ml',
    },
    {
      id: 'smart-parking-iot',
      num: 'PROJECT 02',
      title: 'Smart Parking System',
      subtitle: 'Clap-Activated Switch & Appliance Automation',
      year: '2025',
      category: 'IoT | Embedded Systems | Automation',
      accent: 'var(--accent-purple)',
      glow: 'rgba(139, 92, 246, 0.25)',
      description:
        'Built an IoT-based clap-activated switch that enables hands-free control of electrical appliances.',
      details: [
        'Implemented precision sound detection using calibrated acoustic sensors.',
        'Engineered threshold recognition logic to filter ambient noises and reliably identify distinct clap sounds.',
        'Triggered automated switching relays to control power states of connected electrical appliances.',
        'Designed embedded circuit safety protocols ensuring hands-free, energy-efficient operation.',
      ],
      technologies: ['IoT Sensors', 'Sound Detection', 'Embedded Systems', 'Microcontrollers', 'Automation', 'Relay Switching'],
      visualType: 'iot',
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Portfolio Highlights</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Engineered systems demonstrating expertise in anomaly-aware machine learning architectures and IoT sensor automation.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))',
            gap: '32px',
          }}
          className="projects-grid"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card project-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Project Card Visual Banner / Graphic Preview */}
              <div
                style={{
                  height: '200px',
                  background: project.visualType === 'ml'
                    ? 'linear-gradient(135deg, rgba(8, 25, 45, 0.9) 0%, rgba(13, 17, 34, 0.9) 100%)'
                    : 'linear-gradient(135deg, rgba(29, 14, 48, 0.9) 0%, rgba(13, 17, 34, 0.9) 100%)',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                  overflow: 'hidden',
                }}
                className="project-banner"
              >
                {/* Visual Background Grid & Circles */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.15,
                    backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />

                {/* Central Schematic Art */}
                {project.visualType === 'ml' ? (
                  <div style={{ textAlign: 'center', zIndex: 2, position: 'relative' }}>
                    <div
                      style={{
                        width: '74px',
                        height: '74px',
                        borderRadius: '20px',
                        background: 'rgba(56, 189, 248, 0.1)',
                        border: '1px solid rgba(56, 189, 248, 0.35)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 12px auto',
                        boxShadow: '0 0 30px rgba(56, 189, 248, 0.25)',
                      }}
                    >
                      <ShieldAlert size={36} color="var(--accent-cyan)" />
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--accent-cyan)',
                        letterSpacing: '0.08em',
                        background: 'rgba(0,0,0,0.5)',
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-full)',
                      }}
                    >
                      HYBRID ANOMALY DETECTION ENGINE
                    </span>
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', zIndex: 2, position: 'relative' }}>
                    <div
                      style={{
                        width: '74px',
                        height: '74px',
                        borderRadius: '20px',
                        background: 'rgba(139, 92, 246, 0.1)',
                        border: '1px solid rgba(139, 92, 246, 0.35)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 12px auto',
                        boxShadow: '0 0 30px rgba(139, 92, 246, 0.25)',
                      }}
                    >
                      <Cpu size={36} color="var(--accent-purple)" />
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--accent-purple)',
                        letterSpacing: '0.08em',
                        background: 'rgba(0,0,0,0.5)',
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-full)',
                      }}
                    >
                      ACOUSTIC SENSOR RELAY AUTOMATION
                    </span>
                  </div>
                )}

                {/* Top Badge Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '18px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: '#ffffff',
                    background: 'rgba(0, 0, 0, 0.65)',
                    backdropFilter: 'blur(8px)',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                  }}
                >
                  {project.num}
                </div>

                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: '#cbd5e1',
                    background: 'rgba(0, 0, 0, 0.65)',
                    backdropFilter: 'blur(8px)',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                  }}
                >
                  <Calendar size={13} />
                  <span>{project.year}</span>
                </div>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  {/* Category Chip */}
                  <div style={{ marginBottom: '14px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.76rem',
                        fontWeight: 500,
                        color: project.accent,
                        background: `${project.accent}12`,
                        border: `1px solid ${project.accent}25`,
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-full)',
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    style={{
                      fontSize: '1.45rem',
                      fontWeight: 800,
                      marginBottom: '6px',
                      color: '#ffffff',
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--text-muted)',
                      marginBottom: '16px',
                      lineHeight: 1.4,
                    }}
                  >
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      marginBottom: '22px',
                    }}
                  >
                    “{project.description}”
                  </p>

                  {/* Tech Tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginBottom: '24px',
                    }}
                  >
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="chip">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="chip" style={{ color: project.accent }}>
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer Button */}
                <div
                  style={{
                    paddingTop: '18px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      padding: '12px 20px',
                      fontSize: '0.92rem',
                    }}
                  >
                    <span>View Details</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <style>{`
        .project-card:hover .project-banner svg {
          transform: scale(1.1);
          transition: transform 0.4s ease;
        }
        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
