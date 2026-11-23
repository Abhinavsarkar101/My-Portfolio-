import React from 'react';
import { Mail, Linkedin, Github, MapPin, Phone, ExternalLink } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const ContactFooter: React.FC = () => {
  return (
    <footer
      id="contact"
      className="py-16 border-t border-slate-200 dark:border-white/[0.07]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0D131F] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Let’s Build Something Meaningful
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Open to Product Management conversations across B2B SaaS, enterprise platforms, and AI-native products.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{PROFILE.location}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono tabular-nums">
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{PROFILE.phone}</span>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 dark:bg-emerald-500 hover:bg-slate-800 dark:hover:bg-emerald-400 text-white dark:text-slate-950 text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
            >
              <Mail className="w-4 h-4" />
              <span>{PROFILE.email}</span>
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-white/[0.1] bg-slate-50 dark:bg-[#121A2A] hover:bg-slate-100 dark:hover:bg-[#182338] text-slate-800 dark:text-slate-100 text-sm font-medium transition-colors whitespace-nowrap shrink-0"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-white/[0.1] bg-slate-50 dark:bg-[#121A2A] hover:bg-slate-100 dark:hover:bg-[#182338] text-slate-800 dark:text-slate-100 text-sm font-medium transition-colors whitespace-nowrap shrink-0"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <span>
            © {new Date().getFullYear()} {PROFILE.name}. Sourced from resume and GitHub repositories.
          </span>
          <div className="flex items-center gap-5">
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-emerald-400 transition-colors">
              LinkedIn
            </a>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-emerald-400 transition-colors">
              GitHub
            </a>
            <a href={`mailto:${PROFILE.email}`} className="hover:text-slate-900 dark:hover:text-emerald-400 transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
