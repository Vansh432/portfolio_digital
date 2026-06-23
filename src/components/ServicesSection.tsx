const services = [
  {
    icon: '📱',
    title: 'Meta Advertising',
    description: 'Run high-converting Facebook & Instagram ad campaigns.',
    items: [
      'Lead Generation Ads',
      'Awareness Campaigns',
      'Conversion Campaigns',
      'WhatsApp Marketing',
      'Remarketing Ads',
    ],
  },
  {
    icon: '🔍',
    title: 'Google Ads',
    description: 'Reach customers when they search.',
    items: [
      'Search Ads',
      'Display Ads',
      'YouTube Ads',
      'Local Business Ads',
      'Remarketing Campaigns',
    ],
  },
  {
    icon: '📢',
    title: 'Social Media Marketing',
    description: 'Build powerful brand presence.',
    items: [
      'Content Creation',
      'Social Media Management',
      'Engagement Growth',
      'Creative Designing',
      'Monthly Content Calendar',
    ],
  },
  {
    icon: '🌐',
    title: 'Website Design & Development',
    description: 'Professional websites for conversions.',
    items: [
      'Business Websites',
      'E-Commerce Websites',
      'Landing Pages',
      'Portfolio Websites',
      'Mobile Responsive Design',
    ],
  },
  {
    icon: '📊',
    title: 'SEO',
    description: 'Get ranked higher on Google.',
    items: [
      'On-Page SEO',
      'Technical SEO',
      'Local SEO',
      'Keyword Research',
      'Content Optimization',
    ],
  },
  {
    icon: '🎨',
    title: 'Graphic Designing',
    description: 'Premium creative designs.',
    items: [
      'Social Media Creatives',
      'Ad Designs',
      'Brochures & Flyers',
      'Banners',
      'Logo Design',
    ],
  },
  {
    icon: '🎯',
    title: 'Lead Generation',
    description: 'Quality leads for business.',
    items: [
      'Real Estate Leads',
      'Healthcare Leads',
      'Education Leads',
      'Finance Leads',
      'Local Business Leads',
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="container">
        <p className="section-label">Our Services</p>
        <h2
          className="section-title"
          dangerouslySetInnerHTML={{
            __html: 'Comprehensive Digital Marketing <span>Solutions</span>',
          }}
        />

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-list">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
