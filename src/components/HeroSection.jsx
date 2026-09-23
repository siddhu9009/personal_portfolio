import React from 'react';
import { ChevronRight, FileText, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';

export default function HeroSection({ profileData, onOpenResume }) {
  const targetRoles = [
    "Generative AI Engineer",
    "RAG Engineer",
    "AI Engineer",
    "LLM Engineer",
    "Python Backend Developer",
    "AI Developer / Intern"
  ];

  return (
    <section id="hero" style={{ paddingTop: '7rem', paddingBottom: '4rem', position: 'relative', zIndex: 2 }}>
      <div className="section-container" style={{ padding: '0 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '2.5rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Positioning & Role Badges */}
          <div>
            {/* Status Kicker */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.85rem',
                borderRadius: '99px',
                background: 'rgba(255, 122, 26, 0.1)',
                border: '1px solid rgba(255, 122, 26, 0.25)',
                color: 'var(--accent-amber)',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                marginBottom: '1.2rem'
              }}
            >
              <Sparkles size={14} />
              <span>Siddharth Khot</span>
              <span style={{ opacity: 0.4 }}>|</span>
              <span style={{ color: 'var(--text-secondary)' }}>Class of 2026</span>
            </div>

            {/* Main Name & Positioning Title */}
            <h1
              style={{
                fontSize: '3rem',
                lineHeight: 1.15,
                fontWeight: 800,
                letterSpacing: '-0.03em',
                marginBottom: '1rem',
                color: 'var(--text-primary)'
              }}
              className="hero-title"
            >
              Siddharth Khot
              <br />
              <span className="gradient-text-amber" style={{ fontSize: '1.6rem', fontWeight: 700, display: 'block', marginTop: '0.4rem' }}>
                Generative AI Engineer | RAG Engineer | Python Backend Developer
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '1.6rem',
                maxWidth: '620px'
              }}
            >
              MCA Student at Vishwakarma University, Pune (BCA background). Specialized in developing robust Python backends (Django, FastAPI), RAG pipelines with vector search (MongoDB Atlas), and production LLM integration.
            </p>

            {/* Target Role Pills */}
            <div style={{ marginBottom: '2rem' }}>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.08em',
                  marginBottom: '0.6rem'
                }}
              >
                Target Engineering Roles (Pune, 2026):
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {targetRoles.map((role, idx) => (
                  <span key={idx} className={`tech-badge ${idx % 2 === 0 ? 'amber' : ''}`}>
                    <CheckCircle2 size={12} /> {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center' }}>
              <a href="#projects" className="btn-primary">
                Explore Projects <ChevronRight size={18} />
              </a>

              {/* GitHub Option */}
              <a
                href={profileData.githubUrl || "https://github.com/siddhu9009"}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ borderRadius: '10px', padding: '0.75rem 1.2rem' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-primary)' }}>
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span>GitHub</span>
                <ExternalLink size={12} />
              </a>

              {/* LinkedIn Option */}
              <a
                href={profileData.linkedinUrl || "https://www.linkedin.com/in/siddharth-khot-4ab69433b"}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ borderRadius: '10px', padding: '0.75rem 1.2rem' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-indigo)' }}>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                <span>LinkedIn</span>
                <ExternalLink size={12} />
              </a>

              {/* Resume Button with View & Download options */}
              <button
                onClick={onOpenResume}
                className="btn-secondary"
                style={{
                  borderRadius: '10px',
                  padding: '0.75rem 1.2rem',
                  cursor: 'pointer',
                  borderColor: 'rgba(255, 122, 26, 0.35)',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <FileText size={16} style={{ color: 'var(--accent-amber)' }} />
                <span>Resume</span>
                <ExternalLink size={12} />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Profile Photo Card */}
          <div
            className="glass-panel avatar-hero-card"
            style={{
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              borderColor: 'var(--border-medium)',
              background: 'var(--bg-secondary)',
              boxShadow: 'var(--glass-shadow)',
              borderRadius: '20px'
            }}
          >
            {/* Image Container */}
            <div
              style={{
                width: '100%',
                maxHeight: '380px',
                borderRadius: '14px',
                overflow: 'hidden',
                position: 'relative',
                border: '1px solid var(--border-medium)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
              }}
            >
              <img
                src="/profile-photo.jpg"
                alt="Siddharth Khot - Generative AI Engineer"
                style={{
                  width: '100%',
                  height: '100%',
                  maxHeight: '380px',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block'
                }}
              />
            </div>

            {/* Bottom Slogan Text: BUILD • RETRIEVE • CREATE */}
            <div
              style={{
                width: '100%',
                marginTop: '1.1rem',
                paddingTop: '0.85rem',
                borderTop: '1px solid var(--border-subtle)',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem'
              }}
            >
              <span
                style={{
                  fontSize: '0.95rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  color: 'var(--accent-amber)'
                }}
              >
                BUILD
              </span>
              <span style={{ color: 'var(--text-muted)', opacity: 0.5, fontSize: '0.8rem' }}>•</span>
              <span
                style={{
                  fontSize: '0.95rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  color: 'var(--accent-indigo)'
                }}
              >
                RETRIEVE
              </span>
              <span style={{ color: 'var(--text-muted)', opacity: 0.5, fontSize: '0.8rem' }}>•</span>
              <span
                style={{
                  fontSize: '0.95rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  color: 'var(--accent-cyan)'
                }}
              >
                CREATE
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 2.2rem !important; }
          .avatar-hero-card { min-height: 260px !important; margin-top: 1rem; }
        }
      `}</style>
    </section>
  );
}
