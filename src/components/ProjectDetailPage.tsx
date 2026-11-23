import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
  Monitor,
  Layers,
  Cpu,
  HelpCircle,
  Users,
} from 'lucide-react';
import { ProductItem, PROFILE } from '../data/portfolioData';
import { ProductMockup } from './ProductMockup';

interface ProjectDetailPageProps {
  product: ProductItem;
  onBackHome: () => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  product,
  onBackHome,
}) => {
  const [selectedView, setSelectedView] = useState<string>(
    product.screens[0]?.id || 'landing-hero'
  );
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const isLiveIframe = selectedView === 'live';
  const activeScreenSpec = product.screens.find((s) => s.id === selectedView);

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      {/* Header & Direct Links */}
      <section className="space-y-6">
        <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
          <span>{PROFILE.name}</span>
          <span className="mx-2" aria-hidden="true">·</span>
          <span>GitHub Repository: {product.repoName}</span>
          <span className="mx-2" aria-hidden="true">·</span>
          <span>Product Case Study</span>
        </div>

        <div className="space-y-4">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
            {product.name}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {product.tagline}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href={product.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 dark:bg-emerald-500 hover:bg-slate-800 dark:hover:bg-emerald-400 text-white dark:text-slate-950 text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
          >
            <span>Open Working Demo</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          {product.secondaryDemoUrl && (
            <a
              href={product.secondaryDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-white/[0.1] bg-white dark:bg-[#0D131F] hover:bg-slate-100 dark:hover:bg-[#141D2F] text-slate-800 dark:text-slate-200 text-sm font-medium transition-colors whitespace-nowrap shrink-0"
            >
              <span>GitHub Pages Mirror</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          <a
            href={product.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-white/[0.1] bg-white dark:bg-[#0D131F] hover:bg-slate-100 dark:hover:bg-[#141D2F] text-slate-800 dark:text-slate-200 text-sm font-medium transition-colors whitespace-nowrap shrink-0"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>
        </div>
      </section>

      {/* Landing Page Screenshots & Interactive Live Preview */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
            <Monitor className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <h2>Landing Page Screenshots &amp; Live Demo</h2>
          </div>

          <div
            role="tablist"
            aria-label="Landing page screenshot selector"
            className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-slate-200/70 dark:bg-[#0D131F] border border-slate-200 dark:border-white/[0.08]"
          >
            {product.screens.map((screen) => (
              <button
                key={screen.id}
                type="button"
                role="tab"
                aria-selected={selectedView === screen.id}
                onClick={() => setSelectedView(screen.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedView === screen.id
                    ? 'bg-white dark:bg-[#182235] text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {screen.label}
              </button>
            ))}
            <button
              type="button"
              role="tab"
              aria-selected={isLiveIframe}
              onClick={() => setSelectedView('live')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                isLiveIframe
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-[#182235]'
              }`}
            >
              Interactive Live Embed
            </button>
          </div>
        </div>

        {isLiveIframe ? (
          <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#080C15]">
            <div className="h-9 px-4 bg-slate-100 dark:bg-[#0D131F] border-b border-slate-200 dark:border-white/[0.08] flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="font-mono truncate">{product.demoUrl}</span>
              <a
                href={product.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400 hover:underline whitespace-nowrap shrink-0"
              >
                <span>Open Fullscreen</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <iframe
              src={product.demoUrl}
              title={`${product.name} live interactive demo`}
              className="w-full h-[480px] sm:h-[540px] bg-white"
              loading="lazy"
            />
          </div>
        ) : (
          <ProductMockup productId={product.id} screenId={selectedView} />
        )}

        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          {isLiveIframe
            ? `Embedded live preview of ${product.demoUrl}. If your browser restricts embedded frames or Render cold-starts, use "Open Working Demo" above.`
            : activeScreenSpec?.caption}
        </p>
      </section>

      {/* Problem & Overview */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-white/[0.08]">
        <div className="rounded-xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0D131F] p-6 space-y-3">
          <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
            Problem Addressed
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {product.problemSolved}
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0D131F] p-6 space-y-3">
          <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
            Product Overview
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {product.overview}
          </p>
        </div>
      </section>

      {/* User Personas */}
      <section className="space-y-6 pt-4 border-t border-slate-200 dark:border-white/[0.08]">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            User Personas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {product.userPersonas.map((persona) => (
            <div
              key={persona.title}
              className="rounded-xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0D131F] p-6 space-y-3"
            >
              <div className="flex items-center justify-between gap-2 text-xs font-mono">
                <span className="text-emerald-700 dark:text-emerald-400 font-medium">
                  {persona.segment}
                </span>
                <span className="text-slate-500 dark:text-slate-400">
                  {persona.stage}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                {persona.title}
              </h3>
              <div className="space-y-2 text-sm leading-relaxed">
                <p className="text-slate-600 dark:text-slate-300">
                  <span className="font-semibold text-slate-900 dark:text-slate-100">Situation: </span>
                  {persona.situation}
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">How {product.name.split(' ')[0]} Helps: </span>
                  {persona.howItHelps}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Modules Built */}
      <section className="space-y-6 pt-4 border-t border-slate-200 dark:border-white/[0.08]">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            What Was Built (Core Modules)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {product.modules.map((mod, idx) => (
            <div
              key={mod.title}
              className="rounded-xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0D131F] p-6 space-y-3"
            >
              <div className="text-xs font-mono text-emerald-700 dark:text-emerald-400 tabular-nums">
                Module 0{idx + 1}
              </div>
              <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                {mod.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {mod.description}
              </p>
              <ul className="space-y-2 pt-1 text-sm text-slate-600 dark:text-slate-400">
                {mod.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2.5">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture & Tech Stack */}
      <section className="space-y-5 pt-4 border-t border-slate-200 dark:border-white/[0.08]">
        <div className="flex items-center gap-2">
          <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Architecture &amp; Tech Stack
          </h2>
        </div>

        <div className="rounded-xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0D131F] p-6 space-y-4">
          <div className="text-sm font-medium text-slate-800 dark:text-slate-200">
            {product.techStack.join(' · ')}
          </div>
          <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
            {product.architectureSummary.map((line) => (
              <li key={line} className="flex items-start gap-2.5">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 shrink-0" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Product-Specific FAQ Accordion */}
      <section className="space-y-5 pt-4 border-t border-slate-200 dark:border-white/[0.08]">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="divide-y divide-slate-200 dark:divide-white/[0.06] rounded-xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0D131F]">
          {product.faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors cursor-pointer"
                >
                  <span className="font-display text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Return Navigation */}
      <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 dark:border-white/[0.08]">
        <a
          href="?"
          onClick={(e) => {
            e.preventDefault();
            onBackHome();
          }}
          className="text-sm font-medium text-emerald-700 dark:text-emerald-400 hover:underline"
        >
          ← Return to All Portfolio Sections
        </a>
        <div className="flex items-center gap-4 text-sm">
          <a
            href={product.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          >
            GitHub Repository ↗
          </a>
          <a
            href={product.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          >
            Working Demo ↗
          </a>
        </div>
      </div>
    </main>
  );
};
