/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { ArrowDownRight, Github, Linkedin, Mail } from 'lucide-react';
import { DOMAIN_PILLARS, KEY_HIGHLIGHTS, PRODUCTS, PROFILE } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { TypingHeadline } from './components/TypingHeadline';
import { ProjectCard } from './components/ProjectCard';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { CredentialsSection } from './components/CredentialsSection';
import { ContactFooter } from './components/ContactFooter';

function getProjectSlugFromUrl(): string | null {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('project');
  if (slug) return slug.trim().toLowerCase();
  const hashMatch = window.location.hash.match(/^#\/project\/([a-z0-9-]+)$/i);
  return hashMatch ? hashMatch[1].toLowerCase() : null;
}

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('portfolio_theme');
      if (saved === 'light') return false;
      if (saved === 'dark') return true;
    } catch {
      // ignore storage errors
    }
    return true;
  });

  const [activeProjectSlug, setActiveProjectSlug] = useState<string | null>(() =>
    getProjectSlugFromUrl()
  );

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('portfolio_theme', isDark ? 'dark' : 'light');
    } catch {
      // ignore storage errors
    }
  }, [isDark]);

  useEffect(() => {
    const onPopState = () => {
      setActiveProjectSlug(getProjectSlugFromUrl());
    };
    window.addEventListener('popstate', onPopState);
    window.addEventListener('hashchange', onPopState);
    return () => {
      window.removeEventListener('popstate', onPopState);
      window.removeEventListener('hashchange', onPopState);
    };
  }, []);

  const selectedProduct = activeProjectSlug
    ? PRODUCTS.find((p) => p.slug.toLowerCase() === activeProjectSlug)
    : undefined;

  useEffect(() => {
    if (selectedProduct) {
      document.title = `${selectedProduct.name} — ${PROFILE.name}`;
    } else {
      document.title = `${PROFILE.name} — Product Manager Portfolio`;
    }
  }, [selectedProduct]);

  const handleBackHome = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete('project');
    url.hash = '';
    window.history.pushState({}, '', url.toString());
    setActiveProjectSlug(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 dark:bg-[#060911] dark:text-slate-100">
        <Navbar
          isDark={isDark}
          onToggleTheme={() => setIsDark((prev) => !prev)}
          isProjectPage
          onBackHome={handleBackHome}
        />
        <ProjectDetailPage product={selectedProduct} onBackHome={handleBackHome} />
        <ContactFooter />
      </div>
    );
  }

  return (
    <div
      id="top"
      className="min-h-screen bg-[#F8FAFC] text-slate-900 dark:bg-[#060911] dark:text-slate-100"
    >
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((prev) => !prev)} />

      <main>
        {/* Executive Hero Split with Architectural Grid & Subtle Top Spotlight */}
        <section className="relative overflow-hidden py-14 sm:py-20 lg:py-24 bg-architectural-grid">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_75%_55%_at_50%_-10%,rgba(16,185,129,0.14),transparent)] dark:bg-[radial-gradient(ellipse_75%_55%_at_50%_-10%,rgba(16,185,129,0.18),transparent)]"
          />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
              {/* Left Column: Kicker, Typing Headline, Summary & CTAs */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="space-y-5">
                  <div className="text-xs sm:text-sm font-medium text-emerald-700 dark:text-emerald-400">
                    <span>{PROFILE.role}</span>
                    <span className="mx-2 text-slate-400 dark:text-slate-600" aria-hidden="true">·</span>
                    <span className="text-slate-600 dark:text-slate-300">{PROFILE.location}</span>
                  </div>

                  {/* Typing-style headline strictly on the headline */}
                  <TypingHeadline phrases={PROFILE.typingPhrases} />

                  <p className="text-base sm:text-[17px] text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                    {PROFILE.summary}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 dark:bg-emerald-500 hover:bg-slate-800 dark:hover:bg-emerald-400 text-white dark:text-slate-950 text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Explore 3 Shipped Products</span>
                    <ArrowDownRight className="w-4 h-4" />
                  </a>
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-white/[0.1] bg-white dark:bg-[#0D131F] hover:bg-slate-100 dark:hover:bg-[#141D2F] text-slate-800 dark:text-slate-100 text-sm font-medium transition-colors whitespace-nowrap shrink-0"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-white/[0.1] bg-white dark:bg-[#0D131F] hover:bg-slate-100 dark:hover:bg-[#141D2F] text-slate-800 dark:text-slate-100 text-sm font-medium transition-colors whitespace-nowrap shrink-0"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-white/[0.1] bg-white dark:bg-[#0D131F] hover:bg-slate-100 dark:hover:bg-[#141D2F] text-slate-800 dark:text-slate-100 text-sm font-medium transition-colors whitespace-nowrap shrink-0"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Executive Domain Pillars Card */}
              <div className="lg:col-span-5 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white/95 dark:bg-[#0D131F]/95 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] p-6 sm:p-7 flex flex-col justify-between gap-5">
                <div className="text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                  Core Product Pillars
                </div>

                <div className="divide-y divide-slate-200 dark:divide-white/[0.06] flex-1 flex flex-col justify-center">
                  {DOMAIN_PILLARS.map((pillar) => (
                    <div key={pillar.index} className="py-4 first:pt-0 last:pb-0 space-y-1">
                      <div className="flex items-baseline gap-2.5">
                        <span className="font-mono text-xs text-emerald-700 dark:text-emerald-400 tabular-nums">
                          {pillar.index}.
                        </span>
                        <h2 className="font-display text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                          {pillar.title}
                        </h2>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
                        {pillar.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Full-width 4-column Proof Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-slate-200 dark:border-white/[0.08]">
              {KEY_HIGHLIGHTS.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white/90 dark:bg-[#0D131F]/90 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] p-5"
                >
                  <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tabular-nums">
                    {item.value}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured GitHub Products Showcase */}
        <section
          id="projects"
          className="py-16 sm:py-20 border-t border-slate-200 dark:border-white/[0.07]"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Products Built on GitHub
              </h2>
              <p className="mt-2 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Three end-to-end products from my GitHub profile. Switch through the landing page screenshots below, or click any product to open its full case study, live demo, repository, and FAQ in a new tab.
              </p>
            </div>

            <div className="space-y-8">
              {PRODUCTS.map((product, idx) => (
                <ProjectCard key={product.id} product={product} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <ExperienceSection />

        {/* Skills Section (Matching Reference Screenshot) */}
        <SkillsSection />

        {/* Education, Certifications & Languages */}
        <CredentialsSection />
      </main>

      <ContactFooter />
    </div>
  );
}
