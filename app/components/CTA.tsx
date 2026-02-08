'use client';

import { useState } from 'react';

export default function CTA() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #0f0f23 0%, #1a0a2e 100%)',
        padding: '8rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Radial glow behind text */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background:
            'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.05) 40%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '1.5rem',
            lineHeight: 1.2,
          }}
        >
          Ready to automate your development?
        </h2>

        <p
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: '#94a3b8',
            lineHeight: 1.7,
            marginBottom: '3rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          ORCA handles the entire lifecycle — you focus on what matters.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {/* Get Started button */}
          <a
            href="#get-started"
            onMouseEnter={() => setHoveredButton('primary')}
            onMouseLeave={() => setHoveredButton(null)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.875rem 2rem',
              fontSize: '1rem',
              fontWeight: 600,
              color: '#ffffff',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              border: 'none',
              borderRadius: '0.75rem',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: hoveredButton === 'primary' ? 'scale(1.05)' : 'scale(1)',
              boxShadow:
                hoveredButton === 'primary'
                  ? '0 0 30px rgba(99, 102, 241, 0.4), 0 8px 24px rgba(99, 102, 241, 0.3)'
                  : '0 4px 12px rgba(99, 102, 241, 0.2)',
              minWidth: '160px',
            }}
          >
            Get Started
          </a>

          {/* View on GitHub button */}
          <a
            href="https://github.com/Omrigotlieb/infinity-ai"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredButton('github')}
            onMouseLeave={() => setHoveredButton(null)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.875rem 2rem',
              fontSize: '1rem',
              fontWeight: 600,
              color: hoveredButton === 'github' ? '#ffffff' : '#c4b5fd',
              background: hoveredButton === 'github' ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
              border: '1px solid rgba(99, 102, 241, 0.5)',
              borderRadius: '0.75rem',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: hoveredButton === 'github' ? 'scale(1.05)' : 'scale(1)',
              boxShadow:
                hoveredButton === 'github'
                  ? '0 0 20px rgba(99, 102, 241, 0.2)'
                  : 'none',
              minWidth: '160px',
            }}
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
