export default function ClientPhotos() {
  const clients = [
    { name: 'Healthcare Campaign', color: '#FF6B00' },
    { name: 'Real Estate Ads', color: '#FF8C33' },
    { name: 'Education Marketing', color: '#E05E00' },
    { name: 'E-Commerce Growth', color: '#FF6B00' },
    { name: 'Restaurant Branding', color: '#FF8C33' },
    { name: 'Jewellery Promotion', color: '#E05E00' },
    { name: 'Auto Dealership', color: '#FF6B00' },
    { name: 'Local Business SEO', color: '#FF8C33' },
  ];

  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="text-center">
          <span className="section-label">Our Work</span>
          <h2 className="section-title">
            Client Success <span>Stories</span>
          </h2>
          <p className="section-desc mx-auto">
            A glimpse of campaigns and projects we have delivered for businesses
            across various industries.
          </p>
        </div>

        <div className="photos-grid">
          {clients.map((client, i) => (
            <div key={i} className="photo-item">
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: `linear-gradient(135deg, ${client.color}20, ${client.color}08)`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  padding: '20px',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    background: `${client.color}18`,
                    border: `1px solid ${client.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                  }}
                >
                  {['🏥', '🏠', '🎓', '🛒', '🍽️', '💍', '🚗', '📍'][i]}
                </div>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    color: 'var(--text-secondary)',
                    textAlign: 'center',
                  }}
                >
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
