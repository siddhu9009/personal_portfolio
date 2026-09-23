import React from 'react';
import { Mail, ArrowUp, MapPin, FileText, ExternalLink } from 'lucide-react';

export default function Footer({ profileData, onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const userEmail = profileData?.email || "khotsiddharth96k@gmail.com";

  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-medium)',
        padding: '3.5rem 1.5rem 2rem 1.5rem',
        position: 'relative',
        zIndex: 2,
        transition: 'background-color var(--transition-speed) var(--ease-out)'
      }}
    >
      <div className="section-container" style={{ padding: 0 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr 1.1fr',
            gap: '2.5rem',
            marginBottom: '3rem'
          }}
          className="footer-grid"
        >
          {/* Brand & Mission Statement */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, var(--accent-amber) 0%, var(--accent-indigo) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: '0.95rem'
                }}
              >
                SK
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                SIDDHARTH KHOT
              </span>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.2rem', maxWidth: '380px' }}>
              Generative AI Engineer & Python Backend Developer. MCA Student at Vishwakarma University, Pune (Class of 2026).
            </p>

            <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span className="status-dot pulse" /> System Status: All Specs Operational
            </div>
          </div>

          {/* Quick Links & Direct Routing */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem', fontWeight: 700 }}>
              NAVIGATION
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <a href="#hero" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>Overview</a>
              <a href="#projects" style={{ color: 'var(--accent-amber)', textDecoration: 'none', fontWeight: 600 }}>Featured Projects</a>
              <a href="#skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>Skills & Technologies</a>
              <a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>About Me & Education</a>
              <button
                onClick={onOpenResume}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--accent-indigo)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  padding: 0,
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                <FileText size={14} /> Resume (View / Download)
              </button>
            </div>
          </div>

          {/* Contact & Social Links */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem', fontWeight: 700 }}>
              CONNECT & RECRUITMENT
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.88rem' }}>
              {/* GitHub Link */}
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span>GitHub: {profileData.githubUser}</span>
                <ExternalLink size={12} style={{ color: 'var(--text-muted)' }} />
              </a>

              {/* LinkedIn Link */}
              <a
                href={profileData.linkedinUrl || "https://www.linkedin.com/in/siddharth-khot-4ab69433b"}
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--accent-indigo)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-indigo)' }}>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                <span>LinkedIn Profile</span>
                <ExternalLink size={12} />
              </a>

              {/* Location */}
              <div style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.84rem' }}>
                <MapPin size={15} style={{ color: 'var(--accent-amber)' }} /> Pune, Maharashtra, India
              </div>

              {/* Dedicated Email & Mail Me Option Box */}
              <div
                style={{
                  background: 'var(--bg-tertiary)',
                  borderRadius: '10px',
                  padding: '0.85rem 1rem',
                  border: '1px solid var(--border-medium)',
                  marginTop: '0.2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem'
                }}
              >
                <div style={{ color: 'var(--text-primary)', fontSize: '0.82rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', wordBreak: 'break-all' }}>
                  <Mail size={15} style={{ color: 'var(--accent-amber)', flexShrink: 0 }} />
                  <span>{userEmail}</span>
                </div>
                <a
                  href={`mailto:${userEmail}?subject=Inquiry%20/%20Opportunity%20for%20Siddharth%20Khot`}
                  className="btn-primary"
                  style={{
                    padding: '0.45rem 0.9rem',
                    fontSize: '0.8rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.45rem',
                    fontWeight: 700,
                    width: '100%'
                  }}
                >
                  <Mail size={14} /> Send Email / Mail Me
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Siddharth Khot. Built as a Flagship AI Developer Portfolio.
          </div>

          <button
            onClick={scrollToTop}
            className="btn-outline"
            style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem', borderRadius: '99px' }}
          >
            Back to Top <ArrowUp size={13} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
