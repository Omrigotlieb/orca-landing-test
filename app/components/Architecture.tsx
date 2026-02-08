'use client';

import { useEffect, useState } from 'react';

const layers = [
  {
    name: 'Convex Backend',
    description:
      'Real-time task database, worker state management, and structured handoff records',
    gradient: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.35)',
  },
  {
    name: 'ORCA Manager',
    description:
      'Orchestrator that spawns workers, manages health endpoints, and monitors pipeline progress',
    gradient: 'rgba(109,97,241,0.08)',
    border: 'rgba(109,97,241,0.3)',
  },
  {
    name: 'AI Router',
    description:
      'Classifies tasks and assigns the optimal model — Opus for analysis, Sonnet for coding',
    gradient: 'rgba(119,92,241,0.08)',
    border: 'rgba(119,92,241,0.3)',
  },
  {
    name: 'Stage Graph',
    description:
      'DAG-based workflow engine with conditional transitions, feedback loops, and retry logic',
    gradient: 'rgba(129,87,241,0.08)',
    border: 'rgba(129,87,241,0.3)',
  },
];

const modules = [
  { name: 'Planning', color: '#3b82f6' },
  { name: 'Story', color: '#8b5cf6' },
  { name: 'Design', color: '#ec4899' },
  { name: 'TDD', color: '#14b8a6' },
  { name: 'Dev', color: '#10b981' },
  { name: 'Testing', color: '#06b6d4' },
  { name: 'Review', color: '#f97316' },
  { name: 'Deploy', color: '#f59e0b' },
  { name: 'Security', color: '#ef4444' },
  { name: 'Research', color: '#6366f1' },
  { name: 'Content', color: '#a855f7' },
  { name: 'Showcase', color: '#84cc16' },
];

function Arrow() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '0.25rem 0',
      }}
    >
      <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
        <line
          x1="12"
          y1="0"
          x2="12"
          y2="20"
          stroke="#6366f1"
          strokeWidth="2"
          strokeDasharray="4 3"
        />
        <polygon points="6,18 12,27 18,18" fill="#6366f1" />
      </svg>
    </div>
  );
}

export default function Architecture() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    const section = document.getElementById('architecture-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="architecture-section"
      style={{
        backgroundColor: '#0f0f23',
        padding: '6rem 1.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 700,
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: '1rem',
            lineHeight: 1.2,
          }}
        >
          Built for Autonomous Software Engineering
        </h2>
        <p
          style={{
            fontSize: '1.1rem',
            color: '#94a3b8',
            textAlign: 'center',
            marginBottom: '4rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.6,
          }}
        >
          A layered architecture where every component has a single
          responsibility, connected through structured handoffs.
        </p>

        {/* Layers */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {layers.map((layer, index) => (
            <div key={layer.name} style={{ width: '100%' }}>
              <div
                className={`arch-layer arch-layer-${index}`}
                style={{
                  background: layer.gradient,
                  border: `1px solid ${layer.border}`,
                  borderRadius: '0.875rem',
                  padding: '1.5rem 2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? 'translateY(0)'
                    : 'translateY(20px)',
                  transition: `opacity 0.5s ease ${index * 0.15}s, transform 0.5s ease ${index * 0.15}s`,
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '0.75rem',
                    background: 'rgba(99,102,241,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    color: '#a5b4fc',
                    fontWeight: 700,
                  }}
                >
                  {index + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      color: '#e0e7ff',
                      margin: '0 0 0.25rem 0',
                    }}
                  >
                    {layer.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: '#94a3b8',
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {layer.description}
                  </p>
                </div>
              </div>
              {index < layers.length - 1 && <Arrow />}
            </div>
          ))}

          {/* Arrow to modules */}
          <Arrow />

          {/* Modules layer */}
          <div
            style={{
              width: '100%',
              background: 'rgba(139,92,246,0.06)',
              border: '1px solid rgba(139,92,246,0.25)',
              borderRadius: '0.875rem',
              padding: '1.5rem 2rem',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.5s ease ${layers.length * 0.15}s, transform 0.5s ease ${layers.length * 0.15}s`,
            }}
          >
            <h3
              style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                color: '#e0e7ff',
                margin: '0 0 1rem 0',
                textAlign: 'center',
              }}
            >
              Specialized Modules
            </h3>
            <div
              className="modules-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(6, 1fr)',
                gap: '0.625rem',
              }}
            >
              {modules.map((mod, index) => (
                <div
                  key={mod.name}
                  className="module-chip"
                  style={{
                    background: `${mod.color}15`,
                    border: `1px solid ${mod.color}40`,
                    borderRadius: '0.5rem',
                    padding: '0.625rem 0.5rem',
                    textAlign: 'center',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    color: mod.color,
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'scale(1)' : 'scale(0.85)',
                    transition: `opacity 0.4s ease ${(layers.length + 1) * 0.15 + index * 0.05}s, transform 0.4s ease ${(layers.length + 1) * 0.15 + index * 0.05}s`,
                    cursor: 'default',
                  }}
                >
                  {mod.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .arch-layer:hover {
          border-color: rgba(99, 102, 241, 0.6) !important;
          box-shadow: 0 4px 24px rgba(99, 102, 241, 0.12);
        }
        .module-chip:hover {
          transform: translateY(-2px) scale(1.05) !important;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
        }
        .arch-layer,
        .module-chip {
          transition-property: opacity, transform, border-color, box-shadow;
        }
        @media (max-width: 768px) {
          .modules-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .modules-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
