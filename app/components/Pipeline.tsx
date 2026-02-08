'use client';

import { useEffect, useState } from 'react';

interface Stage {
  icon: string;
  name: string;
  description: string;
  isHumanGate: boolean;
}

const stages: Stage[] = [
  { icon: '\u{1F4CB}', name: 'Todo', description: 'Task pickup', isHumanGate: false },
  { icon: '\u{1F9E0}', name: 'Planning', description: 'AI complexity analysis', isHumanGate: false },
  { icon: '\u{1F4DD}', name: 'Story Gen', description: 'User stories + acceptance criteria', isHumanGate: false },
  { icon: '\u{1F3A8}', name: 'Design Review', description: 'UI/UX approval', isHumanGate: true },
  { icon: '\u{1F9EA}', name: 'TDD Tests', description: 'Write tests first', isHumanGate: false },
  { icon: '\u{1F4BB}', name: 'Development', description: 'AI writes code', isHumanGate: false },
  { icon: '\u2705', name: 'Testing', description: 'Run test suite', isHumanGate: false },
  { icon: '\u{1F50D}', name: 'Code Review', description: 'Automated quality check', isHumanGate: false },
  { icon: '\u{1F680}', name: 'Deploy Preview', description: 'Live preview + Lighthouse', isHumanGate: false },
  { icon: '\u{1F464}', name: 'Manual QA', description: 'Human verification', isHumanGate: true },
  { icon: '\u{1F389}', name: 'Done', description: 'Shipped!', isHumanGate: false },
];

