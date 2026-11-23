import React, { useEffect, useState } from 'react';

interface TypingHeadlineProps {
  phrases: string[];
}

export const TypingHeadline: React.FC<TypingHeadlineProps> = ({ phrases }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(phrases[0]?.length ?? 0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(media.matches);
    const onChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || phrases.length === 0) return;

    const currentPhrase = phrases[phraseIndex];
    let timeoutId: number;

    if (!isDeleting && charIndex < currentPhrase.length) {
      timeoutId = window.setTimeout(() => {
        setCharIndex((c) => c + 1);
      }, 48);
    } else if (!isDeleting && charIndex === currentPhrase.length) {
      timeoutId = window.setTimeout(() => {
        setIsDeleting(true);
      }, 1750);
    } else if (isDeleting && charIndex > 0) {
      timeoutId = window.setTimeout(() => {
        setCharIndex((c) => c - 1);
      }, 24);
    } else {
      timeoutId = window.setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((idx) => (idx + 1) % phrases.length);
      }, 260);
    }

    return () => window.clearTimeout(timeoutId);
  }, [charIndex, isDeleting, phraseIndex, phrases, prefersReducedMotion]);

  const activeText = prefersReducedMotion
    ? phrases[0]
    : phrases[phraseIndex].slice(0, charIndex);

  return (
    <h1 className="font-typing text-2xl sm:text-4xl lg:text-[2.65rem] font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.2] min-h-[3.2em] sm:min-h-[2.6em] text-balance">
      <span>{activeText}</span>
      {!prefersReducedMotion && (
        <span
          aria-hidden="true"
          className="inline-block w-[3px] h-[0.95em] ml-1.5 align-middle bg-emerald-600 dark:bg-emerald-400 animate-cursor-blink"
        />
      )}
    </h1>
  );
};
