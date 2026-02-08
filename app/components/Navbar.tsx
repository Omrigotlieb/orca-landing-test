'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pipeline', href: '#pipeline' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Metrics', href: '#metrics' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 2rem',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,10,26,0.95)' : 'rgba(10,10,26,0.8)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: scrolled
          ? '1px solid rgba(99,102,241,0.2)'
          : '1px solid rgba(99,102,241,0.1)',
        transition: 'background 0.3s ease, border-bottom 0.3s ease',
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span style={{ fontSize: '1.5rem' }}>&#x1F40B;</span>
        <span
          style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #6366f1, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em',
          }}
        >
          ORCA
        </span>
      </a>

      {/* Nav Links - hidden on mobile */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
        }}
        className="nav-links"
      >
        {navLinks.map((link) => (
          <NavLink key={link.href} href={link.href} label={link.label} />
        ))}
      </div>

      {/* GitHub Button */}
      <a
        href="https://github.com/Omrigotlieb/infinity-ai"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 1rem',
          border: '1px solid #6366f1',
          borderRadius: '8px',
          color: '#6366f1',
          textDecoration: 'none',
          fontSize: '0.875rem',
          fontWeight: 500,
          transition: 'background 0.2s ease, color 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(99,102,241,0.1)';
          e.currentTarget.style.color = '#818cf8';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = '#6366f1';
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ flexShrink: 0 }}
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        GitHub
      </a>

      {/* Mobile styles via inline style tag */}
      <style>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? '#ffffff' : '#94a3b8',
        textDecoration: 'none',
        fontSize: '0.875rem',
        fontWeight: 500,
        transition: 'color 0.2s ease',
        position: 'relative',
      }}
    >
      {label}
      <span
        style={{
          position: 'absolute',
          bottom: '-4px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: hovered ? '100%' : '0%',
          height: '2px',
          background: 'linear-gradient(90deg, #6366f1, #ec4899)',
          borderRadius: '1px',
          transition: 'width 0.2s ease',
        }}
      />
    </a>
  );
}
