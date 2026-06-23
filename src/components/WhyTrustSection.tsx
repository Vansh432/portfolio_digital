const trustCards = [
  {
    icon: '🎯',
    title: '100% Customized Marketing Solutions',
    description:
      'Every business is different, and so is our strategy. We create tailored campaigns based on your industry, goals, and target audience.',
  },
  {
    icon: '📈',
    title: 'ROI Focused Campaigns',
    description:
      'We focus on generating real business results. Every campaign is optimized for maximum return on investment.',
  },
  {
    icon: '🎨',
    title: 'Creative + Performance Marketing',
    description:
      'A perfect blend of stunning branding and data-driven lead generation to maximize your online impact.',
  },
  {
    icon: '🤝',
    title: 'Dedicated Account Manager',
    description:
      'One point of contact for all your requirements. Get personalized support and regular updates on your campaigns.',
  },
];

export default function WhyTrustSection() {
  return (
    <section id="why-us" className="section section-alt">
      <div className="container">
        <p className="section-label">Why Choose Us</p>
        <h2
          className="section-title"
          dangerouslySetInnerHTML={{
            __html: 'Why Businesses <span>Trust Us</span>',
          }}
        />

        <div className="trust-grid">
          {trustCards.map((card) => (
            <div key={card.title} className="trust-card">
              <div className="trust-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
