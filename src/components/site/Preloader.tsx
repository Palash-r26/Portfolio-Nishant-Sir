import { useEffect, useState, useRef } from "react";

interface PreloaderProps {
  onComplete?: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "exiting" | "hidden">("loading");
  const rafId = useRef<number | null>(null);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    // Check if reduced motion is requested
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasSeen = sessionStorage.getItem("nj_preloader_seen");

    if (prefersReducedMotion || hasSeen) {
      setPhase("hidden");
      if (onComplete) onComplete();
      return;
    }

    const duration = 3800; // ~3.8 seconds

    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const t = Math.min(elapsed / duration, 1);

      // Non-linear organic curve with realistic asset loading pauses:
      // - Quick ramp to ~40% in first 25% of time
      // - Gentle stutter around 65%-78%
      // - Decisive snap to 100%
      let currentProgress: number;
      if (t < 0.28) {
        // Fast opening ramp (0 to 42)
        currentProgress = (t / 0.28) * 42;
      } else if (t < 0.65) {
        // Steady middle climb (42 to 74)
        const subT = (t - 0.28) / (0.65 - 0.28);
        currentProgress = 42 + subT * 32;
      } else if (t < 0.82) {
        // Realistic mid-pause / calculation stutter (74 to 84)
        const subT = (t - 0.65) / (0.82 - 0.65);
        currentProgress = 74 + Math.sin(subT * Math.PI * 0.5) * 10;
      } else {
        // Final rapid snap to 100
        const subT = (t - 0.82) / (1 - 0.82);
        currentProgress = 84 + Math.pow(subT, 2) * 16;
      }

      const rounded = Math.min(Math.round(currentProgress), 100);
      setProgress(rounded);

      if (t < 1) {
        rafId.current = requestAnimationFrame(animate);
      } else {
        triggerExit();
      }
    };

    rafId.current = requestAnimationFrame(animate);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") triggerSkip();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const triggerExit = () => {
    sessionStorage.setItem("nj_preloader_seen", "true");
    setPhase("exiting");
    if (onComplete) {
      // Trigger hero entrance ~200ms before preloader fully slides out
      setTimeout(onComplete, 220);
    }
    setTimeout(() => {
      setPhase("hidden");
    }, 950);
  };

  const triggerSkip = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    setProgress(100);
    triggerExit();
  };

  if (phase === "hidden") return null;

  return (
    <div
      className={`preloader-overlay ${phase === "exiting" ? "is-exiting" : ""}`}
      aria-hidden={phase === "exiting"}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="preloader-inner">
        {/* Top Header Row with Skip Button */}
        <div className="preloader-top">
          <div className="preloader-brand">
            <span className="preloader-marker" />
            <span className="preloader-tag">DR. NISHANT JAIN | ACADEMIC PORTFOLIO</span>
          </div>
          <button
            type="button"
            className="preloader-skip"
            onClick={triggerSkip}
            aria-label="Skip introduction animation"
          >
            Skip [Esc]
          </button>
        </div>

        {/* Center / Bottom Counter & Progress */}
        <div className="preloader-center">
          <div className="preloader-counter-wrap">
            <span className="preloader-num">{progress}</span>
            <span className="preloader-percent">%</span>
          </div>
          <div className="preloader-track" aria-hidden="true">
            <div
              className="preloader-bar"
              style={{ transform: `scaleX(${progress / 100})` }}
            />
          </div>
          <div className="preloader-subtext">
            <span>IIT (ISM) DHANBAD ALUMNUS</span>
            <span>·</span>
            <span>EXPLAINABLE MACHINE LEARNING</span>
            <span>·</span>
            <span>MITS GWALIOR</span>
          </div>
        </div>
      </div>
    </div>
  );
}
