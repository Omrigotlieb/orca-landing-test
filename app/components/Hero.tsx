export default function Hero() {
  const pipelineStages = [
    { label: 'Planning', icon: '{}' },
    { label: 'Design', icon: '<>' },
    { label: 'TDD', icon: '//' },
    { label: 'Development', icon: '</>' },
    { label: 'Testing', icon: 'QA' },
    { label: 'Review', icon: 'CR' },
    { label: 'Deploy', icon: '>>' },
  ];

  return (
    <>
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }

        @keyframes flowDot {
          0% { left: -8px; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: calc(100% + 8px); opacity: 0; }
        }

        @keyframes gridPulse {
          0%, 100% { opacity: 0.03; }
          50% { opacity: 0.08; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.4), 0 0 60px rgba(139, 92, 246, 0.2); }
          50% { box-shadow: 0 0 30px rgba(99, 102, 241, 0.6), 0 0 80px rgba(139, 92, 246, 0.3); }
        }

        @keyframes particleFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          25% { transform: translate(100px, -50px) scale(1.2); opacity: 0.6; }
          50% { transform: translate(50px, -100px) scale(0.8); opacity: 0.4; }
          75% { transform: translate(-30px, -60px) scale(1.1); opacity: 0.5; }
        }

        @keyframes particleFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.2; }
          33% { transform: translate(-80px, -40px) scale(1.3); opacity: 0.5; }
          66% { transform: translate(60px, -80px) scale(0.9); opacity: 0.3; }
        }

        @keyframes particleFloat3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.25; }
          20% { transform: translate(40px, -70px) scale(1.1); opacity: 0.4; }
          40% { transform: translate(-60px, -30px) scale(0.85); opacity: 0.5; }
          60% { transform: translate(80px, -90px) scale(1.2); opacity: 0.35; }
          80% { transform: translate(-20px, -50px) scale(0.95); opacity: 0.45; }
        }

        @keyframes stageAppear {
          from { opacity: 0; transform: scale(0.8) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes connectorGrow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @keyframes orbGlow {
          0%, 100% { transform: scale(1); opacity: 0.15; }
          50% { transform: scale(1.3); opacity: 0.25; }
        }

        .hero-cta:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 0 40px rgba(99, 102, 241, 0.7), 0 0 100px rgba(139, 92, 246, 0.4) !important;
        }
      `}</style>

      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0a1a 0%, #0f0f2e 25%, #0a0a1a 50%, #1a0a2e 75%, #0a0a1a 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease infinite',
          overflow: 'hidden',
          padding: '2rem',
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridPulse 8s ease-in-out infinite',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          }}
        />

        {/* Floating particles */}
        {[
          { top: '15%', left: '10%', size: 6, anim: 'particleFloat1', dur: '12s', color: '#6366f1' },
          { top: '25%', left: '80%', size: 4, anim: 'particleFloat2', dur: '10s', color: '#8b5cf6' },
          { top: '60%', left: '15%', size: 5, anim: 'particleFloat3', dur: '14s', color: '#ec4899' },
          { top: '70%', left: '85%', size: 3, anim: 'particleFloat1', dur: '11s', color: '#6366f1' },
          { top: '40%', left: '5%', size: 4, anim: 'particleFloat2', dur: '13s', color: '#8b5cf6' },
          { top: '20%', left: '60%', size: 5, anim: 'particleFloat3', dur: '9s', color: '#ec4899' },
          { top: '80%', left: '40%', size: 3, anim: 'particleFloat1', dur: '15s', color: '#6366f1' },
          { top: '50%', left: '90%', size: 6, anim: 'particleFloat2', dur: '12s', color: '#8b5cf6' },
          { top: '35%', left: '30%', size: 3, anim: 'particleFloat3', dur: '10s', color: '#ec4899' },
          { top: '85%', left: '70%', size: 4, anim: 'particleFloat1', dur: '14s', color: '#6366f1' },
          { top: '10%', left: '45%', size: 5, anim: 'particleFloat2', dur: '11s', color: '#8b5cf6' },
          { top: '55%', left: '55%', size: 3, anim: 'particleFloat3', dur: '13s', color: '#ec4899' },
        ].map((p, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              borderRadius: '50%',
              background: p.color,
              animation: `${p.anim} ${p.dur} ease-in-out infinite`,
              filter: `blur(${p.size > 4 ? 1 : 0}px)`,
            }}
          />
        ))}

        {/* Ambient glow orbs */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '20%',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
            animation: 'orbGlow 8s ease-in-out infinite',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '15%',
            width: 350,
            height: 350,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
            animation: 'orbGlow 10s ease-in-out infinite',
            animationDelay: '3s',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            right: '30%',
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%)',
            animation: 'orbGlow 12s ease-in-out infinite',
            animationDelay: '6s',
            filter: 'blur(80px)',
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: 900,
            textAlign: 'center',
            animation: 'fadeInUp 1s ease-out',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1rem',
              borderRadius: '9999px',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              background: 'rgba(99, 102, 241, 0.1)',
              marginBottom: '2rem',
              animation: 'fadeInUp 1s ease-out',
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#22c55e',
                animation: 'pulse 2s ease-in-out infinite',
                display: 'inline-block',
              }}
            />
            <span style={{ color: '#94a3b8', fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.02em' }}>
              Autonomous Development Pipeline
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              margin: '0 0 1.5rem 0',
              letterSpacing: '-0.03em',
              animation: 'fadeInUp 1s ease-out 0.15s both',
            }}
          >
            <span style={{ color: '#ffffff' }}>AI-Powered{' '}</span>
            <span
              style={{
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Development
            </span>
            <br />
            <span style={{ color: '#ffffff' }}>Orchestration</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#94a3b8',
              lineHeight: 1.7,
              maxWidth: 700,
              margin: '0 auto 2.5rem auto',
              animation: 'fadeInUp 1s ease-out 0.3s both',
            }}
          >
            ORCA manages your entire development lifecycle — from planning to deployment — with
            specialized AI agents that write code, run tests, review quality, and deploy automatically.
          </p>

          {/* CTA Button */}
          <div style={{ animation: 'fadeInUp 1s ease-out 0.45s both' }}>
            <a
              href="#demo"
              className="hero-cta"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2.5rem',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: '#ffffff',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                border: 'none',
                borderRadius: '9999px',
                cursor: 'pointer',
                textDecoration: 'none',
                animation: 'glowPulse 3s ease-in-out infinite',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                letterSpacing: '0.01em',
              }}
            >
              See it in action
              <span style={{ fontSize: '1.2rem', display: 'inline-block' }}>&#8594;</span>
            </a>
          </div>
        </div>

        {/* Pipeline visualization */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            marginTop: '4rem',
            width: '100%',
            maxWidth: 900,
            animation: 'fadeInUp 1s ease-out 0.6s both',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0,
              flexWrap: 'wrap',
              padding: '2rem 1rem',
              position: 'relative',
            }}
          >
            {pipelineStages.map((stage, i) => (
              <div
                key={stage.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  animation: `stageAppear 0.5s ease-out ${0.8 + i * 0.1}s both`,
                }}
              >
                {/* Stage node */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, rgba(99, 102, 241, ${0.15 + i * 0.03}), rgba(139, 92, 246, ${0.1 + i * 0.03}))`,
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'monospace',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#a5b4fc',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Inner glow */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '50%',
                        background: `radial-gradient(circle at center, rgba(99, 102, 241, 0.2) 0%, transparent 70%)`,
                        animation: `pulse ${3 + i * 0.5}s ease-in-out infinite`,
                        animationDelay: `${i * 0.3}s`,
                      }}
                    />
                    <span style={{ position: 'relative', zIndex: 1 }}>{stage.icon}</span>
                  </div>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      color: '#94a3b8',
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {stage.label}
                  </span>
                </div>

                {/* Connector with flowing dot */}
                {i < pipelineStages.length - 1 && (
                  <div
                    style={{
                      width: 48,
                      height: 2,
                      position: 'relative',
                      margin: '0 4px',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {/* Connector line */}
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '100%',
                        background: 'linear-gradient(90deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3))',
                        borderRadius: 1,
                        transformOrigin: 'left',
                        animation: `connectorGrow 0.3s ease-out ${1.0 + i * 0.1}s both`,
                      }}
                    />
                    {/* Flowing dot */}
                    <div
                      style={{
                        position: 'absolute',
                        top: -2,
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, #6366f1, #ec4899)`,
                        boxShadow: '0 0 8px rgba(99, 102, 241, 0.6)',
                        animation: `flowDot ${2 + i * 0.3}s ease-in-out ${1.5 + i * 0.4}s infinite`,
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 120,
            background: 'linear-gradient(to top, #0a0a1a, transparent)',
            pointerEvents: 'none',
          }}
        />
      </section>
    </>
  );
}
