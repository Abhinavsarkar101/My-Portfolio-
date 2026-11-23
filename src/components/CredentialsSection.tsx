import React from 'react';
import { EDUCATION, CERTIFICATIONS, LANGUAGES } from '../data/portfolioData';

export const CredentialsSection: React.FC = () => {
  return (
    <section
      id="credentials"
      className="py-16 sm:py-20 border-t border-slate-200 dark:border-white/[0.07]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education &amp; Certifications
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Academic background, fellowships, and AI product credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-5">
            {EDUCATION.map((edu) => (
              <div
                key={edu.institution}
                className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0D131F] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] p-6 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                    {edu.institution}
                  </h3>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 tabular-nums shrink-0">
                    {edu.period}
                  </span>
                </div>
                <div className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                  {edu.degree}
                </div>
                <ul className="space-y-2 pt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {edu.notes.map((note) => (
                    <li key={note} className="flex items-start gap-2.5">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications & Languages Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0D131F] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] p-6 space-y-4">
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                Certifications
              </h3>
              <ul className="divide-y divide-slate-200 dark:divide-white/[0.06]">
                {CERTIFICATIONS.map((cert) => (
                  <li
                    key={cert.name}
                    className="py-3 first:pt-0 last:pb-0 flex items-baseline justify-between gap-4 text-sm"
                  >
                    <span className="text-slate-700 dark:text-slate-200 font-medium">
                      {cert.name}
                    </span>
                    <span className="font-mono text-xs text-emerald-700 dark:text-emerald-400 tabular-nums shrink-0">
                      {cert.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0D131F] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] p-6 space-y-4">
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                Languages
              </h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {LANGUAGES.map((lang) => (
                  <div
                    key={lang.name}
                    className="rounded-lg border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-[#080C15] px-3.5 py-2.5"
                  >
                    <div className="font-medium text-slate-900 dark:text-white">{lang.name}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{lang.level}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
