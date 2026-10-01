import React, { useState } from 'react';
import {
  Code2,
  Globe,
  Wrench,
  Users2,
  Terminal,
  FileSpreadsheet,
  FileText,
  Presentation,
  CheckCircle,
  Lightbulb,
  Zap,
  Target,
  BrainCircuit,
  Clock,
  Sparkles,
  Layers
} from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'programming', label: 'Programming' },
    { id: 'web', label: 'Web Technologies' },
    { id: 'tools', label: 'Tools & Productivity' },
    { id: 'soft', label: 'Professional & Soft Skills' },
  ];

  const skillGroups = [
    {
      id: 'programming',
      category: 'Programming',
      icon: Code2,
      accent: 'var(--accent-indigo)',
      glow: 'rgba(99, 102, 241, 0.25)',
      description: 'Core object-oriented & algorithmic problem solving foundational languages.',
      skills: [
        { name: 'Java', desc: 'Object-Oriented Programming, Data Structures, Core Java APIs', levelTag: 'Core Language', icon: Terminal },
        { name: 'Python', desc: 'Scripting, Hybrid ML Models, Data Analysis & Anomaly Detection', levelTag: 'Machine Learning', icon: BrainCircuit },
      ],
    },
    {
      id: 'web',
      category: 'Web Technologies',
      icon: Globe,
      accent: 'var(--accent-cyan)',
      glow: 'rgba(56, 189, 248, 0.25)',
      description: 'Semantic markup, layout architecture, and styling for modern web interfaces.',
      skills: [
        { name: 'HTML', desc: 'Semantic HTML5, Accessible DOM Structure, SEO Best Practices', levelTag: 'Structure & Web', icon: Globe },
        { name: 'CSS', desc: 'CSS3, Flexbox, Grid, Glassmorphism, Micro-Animations & Responsive Design', levelTag: 'Styling & UI', icon: Layers },
      ],
    },
    {
      id: 'tools',
      category: 'Tools',
      icon: Wrench,
      accent: 'var(--accent-purple)',
      glow: 'rgba(139, 92, 246, 0.25)',
      description: 'Office productivity suite for analytical tracking, reporting, and presentations.',
      skills: [
        { name: 'MS Excel', desc: 'Data Organisation, Formulas, Operational Reporting & Progress Tracking', levelTag: 'Analytics', icon: FileSpreadsheet },
        { name: 'MS Word', desc: 'Documentation, Technical Reports, Formal Specifications', levelTag: 'Documentation', icon: FileText },
        { name: 'PowerPoint', desc: 'Technical Presentations, Stakeholder Reviews, Slide Decks', levelTag: 'Presentations', icon: Presentation },
      ],
    },
    {
      id: 'soft',
      category: 'Soft Skills',
      icon: Users2,
      accent: 'var(--accent-emerald)',
      glow: 'rgba(16, 185, 129, 0.25)',
      description: 'Interpersonal, organizational, and leadership capabilities proven in team environments.',
      skills: [
        { name: 'Strong Communication', desc: 'Clear stakeholder articulation, client consultation & active listening', levelTag: 'Interpersonal', icon: CheckCircle },
        { name: 'Problem Solving', desc: 'Analytical diagnosis of bottlenecks, root cause deduction & resolution', levelTag: 'Analytical', icon: Lightbulb },
        { name: 'Fast Learning', desc: 'Rapid grasp of new libraries, tools, protocols and operating procedures', levelTag: 'Agility', icon: Zap },
        { name: 'Leadership', desc: 'Directing deliverables, encouraging team momentum, delegating with clarity', levelTag: 'Management', icon: Target },
        { name: 'Adaptive Thinking', desc: 'Adjusting approaches dynamically when requirements or constraints shift', levelTag: 'Cognitive', icon: BrainCircuit },
        { name: 'Teamwork', desc: 'Harmonious collaboration in cross-functional stand-ups and projects', levelTag: 'Collaboration', icon: Users2 },
        { name: 'Time Management', desc: 'Prioritizing critical paths, meeting strict milestones without compromise', levelTag: 'Execution', icon: Clock },
      ],
    },
  ];

  const filteredGroups = activeCategory === 'all'
    ? skillGroups
    : skillGroups.filter(g => g.id === activeCategory);

  return (
    <section id="skills" className="section" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(13, 17, 29, 0.3) 100%)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Code2 size={14} />
            <span>Core Competencies</span>
          </div>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            A comprehensive suite of programming languages, web fundamentals, productivity tools, and essential leadership capabilities.
          </p>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '8px',
              marginTop: '28px',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '7px 16px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.84rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 500,
                  transition: 'all 0.2s ease',
                  background: activeCategory === cat.id ? 'var(--accent-indigo)' : 'rgba(255, 255, 255, 0.04)',
                  color: activeCategory === cat.id ? '#ffffff' : 'var(--text-secondary)',
                  border: activeCategory === cat.id ? '1px solid var(--accent-indigo)' : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: activeCategory === cat.id ? '0 0 16px rgba(99, 102, 241, 0.4)' : 'none',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '36px',
          }}
        >
          {filteredGroups.map((group) => {
            const GroupIcon = group.icon;
            return (
              <div
                key={group.id}
                className="glass-card"
                style={{
                  padding: '32px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {/* Group Title Bar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '24px',
                    paddingBottom: '16px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                    flexWrap: 'wrap',
                    gap: '12px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: `${group.accent}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `1px solid ${group.accent}33`,
                      }}
                    >
                      <GroupIcon size={20} color={group.accent} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{group.category}</h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{group.description}</p>
                    </div>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: group.accent,
                      background: `${group.accent}12`,
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      border: `1px solid ${group.accent}33`,
                    }}
                  >
                    {group.skills.length} Competencies
                  </span>
                </div>

                {/* Individual Skill Cards Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: group.id === 'soft'
                      ? 'repeat(auto-fill, minmax(260px, 1fr))'
                      : 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '16px',
                  }}
                >
                  {group.skills.map((skill, sIdx) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={sIdx}
                        className="interactive-skill-card"
                        style={{
                          background: 'rgba(255, 255, 255, 0.025)',
                          borderRadius: '12px',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                          padding: '18px 20px',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          gap: '10px',
                          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div
                              className="skill-icon-box"
                              style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '8px',
                                background: 'rgba(255, 255, 255, 0.04)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                transition: 'transform 0.3s ease, background 0.3s ease',
                              }}
                            >
                              <SkillIcon size={16} color={group.accent} />
                            </div>
                            <span
                              style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1rem',
                                fontWeight: 700,
                                color: 'var(--text-primary)',
                              }}
                            >
                              {skill.name}
                            </span>
                          </div>

                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.7rem',
                              color: 'var(--text-muted)',
                              background: 'rgba(255, 255, 255, 0.04)',
                              padding: '2px 8px',
                              borderRadius: '4px',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {skill.levelTag}
                          </span>
                        </div>

                        <p
                          style={{
                            fontSize: '0.84rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.5,
                          }}
                        >
                          {skill.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .interactive-skill-card:hover {
          transform: translateY(-5px);
          border-color: rgba(99, 102, 241, 0.4) !important;
          background: rgba(255, 255, 255, 0.05) !important;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3), 0 0 20px rgba(99, 102, 241, 0.15);
        }
        .interactive-skill-card:hover .skill-icon-box {
          transform: scale(1.1);
          background: rgba(99, 102, 241, 0.15) !important;
        }
      `}</style>
    </section>
  );
}
