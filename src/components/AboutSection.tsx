import Image from 'next/image';

const stats = [
  { number: '5+', label: 'Years Experience' },
  { number: '200+', label: 'Clients Served' },
  { number: '10+', label: 'Services Offered' },
  { number: '98%', label: 'Client Satisfaction' },
];

const highlights = [
  { icon: '🎯', title: 'Performance-Driven', desc: 'Every campaign is built to deliver measurable ROI, not just impressions.' },
  { icon: '🧠', title: 'Custom Strategy', desc: 'No templates — we build digital growth plans tailored to your business.' },
  { icon: '📍', title: 'Local + Digital Reach', desc: 'We help Bareilly businesses dominate both local search and social media.' },
];

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Image Side */}
          <div className="about-image-wrapper">
            <div className="about-image-main">
              <Image
                src="/about.png"
                alt="Pramod Diwakar - Founder of Dizital Vigyapan"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="section-label">About Us</span>
            <h2 className="section-title">
              Who We Are — Your Growth <span>Partners</span>
            </h2>
            <p className="section-desc" style={{ marginBottom: '16px' }}>
              Dizital Vigyapan is a performance-driven digital marketing agency in Bareilly dedicated to helping businesses grow online with creative strategy, high-converting advertising, and strong brand communication.
            </p>
            <p className="section-desc" style={{ marginBottom: '28px' }}>
              From Meta Ads and Google Ads to website design, lead generation, and video editing — we build custom digital growth strategies that bring real results: enquiries, trust, and conversions.
            </p>

            {/* Stats Row */}
            {/* <div className="about-stats-row" style={{ marginBottom: '24px' }}>
              {stats.map((stat) => (
                <div key={stat.label} className="about-stat-card">
                  <div className="about-stat-number">{stat.number}</div>
                  <div className="about-stat-label">{stat.label}</div>
                </div>
              ))}
            </div> */}

            {/* Highlights */}
            {/* <div className="about-highlights">
              {highlights.map((h) => (
                <div key={h.title} className="about-highlight-item">
                  <span className="about-highlight-icon">{h.icon}</span>
                  <div>
                    <div className="about-highlight-title">{h.title}</div>
                    <div className="about-highlight-desc">{h.desc}</div>
                  </div>
                </div>
              ))}
            </div> */}

            <a href="#contact" className="about-cta-btn">
              Work With Us <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
