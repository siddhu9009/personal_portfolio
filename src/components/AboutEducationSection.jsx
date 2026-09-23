import React from 'react';
import { GraduationCap, MapPin, ExternalLink, Calendar, BookOpen, Sparkles, FileText } from 'lucide-react';

export default function AboutEducationSection({ profileData, educationData, onOpenResume }) {
  return (
    <section id="about" style={{ padding: '6rem 0', position: 'relative', zIndex: 2 }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker" style={{ color: 'var(--accent-amber)' }}>
            <GraduationCap size={16} /> ACADEMIC FOUNDATION & BACKGROUND
          </div>
          <h2 className="section-title">
            About <span className="gradient-text-amber">{profileData.name}</span>
          </h2>
          <p className="section-subtitle">
            Master of Computer Applications (MCA) student at Vishwakarma University, Pune, combining strong Python backend development with cutting-edge Generative AI engineering.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2.5rem' }} className="about-grid">
          {/* Left Column: Education Timeline */}
          <div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <BookOpen size={20} style={{ color: 'var(--accent-indigo)' }} /> Academic Progression
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className="glass-panel"
                  style={{
                    padding: '1.5rem',
                    background: 'var(--bg-secondary)',
                    borderColor: 'var(--border-medium)',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.6rem' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {edu.degree}
                    </h4>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '99px',
                        background: edu.badge === 'In Progress' ? 'rgba(255, 122, 26, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                        color: edu.badge === 'In Progress' ? 'var(--accent-amber)' : 'var(--accent-emerald)',
                        fontWeight: 600
                      }}
                    >
                      {edu.badge}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.9rem', color: 'var(--accent-indigo)', fontWeight: 600, marginBottom: '0.4rem' }}>
                    {edu.institution}
                  </div>

                  <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Calendar size={13} /> {edu.period}
                  </div>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Bio Summary & Engineering Philosophy */}
          <div
            className="glass-panel glow-amber"
            style={{
              padding: '1.8rem',
              background: 'var(--bg-secondary)',
              borderColor: 'var(--border-medium)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={18} style={{ color: 'var(--accent-amber)' }} /> Engineering Philosophy
              </h3>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                "I believe AI features shouldn't be bolted on as superficial gimmicks—they should be integrated cleanly into modular backend architectures with strict context grounding, low latency, and zero hallucination tolerances."
              </p>

              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', marginBottom: '1.2rem' }}>
                <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
                  LOCATION & AVAILABILITY:
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <MapPin size={15} style={{ color: 'var(--accent-amber)' }} /> Pune, Maharashtra, India
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
                  ✔ Open for Software & AI Engineering Roles (Target 2026)
                </div>
              </div>
            </div>

            {/* Social Callout Boxes (GitHub & LinkedIn) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {/* GitHub */}
              <div
                style={{
                  background: 'var(--bg-tertiary)',
                  borderRadius: '10px',
                  padding: '0.85rem 1rem',
                  border: '1px solid var(--border-medium)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-primary)' }}>
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>GitHub Profile</span>
                  </div>
                  <a
                    href={profileData.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline"
                    style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem', color: 'var(--text-primary)', borderColor: 'var(--border-strong)' }}
                  >
                    siddhu9009 <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div
                style={{
                  background: 'var(--bg-tertiary)',
                  borderRadius: '10px',
                  padding: '0.85rem 1rem',
                  border: '1px solid var(--border-medium)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-indigo)' }}>
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>LinkedIn Profile</span>
                  </div>
                  <a
                    href={profileData.linkedinUrl || "https://www.linkedin.com/in/siddharth-khot-4ab69433b"}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline"
                    style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem', color: 'var(--accent-indigo)', borderColor: 'var(--accent-indigo)' }}
                  >
                    Connect <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Official Resume */}
              <div
                style={{
                  background: 'var(--bg-tertiary)',
                  borderRadius: '10px',
                  padding: '0.85rem 1rem',
                  border: '1px solid var(--border-medium)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <FileText size={18} style={{ color: 'var(--accent-amber)' }} />
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>Official Resume</span>
                  </div>
                  <button
                    onClick={onOpenResume}
                    className="btn-outline"
                    style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem', color: 'var(--accent-amber)', borderColor: 'rgba(255, 122, 26, 0.5)', cursor: 'pointer' }}
                  >
                    View / Download <ExternalLink size={12} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
