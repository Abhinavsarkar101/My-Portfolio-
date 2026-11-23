import React, { useState } from 'react';
import { BookOpen, Check, Copy, Download, ExternalLink, Github } from 'lucide-react';
import { PRODUCTS, PROFILE } from '../data/portfolioData';

interface ReadmePageProps {
  onBackHome: () => void;
}

function buildMarkdownText(): string {
  const productBlocks = PRODUCTS.map(
    (p, idx) => `### ${idx + 1}. ${p.name} (\`${p.repoName}\`)
- **GitHub Repository:** ${p.githubUrl}
- **Working Demo:** ${p.demoUrl}${p.secondaryDemoUrl ? ` (GitHub Pages mirror: ${p.secondaryDemoUrl})` : ''}
- **Overview:** ${p.overview}
- **User Personas:**
${p.userPersonas.map((u) => `  - **${u.title} (${u.stage}):** ${u.situation} — *${u.howItHelps}*`).join('\n')}
- **Core Modules:**
${p.modules.map((m) => `  - **${m.title}:** ${m.description}`).join('\n')}
- **Tech Stack:** ${p.techStack.join(', ')}`
  ).join('\n\n---\n\n');

  return `# ${PROFILE.name} — Product Manager Portfolio

Portfolio website for **${PROFILE.name}** (${PROFILE.role}, ${PROFILE.location}), showcasing work experience, product management skills, and three shipped products from GitHub.

- **LinkedIn:** ${PROFILE.linkedin}
- **GitHub:** ${PROFILE.github}
- **Email:** ${PROFILE.email}

---

## Products Showcased from GitHub

${productBlocks}

---

## Local Development

\`\`\`bash
npm install
npm run dev
npm run lint
npm run build
\`\`\``;
}

