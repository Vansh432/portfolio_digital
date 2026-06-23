'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ─── Enquiry Modal ──────────────────────────────────────────────────────── */

function EnquiryModal({
  service,
  onClose,
}: {
  service: string;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />

      {/* card */}
      <div className="relative z-10 w-full max-w-[480px] bg-[#141414] border border-white/[0.1]
        rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.6)] overflow-hidden
        animate-[fadeIn_0.2s_ease]">

        {/* top accent */}
        <div className="h-[3px] bg-gradient-to-r from-[#FF6B00] via-[#FF8C33] to-[#FF6B00]" />

        {/* header */}
        <div className="flex items-start justify-between px-7 pt-6 pb-5">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#FF6B00] mb-1">
              Enquire Now
            </p>
            <h3 className="text-[20px] font-extrabold text-white leading-tight">
              {service}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.12]
              flex items-center justify-center text-[#777] hover:text-white transition-colors duration-150 shrink-0 mt-0.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="px-7 pb-7 space-y-4">
            {/* name + phone row */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-[#888] uppercase tracking-wider mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={set('name')}
                  placeholder="Full name"
                  className="w-full bg-[#1c1c1c] border border-white/[0.08] focus:border-[#FF6B00]/60
                    rounded-xl px-4 py-3 text-[14px] text-white placeholder-[#555]
                    outline-none transition-colors duration-150"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#888] uppercase tracking-wider mb-1.5">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={set('phone')}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full bg-[#1c1c1c] border border-white/[0.08] focus:border-[#FF6B00]/60
                    rounded-xl px-4 py-3 text-[14px] text-white placeholder-[#555]
                    outline-none transition-colors duration-150"
                />
              </div>
            </div>

            {/* email */}
            <div>
              <label className="block text-[11px] font-semibold text-[#888] uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={set('email')}
                placeholder="your@email.com"
                className="w-full bg-[#1c1c1c] border border-white/[0.08] focus:border-[#FF6B00]/60
                  rounded-xl px-4 py-3 text-[14px] text-white placeholder-[#555]
                  outline-none transition-colors duration-150"
              />
            </div>

            {/* service (readonly chip) */}
            <div>
              <label className="block text-[11px] font-semibold text-[#888] uppercase tracking-wider mb-1.5">
                Service Interested In
              </label>
              <div className="inline-flex items-center gap-2 bg-[#FF6B00]/10 border border-[#FF6B00]/25
                text-[#FF6B00] text-[13px] font-semibold rounded-full px-4 py-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                {service}
              </div>
            </div>

            {/* message */}
            <div>
              <label className="block text-[11px] font-semibold text-[#888] uppercase tracking-wider mb-1.5">
                Tell Us About Your Business
              </label>
              <textarea
                rows={3}
                value={form.message}
                onChange={set('message')}
                placeholder="Briefly describe your goals and current challenges..."
                className="w-full bg-[#1c1c1c] border border-white/[0.08] focus:border-[#FF6B00]/60
                  rounded-xl px-4 py-3 text-[14px] text-white placeholder-[#555]
                  outline-none transition-colors duration-150 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold text-[15px]
                py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5
                shadow-[0_4px_20px_rgba(255,107,0,0.4)] hover:shadow-[0_8px_32px_rgba(255,107,0,0.55)]
                flex items-center justify-center gap-2">
              Send Enquiry
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <p className="text-center text-[11px] text-[#555]">
              We typically respond within 2 business hours.
            </p>
          </form>
        ) : (
          <div className="px-7 pb-10 pt-2 text-center">
            <div className="w-16 h-16 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30
              flex items-center justify-center mx-auto mb-5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h4 className="text-[20px] font-extrabold text-white mb-2">Enquiry Sent!</h4>
            <p className="text-[14px] text-[#888] leading-relaxed mb-6">
              Thank you! Our team will reach out within 2 business hours to discuss{' '}
              <span className="text-[#FF6B00] font-semibold">{service}</span>.
            </p>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 border border-white/[0.1] text-[#ccc]
                hover:border-[#FF6B00]/40 hover:text-white px-6 py-2.5 rounded-xl
                text-[14px] font-semibold transition-all duration-200">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Services data ──────────────────────────────────────────────────────── */

const services = [
  {
    id: 1,
    tag: 'Most Popular',
    title: 'Meta Advertising',
    subtitle: 'Facebook & Instagram',
    description:
      'High-converting ad campaigns that reach your ideal customers at precisely the right moment.',
    features: [
      'Lead Generation Ads',
      'Awareness Campaigns',
      'Conversion Campaigns',
      'WhatsApp Marketing',
      'Remarketing Ads',
    ],
    metric: '3.5× Avg ROAS',
    metricLabel: 'Performance',
  },
  {
    id: 2,
    title: 'Google Ads',
    subtitle: 'Search & Display',
    description:
      'Dominate search results and reach customers actively looking for your services.',
    features: [
      'Search Ads',
      'Display Ads',
      'YouTube Ads',
      'Local Business Ads',
      'Remarketing Campaigns',
    ],
    metric: '8.4% Avg CTR',
    metricLabel: 'Click Rate',
  },
  {
    id: 3,
    title: 'Social Media Marketing',
    subtitle: 'Brand Presence',
    description:
      'Build a powerful brand presence that turns followers into loyal paying customers.',
    features: [
      'Content Creation',
      'Social Media Management',
      'Engagement Growth',
      'Creative Designing',
      'Monthly Content Calendar',
    ],
    metric: '12.8K Avg Growth',
    metricLabel: 'Followers / Mo',
  },
  {
    id: 4,
    title: 'Website Design & Dev',
    subtitle: 'Digital Experience',
    description:
      'Professional, conversion-optimised websites that represent your brand powerfully.',
    features: [
      'Business Websites',
      'E-Commerce Stores',
      'Landing Pages',
      'Portfolio Websites',
      'Mobile Responsive',
    ],
    metric: '< 1s Load Time',
    metricLabel: 'Performance',
  },
  {
    id: 5,
    title: 'SEO Optimization',
    subtitle: 'Organic Growth',
    description:
      'Climb to the top of Google search results and bring in a steady stream of organic traffic.',
    features: [
      'On-Page SEO',
      'Technical SEO',
      'Local SEO',
      'Keyword Research',
      'Content Optimization',
    ],
    metric: 'Top 3 Rankings',
    metricLabel: 'Avg Position',
  },
  {
    id: 6,
    title: 'Graphic Designing',
    subtitle: 'Visual Identity',
    description:
      'Stunning visuals that make your brand unforgettable and stand out from the crowd.',
    features: [
      'Social Media Creatives',
      'Ad Designs',
      'Brochures & Flyers',
      'Banners',
      'Logo Design',
    ],
    metric: '200+ Designs / Mo',
    metricLabel: 'Output',
  },
  {
    id: 7,
    title: 'Lead Generation',
    subtitle: 'Quality Leads',
    description:
      'High-quality, verified leads ready to convert into paying customers for your business.',
    features: [
      'Real Estate Leads',
      'Healthcare Leads',
      'Education Leads',
      'Finance Leads',
      'Local Business Leads',
    ],
    metric: '18% Conv. Rate',
    metricLabel: 'Conversion',
  },
];

/* ─── Per-service SVG illustrations ─────────────────────────────────────── */

function MetaIllustration() {
  return (
    <svg viewBox="0 0 300 170" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id="rg1" cx="70%" cy="30%" r="60%">
          <stop stopColor="#3d1400" />
          <stop offset="1" stopColor="#0d0d0d" />
        </radialGradient>
      </defs>
      <rect width="300" height="170" fill="url(#rg1)" />
      {/* grid */}
      <path d="M0 56H300M0 113H300M100 0V170M200 0V170" stroke="#FF6B00" strokeOpacity="0.06" />
      {/* phone */}
      <rect x="108" y="8" width="84" height="154" rx="14" fill="#1a0700" stroke="#FF6B00" strokeWidth="1.5" strokeOpacity="0.45" />
      <rect x="114" y="22" width="72" height="128" rx="4" fill="#090300" />
      <rect x="134" y="14" width="32" height="5" rx="2.5" fill="#FF6B00" fillOpacity="0.15" />
      <rect x="138" y="153" width="24" height="3" rx="1.5" fill="#FF6B00" fillOpacity="0.2" />
      {/* status bar */}
      <rect x="114" y="22" width="72" height="16" fill="#FF6B00" fillOpacity="0.07" />
      {/* post 1 */}
      <rect x="117" y="42" width="66" height="50" rx="3" fill="#FF6B00" fillOpacity="0.06" stroke="#FF6B00" strokeWidth="0.5" strokeOpacity="0.2" />
      <rect x="119" y="44" width="62" height="34" rx="2" fill="#FF6B00" fillOpacity="0.1" />
      <circle cx="150" cy="61" r="8" fill="#FF6B00" fillOpacity="0.2" />
      <path d="M147 59l5 3-5 3z" fill="#FF6B00" fillOpacity="0.55" />
      <circle cx="124" cy="86" r="3.5" fill="#FF6B00" fillOpacity="0.45" />
      <path d="M131 86h24" stroke="#FF6B00" strokeWidth="1" strokeOpacity="0.25" strokeLinecap="round" />
      {/* post 2 */}
      <rect x="117" y="97" width="66" height="42" rx="3" fill="#FF6B00" fillOpacity="0.04" stroke="#FF6B00" strokeWidth="0.5" strokeOpacity="0.12" />
      <rect x="119" y="99" width="62" height="26" rx="2" fill="#FF6B00" fillOpacity="0.07" />
      <circle cx="124" cy="133" r="3.5" fill="#FF6B00" fillOpacity="0.3" />
      <path d="M131 133h18" stroke="#FF6B00" strokeWidth="1" strokeOpacity="0.18" strokeLinecap="round" />
      {/* left float */}
      <rect x="5" y="28" width="92" height="46" rx="10" fill="#200900" stroke="#FF6B00" strokeWidth="1" strokeOpacity="0.3" />
      <rect x="15" y="40" width="36" height="3" rx="1.5" fill="#FF6B00" fillOpacity="0.55" />
      <rect x="15" y="46" width="55" height="3" rx="1.5" fill="white" fillOpacity="0.2" />
      <rect x="15" y="52" width="42" height="3" rx="1.5" fill="white" fillOpacity="0.12" />
      <path d="M74 50l6-8 10 5" stroke="#FF6B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" />
      {/* right float */}
      <rect x="203" y="62" width="90" height="46" rx="10" fill="#200900" stroke="#FF6B00" strokeWidth="1" strokeOpacity="0.3" />
      <rect x="213" y="74" width="36" height="3" rx="1.5" fill="#FF6B00" fillOpacity="0.55" />
      <rect x="213" y="80" width="55" height="3" rx="1.5" fill="white" fillOpacity="0.2" />
      <rect x="213" y="86" width="42" height="3" rx="1.5" fill="white" fillOpacity="0.12" />
      {/* decorative rings */}
      <circle cx="22" cy="140" r="28" fill="none" stroke="#FF6B00" strokeWidth="0.5" strokeOpacity="0.1" />
      <circle cx="280" cy="22" r="20" fill="none" stroke="#FF6B00" strokeWidth="0.5" strokeOpacity="0.08" />
      <circle cx="46" cy="92" r="2" fill="#FF6B00" fillOpacity="0.2" />
      <circle cx="58" cy="100" r="1.5" fill="#FF6B00" fillOpacity="0.12" />
    </svg>
  );
}

function GoogleIllustration() {
  return (
    <svg viewBox="0 0 300 170" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id="rg2" cx="30%" cy="60%" r="70%">
          <stop stopColor="#001f38" />
          <stop offset="1" stopColor="#0d0d0d" />
        </radialGradient>
      </defs>
      <rect width="300" height="170" fill="url(#rg2)" />
      <path d="M0 56H300M0 113H300M75 0V170M225 0V170" stroke="#FF6B00" strokeOpacity="0.04" />
      {/* browser */}
      <rect x="20" y="18" width="260" height="140" rx="10" fill="#0a1520" stroke="#FF6B00" strokeWidth="1.5" strokeOpacity="0.35" />
      <rect x="20" y="18" width="260" height="24" rx="10" fill="#FF6B00" fillOpacity="0.06" />
      <circle cx="36" cy="30" r="4" fill="#FF6B00" fillOpacity="0.25" />
      <circle cx="50" cy="30" r="4" fill="#FF6B00" fillOpacity="0.15" />
      <circle cx="64" cy="30" r="4" fill="#FF6B00" fillOpacity="0.08" />
      {/* address bar */}
      <rect x="78" y="24" width="182" height="12" rx="6" fill="#FF6B00" fillOpacity="0.07" stroke="#FF6B00" strokeWidth="0.5" strokeOpacity="0.2" />
      <circle cx="88" cy="30" r="3" fill="#FF6B00" fillOpacity="0.3" />
      <rect x="96" y="28" width="80" height="4" rx="2" fill="#FF6B00" fillOpacity="0.3" />
      {/* search bar */}
      <rect x="30" y="50" width="240" height="18" rx="9" fill="#FF6B00" fillOpacity="0.05" stroke="#FF6B00" strokeWidth="0.8" strokeOpacity="0.2" />
      <circle cx="44" cy="59" r="5" stroke="#FF6B00" strokeWidth="1" strokeOpacity="0.4" />
      <path d="M48 63l3 3" stroke="#FF6B00" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round" />
      <rect x="56" y="56" width="100" height="3" rx="1.5" fill="#FF6B00" fillOpacity="0.35" />
      {/* ad result 1 - highlighted */}
      <rect x="30" y="76" width="240" height="24" rx="5" fill="#FF6B00" fillOpacity="0.1" stroke="#FF6B00" strokeWidth="0.8" strokeOpacity="0.3" />
      <rect x="38" y="82" width="14" height="10" rx="2" fill="#FF6B00" fillOpacity="0.6" />
      <rect x="59" y="85" width="120" height="3" rx="1.5" fill="white" fillOpacity="0.5" />
      <rect x="59" y="91" width="80" height="3" rx="1.5" fill="#FF6B00" fillOpacity="0.4" />
      {/* ad result 2 */}
      <rect x="30" y="106" width="240" height="22" rx="5" fill="#FF6B00" fillOpacity="0.05" stroke="#FF6B00" strokeWidth="0.5" strokeOpacity="0.15" />
      <rect x="38" y="111" width="14" height="10" rx="2" fill="#FF6B00" fillOpacity="0.35" />
      <rect x="59" y="114" width="100" height="3" rx="1.5" fill="white" fillOpacity="0.25" />
      <rect x="59" y="120" width="70" height="3" rx="1.5" fill="#FF6B00" fillOpacity="0.2" />
      {/* organic result */}
      <rect x="30" y="134" width="240" height="18" rx="5" fill="none" stroke="#FF6B00" strokeWidth="0.3" strokeOpacity="0.1" />
      <rect x="38" y="139" width="120" height="3" rx="1.5" fill="white" fillOpacity="0.1" />
      {/* CTR badge */}
      <rect x="220" y="130" width="52" height="22" rx="8" fill="#FF6B00" fillOpacity="0.15" stroke="#FF6B00" strokeWidth="0.8" strokeOpacity="0.4" />
      <rect x="228" y="136" width="20" height="3" rx="1.5" fill="#FF6B00" fillOpacity="0.7" />
      <rect x="228" y="142" width="30" height="3" rx="1.5" fill="white" fillOpacity="0.35" />
      {/* decorative */}
      <circle cx="278" cy="150" r="18" fill="none" stroke="#FF6B00" strokeWidth="0.5" strokeOpacity="0.08" />
    </svg>
  );
}

function SocialIllustration() {
  return (
    <svg viewBox="0 0 300 170" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id="rg3" cx="50%" cy="50%" r="60%">
          <stop stopColor="#2a0e00" />
          <stop offset="1" stopColor="#0d0d0d" />
        </radialGradient>
      </defs>
      <rect width="300" height="170" fill="url(#rg3)" />
      {/* phone */}
      <rect x="105" y="6" width="90" height="158" rx="16" fill="#1a0700" stroke="#FF6B00" strokeWidth="1.5" strokeOpacity="0.45" />
      <rect x="111" y="20" width="78" height="132" rx="4" fill="#090300" />
      <rect x="136" y="12" width="28" height="5" rx="2.5" fill="#FF6B00" fillOpacity="0.15" />
      <rect x="141" y="154" width="18" height="3" rx="1.5" fill="#FF6B00" fillOpacity="0.2" />
      {/* top bar */}
      <rect x="111" y="20" width="78" height="18" fill="#FF6B00" fillOpacity="0.06" />
      <circle cx="122" cy="29" r="5" stroke="#FF6B00" strokeWidth="1" strokeOpacity="0.3" fill="#FF6B00" fillOpacity="0.08" />
      {/* stories */}
      <circle cx="124" cy="50" r="8" stroke="#FF6B00" strokeWidth="1.5" strokeOpacity="0.5" fill="#FF6B00" fillOpacity="0.06" />
      <circle cx="142" cy="50" r="8" stroke="#FF6B00" strokeWidth="1.5" strokeOpacity="0.4" fill="#FF6B00" fillOpacity="0.05" />
      <circle cx="160" cy="50" r="8" stroke="#FF6B00" strokeWidth="1.5" strokeOpacity="0.3" fill="#FF6B00" fillOpacity="0.04" />
      <circle cx="178" cy="50" r="8" stroke="#FF6B00" strokeWidth="1" strokeOpacity="0.2" fill="none" />
      {/* post grid 3x3 */}
      {[0,1,2].map(col =>
        [0,1,2].map(row => {
          const x = 113 + col * 27;
          const y = 64 + row * 27;
          const op = 0.06 + (col + row) * 0.015;
          return (
            <rect key={`${col}-${row}`} x={x} y={y} width="25" height="25" rx="2"
              fill="#FF6B00" fillOpacity={op}
              stroke="#FF6B00" strokeWidth="0.4" strokeOpacity={op * 2.5} />
          );
        })
      )}
      {/* larger highlighted post */}
      <rect x="113" y="64" width="25" height="25" rx="2" fill="#FF6B00" fillOpacity="0.18" stroke="#FF6B00" strokeWidth="0.8" strokeOpacity="0.4" />
      <circle cx="125.5" cy="76.5" r="5" fill="#FF6B00" fillOpacity="0.25" />
      {/* bottom nav */}
      {[118,132,146,160,174].map((x, i) => (
        <circle key={i} cx={x} cy="148" r="3.5" fill="#FF6B00" fillOpacity={i === 0 ? 0.5 : 0.15} />
      ))}
      {/* left stats */}
      <rect x="4" y="35" width="90" height="48" rx="10" fill="#200900" stroke="#FF6B00" strokeWidth="1" strokeOpacity="0.3" />
      <rect x="14" y="48" width="36" height="3" rx="1.5" fill="#FF6B00" fillOpacity="0.55" />
      <rect x="14" y="55" width="55" height="3" rx="1.5" fill="white" fillOpacity="0.2" />
      <rect x="14" y="62" width="42" height="3" rx="1.5" fill="white" fillOpacity="0.12" />
      {/* right stats */}
      <rect x="206" y="75" width="90" height="48" rx="10" fill="#200900" stroke="#FF6B00" strokeWidth="1" strokeOpacity="0.3" />
      <rect x="216" y="88" width="36" height="3" rx="1.5" fill="#FF6B00" fillOpacity="0.55" />
      <rect x="216" y="95" width="55" height="3" rx="1.5" fill="white" fillOpacity="0.2" />
      <rect x="216" y="102" width="42" height="3" rx="1.5" fill="white" fillOpacity="0.12" />
      <circle cx="16" cy="145" r="22" fill="none" stroke="#FF6B00" strokeWidth="0.5" strokeOpacity="0.1" />
      <circle cx="284" cy="20" r="16" fill="none" stroke="#FF6B00" strokeWidth="0.5" strokeOpacity="0.08" />
    </svg>
  );
}

function WebsiteIllustration() {
  return (
    <svg viewBox="0 0 300 170" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id="rg4" cx="20%" cy="80%" r="70%">
          <stop stopColor="#002030" />
          <stop offset="1" stopColor="#0d0d0d" />
        </radialGradient>
      </defs>
      <rect width="300" height="170" fill="url(#rg4)" />
      {/* laptop body */}
      <rect x="18" y="20" width="220" height="140" rx="8" fill="#0a1520" stroke="#FF6B00" strokeWidth="1.5" strokeOpacity="0.35" />
      <rect x="18" y="20" width="220" height="22" rx="8" fill="#FF6B00" fillOpacity="0.06" />
      <circle cx="34" cy="31" r="3.5" fill="#FF6B00" fillOpacity="0.25" />
      <circle cx="46" cy="31" r="3.5" fill="#FF6B00" fillOpacity="0.15" />
      <circle cx="58" cy="31" r="3.5" fill="#FF6B00" fillOpacity="0.08" />
      <rect x="72" y="26" width="140" height="11" rx="5.5" fill="#FF6B00" fillOpacity="0.06" stroke="#FF6B00" strokeWidth="0.5" strokeOpacity="0.2" />
      {/* hero section */}
      <rect x="24" y="48" width="208" height="55" fill="#FF6B00" fillOpacity="0.06" />
      {/* nav */}
      <rect x="24" y="48" width="208" height="14" fill="#FF6B00" fillOpacity="0.04" />
      <rect x="30" y="52" width="30" height="6" rx="3" fill="#FF6B00" fillOpacity="0.3" />
      <rect x="140" y="53" width="16" height="4" rx="2" fill="#FF6B00" fillOpacity="0.15" />
      <rect x="162" y="53" width="16" height="4" rx="2" fill="#FF6B00" fillOpacity="0.15" />
      <rect x="184" y="53" width="16" height="4" rx="2" fill="#FF6B00" fillOpacity="0.15" />
      <rect x="204" y="51" width="24" height="8" rx="4" fill="#FF6B00" fillOpacity="0.35" />
      {/* hero content */}
      <rect x="30" y="68" width="100" height="8" rx="4" fill="#FF6B00" fillOpacity="0.4" />
      <rect x="30" y="80" width="70" height="5" rx="2.5" fill="white" fillOpacity="0.15" />
      <rect x="30" y="88" width="80" height="5" rx="2.5" fill="white" fillOpacity="0.1" />
      <rect x="30" y="97" width="38" height="10" rx="5" fill="#FF6B00" fillOpacity="0.55" />
      {/* feature cards */}
      <rect x="24" y="108" width="62" height="46" rx="5" fill="#FF6B00" fillOpacity="0.05" stroke="#FF6B00" strokeWidth="0.5" strokeOpacity="0.2" />
      <rect x="86" y="108" width="62" height="46" rx="5" fill="#FF6B00" fillOpacity="0.07" stroke="#FF6B00" strokeWidth="0.5" strokeOpacity="0.2" />
      <rect x="148" y="108" width="62" height="46" rx="5" fill="#FF6B00" fillOpacity="0.05" stroke="#FF6B00" strokeWidth="0.5" strokeOpacity="0.2" />
      <rect x="32" y="116" width="16" height="16" rx="4" fill="#FF6B00" fillOpacity="0.2" />
      <rect x="94" y="116" width="16" height="16" rx="4" fill="#FF6B00" fillOpacity="0.2" />
      <rect x="156" y="116" width="16" height="16" rx="4" fill="#FF6B00" fillOpacity="0.2" />
      <rect x="32" y="136" width="40" height="3" rx="1.5" fill="white" fillOpacity="0.15" />
      <rect x="94" y="136" width="40" height="3" rx="1.5" fill="white" fillOpacity="0.15" />
      <rect x="156" y="136" width="40" height="3" rx="1.5" fill="white" fillOpacity="0.15" />
      {/* mobile phone preview */}
      <rect x="248" y="30" width="44" height="78" rx="8" fill="#0a1520" stroke="#FF6B00" strokeWidth="1.2" strokeOpacity="0.4" />
      <rect x="252" y="38" width="36" height="62" rx="3" fill="#060f18" />
      <rect x="252" y="38" width="36" height="10" fill="#FF6B00" fillOpacity="0.08" />
      <rect x="255" y="51" width="30" height="4" rx="2" fill="#FF6B00" fillOpacity="0.3" />
      <rect x="255" y="58" width="22" height="3" rx="1.5" fill="white" fillOpacity="0.1" />
      <rect x="255" y="64" width="26" height="3" rx="1.5" fill="white" fillOpacity="0.07" />
      <rect x="255" y="73" width="14" height="7" rx="3.5" fill="#FF6B00" fillOpacity="0.4" />
      {/* responsive label */}
      <rect x="244" y="114" width="52" height="18" rx="6" fill="#FF6B00" fillOpacity="0.1" stroke="#FF6B00" strokeWidth="0.8" strokeOpacity="0.3" />
      <rect x="252" y="119" width="14" height="3" rx="1.5" fill="#FF6B00" fillOpacity="0.5" />
      <rect x="252" y="125" width="28" height="3" rx="1.5" fill="white" fillOpacity="0.2" />
      <circle cx="278" cy="148" r="18" fill="none" stroke="#FF6B00" strokeWidth="0.5" strokeOpacity="0.08" />
    </svg>
  );
}

function SEOIllustration() {
  return (
    <svg viewBox="0 0 300 170" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id="rg5" cx="40%" cy="40%" r="65%">
          <stop stopColor="#0a2000" />
          <stop offset="1" stopColor="#0d0d0d" />
        </radialGradient>
      </defs>
      <rect width="300" height="170" fill="url(#rg5)" />
      <path d="M0 42H220M0 84H220M0 126H220M44 0V170M88 0V170M132 0V170M176 0V170M220 0V170" stroke="#FF6B00" strokeOpacity="0.05" strokeWidth="1" />
      {/* bar chart – 5 bars increasing */}
      <rect x="20" y="120" width="28" height="40" rx="4" fill="#FF6B00" fillOpacity="0.15" stroke="#FF6B00" strokeWidth="0.8" strokeOpacity="0.25" />
      <rect x="54" y="98" width="28" height="62" rx="4" fill="#FF6B00" fillOpacity="0.2" stroke="#FF6B00" strokeWidth="0.8" strokeOpacity="0.3" />
      <rect x="88" y="74" width="28" height="86" rx="4" fill="#FF6B00" fillOpacity="0.28" stroke="#FF6B00" strokeWidth="0.8" strokeOpacity="0.38" />
      <rect x="122" y="48" width="28" height="112" rx="4" fill="#FF6B00" fillOpacity="0.38" stroke="#FF6B00" strokeWidth="0.8" strokeOpacity="0.48" />
      <rect x="156" y="24" width="28" height="136" rx="4" fill="#FF6B00" fillOpacity="0.55" stroke="#FF6B00" strokeWidth="1" strokeOpacity="0.6" />
      {/* trend line */}
      <path d="M34 124 L68 102 L102 78 L136 52 L170 28" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" />
      {/* dots on trend */}
      {[[34,124],[68,102],[102,78],[136,52],[170,28]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill="#FF6B00" fillOpacity={0.4 + i * 0.1} />
      ))}
      {/* rank badge */}
      <rect x="10" y="8" width="80" height="28" rx="14" fill="#FF6B00" fillOpacity="0.15" stroke="#FF6B00" strokeWidth="1" strokeOpacity="0.4" />
      <rect x="22" y="16" width="14" height="4" rx="2" fill="#FF6B00" fillOpacity="0.7" />
      <rect x="40" y="16" width="40" height="4" rx="2" fill="white" fillOpacity="0.3" />
      <rect x="22" y="23" width="52" height="4" rx="2" fill="white" fillOpacity="0.12" />
      {/* magnifier circle */}
      <circle cx="245" cy="95" r="55" fill="#0d1a0d" stroke="#FF6B00" strokeWidth="1.5" strokeOpacity="0.3" />
      <circle cx="238" cy="88" r="34" fill="#060e06" stroke="#FF6B00" strokeWidth="1.5" strokeOpacity="0.45" />
      {/* handle */}
      <path d="M264 112L286 138" stroke="#FF6B00" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.55" />
      {/* mini chart inside magnifier */}
      <rect x="218" y="100" width="10" height="22" rx="2" fill="#FF6B00" fillOpacity="0.25" />
      <rect x="232" y="88" width="10" height="34" rx="2" fill="#FF6B00" fillOpacity="0.35" />
      <path d="M223 100 L237 86" stroke="#FF6B00" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.7" />
    </svg>
  );
}

function GraphicIllustration() {
  return (
    <svg viewBox="0 0 300 170" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id="rg6" cx="60%" cy="30%" r="65%">
          <stop stopColor="#1a0030" />
          <stop offset="1" stopColor="#0d0d0d" />
        </radialGradient>
      </defs>
      <rect width="300" height="170" fill="url(#rg6)" />
      <path d="M0 56H300M0 113H300M100 0V170M200 0V170" stroke="#FF6B00" strokeOpacity="0.04" />
      {/* canvas */}
      <rect x="60" y="14" width="180" height="130" rx="8" fill="#100020" stroke="#FF6B00" strokeWidth="1.5" strokeOpacity="0.35" />
      {/* grid on canvas */}
      <path d="M60 50H240M60 86H240M60 122H240M100 14V144M140 14V144M180 14V144M220 14V144" stroke="#FF6B00" strokeOpacity="0.06" strokeWidth="0.5" strokeDasharray="4 4" />
      {/* large circle shape */}
      <circle cx="150" cy="79" r="42" fill="none" stroke="#FF6B00" strokeWidth="1.5" strokeOpacity="0.3" />
      <circle cx="150" cy="79" r="28" fill="#FF6B00" fillOpacity="0.06" stroke="#FF6B00" strokeWidth="1" strokeOpacity="0.2" />
      {/* overlapping accent circle */}
      <circle cx="172" cy="66" r="22" fill="#FF6B00" fillOpacity="0.1" stroke="#FF6B00" strokeWidth="1" strokeOpacity="0.3" />
      {/* triangle */}
      <path d="M110 120 L150 55 L190 120Z" fill="#FF6B00" fillOpacity="0.06" stroke="#FF6B00" strokeWidth="1" strokeOpacity="0.2" />
      {/* design title */}
      <rect x="72" y="22" width="70" height="6" rx="3" fill="#FF6B00" fillOpacity="0.4" />
      <rect x="72" y="31" width="44" height="4" rx="2" fill="white" fillOpacity="0.12" />
      {/* color swatches */}
      <circle cx="80" cy="138" r="7" fill="#FF6B00" fillOpacity="0.8" />
      <circle cx="98" cy="138" r="7" fill="#FF6B00" fillOpacity="0.55" />
      <circle cx="116" cy="138" r="7" fill="#FF6B00" fillOpacity="0.3" />
      <circle cx="134" cy="138" r="7" fill="white" fillOpacity="0.08" stroke="#FF6B00" strokeWidth="0.5" strokeOpacity="0.2" />
      <circle cx="152" cy="138" r="7" fill="#FF6B00" fillOpacity="0.12" />
      {/* pen tool */}
      <path d="M12 80 L44 62 L50 68 L18 86Z" fill="#FF6B00" fillOpacity="0.2" stroke="#FF6B00" strokeWidth="1" strokeOpacity="0.4" />
      <path d="M8 90 L14 82" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.35" />
      <circle cx="50" cy="68" r="3" fill="#FF6B00" fillOpacity="0.4" />
      {/* ruler */}
      <rect x="248" y="14" width="12" height="130" rx="3" fill="#FF6B00" fillOpacity="0.08" stroke="#FF6B00" strokeWidth="0.5" strokeOpacity="0.2" />
      {[0,1,2,3,4,5].map(i => (
        <path key={i} d={`M248 ${28 + i * 20}H256`} stroke="#FF6B00" strokeWidth="0.5" strokeOpacity="0.3" />
      ))}
    </svg>
  );
}

function LeadIllustration() {
  return (
    <svg viewBox="0 0 300 170" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id="rg7" cx="50%" cy="20%" r="60%">
          <stop stopColor="#2a1800" />
          <stop offset="1" stopColor="#0d0d0d" />
        </radialGradient>
      </defs>
      <rect width="300" height="170" fill="url(#rg7)" />
      <path d="M0 56H300M0 113H300" stroke="#FF6B00" strokeOpacity="0.05" />
      {/* funnel */}
      <path d="M50 18H250L200 80H100L50 18Z" fill="#FF6B00" fillOpacity="0.08" stroke="#FF6B00" strokeWidth="1.5" strokeOpacity="0.35" />
      <path d="M100 80H200L175 125H125L100 80Z" fill="#FF6B00" fillOpacity="0.12" stroke="#FF6B00" strokeWidth="1.5" strokeOpacity="0.4" />
      <path d="M125 125H175L163 155H137L125 125Z" fill="#FF6B00" fillOpacity="0.22" stroke="#FF6B00" strokeWidth="1.5" strokeOpacity="0.5" />
      {/* people icons at top */}
      {[68, 102, 138, 175, 212].map((cx, i) => (
        <g key={i}>
          <circle cx={cx} cy="10" r="7" fill="#1a0800" stroke="#FF6B00" strokeWidth="1" strokeOpacity={0.5 - i * 0.05} />
          <circle cx={cx} cy="8" r="3" fill="#FF6B00" fillOpacity={0.4 - i * 0.04} />
          <path d={`M${cx - 5} 16 Q${cx} 12 ${cx + 5} 16`} fill="#FF6B00" fillOpacity={0.25 - i * 0.02} />
        </g>
      ))}
      {/* flowing dots */}
      {[[150,48],[150,72],[150,102],[150,130]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={4 - i * 0.5} fill="#FF6B00" fillOpacity={0.5 - i * 0.06} />
      ))}
      {/* bottom lead badge */}
      <rect x="115" y="157" width="70" height="12" rx="6" fill="#FF6B00" fillOpacity="0.3" />
      <rect x="128" y="160" width="44" height="6" rx="3" fill="#FF6B00" fillOpacity="0.5" />
      {/* left metric */}
      <rect x="4" y="58" width="88" height="46" rx="10" fill="#200900" stroke="#FF6B00" strokeWidth="1" strokeOpacity="0.3" />
      <rect x="14" y="70" width="36" height="3" rx="1.5" fill="#FF6B00" fillOpacity="0.55" />
      <rect x="14" y="77" width="55" height="3" rx="1.5" fill="white" fillOpacity="0.2" />
      <rect x="14" y="84" width="42" height="3" rx="1.5" fill="white" fillOpacity="0.12" />
      {/* right metric */}
      <rect x="208" y="58" width="88" height="46" rx="10" fill="#200900" stroke="#FF6B00" strokeWidth="1" strokeOpacity="0.3" />
      <rect x="218" y="70" width="36" height="3" rx="1.5" fill="#FF6B00" fillOpacity="0.55" />
      <rect x="218" y="77" width="55" height="3" rx="1.5" fill="white" fillOpacity="0.2" />
      <rect x="218" y="84" width="42" height="3" rx="1.5" fill="white" fillOpacity="0.12" />
      <circle cx="284" cy="148" r="22" fill="none" stroke="#FF6B00" strokeWidth="0.5" strokeOpacity="0.1" />
    </svg>
  );
}

const illustrations = [
  MetaIllustration,
  GoogleIllustration,
  SocialIllustration,
  WebsiteIllustration,
  SEOIllustration,
  GraphicIllustration,
  LeadIllustration,
];

/* ─── Main component ─────────────────────────────────────────────────────── */

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });
  const gridInView = useInView(gridRef, { once: true, margin: '-60px' });

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden" id="services">
      {activeService && (
        <EnquiryModal service={activeService} onClose={() => setActiveService(null)} />
      )}
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#FF6B00]/[0.04] blur-3xl" />

      <div className="max-w-[1280px] mx-auto px-6">
        {/* header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[2.5px] text-[#FF6B00] mb-4">
            <span className="w-5 h-px bg-[#FF6B00]" />
            What We Offer
            <span className="w-5 h-px bg-[#FF6B00]" />
          </span>
          <h2 className="text-[clamp(30px,5vw,52px)] font-extrabold leading-[1.12] text-white mb-5">
            Comprehensive Digital <br />
            <span className="text-[#FF6B00]">Marketing Solutions</span>
          </h2>
          <p className="text-[16px] text-[#888] max-w-[520px] mx-auto leading-relaxed">
            Every service is crafted to generate measurable results — more leads, more sales, stronger brand.
          </p>
        </motion.div>

        {/* grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Illus = illustrations[index];
            const isLast = index === services.length - 1;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
                className={`group relative bg-[#111] border border-white/[0.07] rounded-2xl overflow-hidden
                  flex flex-col transition-all duration-300
                  hover:-translate-y-2 hover:border-[#FF6B00]/35
                  hover:shadow-[0_24px_64px_rgba(255,107,0,0.14)]
                  ${isLast ? 'lg:col-start-2' : ''}`}
              >
                {/* ── illustration header ── */}
                <div className="relative h-[170px] shrink-0 overflow-hidden">
                  <Illus />

                  {/* metric badge */}
                  <div className="absolute top-3 left-3 z-10 flex flex-col gap-0.5
                    bg-black/60 backdrop-blur-md border border-white/[0.1]
                    rounded-xl px-3 py-2">
                    <span className="text-[9px] font-semibold uppercase tracking-widest text-[#FF6B00]/80">
                      {service.metricLabel}
                    </span>
                    <span className="text-[13px] font-bold text-white leading-none">
                      {service.metric}
                    </span>
                  </div>

                  {/* tag */}
                  {service.tag && (
                    <div className="absolute top-3 right-3 z-10 bg-[#FF6B00] text-white
                      text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider
                      shadow-[0_0_16px_rgba(255,107,0,0.5)]">
                      {service.tag}
                    </div>
                  )}

                  {/* service number */}
                  <div className="absolute bottom-3 right-3 z-10 text-[11px] font-black
                    text-[#FF6B00]/40 font-mono tracking-wider">
                    {String(service.id).padStart(2, '0')}
                  </div>

                  {/* fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-16
                    bg-gradient-to-t from-[#111] via-[#111]/70 to-transparent z-[1]" />
                </div>

                {/* ── content ── */}
                <div className="flex-1 flex flex-col p-6 pt-4">
                  <div className="mb-1">
                    <span className="text-[10px] font-semibold uppercase tracking-[1.5px] text-[#FF6B00]/60">
                      {service.subtitle}
                    </span>
                  </div>
                  <h3 className="text-[17px] font-bold text-white mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-[13px] text-[#777] leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mt-auto">
                    {service.features.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-[12.5px] text-[#666]">
                        <span className="w-1 h-1 rounded-full bg-[#FF6B00] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]/40
                      group-hover:bg-[#FF6B00] group-hover:shadow-[0_0_8px_#FF6B00]
                      transition-all duration-300" />
                    <button
                      onClick={() => setActiveService(service.title)}
                      className="text-[#FF6B00] text-[13px] font-semibold
                        inline-flex items-center gap-1.5 cursor-pointer
                        hover:gap-2.5 transition-all duration-200 bg-transparent border-none outline-none">
                      Enquire Now
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* hover left glow border */}
                <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-[#FF6B00]/0 via-[#FF6B00]/60 to-[#FF6B00]/0
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
