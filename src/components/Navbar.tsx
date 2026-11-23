import React from 'react';
import { Moon, Sun, ArrowLeft } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  isProjectPage?: boolean;
  onBackHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleTheme,
  isProjectPage = false,
  onBackHome,
}) => {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 dark:border-white/[0.07] bg-[#F8FAFC]/90 dark:bg-[#060911]/85 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        {isProjectPage ? (
          <a
            href="?"
            onClick={(e) => {
              if (onBackHome) {
                e.preventDefault();
                onBackHome();
              }
            }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </a>
        ) : (
          <a
            href="#top"
            className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0"
          >
            Abhinav Sarkar
          </a>
        )}

        {/* Zone 2: Clean single-line navigation links */}
        {!isProjectPage && (
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300"
          >
            <a
              href="#projects"
              className="hover:text-slate-900 dark:hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-slate-900 dark:hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="hover:text-slate-900 dark:hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0"
            >
              Skills
            </a>
            <a
              href="#credentials"
              className="hover:text-slate-900 dark:hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0"
            >
              Education
            </a>
            <a
              href="#contact"
              className="hover:text-slate-900 dark:hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0"
            >
              Contact
            </a>
          </nav>
        )}

        {/* Zone 3: Theme Toggle Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-10 h-10 rounded-lg border border-slate-200 dark:border-white/[0.1] bg-white dark:bg-[#0D131F] text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#141D2F] flex items-center justify-center transition-colors cursor-pointer"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
