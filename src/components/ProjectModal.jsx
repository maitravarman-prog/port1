import React, { useEffect } from 'react';
import { X, Calendar, Tag, Layers, CheckCircle2, Cpu, ShieldAlert, Zap } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          border: '1px solid rgba(255, 255, 255, 0.12)',
        }}
      >
        {/* Close Button */}
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close project modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '24px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '12px',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: project.accent,
                background: `${project.accent}18`,
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                border: `1px solid ${project.accent}33`,
              }}
            >
              {project.category}
            </span>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
              }}
            >
              <Calendar size={14} />
              <span>{project.year}</span>
            </div>
          </div>

          <h3
            style={{
              fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.25,
              marginBottom: '8px',
            }}
          >
            {project.title}
          </h3>

          <p
            style={{
              fontSize: '1rem',
              color: 'var(--accent-cyan)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 500,
            }}
          >
            {project.subtitle}
          </p>
        </div>

        {/* Project Description */}
        <div
          style={{
            padding: '20px',
            borderRadius: '14px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              marginBottom: '8px',
              letterSpacing: '0.05em',
            }}
          >
            Core Abstract
          </div>
          <p
            style={{
              fontSize: '0.98rem',
              color: 'var(--text-primary)',
              lineHeight: 1.7,
            }}
          >
            “{project.description}”
          </p>
        </div>

        {/* Technical Implementation Breakdown */}
        <div style={{ marginBottom: '28px' }}>
          <h4
            style={{
              fontSize: '1.05rem',
              fontWeight: 700,
              marginBottom: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#ffffff',
            }}
          >
            <Zap size={16} color={project.accent} />
            <span>Key Technical Highlights & Workflow</span>
          </h4>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
            {project.details.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.04)',
                }}
              >
                <CheckCircle2
                  size={16}
                  color={project.accent}
                  style={{ flexShrink: 0, marginTop: '3px' }}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Applied */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              marginBottom: '12px',
              letterSpacing: '0.05em',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Layers size={14} />
            <span>Applied Technologies & Tools</span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#e2e8f0',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