export const ReadmePage: React.FC<ReadmePageProps> = ({ onBackHome }) => {
  const [copied, setCopied] = useState(false);

  const markdownSource = buildMarkdownText();

  const handleCopyMarkdown = () => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(markdownSource).then(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const handleDownloadMarkdown = () => {
    const blob = new Blob([markdownSource], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      {/* Header */}
      <section className="space-y-5 border-b border-slate-200 dark:border-white/[0.08] pb-8">
        <div className="flex items-center gap-2 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400">
          <BookOpen className="w-4 h-4" />
          <span>README.md · Portfolio &amp; GitHub Products Documentation</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div className="space-y-2 max-w-2xl">
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Portfolio README
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Complete documentation of the portfolio architecture and every product showcased from{' '}
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 dark:text-emerald-400 hover:underline font-medium"
              >
                github.com/Abhinavsarkar101
              </a>
              .
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={handleCopyMarkdown}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-200 dark:border-white/[0.1] bg-white dark:bg-[#0D131F] hover:bg-slate-100 dark:hover:bg-[#141D2F] text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied Markdown' : 'Copy README.md'}</span>
            </button>

            <button
              type="button"
              onClick={handleDownloadMarkdown}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-900 dark:bg-emerald-500 hover:bg-slate-800 dark:hover:bg-emerald-400 text-white dark:text-slate-950 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download README.md</span>
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0D131F] p-6 sm:p-8 space-y-4">
        <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
          1. Overview &amp; Repository Grounding
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          This portfolio documents the product management work of <strong>{PROFILE.name}</strong> ({PROFILE.role}, {PROFILE.location}). All work experience, skills, education, certifications, and project breakdowns are sourced exclusively from the attached resume and live GitHub repositories (<code>Columbus.ai-</code>, <code>Signaliq</code>, and <code>pmpeak</code>).
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-sm">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-[#080C15] p-4 hover:border-emerald-500/40 transition-colors"
          >
            <div className="text-xs font-mono text-emerald-700 dark:text-emerald-400">GitHub</div>
            <div className="font-medium text-slate-900 dark:text-white mt-1 truncate">
              github.com/Abhinavsarkar101
            </div>
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-[#080C15] p-4 hover:border-emerald-500/40 transition-colors"
          >
            <div className="text-xs font-mono text-emerald-700 dark:text-emerald-400">LinkedIn</div>
            <div className="font-medium text-slate-900 dark:text-white mt-1 truncate">
              abhinav-sarkar-product-manager
            </div>
          </a>
          <a
            href={PROFILE.resumeUrl}
            download={PROFILE.resumeDownloadName}
            className="rounded-xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-[#080C15] p-4 hover:border-emerald-500/40 transition-colors"
          >
            <div className="text-xs font-mono text-emerald-700 dark:text-emerald-400">Resume PDF</div>
            <div className="font-medium text-slate-900 dark:text-white mt-1 truncate">
              Download Attached Resume
            </div>
          </a>
        </div>
      </section>

      {/* 3 Products Documentation */}
      <section className="space-y-6">
        <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
          2. GitHub Products Documented
        </h2>

        <div className="space-y-6">
          {PRODUCTS.map((product, idx) => (
            <article
              key={product.id}
              className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0D131F] p-6 sm:p-8 space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-white/[0.06]">
                <div>
                  <div className="font-mono text-xs text-emerald-700 dark:text-emerald-400">
                    0{idx + 1} · Repo: {product.repoName}
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                    {product.name}
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                  <a
                    href={`?project=${encodeURIComponent(product.slug)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-slate-900 dark:bg-emerald-500 text-white dark:text-slate-950 text-xs font-semibold hover:bg-slate-800 dark:hover:bg-emerald-400 transition-colors"
                  >
                    <span>View Product Details</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={product.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/[0.1] text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#141D2F] transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={product.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/[0.1] text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#141D2F] transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {product.overview}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
                <div className="space-y-2">
                  <div className="font-display font-semibold text-slate-900 dark:text-white">
                    Core Modules
                  </div>
                  <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
                    {product.modules.map((m) => (
                      <li key={m.title} className="flex items-start gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span>
                          <strong className="text-slate-800 dark:text-slate-100">{m.title}:</strong>{' '}
                          {m.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="font-display font-semibold text-slate-900 dark:text-white">
                    Target User Personas
                  </div>
                  <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
                    {product.userPersonas.map((u) => (
                      <li key={u.title} className="flex items-start gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span>
                          <strong className="text-slate-800 dark:text-slate-100">{u.title}</strong>{' '}
                          ({u.stage})
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2 text-xs text-slate-500 dark:text-slate-400">
                    Stack: {product.techStack.join(' · ')}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Architecture & Setup */}
      <section className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0D131F] p-6 sm:p-8 space-y-4">
        <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
          3. Portfolio Architecture &amp; Local Setup
        </h2>
        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <li>• Built with React 19, TypeScript, Vite (with relative base <code>./</code> for GitHub Pages), Tailwind CSS v4, and Lucide Icons.</li>
          <li>• Main view includes typing headline animation, Abhinav’s headshot, one-click Resume PDF download, 4-screen landing galleries per product, work experience, skills grid, and credentials.</li>
          <li>• Clicking any product opens its dedicated case study page (<code>?project=&lt;slug&gt;</code>) in a new tab with landing page screenshots, interactive live embed, user personas, modules, and FAQs.</li>
        </ul>
        <pre className="rounded-xl bg-slate-950 text-slate-100 p-4 text-xs font-mono overflow-x-auto">
{`npm install
npm run dev     # Start local server on port 3000
npm run lint    # Run TypeScript verification
npm run build   # Build static production bundle into dist/`}
        </pre>
      </section>

      <div className="pt-2">
        <a
          href="?"
          onClick={(e) => {
            e.preventDefault();
            onBackHome();
          }}
          className="text-sm font-medium text-emerald-700 dark:text-emerald-400 hover:underline"
        >
          ← Back to Portfolio Home
        </a>
      </div>
    </main>
  );
};
