import React from 'react';
import { X, Eye, Download, FileText } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose, profileData }) {
  if (!isOpen) return null;

  const resumeUrl = profileData?.resumeUrl && profileData.resumeUrl !== '#resume'
    ? profileData.resumeUrl
    : '/Siddharth_Khot_Resume.pdf';

  const handleView = () => {
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Siddharth_Khot_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 300,
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
    >
      <div
        className="glass-panel glow-amber"
        style={{
          width: '100%',
          maxWidth: '460px',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-medium)',
          borderRadius: '16px',
          padding: '1.8rem',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          boxShadow: 'var(--glass-shadow)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-secondary)',
            width: 32,
            height: 32,
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: '10px',
              background: 'rgba(255, 122, 26, 0.15)',
              color: 'var(--accent-amber)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <FileText size={22} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Siddharth Khot — Resume
            </h3>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
              Generative AI & Python Backend Engineer
            </div>
          </div>
        </div>

        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.6rem' }}>
          Choose an option below to view the official resume in browser or save the PDF directly to your device.
        </p>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {/* Option 1: View Resume */}
          <button
            onClick={handleView}
            className="btn-primary"
            style={{
              width: '100%',
              padding: '0.85rem 1.2rem',
              borderRadius: '10px',
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem'
            }}
          >
            <Eye size={18} />
            <span>View Resume (In Browser)</span>
          </button>

          {/* Option 2: Download Resume */}
          <button
            onClick={handleDownload}
            className="btn-secondary"
            style={{
              width: '100%',
              padding: '0.85rem 1.2rem',
              borderRadius: '10px',
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              color: 'var(--accent-amber)',
              borderColor: 'rgba(255, 122, 26, 0.4)'
            }}
          >
            <Download size={18} />
            <span>Download Resume PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
}
