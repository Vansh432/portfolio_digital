import Image from 'next/image';

const features = [
  'Industry-Specific Strategies',
  'Experienced Marketing Experts',
  'Creative Design Team',
  'Transparent Reporting',
  'Affordable Pricing',
  'Result-Oriented Campaigns',
  'Dedicated Support',
  'Data-Driven Decisions',
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
                src="/founder.png"
                alt="Pramod Diwakar - Founder of Dizital Vigyapan"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="about-experience-badge">
              <div className="number">5+</div>
              <div className="label">Years Experience</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="section-label">About Us</span>
            <h2 className="section-title">
              Who We Are — Your Growth <span>Partners</span>
            </h2>
            <p className="section-desc" style={{ marginBottom: '16px' }}>
              Dizital Vigyapan is a full-service digital marketing agency dedicated
              to helping businesses grow online. We combine creativity, strategy, and
              technology to deliver measurable results.
            </p>
            <p className="section-desc">
              Whether you&apos;re a startup, local business, healthcare provider, real
              estate company, educational institute, or e-commerce brand, our customized
              marketing solutions help you attract more customers and increase revenue.
            </p>

            <div className="about-features">
              {features.map((f) => (
                <div key={f} className="about-feature-item">
                  <span className="icon">✦</span>
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
