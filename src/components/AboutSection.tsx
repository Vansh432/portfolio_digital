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
             Dizital Vigyapan is a performance-driven digital marketing agency in Bareilly dedicated to helping businesses grow online with creative strategy, high-converting advertising, and strong brand communication. We help local businesses, startups, clinics, institutes, and service providers generate leads, improve visibility, and build a stronger digital presence.
            </p>
            <p className="section-desc">
             With services like Meta Ads, Google Ads, social media marketing, website design, lead generation, content creation, graphic design, and video editing, we create custom digital growth strategies that bring real business results — not just reach, but enquiries, trust, and conversions.
            </p>

           
       </div>
        
            </div>
          </div>
  
    </section>
  );
}
