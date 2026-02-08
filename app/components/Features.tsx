'use client';

import { useState } from 'react';

const features = [
  {
    icon: '\u26A1',
    title: 'AI Task Router',
    description:
      'Intelligent classification routes each task through the optimal pipeline with the right model and stages.',
  },
  {
    icon: '\uD83E\uDDE0',
    title: 'Module Specialization',
    description:
      '12 specialized AI modules \u2014 from planning to security \u2014 each with domain expertise and custom prompts.',
  },
  {
    icon: '\uD83D\uDEE1\uFE0F',
    title: 'Quality Gates',
    description:
      'Automated testing, code review, and Lighthouse audits ensure every deliverable meets production standards.',
  },
  {
    icon: '\uD83D\uDD04',
    title: 'Feedback Loops',
    description:
      'Failed gates automatically send work back for revision \u2014 up to 2 retries before escalation.',
  },
  {
    icon: '\uD83D\uDE80',
    title: 'Deploy Preview',
    description:
      'Every change gets a live preview URL on DigitalOcean with health checks and performance audits.',
  },
  {
    icon: '\uD83D\uDCCB',
    title: 'Handoff Intelligence',
    description:
      'Rich context passes between stages \u2014 decisions, insights, open items, and recovery data.',
  },
];

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      style={{
        backgroundColor: '#0f0f23',
        padding: '6rem 1.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 700,
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: '4rem',
            lineHeight: 1.2,
          }}
        >
          Everything you need for autonomous development
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}
        >
          {features.map((feature, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={feature.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${isHovered ? 'rgba(99, 102, 241, 0.5)' : 'rgba(99, 102, 241, 0.2)'}`,
                  borderRadius: '1rem',
                  padding: '2rem',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: isHovered
                    ? '0 8px 32px rgba(99, 102, 241, 0.15)'
                    : '0 2px 8px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
              >
                <div
                  style={{
                    fontSize: '2rem',
                    marginBottom: '1rem',
                    width: '3rem',
                    height: '3rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(99, 102, 241, 0.1)',
                    borderRadius: '0.75rem',
                  }}
                >
                  {feature.icon}
                </div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    marginBottom: '0.75rem',
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    color: '#94a3b8',
                    margin: 0,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          section > div > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          section > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