export default function Pipeline() {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="pipeline" style={sectionStyle}>
      <style>{animationStyles}</style>

      <div style={headerStyle}>
        <h2 style={titleStyle}>The Autonomous Pipeline</h2>
        <p style={subtitleStyle}>
          Every task flows through up to 11 stages — each powered by specialized AI agents
        </p>
      </div>

      {/* Desktop: horizontal scrollable flow */}
      <div className="pipeline-desktop" style={scrollContainerStyle}>
        <div style={pipelineTrackStyle}>
          {stages.map((stage, i) => {
            const isActive = i === activeStage;
            const isPast = i < activeStage;
            const borderColor = stage.isHumanGate ? '#f59e0b' : '#6366f1';
            const glowColor = stage.isHumanGate
              ? 'rgba(245, 158, 11, 0.4)'
              : 'rgba(99, 102, 241, 0.4)';
            const glowColorFaint = stage.isHumanGate
              ? 'rgba(245, 158, 11, 0.15)'
              : 'rgba(99, 102, 241, 0.15)';

            return (
              <div key={stage.name} style={stageWrapperStyle}>
                {/* Connection line to previous stage */}
                {i > 0 && (
                  <div style={connectorContainerStyle}>
                    <div style={connectorLineStyle} />
                    <div
                      style={{
                        ...pulseStyle,
                        animationDelay: `${i * 0.35}s`,
                      }}
                    />
                  </div>
                )}

                {/* Stage node */}
                <div
                  style={{
                    ...nodeStyle,
                    borderColor,
                    boxShadow: isActive
                      ? `0 0 20px ${glowColor}, 0 0 40px ${glowColorFaint}`
                      : isPast
                        ? `0 0 10px ${glowColorFaint}`
                        : '0 2px 8px rgba(0,0,0,0.3)',
                    transform: isActive ? 'scale(1.08)' : 'scale(1)',
                    opacity: isPast ? 0.65 : 1,
                  }}
                >
                  {stage.isHumanGate && (
                    <div style={humanBadgeStyle}>Human Gate</div>
                  )}

                  <div style={iconStyle}>{stage.icon}</div>
                  <div style={nameStyle}>{stage.name}</div>
                  <div style={descriptionStyle}>{stage.description}</div>

                  <div
                    style={{
                      ...stageNumberStyle,
                      background: stage.isHumanGate ? '#f59e0b' : '#6366f1',
                    }}
                  >
                    {i + 1}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile: vertical flow */}
      <div className="pipeline-mobile" style={mobileContainerStyle}>
        {stages.map((stage, i) => {
          const isActive = i === activeStage;
          const isPast = i < activeStage;
          const borderColor = stage.isHumanGate ? '#f59e0b' : '#6366f1';
          const glowColor = stage.isHumanGate
            ? 'rgba(245, 158, 11, 0.4)'
            : 'rgba(99, 102, 241, 0.4)';

          return (
            <div key={`mobile-${stage.name}`} style={mobileStageWrapperStyle}>
              {i > 0 && (
                <div style={mobileConnectorContainerStyle}>
                  <div style={mobileConnectorLineStyle} />
                  <div
                    style={{
                      ...mobilePulseStyle,
                      animationDelay: `${i * 0.35}s`,
                    }}
                  />
                </div>
              )}

              <div
                style={{
                  ...mobileNodeStyle,
                  borderColor,
                  boxShadow: isActive
                    ? `0 0 20px ${glowColor}`
                    : '0 2px 8px rgba(0,0,0,0.3)',
                  transform: isActive ? 'scale(1.03)' : 'scale(1)',
                  opacity: isPast ? 0.65 : 1,
                }}
              >
                <div
                  style={{
                    ...mobileStageNumberStyle,
                    background: stage.isHumanGate ? '#f59e0b' : '#6366f1',
                  }}
                >
                  {i + 1}
                </div>
                <div style={mobileIconStyle}>{stage.icon}</div>
                <div style={mobileTextStyle}>
                  <div style={mobileNameStyle}>
                    {stage.name}
                    {stage.isHumanGate && (
                      <span style={mobileHumanBadgeStyle}>Human Gate</span>
                    )}
                  </div>
                  <div style={mobileDescriptionStyle}>{stage.description}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Animation keyframes + responsive visibility                       */
/* ------------------------------------------------------------------ */

const animationStyles = `
@keyframes pipelinePulse {
  0% { left: -10%; opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { left: 110%; opacity: 0; }
}

@keyframes pipelinePulseVertical {
  0% { top: -10%; opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { top: 110%; opacity: 0; }
}

@media (max-width: 900px) {
  .pipeline-desktop { display: none !important; }
  .pipeline-mobile { display: flex !important; }
}

@media (min-width: 901px) {
  .pipeline-desktop { display: flex !important; }
  .pipeline-mobile { display: none !important; }
}
`;

/* ------------------------------------------------------------------ */
/*  Inline styles                                                     */
/* ------------------------------------------------------------------ */

const sectionStyle: React.CSSProperties = {
  background: 'linear-gradient(180deg, #0a0a1a 0%, #0f0f23 100%)',
  padding: '100px 24px',
  overflow: 'hidden',
};

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: 56,
  maxWidth: 700,
  marginLeft: 'auto',
  marginRight: 'auto',
};

const titleStyle: React.CSSProperties = {
  fontSize: '2.5rem',
  fontWeight: 700,
  color: '#ffffff',
  margin: '0 0 16px',
  letterSpacing: '-0.02em',
};

const subtitleStyle: React.CSSProperties = {
  fontSize: '1.125rem',
  color: 'rgba(255,255,255,0.55)',
  margin: 0,
  lineHeight: 1.6,
};

/* ---------- Desktop horizontal flow ---------- */

const scrollContainerStyle: React.CSSProperties = {
  overflowX: 'auto',
  WebkitOverflowScrolling: 'touch',
  paddingBottom: 24,
};

const pipelineTrackStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  minWidth: 'max-content',
  padding: '20px 40px',
};

const stageWrapperStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

const connectorContainerStyle: React.CSSProperties = {
  width: 48,
  height: 2,
  position: 'relative',
  overflow: 'hidden',
};

const connectorLineStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: 2,
  background: '#1e1e3f',
};

const pulseStyle: React.CSSProperties = {
  position: 'absolute',
  top: -2,
  width: 16,
  height: 6,
  borderRadius: 3,
  background: '#6366f1',
  boxShadow: '0 0 12px rgba(99,102,241,0.8)',
  animation: 'pipelinePulse 2.5s ease-in-out infinite',
};

const nodeStyle: React.CSSProperties = {
  position: 'relative',
  width: 130,
  padding: '28px 12px 20px',
  borderRadius: 14,
  border: '1.5px solid',
  background: 'rgba(255,255,255,0.05)',
  backdropFilter: 'blur(8px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  transition: 'transform 0.4s ease, box-shadow 0.4s ease, opacity 0.4s ease',
  cursor: 'default',
  flexShrink: 0,
};

const humanBadgeStyle: React.CSSProperties = {
  position: 'absolute',
  top: -10,
  left: '50%',
  transform: 'translateX(-50%)',
  fontSize: '0.6rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: '#0a0a1a',
  background: '#f59e0b',
  padding: '2px 8px',
  borderRadius: 6,
  whiteSpace: 'nowrap',
};

const iconStyle: React.CSSProperties = {
  fontSize: '1.75rem',
  marginBottom: 8,
};

const nameStyle: React.CSSProperties = {
  fontSize: '0.85rem',
  fontWeight: 600,
  color: '#ffffff',
  marginBottom: 4,
  lineHeight: 1.2,
};

const descriptionStyle: React.CSSProperties = {
  fontSize: '0.7rem',
  color: 'rgba(255,255,255,0.45)',
  lineHeight: 1.35,
};

const stageNumberStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: -10,
  left: '50%',
  transform: 'translateX(-50%)',
  width: 20,
  height: 20,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.65rem',
  fontWeight: 700,
  color: '#fff',
};

/* ---------- Mobile vertical flow ---------- */

const mobileContainerStyle: React.CSSProperties = {
  display: 'none',
  flexDirection: 'column',
  alignItems: 'stretch',
  maxWidth: 420,
  margin: '0 auto',
  padding: '0 16px',
};

const mobileStageWrapperStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const mobileConnectorContainerStyle: React.CSSProperties = {
  width: 2,
  height: 28,
  position: 'relative',
  overflow: 'hidden',
};

const mobileConnectorLineStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: 2,
  height: '100%',
  background: '#1e1e3f',
};

const mobilePulseStyle: React.CSSProperties = {
  position: 'absolute',
  left: -2,
  width: 6,
  height: 12,
  borderRadius: 3,
  background: '#6366f1',
  boxShadow: '0 0 12px rgba(99,102,241,0.8)',
  animation: 'pipelinePulseVertical 2.5s ease-in-out infinite',
};

const mobileNodeStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  width: '100%',
  padding: '14px 16px',
  borderRadius: 12,
  border: '1.5px solid',
  background: 'rgba(255,255,255,0.05)',
  transition: 'transform 0.4s ease, box-shadow 0.4s ease, opacity 0.4s ease',
};

const mobileStageNumberStyle: React.CSSProperties = {
  width: 24,
  height: 24,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.7rem',
  fontWeight: 700,
  color: '#fff',
  flexShrink: 0,
};

const mobileIconStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  flexShrink: 0,
};

const mobileTextStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
};

const mobileNameStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  fontWeight: 600,
  color: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  gap: 8,
};

const mobileHumanBadgeStyle: React.CSSProperties = {
  fontSize: '0.55rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: '#0a0a1a',
  background: '#f59e0b',
  padding: '1px 6px',
  borderRadius: 4,
};

const mobileDescriptionStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  color: 'rgba(255,255,255,0.45)',
};
