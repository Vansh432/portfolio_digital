'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
  'Meta Ads', 'Google Ads', 'Social Media Marketing',
  'Website Design', 'SEO Services', 'Lead Generation', 'Graphic Designing',
];

const EASE_OUT = [0.25, 0.46, 0.45, 0.94] as const;
const EASE_SPRING = [0.34, 1.56, 0.64, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 2.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE_OUT } },
};

const tagVariant = {
  hidden: { opacity: 0, scale: 0.85, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: EASE_SPRING } },
};

const tagsContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      {/* Background Image */}
      <div className="hero-bg">
        <Image
          src="/hero-bg.png"
          alt="Digital Marketing Background"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div />
      </div>

      {/* Grid Overlay */}
      <div className="hero-grid-overlay" />

      {/* Content */}
      <div className="container">
        <motion.div
          className="hero-content"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div className="hero-badge" variants={fadeUp}>
            <span className="dot" />
            Bareilly&apos;s Leading Digital Marketing Agency
          </motion.div>

          {/* Title */}
          <motion.h1 className="hero-title" variants={fadeUp}>
            Grow Your Business Online with{' '}
            <span className="highlight">Results-Driven</span> Digital Marketing
          </motion.h1>

          {/* Subtitle */}
          <motion.p className="hero-subtitle" variants={fadeUp}>
            Transforming Businesses Into Brands Through Digital Innovation.
            We help businesses generate more leads, increase sales, and build
            a strong online presence.
          </motion.p>

          {/* Service Tags */}
          <motion.div className="hero-services" variants={tagsContainer}>
            {services.map((service) => (
              <motion.span key={service} className="tag" variants={tagVariant}>
                <span className="check">✓</span>
                {service}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div className="hero-btns" variants={fadeUp}>
            <a href="#free-audit" className="btn btn-primary">
              Get Free Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.6 }}
      >
        <div className="mouse" />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
