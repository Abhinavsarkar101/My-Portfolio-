import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { ProductItem } from '../data/portfolioData';
import { ProductMockup } from './ProductMockup';

interface ProjectCardProps {
  product: ProductItem;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ product, index }) => {
  const detailHref = `?project=${encodeURIComponent(product.slug)}`;
  const [activeScreenId, setActiveScreenId] = useState<string>(
    product.screens[0]?.id || 'landing-hero'
  );

  const activeScreen =
    product.screens.find((s) => s.id === activeScreenId) || product.screens[0];

  return (
    <article className="group rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0D131F] shadow-sm dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-emerald-500/50 dark:hover:border-emerald-500/45 hover:shadow-[0_14px_40px_-14px_rgba(16,185,129,0.2)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Left: Multi-Screen Landing Page Gallery (No empty gap; balanced vertical flow) */}
        <div className="lg:col-span-6 p-4 sm:p-6 bg-slate-100/80 dark:bg-[#080C15] border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/[0.06] flex flex-col justify-center gap-4">
          <a
            href={detailHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${product.name} product details in a new tab`}
            className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-xl"
          >
            <div className="transition-transform duration-200 group-hover:scale-[1.01]">
              <ProductMockup
                productId={product.id}
                screenId={activeScreenId}
                compact
              />
            </div>
          </a>

          {/* 4 Landing Page Screenshot Switcher */}
          <div className="space-y-2.5">
            <div
              role="tablist"
              aria-label={`${product.name} landing page screenshots`}
              className="flex flex-wrap items-center gap-1.5"
            >
              {product.screens.map((screen, idx) => {
                const isSelected = screen.id === activeScreenId;
                return (
                  <button
                    key={screen.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveScreenId(screen.id)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                        : 'bg-white dark:bg-[#121A2A] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08] hover:border-emerald-500/40 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {idx + 1}. {screen.label}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
              <span className="truncate">{activeScreen?.caption}</span>
              <a
                href={detailHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-emerald-700 dark:text-emerald-400 hover:underline whitespace-nowrap shrink-0"
              >
                <span>View Product Details</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Product Summary, Key Capabilities & Direct Links */}
        <div className="lg:col-span-6 p-6 sm:p-7 flex flex-col justify-between gap-5">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-xs font-medium text-emerald-700 dark:text-emerald-400 tabular-nums">
                0{index + 1} · GitHub / {product.repoName}
              </span>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                <a
                  href={detailHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  {product.name}
                </a>
              </h3>
              <p className="mt-2 text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
                {product.shortDescription}
              </p>
            </div>

            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {product.keyHighlights.slice(0, 3).map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {product.techStack.join(' · ')}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-slate-200 dark:border-white/[0.06]">
            <a
              href={detailHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-900 dark:bg-emerald-500 hover:bg-slate-800 dark:hover:bg-emerald-400 hover:-translate-y-0.5 text-white dark:text-slate-950 text-xs sm:text-[13px] font-semibold transition-all duration-200 whitespace-nowrap shrink-0"
            >
              <span>View Product Details</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={product.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-200 dark:border-white/[0.1] bg-slate-50 dark:bg-[#121A2A] hover:bg-slate-100 dark:hover:bg-[#182338] hover:border-emerald-500/40 hover:-translate-y-0.5 text-slate-800 dark:text-slate-100 text-xs sm:text-[13px] font-medium transition-all duration-200 whitespace-nowrap shrink-0"
            >
              <span>Working Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={product.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-200 dark:border-white/[0.1] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#182338] hover:border-emerald-500/40 hover:-translate-y-0.5 text-xs sm:text-[13px] font-medium transition-all duration-200 whitespace-nowrap shrink-0"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repo</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
