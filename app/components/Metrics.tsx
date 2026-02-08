'use client';

const stats = [
  { value: '11', label: 'Pipeline Stages' },
  { value: '12', label: 'Specialized AI Modules' },
  { value: '9,200+', label: 'Tests Passing' },
  { value: '< 20 min', label: 'Average Task Completion' },
  { value: '100%', label: 'Automated Quality Gates' },
  { value: '0', label: 'Manual Deploys Needed' },
];

export default function Metrics() {
  return (
    <section
      style={{
        background: '#0a0a1a',
        padding: '5rem 2rem',
        width: '100%',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '0',
        }}
      >
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem 1rem',
              borderRight:
                index < stats.length - 1
                  ? '1px solid rgba(99,102,241,0.2)'
                  : 'none',
            }}
          >
            <span
              style={{
                fontSize: '2.75rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1.1,
                textShadow: '0 0 40px rgba(139,92,246,0.3)',
                filter: 'drop-shadow(0 0 20px rgba(139,92,246,0.25))',
                letterSpacing: '-0.02em',
              }}
            >
              {stat.value}
            </span>
            <span
              style={{
                fontSize: '0.875rem',
                color: '#94a3b8',
                marginTop: '0.75rem',
                textAlign: 'center',
                fontWeight: 500,
                letterSpacing: '0.02em',
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          section > div > div {
            border-right: none !important;
          }
          section > div > div:nth-child(odd) {
            border-right: 1px solid rgba(99,102,241,0.2) !important;
          }
          section > div > div:nth-child(-n+4) {
            border-bottom: 1px solid rgba(99,102,241,0.2) !important;
          }
        }
      `}</style>
    </section>
  );
}
