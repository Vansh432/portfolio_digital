import Image from 'next/image';

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
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge">
            <span className="dot" />
            Bareilly&apos;s Leading Digital Marketing Agency
          </div>

          {/* Title */}
          <h1 className="hero-title">
            Grow Your Business Online with{' '}
            <span className="highlight">Results-Driven</span> Digital Marketing
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Transforming Businesses Into Brands Through Digital Innovation.
            We help businesses generate more leads, increase sales, and build
            a strong online presence.
          </p>

          {/* Service Tags */}
          <div className="hero-services">
            {[
              'Meta Ads',
              'Google Ads',
              'Social Media Marketing',
              'Website Design',
              'SEO Services',
              'Lead Generation',
              'Graphic Designing',
            ].map((service) => (
              <span key={service} className="tag">
                <span className="check">✓</span>
                {service}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hero-btns">
            <a href="#contact" className="btn btn-primary">
              Get Free Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#roi-calculator" className="btn btn-outline">
              Calculate Your ROI
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="mouse" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
