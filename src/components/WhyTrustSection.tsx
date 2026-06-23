'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '500+', label: 'Happy Clients', icon: '🏆' },
  { value: '7+',   label: 'Years Experience', icon: '📅' },
  { value: '50+',  label: 'Cities Served', icon: '📍' },
  { value: '₹10Cr+', label: 'Ad Spend Managed', icon: '💰' },
];

const trustCards = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: '100% Customised Solutions',
    description:
      'Every campaign is built from scratch around your industry, goals, and budget — zero copy-paste strategies.',
    proof: 'Industry-Tailored',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: 'ROI-Focused Campaigns',
    description:
      'We track every rupee and optimise relentlessly. Your ad spend converts into real leads and real revenue.',
    proof: 'Avg 3.5× ROAS',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
    title: 'Creative + Performance',
    description:
      'Stunning brand creatives combined with data-driven performance strategies for maximum online impact.',
    proof: 'Award-Winning Designs',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Dedicated Account Manager',
    description:
      'One expert as your single point of contact. Always reachable, always updated, always accountable.',
    proof: 'Direct Access',
  },
];

export default function WhyTrustSection() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true, margin: '-60px' });
  const rightInView = useInView(rightRef, { once: true, margin: '-60px' });

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden" id="why-us">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[500px] h-[500px]
        rounded-full bg-[#FF6B00]/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute top-20 right-0 w-[300px] h-[300px]
        rounded-full bg-[#FF6B00]/[0.03] blur-3xl" />

      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-20 items-start">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            ref={leftRef}
            className="lg:col-span-2 lg:sticky lg:top-24"
            initial={{ opacity: 0, x: -50 }}
            animate={leftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold
              uppercase tracking-[2.5px] text-[#FF6B00] mb-5">
              <span className="w-5 h-px bg-[#FF6B00]" />
              Why Choose Us
            </span>

            <h2 className="text-[clamp(28px,4vw,46px)] font-extrabold leading-[1.12] text-white mb-5">
              Why Businesses{' '}
              <span className="text-[#FF6B00]">Trust Us</span>
            </h2>

            <p className="text-[15px] text-[#777] leading-relaxed mb-10">
              We don't just run ads — we build growth engines. Every decision is backed by data, every
              strategy is built for your specific market.
            </p>

            {/* stats grid */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group relative bg-[#141414] border border-white/[0.07]
                    rounded-2xl p-5 overflow-hidden
                    hover:border-[#FF6B00]/30 transition-all duration-300
                    hover:shadow-[0_8px_32px_rgba(255,107,0,0.1)]"
                >
                  {/* glow dot */}
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#FF6B00]/30
                    group-hover:bg-[#FF6B00] group-hover:shadow-[0_0_8px_#FF6B00]
                    transition-all duration-300" />

                  <span className="text-[22px] mb-2 block">{stat.icon}</span>
                  <div className="text-[26px] font-black text-[#FF6B00] leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[12px] text-[#666] font-medium">
                    {stat.label}
                  </div>

                  {/* bottom bar animation */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#FF6B00]
                    group-hover:w-full transition-all duration-500" />
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2
                  bg-[#FF6B00] hover:bg-[#e05e00] text-white font-semibold text-[14px]
                  px-6 py-3.5 rounded-xl transition-all duration-200
                  hover:-translate-y-0.5
                  shadow-[0_4px_20px_rgba(255,107,0,0.35)]
                  hover:shadow-[0_8px_32px_rgba(255,107,0,0.5)]">
                Get Free Audit
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://wa.me/918899316670"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2
                  border border-white/[0.1] text-[#ccc] hover:text-white hover:border-[#FF6B00]/40
                  font-semibold text-[14px] px-6 py-3.5 rounded-xl
                  transition-all duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN – feature cards ── */}
          <motion.div
            ref={rightRef}
            className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5"
            initial={{ opacity: 0, x: 50 }}
            animate={rightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          >
            {trustCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={rightInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                className="group relative bg-[#141414] border border-white/[0.07]
                  rounded-2xl p-7 overflow-hidden
                  transition-all duration-300
                  hover:border-[#FF6B00]/30
                  hover:shadow-[0_16px_48px_rgba(255,107,0,0.12)]
                  hover:-translate-y-1.5"
              >
                {/* background number watermark */}
                <span className="absolute -top-3 -right-2 text-[80px] font-black
                  text-white/[0.025] leading-none select-none pointer-events-none font-mono">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5
                  text-[#FF6B00] bg-[#FF6B00]/[0.08] border border-[#FF6B00]/20
                  group-hover:bg-[#FF6B00] group-hover:text-white group-hover:border-[#FF6B00]
                  group-hover:shadow-[0_0_24px_rgba(255,107,0,0.35)]
                  transition-all duration-300">
                  {card.icon}
                </div>

                {/* proof badge */}
                <div className="inline-flex items-center gap-1.5 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]
                    shadow-[0_0_6px_rgba(255,107,0,0.8)]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF6B00]/70">
                    {card.proof}
                  </span>
                </div>

                <h3 className="text-[16px] font-bold text-white mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-[13.5px] text-[#777] leading-relaxed">
                  {card.description}
                </p>

                {/* hover bottom bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px]
                  bg-gradient-to-r from-[#FF6B00]/0 via-[#FF6B00] to-[#FF6B00]/0
                  scale-x-0 group-hover:scale-x-100 transition-transform duration-400
                  origin-center" />

                {/* corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16
                  bg-gradient-to-bl from-[#FF6B00]/[0.06] to-transparent
                  rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}

            {/* testimonial strip */}
            <div className="sm:col-span-2 bg-gradient-to-r from-[#FF6B00]/10 via-[#FF6B00]/5 to-transparent
              border border-[#FF6B00]/20 rounded-2xl p-6 flex flex-col sm:flex-row
              items-center sm:items-start gap-5">
              <div className="shrink-0 flex -space-x-2">
                {['SK','MR','AN','PK','RV'].map((initials, i) => (
                  <div key={i}
                    className="w-9 h-9 rounded-full bg-[#FF6B00] flex items-center justify-center
                      text-white text-[11px] font-bold border-2 border-[#0a0a0a]"
                    style={{ opacity: 1 - i * 0.12 }}>
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1.5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24"
                      fill="#FF6B00" className="flex-shrink-0">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <span className="text-[12px] text-[#888] ml-1">4.9 / 5.0</span>
                </div>
                <p className="text-[13.5px] text-[#999] leading-relaxed">
                  <span className="text-white font-semibold">Trusted by 500+ businesses</span>{' '}
                  across India — from local shops to national brands.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
