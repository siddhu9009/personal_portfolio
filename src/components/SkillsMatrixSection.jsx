import React from 'react';
import { Server, Cpu, Wrench, Sparkles } from 'lucide-react';

export default function SkillsMatrixSection({ skillsGrouped }) {
  if (!skillsGrouped) return null;

  const sections = [
    {
      title: "Core Stack",
      icon: <Server size={20} style={{ color: 'var(--accent-amber)' }} />,
      badgeColor: "rgba(255, 122, 26, 0.15)",
      textColor: "var(--accent-amber)",
      items: skillsGrouped.coreStack || []
    },
    {
      title: "Comfortable With",
      icon: <Wrench size={20} style={{ color: 'var(--accent-indigo)' }} />,
      badgeColor: "rgba(109, 94, 240, 0.15)",
      textColor: "var(--accent-indigo)",
      items: skillsGrouped.comfortableWith || []
    },
    {
      title: "Exploring",
      icon: <Cpu size={20} style={{ color: 'var(--accent-cyan)' }} />,
      badgeColor: "rgba(0, 240, 255, 0.15)",
      textColor: "var(--accent-cyan)",
      items: skillsGrouped.exploring || []
    }
  ];

  return (
    <section id="skills" style={{ padding: '5rem 0', position: 'relative', zIndex: 2, background: 'var(--bg-primary)' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <div className="section-kicker" style={{ color: 'var(--accent-cyan)' }}>
            <Sparkles size={16} /> TECHNICAL CAPABILITIES
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text-cyan">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A practical overview of Siddharth's engineering capabilities across backend frameworks, Generative AI tools, and development workflows.
          </p>
        </div>

        {/* 3 Column Skill Groups Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.8rem' }}>
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '1.8rem',
                background: 'var(--bg-secondary)',
                borderColor: 'var(--border-medium)',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Category Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', paddingBottom: '0.8rem', borderBottom: '1px solid var(--border-subtle)' }}>
                {section.icon}
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {section.title}
                </h3>
              </div>

              {/* Skills List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', flex: 1 }}>
                {section.items.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                      <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                        {skill.name}
                      </span>
                      <span
                        style={{
                          fontSize: '0.68rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '0.15rem 0.5rem',
                          borderRadius: '99px',
                          background: section.badgeColor,
                          color: section.textColor,
                          fontWeight: 600
                        }}
                      >
                        {section.title}
                      </span>
                    </div>

                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                      {skill.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
