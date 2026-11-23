import React from 'react';
import { ExternalLink } from 'lucide-react';
import { EXPERIENCES, HACKATHON } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 border-t border-slate-200 dark:border-white/[0.07]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Work Experience
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Enterprise telecom product ownership, AI-assisted internal tooling, and 0-to-1 D2C execution.
          </p>
        </div>

        <div className="space-y-8">
          {EXPERIENCES.map((exp) => (
            <article
              key={exp.id}
              className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0D131F] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] p-6 sm:p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-md"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                {/* Left Editorial Role Column */}
                <div className="lg:col-span-4 space-y-2 pb-4 lg:pb-0 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/[0.06] lg:pr-6">
                  <div className="font-mono text-xs font-medium text-emerald-700 dark:text-emerald-400 tabular-nums">
                    {exp.period}
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white leading-snug">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {exp.company}
                  </div>
                  {exp.location && (
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {exp.location}
                    </div>
                  )}
                  <p className="pt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {exp.summary}
                  </p>
                </div>

                {/* Right Achievements Column */}
                <div className="lg:col-span-8">
                  <ul className="space-y-3 text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    {exp.highlights.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}

          {/* Hackathon Recognition from Resume */}
          <article className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0D131F] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-md">
            <div className="space-y-1.5 max-w-3xl">
              <div className="text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400">
                Hackathon Recognition
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                {HACKATHON.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {HACKATHON.description}
              </p>
            </div>
            <a
              href={HACKATHON.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-200 dark:border-white/[0.1] bg-slate-50 dark:bg-[#121A2A] hover:bg-slate-100 dark:hover:bg-[#182338] hover:border-emerald-500/40 hover:-translate-y-0.5 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap shrink-0 self-start sm:self-center"
            >
              <span>View Project</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};
