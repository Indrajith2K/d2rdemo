import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<'enter' | 'hold' | 'tagline' | 'exit'>('enter');

  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    
    // Mobile: 2s total. Desktop: 3s total.
    const t1 = setTimeout(() => setPhase('hold'), isMobile ? 300 : 400);
    const t2 = setTimeout(() => setPhase('tagline'), isMobile ? 700 : 1000);
    const t3 = setTimeout(() => setPhase('exit'), isMobile ? 1600 : 2400);
    const t4 = setTimeout(() => onComplete(), isMobile ? 2000 : 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  const isVisible = phase !== 'exit';
  const logoVisible = phase === 'hold' || phase === 'tagline';
  const taglineVisible = phase === 'tagline';

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(160deg, #f8f4ea 0%, #fdf9f0 35%, #f0e8d0 65%, #e8dfc0 100%)',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.9s ease',
        pointerEvents: isVisible ? 'auto' : 'none',
        overflow: 'hidden',
      }}
    >
      {/* ── Decorative background texture ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(212,170,65,0.12) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(212,170,65,0.10) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(212,170,65,0.06) 0%, transparent 70%)
          `,
          pointerEvents: 'none',
        }}
      />

      {/* ── Subtle grid lines ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(180,150,80,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(180,150,80,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      {/* ── Top golden accent bar ── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: 'linear-gradient(90deg, transparent, #c8991f, #e8c040, #c8991f, transparent)',
          opacity: logoVisible ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }}
      />

      {/* ── Bottom golden accent bar ── */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: 'linear-gradient(90deg, transparent, #c8991f, #e8c040, #c8991f, transparent)',
          opacity: logoVisible ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }}
      />

      {/* ── Corner ornaments ── */}
      {[
        { top: 24, left: 24, borderTop: '2px solid', borderLeft: '2px solid', borderRight: 'none', borderBottom: 'none' },
        { top: 24, right: 24, borderTop: '2px solid', borderRight: '2px solid', borderLeft: 'none', borderBottom: 'none' },
        { bottom: 24, left: 24, borderBottom: '2px solid', borderLeft: '2px solid', borderTop: 'none', borderRight: 'none' },
        { bottom: 24, right: 24, borderBottom: '2px solid', borderRight: '2px solid', borderTop: 'none', borderLeft: 'none' },
      ].map((style, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: 40,
            height: 40,
            borderColor: 'rgba(180,140,40,0.5)',
            borderStyle: 'solid',
            borderTopWidth: style.borderTop ? '2px' : 0,
            borderLeftWidth: style.borderLeft ? '2px' : 0,
            borderRightWidth: style.borderRight ? '2px' : 0,
            borderBottomWidth: style.borderBottom ? '2px' : 0,
            top: style.top,
            left: style.left,
            right: style.right,
            bottom: style.bottom,
            opacity: logoVisible ? 1 : 0,
            transition: `opacity 0.6s ease ${i * 0.1}s`,
          }}
        />
      ))}

      {/* ── Spinning outer ring ── */}
      <div
        style={{
          position: 'absolute',
          width: 420,
          height: 420,
          borderRadius: '50%',
          border: '1px dashed rgba(180,140,40,0.2)',
          animation: 'spinRing 18s linear infinite',
          opacity: logoVisible ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }}
      />

      {/* ── Inner ring ── */}
      <div
        style={{
          position: 'absolute',
          width: 350,
          height: 350,
          borderRadius: '50%',
          border: '1px solid rgba(180,140,40,0.15)',
          animation: 'spinRing 12s linear infinite reverse',
          opacity: logoVisible ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }}
      />

      {/* ── Logo card ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transform: logoVisible ? 'scale(1) translateY(0px)' : 'scale(0.8) translateY(20px)',
          opacity: logoVisible ? 1 : 0,
          transition: 'transform 0.9s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.8s ease',
        }}
      >
        {/* White card behind logo for maximum visibility */}
        <div
          style={{
            background: 'rgba(255,255,255,0.92)',
            borderRadius: 28,
            padding: '36px 48px 28px 48px',
            boxShadow: `
              0 4px 6px rgba(0,0,0,0.04),
              0 12px 40px rgba(180,140,40,0.18),
              0 32px 80px rgba(0,0,0,0.10),
              inset 0 1px 0 rgba(255,255,255,1),
              0 0 0 1px rgba(180,140,40,0.15)
            `,
            backdropFilter: 'blur(12px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0,
          }}
        >
          {/* Logo image */}
          <img
            src="/D2R_Logo_Final.png"
            alt="D2R Dare2Roam Holidays"
            style={{
              width: 300,
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
            draggable={false}
          />

          {/* Gold divider line inside card */}
          <div
            style={{
              marginTop: 16,
              width: 120,
              height: 1,
              background: 'linear-gradient(90deg, transparent, #c8991f, #e8c040, #c8991f, transparent)',
              opacity: 0.7,
            }}
          />
        </div>
      </div>

      {/* ── Tagline + progress bar ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          marginTop: 44,
          textAlign: 'center',
          opacity: taglineVisible ? 1 : 0,
          transform: taglineVisible ? 'translateY(0px)' : 'translateY(14px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        {/* Dot - line - dot ornament */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#c8991f', opacity: 0.7 }} />
          <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, transparent, #c8991f, transparent)' }} />
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#c8991f', opacity: 0.7 }} />
        </div>

        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '10.5px',
            fontWeight: 700,
            letterSpacing: '0.42em',
            color: '#8a6a1a',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          We Take Care of Your Trip
        </p>

        {/* Progress bar */}
        <div
          style={{
            marginTop: 24,
            width: 200,
            height: 2,
            background: 'rgba(180,140,40,0.15)',
            borderRadius: 999,
            overflow: 'hidden',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <div
            style={{
              height: '100%',
              borderRadius: 999,
              background: 'linear-gradient(90deg, #c8991f, #e8c040, #c8991f)',
              backgroundSize: '200% 100%',
              width: taglineVisible ? '100%' : '0%',
              transition: 'width 2s cubic-bezier(0.22, 1, 0.36, 1)',
              boxShadow: '0 0 8px rgba(200,153,31,0.5)',
              animation: taglineVisible ? 'shimmerBar 2s ease infinite' : 'none',
            }}
          />
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes spinRing {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes shimmerBar {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
