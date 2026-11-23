import React from 'react';
import {
  AlertTriangle,
  Award,
  BookOpen,
  CheckCircle2,
  FileText,
  Layers,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react';

interface ProductMockupProps {
  productId: 'compass' | 'signaliq' | 'pmpeak';
  screenId?: string;
  compact?: boolean;
}

export const ProductMockup: React.FC<ProductMockupProps> = ({
  productId,
  screenId = 'landing-hero',
  compact = false,
}) => {
  const heightClass = compact ? 'h-60 sm:h-[268px]' : 'h-[370px] sm:h-[430px]';

  if (productId === 'compass') {
    const active = screenId.startsWith('landing-') ? screenId : 'landing-hero';

    return (
      <div
        className={`w-full ${heightClass} rounded-xl overflow-hidden border border-slate-800 bg-[#070B14] text-slate-100 flex flex-col select-none`}
      >
        <div className="h-8 bg-[#0C1220] border-b border-slate-800/90 px-3 flex items-center justify-between text-[11px] text-slate-400 shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          </div>
          <span className="font-mono text-[10px] text-slate-400 truncate max-w-[240px]">
            columbus-ai-61q7.onrender.com
          </span>
          <span className="text-[10px] text-[#00DF89] font-medium">Compass Landing</span>
        </div>

        {active === 'landing-hero' && (
          <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#070B14] via-[#0B1324] to-[#070B14]">
            <div className="flex items-center justify-between text-[11px] border-b border-slate-800/80 pb-2.5">
              <span className="font-bold text-white tracking-tight">Compass</span>
              <div className="hidden sm:flex items-center gap-4 text-slate-400">
                <span>Assess</span>
                <span>Resume Studio</span>
                <span className="text-[#00DF89]">Job Search</span>
                <span>JD Match</span>
                <span>Company Prep</span>
              </div>
              <span className="px-2.5 py-1 rounded bg-[#00DF89] text-slate-950 font-semibold text-[10px]">
                Start Diagnostic Free
              </span>
            </div>

            <div className="grid grid-cols-12 gap-4 items-center my-auto py-1">
              <div className="col-span-12 sm:col-span-7 space-y-2.5">
                <div className="text-[10px] font-semibold tracking-wider text-[#00DF89]">
                  THE CAREER OPERATING SYSTEM FOR MBAS
                </div>
                <div
                  className={`font-display font-bold text-white leading-tight ${
                    compact ? 'text-base sm:text-lg' : 'text-xl sm:text-2xl'
                  }`}
                >
                  Stop guessing your MBA career.{' '}
                  <span className="text-[#00DF89]">Decide with empirical certainty.</span>
                </div>
                {!compact && (
                  <p className="text-xs text-slate-400 leading-relaxed max-w-md">
                    Calibrate specialization across 24 behavioral archetypes, audit resumes against placement committee ATS benchmarks, and filter live openings by role, experience &amp; recency.
                  </p>
                )}
                <div className="rounded-lg bg-emerald-950/40 border border-[#00DF89]/35 p-2.5 text-[11px]">
                  <div className="font-semibold text-[#00DF89]">
                    New Release · Precision Live Job Search (#jobs)
                  </div>
                  <div className="text-slate-300 mt-0.5 truncate">
                    Indeed India, Naukri, LinkedIn &amp; Greenhouse with 24h freshness cutoffs
                  </div>
                </div>
              </div>

              <div className="hidden sm:block col-span-5 rounded-xl border border-slate-800 bg-[#0E1526] p-3.5 space-y-2.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-white">XYZ Bullet Validator</span>
                  <span className="text-amber-400 font-mono tabular-nums">38 → 92</span>
                </div>
                <div className="rounded bg-[#070B14] border border-slate-800 p-2 text-[10px] text-slate-400">
                  Before: Responsible for managing product launches...
                </div>
                <div className="rounded bg-emerald-950/35 border border-[#00DF89]/35 p-2 text-[10px] text-emerald-200">
                  After: Spearheaded GTM strategy for 3 SaaS products, lifting conversion +28% ($420K ARR).
                </div>
              </div>
            </div>
          </div>
        )}

        {active === 'landing-traps' && (
          <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between overflow-hidden bg-[#070B14]">
            <div>
              <div className="text-[10px] font-semibold text-[#00DF89] uppercase tracking-wider">
                Problem Framing on Landing Page
              </div>
              <div className="font-display text-sm sm:text-base font-bold text-white mt-0.5">
                Designed backwards from the 6 traps that derail MBA candidates
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 my-auto text-[10px]">
              {[
                { t: 'Specialization Doubts & Herd Mentality', d: '24 behavioral archetypes calibrate real domain fit.' },
                { t: 'The "Only 4 Job Titles" Blindspot', d: 'Maps post-MBA roles across PM, Consulting & Finance.' },
                { t: 'The ATS Screening Black Hole', d: 'Deterministic 70-term taxonomy catches missing evidence.' },
                { t: 'Unquantified "Google XYZ" Bullets', d: 'Live diagnostic enforces Accomplished [X] by [Y] via [Z].' },
                { t: 'Cold Outreach Silence', d: 'Boolean LinkedIn specs & calibrated alumni scripts.' },
                { t: 'Device Lock-In & Lost Notes', d: 'Firebase Cloud Sync + localStorage offline continuity.' },
              ].map((trap) => (
                <div key={trap.t} className="rounded-lg border border-slate-800 bg-[#0E1526] p-2.5 space-y-1">
                  <div className="font-semibold text-white leading-snug">{trap.t}</div>
                  {!compact && <div className="text-slate-400 leading-snug">{trap.d}</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {active === 'landing-sim' && (
          <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between overflow-hidden bg-[#070B14]">
            <div className="flex items-center justify-between gap-2">
              <div>
                <div className="text-[10px] font-semibold text-[#00DF89] uppercase tracking-wider">
                  Interactive Landing Sandbox
                </div>
                <div className="font-display text-sm sm:text-base font-bold text-white">
                  Test four core engines right in your browser
                </div>
              </div>
              <span className="text-[10px] font-mono text-slate-400">4 Live Tabs</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px]">
              <div className="rounded-md bg-[#00DF89] text-slate-950 font-semibold px-2 py-1.5 text-center">
                Behavioral Matcher
              </div>
              <div className="rounded-md bg-[#0E1526] border border-slate-800 text-slate-300 px-2 py-1.5 text-center">
                XYZ Validator
              </div>
              <div className="rounded-md bg-[#0E1526] border border-slate-800 text-slate-300 px-2 py-1.5 text-center">
                Cold Outreach
              </div>
              <div className="rounded-md bg-[#0E1526] border border-slate-800 text-slate-300 px-2 py-1.5 text-center">
                Strict Job Filter
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-[#0E1526] p-3.5 space-y-2 text-[11px]">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5 text-[#00DF89]" />
                  <span>Strict Role, Experience &amp; Freshness Filter Engine</span>
                </span>
                <span className="text-[10px] text-[#00DF89]">0 Noise Listings</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-[10px] text-slate-300">
                <div className="rounded bg-[#070B14] border border-slate-800 p-2">
                  Role: Associate Product Manager
                </div>
                <div className="rounded bg-[#070B14] border border-slate-800 p-2">
                  Experience: Fresher / 0–1 yrs
                </div>
                <div className="rounded bg-[#070B14] border border-slate-800 p-2">
                  Freshness: Last 24 hours
                </div>
              </div>
            </div>
          </div>
        )}

        {active === 'landing-modules' && (
          <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between overflow-hidden bg-[#070B14]">
            <div>
              <div className="text-[10px] font-semibold text-[#00DF89] uppercase tracking-wider">
                Full Placement Architecture
              </div>
              <div className="font-display text-sm sm:text-base font-bold text-white">
                Seven synchronized modules for the complete placement cycle
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] my-auto">
              {[
                '01 · Diagnostic Assessment',
                '02 · Resume Studio & ATS Audit',
                '03 · Precision Live Job Search',
                '04 · Deterministic Job Matcher',
                '05 · People Map & Outreach',
                '06 · Company Interview Prep',
                '07 · Cloud Sync & Candidate OS',
                '12 Top MBA Recruiter Dossiers',
              ].map((m) => (
                <div
                  key={m}
                  className="rounded-lg border border-slate-800 bg-[#0E1526] px-2.5 py-2 font-medium text-slate-200"
                >
                  {m}
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-slate-800 bg-[#0C1220] px-3 py-2 text-[10px] text-slate-300 flex items-center justify-between">
              <span>Built for Engineers → PM, Lateral → MBB Consulting &amp; Marketing/Finance Tracks</span>
              <span className="text-[#00DF89] font-semibold">FAQ + Enquiry</span>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (productId === 'signaliq') {
    const active = screenId.startsWith('landing-') ? screenId : 'landing-hero';

    return (
      <div
        className={`w-full ${heightClass} rounded-xl overflow-hidden border border-slate-800 bg-slate-900 text-slate-100 flex flex-col select-none`}
      >
        <div className="h-8 bg-slate-950 border-b border-slate-800 px-3 flex items-center justify-between text-[11px] text-slate-400 shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          </div>
          <span className="font-mono text-[10px] text-slate-400 truncate max-w-[240px]">
            abhinavsarkar101.github.io/Signaliq/
          </span>
          <span className="text-[10px] text-indigo-400 font-medium">SignalIQ Landing</span>
        </div>

        {active === 'landing-hero' && (
          <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-indigo-950/55 via-slate-900 to-slate-900">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 text-[11px]">
              <div className="flex items-center gap-2 font-bold text-white">
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>SignalIQ</span>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-slate-300">
                <span>Features</span>
                <span>Use Cases</span>
                <span>About Us</span>
                <span>Documentation</span>
              </div>
              <span className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white font-semibold text-[10px]">
                Get Started Free
              </span>
            </div>

            <div className="my-auto text-center space-y-2.5 max-w-xl mx-auto">
              <div
                className={`font-display font-extrabold text-white leading-tight ${
                  compact ? 'text-base sm:text-lg' : 'text-xl sm:text-2xl'
                }`}
              >
                Turn Customer Chaos Into{' '}
                <span className="text-sky-400">Metric-Backed Product Roadmaps</span>
              </div>
              {!compact && (
                <p className="text-xs text-slate-300 leading-relaxed">
                  Unify CSV tickets, interview transcripts, and UI heatmaps with Gemini research synthesis, 3-tier sufficiency checks, and boardroom PDF exports.
                </p>
              )}
              <div className="grid grid-cols-3 gap-2 pt-1 text-left text-[10px]">
                <div className="rounded-lg border border-slate-800 bg-slate-800/60 p-2">
                  <div className="font-semibold text-indigo-300">1. Research Brief</div>
                  <div className="text-slate-400 mt-0.5">Hypotheses &amp; blindspots</div>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-800/60 p-2">
                  <div className="font-semibold text-sky-300">2. Sufficiency Engine</div>
                  <div className="text-slate-400 mt-0.5">3-tier gap detection</div>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-800/60 p-2">
                  <div className="font-semibold text-emerald-300">3. Micro-Surveys</div>
                  <div className="text-slate-400 mt-0.5">Live /#survey-:id links</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {active === 'landing-capabilities' && (
          <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between overflow-hidden bg-slate-900">
            <div>
              <div className="text-[10px] font-semibold text-indigo-400 uppercase tracking-wider">
                Landing Page · Features
              </div>
              <div className="font-display text-sm sm:text-base font-bold text-white">
                Built for Omnichannel Customer Intelligence
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 my-auto text-[10px]">
              {[
                'App Store & Play Store Crawlers',
                'WhatsApp & Founder Note OCR',
                'Urgent Churn Signal Flags',
                'Metric-Backed AI Clustering',
                'Impact-Weighted Roadmap Backlog',
                'Automated Daily Crawler Cron',
              ].map((cap) => (
                <div key={cap} className="rounded-lg border border-slate-800 bg-slate-950/60 p-2.5 space-y-1">
                  <div className="font-semibold text-white">{cap}</div>
                  {!compact && (
                    <div className="text-slate-400">
                      Traceable evidence tied to verbatim customer quotes &amp; ticket IDs.
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {active === 'landing-usecases' && (
          <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between overflow-hidden bg-slate-900">
            <div>
              <div className="text-[10px] font-semibold text-sky-400 uppercase tracking-wider">
                Landing Page · Use Cases
              </div>
              <div className="font-display text-sm sm:text-base font-bold text-white">
                Tailored For Every Product Stakeholder
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-auto text-[10px]">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 space-y-1">
                <div className="font-bold text-rose-300">Never Miss a Critical Bug</div>
                <p className="text-slate-400">
                  Surface high-severity payment &amp; checkout drop-off clusters from support CSVs.
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 space-y-1">
                <div className="font-bold text-indigo-300">Data-Driven Sprint Backlogs</div>
                <p className="text-slate-400">
                  Prioritize features on High Impact vs. Low Effort matrices backed by real mentions.
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 space-y-1">
                <div className="font-bold text-emerald-300">Prevent Enterprise Churn</div>
                <p className="text-slate-400">
                  Detect knowledge gaps early and send short micro-surveys only when needed.
                </p>
              </div>
            </div>
          </div>
        )}

        {active === 'landing-why' && (
          <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between overflow-hidden bg-slate-900">
            <div className="space-y-1">
              <div className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">
                Landing Page · Product Philosophy
              </div>
              <div className="font-display text-sm sm:text-base font-bold text-white">
                We Built SignalIQ Because Product Feedback is Broken
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-auto text-[10px]">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 space-y-1.5">
                <div className="font-semibold text-white">Why Product Leaders Choose SignalIQ</div>
                <div className="text-slate-300">• 3-Tier Sufficiency Gate (Sufficient / Gap / Insufficient)</div>
                <div className="text-slate-300">• Zero-hallucination quote anchoring</div>
                <div className="text-slate-300">• Vector PDF &amp; Markdown boardroom briefings</div>
              </div>
              <div className="rounded-xl border border-indigo-800/60 bg-indigo-950/25 p-3 space-y-1.5">
                <div className="font-semibold text-indigo-300">Pre-Loaded Interactive Scenarios</div>
                <div className="text-slate-300">• Scenario A: Checkout Funnel Drop-off (Sufficient)</div>
                <div className="text-slate-300">• Scenario B: Mobile Checkout Hesitation (Gap)</div>
                <div className="text-slate-300">• Scenario C: Early-Stage Churn (Exploratory)</div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // PMPeak 4 Landing / Course Overview Screens
  const active = screenId.startsWith('landing-') ? screenId : 'landing-home';

  return (
    <div
      className={`w-full ${heightClass} rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 bg-[#F4F6FA] text-[#14202E] flex flex-col select-none`}
    >
      <div className="h-8 bg-[#0A0F18] border-b border-slate-800 px-3 flex items-center justify-between text-[11px] text-slate-400 shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
        </div>
        <span className="font-mono text-[10px] text-slate-400 truncate max-w-[240px]">
          abhinavsarkar101.github.io/pmpeak/
        </span>
        <span className="text-[10px] text-[#8AA6FF] font-medium">PMPeak Home</span>
      </div>

      <div className="flex-1 flex overflow-hidden">
        <div className="hidden sm:flex w-36 bg-[#12203A] text-[#DCE5F5] p-3 flex-col justify-between shrink-0">
          <div className="space-y-2.5">
            <div className="font-bold text-white text-sm tracking-tight">PMPeak</div>
            <div className="space-y-1 text-[10px]">
              <div className={`px-2 py-1.5 rounded ${active === 'landing-home' ? 'bg-[#2B50D8] text-white font-semibold' : 'text-slate-300'}`}>
                Learn Path
              </div>
              <div className={`px-2 py-1.5 rounded ${active === 'landing-curriculum' ? 'bg-[#2B50D8] text-white font-semibold' : 'text-slate-300'}`}>
                9 Chapters
              </div>
              <div className={`px-2 py-1.5 rounded ${active === 'landing-gamification' ? 'bg-[#2B50D8] text-white font-semibold' : 'text-slate-300'}`}>
                Streaks &amp; Badges
              </div>
              <div className={`px-2 py-1.5 rounded ${active === 'landing-interview' ? 'bg-[#2B50D8] text-white font-semibold' : 'text-slate-300'}`}>
                After Course
              </div>
            </div>
          </div>
          <div className="text-[10px] text-slate-400">Free · No Sign-up</div>
        </div>

        <div className="flex-1 p-4 sm:p-5 overflow-hidden flex flex-col justify-between bg-[#F4F6FA]">
          {active === 'landing-home' && (
            <>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="font-bold text-sm sm:text-base text-[#14202E]">
                    Your learning path — Free Product Management Course
                  </div>
                  <div className="text-[11px] text-[#556275] mt-0.5">
                    Clear each chapter with 80% exam mastery · Inline SVG diagrams · Real case studies
                  </div>
                </div>
                <span className="px-2 py-1 rounded bg-[#E9EEFB] text-[#2B50D8] text-[10px] font-semibold shrink-0">
                  No Paywall
                </span>
              </div>

              <div className="rounded-xl bg-white border border-[#D9E0EA] p-3 grid grid-cols-3 gap-2 text-center my-auto">
                <div>
                  <div className="text-[10px] text-[#556275]">Daily Streak</div>
                  <div className="text-sm font-bold text-[#14202E] font-mono tabular-nums mt-0.5">7 Days</div>
                </div>
                <div>
                  <div className="text-[10px] text-[#556275]">Chapter Exam Gate</div>
                  <div className="text-sm font-bold text-[#2B50D8] font-mono tabular-nums mt-0.5">80%+</div>
                </div>
                <div>
                  <div className="text-[10px] text-[#556275]">Storage</div>
                  <div className="text-sm font-bold text-[#12794A] mt-0.5">Local / Offline</div>
                </div>
              </div>

              <div className="rounded-lg bg-white border border-[#D9E0EA] p-2.5 flex items-center justify-between text-[11px]">
                <span className="font-medium text-[#14202E]">
                  9 Chapters · 90 Quiz Questions · 12 PM Interview Categories
                </span>
                <span className="text-[#2B50D8] font-semibold">Light &amp; Dark Theme</span>
              </div>
            </>
          )}

          {active === 'landing-curriculum' && (
            <div className="space-y-2.5 my-auto">
              <div className="text-xs font-bold text-[#14202E] flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#2B50D8]" />
                <span>What You Will Learn Across All 9 Chapters</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 text-[10px]">
                {[
                  '1. Business → Product Outcomes',
                  '2. Opportunities & User Research',
                  '3. Problem Framing & Validation',
                  '4. Metrics & A/B Testing',
                  '5. Driving Product Growth',
                  '6. Prototyping & Wireframes',
                  '7. Cohorts, Funnels & SQL',
                  '8. ML Foundations & Gen AI',
                  '9. Tech & System Design',
                ].map((c) => (
                  <div key={c} className="rounded border border-[#D9E0EA] bg-white px-2.5 py-1.5 font-medium text-[#14202E]">
                    {c}
                  </div>
                ))}
              </div>
            </div>
          )}

          {active === 'landing-gamification' && (
            <div className="space-y-2.5 my-auto">
              <div className="text-xs font-bold text-[#14202E] flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#2B50D8]" />
                <span>XP, Today’s Quests, Weakest Topics &amp; 16 Badges</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px]">
                {[
                  'First Step',
                  'Quiz Starter',
                  'Sharp Mind (100%)',
                  'Chapter Mastered',
                  '3-Day Streak',
                  '7-Day Streak',
                  'Halfway Up',
                  'Summit Reached',
                ].map((b) => (
                  <div key={b} className="rounded border border-[#D9E0EA] bg-white p-2 font-medium text-[#14202E] text-center">
                    {b}
                  </div>
                ))}
              </div>
              <div className="rounded bg-[#E2F5EA] border border-[#12794A]/20 p-2 text-[10px] text-[#12794A]">
                Tracks weakest quiz topics and generates a Recommended Revision queue automatically.
              </div>
            </div>
          )}

          {active === 'landing-interview' && (
            <div className="space-y-2.5 my-auto">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold text-[#14202E] flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-[#2B50D8]" />
                  <span>After-Course: Interview Preparation (12 Categories)</span>
                </div>
                <span className="text-[10px] font-semibold text-[#2B50D8]">Timed Mock Mode</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-[10px]">
                {[
                  'Guesstimates',
                  'Root Cause Analysis',
                  'Product Design',
                  'Product Metrics',
                  'Pricing & GTM',
                  'AI Product Sense & SQL',
                ].map((cat) => (
                  <div key={cat} className="rounded border border-[#D9E0EA] bg-white px-2.5 py-2 font-medium text-[#14202E]">
                    {cat}
                  </div>
                ))}
              </div>
              <div className="text-[10px] text-[#556275]">
                Includes clarifying questions, recommended structures, sample answers, common mistakes, and self-scoring rubrics.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
