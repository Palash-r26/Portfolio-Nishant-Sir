import { useState, useRef, useEffect, useCallback } from "react";
import portrait from "@/assets/professor-portrait.png";

export function HeroPortrait() {
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const frameRef = useRef<number | null>(null);
  const targetPos = useRef<{ xPct: number; yPct: number } | null>(null);

  const updateFrame = useCallback(() => {
    if (!targetPos.current) return;
    const { xPct, yPct } = targetPos.current;
    const maxTilt = 12;
    const tiltX = (0.5 - yPct) * (maxTilt * 2);
    const tiltY = (xPct - 0.5) * (maxTilt * 2);

    setTilt({ x: tiltX, y: tiltY, active: true });
    setGlare({ x: xPct * 100, y: yPct * 100, opacity: 0.32 });
    frameRef.current = null;
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPct = Math.max(0, Math.min(1, x / rect.width));
    const yPct = Math.max(0, Math.min(1, y / rect.height));

    targetPos.current = { xPct, yPct };
    if (!frameRef.current) {
      frameRef.current = requestAnimationFrame(updateFrame);
    }
  };

  const handleMouseLeave = () => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    targetPos.current = null;
    setTilt({ x: 0, y: 0, active: false });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div className="portrait-wrap">
      <div
        className="portrait-editorial-frame"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: tilt.active
            ? `perspective(1000px) rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(2)}deg) scale3d(1.025, 1.025, 1.025)`
            : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          boxShadow: tilt.active
            ? `${(-tilt.y * 1.6).toFixed(1)}px ${(tilt.x * 1.6 + 24).toFixed(1)}px 44px rgba(154, 110, 36, 0.16), 0 10px 28px rgba(17, 20, 26, 0.08)`
            : "0 16px 40px rgba(17, 20, 26, 0.05)",
          transition: tilt.active
            ? "transform 0.08s ease-out, box-shadow 0.15s ease-out"
            : "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.6s ease",
        }}
      >
        <div
          className="portrait-glare-overlay"
          style={{
            opacity: glare.opacity,
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.45) 0%, rgba(201, 161, 90, 0.18) 35%, transparent 70%)`,
          }}
          aria-hidden="true"
        />
        <div className="portrait-corner-tl" aria-hidden="true" />
        <div className="portrait-corner-tr" aria-hidden="true" />
        <div className="portrait-corner-bl" aria-hidden="true" />
        <div className="portrait-corner-br" aria-hidden="true" />
        <div className="portrait-img-box">
          <img
            src={portrait}
            alt="Dr. Nishant Jain | Assistant Professor of Computer Science & Design"
            width={912}
            height={1200}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="portrait-img"
            suppressHydrationWarning
          />
        </div>
        <div className="portrait-caption-meta">
          <span className="caption-tag">IIT (ISM) DHANBAD ALUMNUS</span>
          <span className="caption-sub">PH.D. IN COMPUTER SCIENCE & ENG.</span>
        </div>
      </div>
    </div>
  );
}
