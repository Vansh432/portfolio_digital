import Image from 'next/image';

export default function FounderSection() {
  return (
    <section className="section section-alt" id="founder">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '48px' }}>
          <span className="section-label">Meet Our Founder</span>
          <h2 className="section-title">
            The Vision Behind <span>Dizital Vigyapan</span>
          </h2>
        </div>

        <div className="founder-card">
          {/* Founder Image */}
          <div className="founder-image">
            <Image
              src="/founder.png"
              alt="Pramod Diwakar - Founder of Dizital Vigyapan"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Founder Info */}
          <div>
            <h3 className="founder-name">Pramod Diwakar</h3>
            <p className="founder-title">Founder &amp; Digital Marketing Strategist</p>
            <p className="founder-bio">
              As the Founder of Dizital Vigyapan, my vision is to help businesses
              leverage the power of digital marketing to achieve sustainable growth
              and measurable success. With a strong focus on performance marketing,
              lead generation, branding, and online advertising, I work closely with
              businesses to create strategies that deliver real results.
            </p>
            <p className="founder-bio">
              I believe that successful marketing is built on creativity, data-driven
              decisions, and a deep understanding of customer behavior. My goal is not
              just to increase visibility but to help brands generate more leads, build
              trust, and grow with confidence in the digital age.
            </p>

            {/* Stats */}
            <div className="founder-stats">
              <div className="founder-stat">
                <div className="val">5+</div>
                <div className="lbl">Years Exp.</div>
              </div>
              <div className="founder-stat">
                <div className="val">500+</div>
                <div className="lbl">Campaigns</div>
              </div>
              <div className="founder-stat">
                <div className="val">200+</div>
                <div className="lbl">Clients</div>
              </div>
            </div>

            {/* Contact Info */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="tel:+918899316670"
                className="btn btn-primary"
                style={{ padding: '10px 20px', fontSize: '13px' }}
              >
                📞 +91 8899316670
              </a>
              <a
                href="mailto:dizitalvigyapan@gmail.com"
                className="btn btn-outline"
                style={{ padding: '10px 20px', fontSize: '13px' }}
              >
                ✉️ dizitalvigyapan@gmail.com
              </a>
              <a
                href="https://wa.me/918899316670"
                className="btn btn-ghost"
                style={{ padding: '10px 20px', fontSize: '13px' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
