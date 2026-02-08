'use client';

import { useState } from 'react';

const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/Omrigotlieb/infinity-ai' },
  { label: 'Documentation', href: '#docs' },
  { label: 'Infinity AI', href: '#infinity-ai' },
];

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <footer
      style={{
        backgroundColor: '#050510',
        borderTop: '1px solid transparent',
        borderImage: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.3), transparent) 1',
        padding: '3rem 1.5rem 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        <p
          style={{
            fontSize: '0.95rem',
            color: '#64748b',
            margin: 0,
            textAlign: 'center',
          }}
        >
          Built with{' '}
          <span style={{ color: '#8b5cf6', fontWeight: 600 }}>ORCA</span>
          {' '}&mdash; AI-Powered Development Orchestrator
        </p>

        <nav
          style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              onMouseEnter={() => setHoveredLink(link.label)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                fontSize: '0.875rem',
                color: hoveredLink === link.label ? '#c4b5fd' : '#94a3b8',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p
          style={{
            fontSize: '0.8rem',
            color: '#475569',
            margin: 0,
            textAlign: 'center',
          }}
        >
          &copy; 2026 Infinity AI. Orchestrated by ORCA.
        </p>
      </div>
    </footer>
  );
}
