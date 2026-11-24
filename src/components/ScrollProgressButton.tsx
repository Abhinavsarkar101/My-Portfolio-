import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

interface ScrollProgressButtonProps {
  routeKey?: string;
}

export const ScrollProgressButton: React.FC<ScrollProgressButtonProps> = ({
  routeKey = 'home',
}) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frameId: number | null = null;

    const updateProgress = () => {
      frameId = null;
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress =
        docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;

      setProgress(nextProgress);
      setIsVisible(scrollTop > 24);
    };

    const scheduleUpdate = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate, { passive: true });

    const resizeObserver =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(scheduleUpdate)
        : null;
    if (resizeObserver) {
      resizeObserver.observe(document.documentElement);
    }

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      resizeObserver?.disconnect();
    };
  }, [routeKey]);

  const outerRadius = 22.25;
  const arcRadius = 20;
  const circumference = 2 * Math.PI * arcRadius;
  const dashOffset = circumference * (1 - progress);
  const percentage = Math.round(progress * 100);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={handleScrollToTop}
      aria-label={`Scroll to top (${percentage}% scrolled)`}
      title={`Back to top (${percentage}%)`}
      className={`group fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 w-12 h-12 rounded-full bg-white/95 dark:bg-[#0D131F]/95 backdrop-blur-md shadow-lg shadow-slate-900/10 dark:shadow-black/40 flex items-center justify-center transition-all duration-200 cursor-pointer hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_10px_28px_-6px_rgba(16,185,129,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
        isVisible
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-90 pointer-events-none'
      }`}
    >
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full -rotate-90"
      >
        {/* Crisp outer ring */}
        <circle
          cx="24"
          cy="24"
          r={outerRadius}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          className="text-emerald-600/70 dark:text-emerald-400/60"
        />
        {/* Dynamic scroll progress arc */}
        <circle
          cx="24"
          cy="24"
          r={arcRadius}
          fill="none"
          stroke="currentColor"
          strokeWidth="4.25"
          strokeLinecap="butt"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          className="text-emerald-600 dark:text-emerald-400"
        />
      </svg>

      <ArrowUp className="relative w-[18px] h-[18px] text-emerald-700 dark:text-emerald-400 transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
};
