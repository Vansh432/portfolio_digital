const steps = [
  {
    number: 1,
    title: 'Business Analysis',
    description:
      'We analyze your business, market, and competition thoroughly',
  },
  {
    number: 2,
    title: 'Strategy Planning',
    description:
      'Custom strategy aligned with your goals and budget',
  },
  {
    number: 3,
    title: 'Campaign Setup',
    description:
      'Professional setup of ads, creatives, and targeting',
  },
  {
    number: 4,
    title: 'Optimization',
    description:
      'Continuous monitoring and performance optimization',
  },
  {
    number: 5,
    title: 'Lead Generation & Growth',
    description:
      'Consistent leads and sustainable business growth',
  },
];

export default function ProcessSection() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="text-center">
          <p className="section-label mx-auto">Our Process</p>
          <h2
            className="section-title"
            dangerouslySetInnerHTML={{
              __html: 'How We Drive <span>Results</span>',
            }}
          />
        </div>

        <div className="process-timeline">
          {steps.map((step) => (
            <div className="process-step" key={step.number}>
              <div className="process-number">{step.number}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
