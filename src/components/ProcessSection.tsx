'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

/* ─── Types ─────────────────────────────────────────────────────────────── */

interface Step {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
  highlight: string;
}

/* ─── Data ───────────────────────────────────────────────────────────────── */

const steps: Step[] = [
  {
    number: '01',
    title: 'Business Analysis',
    description:
      'We deep-dive into your business, market landscape, competitors, and target audience to build a rock-solid foundation.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
    highlight: 'Market Research',
  },
  {
    number: '02',
    title: 'Strategy Planning',
    description:
      'A fully custom roadmap aligned to your goals, budget, and industry — no generic templates, only tailored plans.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    highlight: 'Custom Roadmap',
  },
  {
    number: '03',
    title: 'Campaign Setup',
    description:
      'Professional creation of ads, creatives, targeting, landing pages, and all technical integrations — done right.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
    highlight: 'Launch Ready',
  },
  {
    number: '04',
    title: 'Optimisation',
    description:
      'Daily monitoring, A/B testing, bid adjustments, and creative refreshes to squeeze every rupee of ROI.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    highlight: 'Continuous',
  },
  {
    number: '05',
    title: 'Growth & Reporting',
    description:
      "Transparent weekly reports with key metrics, lead counts, and growth insights so you always know what's working.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    highlight: 'Full Transparency',
  },
];

/* ─── Animated step row ──────────────────────────────────────────────────── */

function StepRow({ step, index, isEven }: { step: Step; index: number; isEven: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.05, ease: 'easeOut' }}
      className={`group relative flex items-center gap-0 lg:gap-8
        ${isEven ? 'flex-row lg:flex-row' : 'flex-row lg:flex-row-reverse'}`}
    >
      {/* ── content card ── */}
      <div className="flex-1 lg:max-w-[calc(50%-60px)]">
        <div className="relative bg-[#141414] border border-white/[0.07] rounded-2xl p-7
          transition-all duration-300
          group-hover:border-[#FF6B00]/30
          group-hover:shadow-[0_12px_40px_rgba(255,107,0,0.1)]
          group-hover:-translate-y-1">

          {/* watermark number */}
          <span className="absolute -top-5 right-6 text-[80px] font-black
            text-white/[0.028] leading-none select-none font-mono pointer-events-none">
            {step.number}
          </span>

          <div className="flex items-start gap-4">
            {/* icon circle */}
            <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center
              text-[#FF6B00] border border-[#FF6B00]/20 bg-[#FF6B00]/[0.07]
              group-hover:bg-[#FF6B00] group-hover:text-white group-hover:border-[#FF6B00]
              transition-all duration-300">
              {step.icon}
            </div>

            <div className="flex-1 min-w-0">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider
                text-[#FF6B00] bg-[#FF6B00]/10 px-2 py-0.5 rounded-full mb-2">
                {step.highlight}
              </span>
              <h3 className="text-[17px] font-bold text-white mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-[13.5px] text-[#777] leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>

          {/* bottom accent bar */}
          <div className="mt-5 pt-4 border-t border-white/[0.05] flex items-center gap-2">
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <div key={i}
                  className={`h-1 rounded-full transition-all duration-300
                    ${i === 0 ? 'w-6 bg-[#FF6B00] group-hover:w-8' : 'w-2 bg-[#FF6B00]/25'}`}
                />
              ))}
            </div>
            <span className="text-[11px] text-[#555] ml-auto font-mono">
              Step {step.number}
            </span>
          </div>
        </div>
      </div>

      {/* ── center node (desktop only) ── */}
      <div className="hidden lg:flex shrink-0 w-[120px] justify-center items-center relative z-10">
        <div className="w-14 h-14 rounded-full bg-[#141414] border-2 border-[#FF6B00]/40
          flex items-center justify-center
          shadow-[0_0_0_6px_rgba(255,107,0,0.06)]
          group-hover:border-[#FF6B00] group-hover:bg-[#FF6B00]/10
          group-hover:shadow-[0_0_0_8px_rgba(255,107,0,0.1)]
          transition-all duration-300">
          <span className="text-[16px] font-black text-[#FF6B00] font-mono leading-none">
            {step.number}
          </span>
        </div>
      </div>

      {/* ── spacer (opposite side) ── */}
      <div className="hidden lg:block flex-1 lg:max-w-[calc(50%-60px)]" />
    </motion.div>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */

export default function ProcessSection() {
  const headerRef = useRef(null);
  const ctaRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' });

  return (
    <section className="py-24 bg-[#0f0f0f] relative overflow-hidden" id="process">
      {/* ambient */}
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px]
        rounded-full bg-[#FF6B00]/[0.03] blur-3xl" />

      <div className="max-w-[1280px] mx-auto px-6">
        {/* header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[2.5px] text-[#FF6B00] mb-4">
            <span className="w-5 h-px bg-[#FF6B00]" />
            Our Process
            <span className="w-5 h-px bg-[#FF6B00]" />
          </span>
          <h2 className="text-[clamp(28px,4.5vw,48px)] font-extrabold leading-[1.15] text-white mb-5">
            How We Drive{' '}
            <span className="text-[#FF6B00]">Real Results</span>
          </h2>
          <p className="text-[16px] text-[#888] max-w-[460px] mx-auto leading-relaxed">
            A proven five-step framework that turns your marketing budget into measurable business growth.
          </p>
        </motion.div>

        {/* timeline wrapper */}
        <div className="relative">
          {/* vertical connecting line — desktop */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px
            -translate-x-1/2
            bg-gradient-to-b from-[#FF6B00]/70 via-[#FF6B00]/20 to-transparent" />

          <div className="flex flex-col gap-8 lg:gap-0">
            {steps.map((step, index) => (
              <StepRow
                key={step.number}
                step={step}
                index={index}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* bottom CTA bar */}
        <motion.div
          ref={ctaRef}
          className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-6
            bg-[#141414] border border-white/[0.07] rounded-2xl px-8 py-6"
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div>
            <p className="text-white font-bold text-[17px] mb-1">
              Ready to start your growth journey?
            </p>
            <p className="text-[#666] text-sm">
              Most clients see results within the first 30 days.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e05e00]
              text-white font-semibold text-[14px] px-6 py-3 rounded-xl
              transition-all duration-200 hover:-translate-y-0.5
              shadow-[0_4px_20px_rgba(255,107,0,0.35)]
              hover:shadow-[0_8px_30px_rgba(255,107,0,0.5)]">
            Get Free Strategy Call
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
