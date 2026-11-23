import React from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-16 sm:py-20 border-t border-slate-200 dark:border-white/[0.07]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Skills
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
            What I work with day to day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0D131F] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] p-6 transition-colors hover:border-emerald-500/40"
            >
              <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border border-slate-200 dark:border-white/[0.08] bg-slate-100 dark:bg-[#151E30] px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 transition-colors hover:border-emerald-500/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
