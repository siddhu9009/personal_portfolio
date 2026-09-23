import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';

export default function ProjectsSection({ projects }) {
  return (
    <section id="projects" style={{ padding: '5rem 0', position: 'relative', zIndex: 2 }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <div className="section-kicker">
            <Sparkles size={16} /> FEATURED ENGINEERING WORK
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text-amber">Projects</span>
          </h2>
          <p className="section-subtitle">
            Clean, production-focused applications demonstrating Siddharth's expertise in RAG architectures, Django backends, and full-stack software development.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.8rem'
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.8rem',
                borderRadius: '16px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-medium)',
                transition: 'all 0.25s ease'
              }}
            >
              <div>
                {/* Header Badge & Title */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem', flexWrap: 'wrap', gap: '0.4rem' }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '99px',
                      background: project.type === 'flagship' ? 'rgba(255, 122, 26, 0.15)' : 'rgba(109, 94, 240, 0.15)',
                      color: project.type === 'flagship' ? 'var(--accent-amber)' : 'var(--accent-indigo)',
                      fontWeight: 600
                    }}
                  >
                    {project.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.8rem', lineHeight: 1.25 }}>
                  {project.title}
                </h3>

                {/* Short Clean Description */}
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.4rem' }}>
                  {project.shortDescription}
                </p>

                {/* Tech Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.6rem' }}>
                  {project.techTags.map((tag, idx) => (
                    <span key={idx} className="tech-badge" style={{ fontSize: '0.72rem' }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button: Direct Link to GitHub Repository */}
              <div
                style={{
                  paddingTop: '1.2rem',
                  borderTop: '1px solid var(--border-subtle)'
                }}
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.6rem 1rem',
                    fontSize: '0.85rem',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span>View Repository on GitHub</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
