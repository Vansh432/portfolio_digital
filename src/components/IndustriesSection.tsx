const industries = [
  {
    icon: '🏥',
    title: 'Healthcare & IVF Centers',
    description: 'Build patient trust and increase appointments',
  },
  {
    icon: '🏠',
    title: 'Real Estate',
    description: 'Generate high-quality property leads',
  },
  {
    icon: '🎓',
    title: 'Education & Coaching',
    description: 'Increase enrollment and student engagement',
  },
  {
    icon: '💍',
    title: 'Jewellery Businesses',
    description: 'Showcase collections and drive footfall',
  },
  {
    icon: '🚗',
    title: 'Automobile Industry',
    description: 'Drive showroom visits and test drives',
  },
  {
    icon: '🏨',
    title: 'Hotels & Restaurants',
    description: 'Boost reservations and online orders',
  },
  {
    icon: '🏭',
    title: 'Manufacturing',
    description: 'Establish B2B presence and generate inquiries',
  },
  {
    icon: '🛒',
    title: 'E-Commerce Brands',
    description: 'Drive online sales and build loyalty',
  },
  {
    icon: '🏢',
    title: 'Local Businesses',
    description: 'Dominate local search and attract customers',
  },
];

export default function IndustriesSection() {
  return (
    <section className="section section-alt" id="industries">
      <div className="container">
        <p className="section-label">Industries We Serve</p>
        <h2
          className="section-title"
          dangerouslySetInnerHTML={{
            __html:
              'Specialized Marketing for Every <span>Industry</span>',
          }}
        />

        <div className="industries-grid">
          {industries.map((industry) => (
            <div className="industry-card" key={industry.title}>
              <span className="industry-icon">{industry.icon}</span>
              <div>
                <h4>{industry.title}</h4>
                <p>{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
